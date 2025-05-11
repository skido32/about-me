import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const response = await fetch('http://localhost:8000/api/v1/contact', {
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
      return NextResponse.json(
        { error: 'メールの送信に失敗しました' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
} 
