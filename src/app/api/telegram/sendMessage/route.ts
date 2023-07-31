import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const body = await req.json();
  console.log('body', body);

  const url = process.env.TELEGRAM_BOT_URL!;

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
  };

  try {
    const result = await fetch(url, options).then(res => res.json());
    console.log('res in sendMessage', result);
    return NextResponse.json({ Status: 200 });
  } catch (error) {
    console.log('error in sendMessage', error);
    return NextResponse.error();
  }
};
