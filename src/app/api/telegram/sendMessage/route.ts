import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const body = await req.json();

  const url = process.env.TELEGRAM_BOT_URL!;

  const options = {
    method: 'POST',
    body,
  };

  try {
    await fetch(url, options).then(res => res.json());
    return NextResponse.json({ Status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
