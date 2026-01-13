import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, phone, email, service, location } = data;
    
    if (!name || !phone || !email || !service || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with Google Sheets or your CRM
    // For now, we'll log the lead and return success
    console.log('New lead received:', {
      name,
      phone,
      email,
      service,
      location,
      message: data.message || '',
      timestamp: new Date().toISOString(),
      source: data.source || 'website'
    });

    // TODO: Add Google Sheets integration
    // const sheets = await getGoogleSheets();
    // await sheets.spreadsheets.values.append({...});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
