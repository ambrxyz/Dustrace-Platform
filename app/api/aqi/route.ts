import { NextRequest, NextResponse } from 'next/server';

function approxAqiFromPm25(pm25: number) {
  if (pm25 <= 12) return Math.round((50 / 12) * pm25);
  if (pm25 <= 35.4) return Math.round(50 + ((100 - 50) / (35.4 - 12.1)) * (pm25 - 12.1));
  if (pm25 <= 55.4) return Math.round(101 + ((150 - 101) / (55.4 - 35.5)) * (pm25 - 35.5));
  if (pm25 <= 150.4) return Math.round(151 + ((200 - 151) / (150.4 - 55.5)) * (pm25 - 55.5));
  if (pm25 <= 250.4) return Math.round(201 + ((300 - 201) / (250.4 - 150.5)) * (pm25 - 150.5));
  return Math.min(500, Math.round(301 + ((500 - 301) / (500.4 - 250.5)) * (pm25 - 250.5)));
}

function riskFromAqi(aqi: number) {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
}

const fallback = {
  city: 'Almaty',
  aqi: 178,
  pm25: 92,
  pm10: 141,
  no2: 38,
  so2: 8,
  temperature: 29,
  humidity: 42,
  windSpeed: 5,
  risk: 'Unhealthy',
  source: 'fallback-demo',
  insight: 'Fallback demo data active. Connect internet access/API service for live values.',
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get('lat') || 43.2389);
  const lng = Number(searchParams.get('lng') || 76.8897);

  try {
    const [airRes, weatherRes] = await Promise.all([
      fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone&timezone=auto`, { next: { revalidate: 600 } }),
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m&timezone=auto`, { next: { revalidate: 600 } }),
    ]);

    if (!airRes.ok || !weatherRes.ok) throw new Error('Open-Meteo request failed');

    const air = await airRes.json();
    const weather = await weatherRes.json();
    const pm25 = Number(air?.current?.pm2_5 ?? fallback.pm25);
    const pm10 = Number(air?.current?.pm10 ?? fallback.pm10);
    const aqi = approxAqiFromPm25(pm25);
    const windSpeed = Number(weather?.current?.wind_speed_10m ?? fallback.windSpeed);
    const humidity = Number(weather?.current?.relative_humidity_2m ?? fallback.humidity);

    return NextResponse.json({
      city: 'Almaty',
      aqi,
      pm25,
      pm10,
      no2: Number(air?.current?.nitrogen_dioxide ?? fallback.no2),
      so2: Number(air?.current?.sulphur_dioxide ?? fallback.so2),
      temperature: Number(weather?.current?.temperature_2m ?? fallback.temperature),
      humidity,
      windSpeed,
      windDirection: Number(weather?.current?.wind_direction_10m ?? 315),
      risk: riskFromAqi(aqi),
      source: 'open-meteo-live',
      insight: windSpeed < 8 || humidity > 65
        ? 'Live backend signal: low wind or humidity may trap fine particles near dense road corridors.'
        : 'Live backend signal: dispersion conditions are stable, but traffic corridors still need monitoring.',
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ ...fallback, updatedAt: new Date().toISOString() });
  }
}
