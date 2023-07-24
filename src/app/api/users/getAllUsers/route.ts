import { User } from '@/models/userModel';
import { connectMongo } from '@/utils/mongo/connectMongo';
import { createError } from '@/utils/mongo/createError';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectMongo();

    const users = await User.find({});
    if (!users) throw createError(404, 'User not found');

    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: error.cause }
    );
  }
};
