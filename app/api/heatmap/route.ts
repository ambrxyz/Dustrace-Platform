import { NextResponse } from 'next/server';

function riskColorAqi(pm25: number) {
  if (pm25 <= 12) return Math.round((50 / 12) * pm25);
  if (pm25 <= 35.4) return Math.round(50 + ((100 - 50) / (35.4 - 12.1)) * (pm25 - 12.1));
  if (pm25 <= 55.4) return Math.round(101 + ((150 - 101) / (55.4 - 35.5)) * (pm25 - 35.5));
  if (pm25 <= 150.4) return Math.round(151 + ((200 - 151) / (150.4 - 55.5)) * (pm25 - 55.5));
  return Math.min(300, Math.round(pm25 * 2));
}

const basePoints = [
  { name: 'Al-Farabi Avenue', lat: 43.229, lng: 76.918, modifier: 26, radius: 1150, reason: 'traffic corridor + construction dust' },
  { name: 'University District', lat: 43.225, lng: 76.905, modifier: 12, radius: 980, reason: 'campus commute + low wind' },
  { name: 'Central Park Almaty', lat: 43.260, lng: 76.955, modifier: -42, radius: 900, reason: 'open green dispersion zone' },
  { name: 'Dostyk Avenue', lat: 43.242, lng: 76.958, modifier: -8, radius: 850, reason: 'moderate congestion' },
  { name: 'KazNU Campus Area', lat: 43.226, lng: 76.921, modifier: 4, radius: 720, reason: 'student movement + roadside dust' },
];

export async function GET() {
  try {
    const res = await fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=43.2389&longitude=76.8897&current=pm2_5&timezone=auto', { next: { revalidate: 600 } });
    const json = await res.json();
    const pm25 = Number(json?.current?.pm2_5 ?? 70);
    const baseAqi = riskColorAqi(pm25);
    return NextResponse.json({
      source: 'open-meteo-live',
      points: basePoints.map(p => ({ ...p, aqi: Math.max(35, Math.min(260, baseAqi + p.modifier)) })),
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({
      source: 'fallback-demo',
      points: basePoints.map((p, i) => ({ ...p, aqi: [214, 186, 94, 156, 172][i] })),
      updatedAt: new Date().toISOString(),
    });
  }
}
