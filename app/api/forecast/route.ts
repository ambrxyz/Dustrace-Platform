import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get('lat') || 43.2389);
  const lng = Number(searchParams.get('lng') || 76.8897);

  try {
    const res = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&hourly=pm2_5&forecast_days=2&timezone=auto`, { next: { revalidate: 900 } });
    if (!res.ok) throw new Error('forecast failed');
    const data = await res.json();
    const values: number[] = (data?.hourly?.pm2_5 || []).filter((v: unknown) => typeof v === 'number');
    const toAqi = (pm25: number) => Math.round(Math.max(35, Math.min(260, pm25 * 2.1)));
    const oneHour = toAqi(values[1] ?? 88);
    const sixHours = toAqi(values[6] ?? 96);
    const tomorrowMorning = toAqi(values[24] ?? 68);
    return NextResponse.json({ forecast: { oneHour, sixHours, tomorrowMorning }, source: 'open-meteo-live' });
  } catch {
    return NextResponse.json({ forecast: { oneHour: 184, sixHours: 201, tomorrowMorning: 142 }, source: 'fallback-demo' });
  }
}
