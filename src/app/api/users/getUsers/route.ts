import { User } from '@/models/userModel';
import { connectMongo } from '@/utils/mongo/connectMongo';
import { createError } from '@/utils/mongo/createError';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectMongo();
    const body = await req.json();

    console.log('req.body', body);
    const authData = req.headers.authorization;
    if (!authData) throw createError(401, 'User auth error');
    const accessToken = authData.split(' ')[1];
    if (!accessToken) throw createError(401, 'User auth error');

    const user = await User.findOne({ accessToken });
    if (!user || !user.isActivated) throw createError(401, 'User auth error');

    await axios.get(
      `${process.env.NEXT_PUBLIC_API_HOST}/users/auth/${accessToken}`
    );
    res.status(200).json(user);
  } catch (error: any) {
    const status = error.cause || error.response.status;
    const message = error.response?.data || error.message;

    res.status(status || 567).send({ error: message });
  }
};
