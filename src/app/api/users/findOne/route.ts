import { User } from '@/models/userModel';
import { connectMongo } from '@/utils/mongo/connectMongo';
import { createError } from '@/utils/mongo/createError';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectMongo();

    const { userID } = await req.json();
    console.log('userID', userID);

    const user = await User.findOne({ userID });
    if (!user) throw createError(404, 'User not found');

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: error.cause }
    );
  }
};
