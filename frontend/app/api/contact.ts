import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const response = await fetch(`${API_URL}/api/v1/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.status === 429) {
      return NextResponse.json(
        { error: 'リクエスト制限を超えました。しばらく時間をおいて再度お試しください。' },
        { status: 429 }
      );
    }

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 
