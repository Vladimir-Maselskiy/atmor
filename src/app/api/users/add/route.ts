import { User } from '@/models/userModel';
import { connectMongo } from '@/utils/mongo/connectMongo';
import { createError } from '@/utils/mongo/createError';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectMongo();

    const user = await req.json();

    const newUser = await User.create(user);
    console.log('newUser', newUser);
    if (!newUser) throw createError(500, 'Create error');

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.log('error', error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: error.cause }
    );
  }
};
