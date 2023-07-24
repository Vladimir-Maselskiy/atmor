import { ICartItem, TPaymemtMethod } from '@/interfaces/interfaces';
import { TMongoDBUser } from '@/interfaces/mongo';
import { getMessageForTelegramBot } from '@/utils/getMessageForTelegramBot';
import { getTotalCartCost } from '@/utils/getTotalCartCost';
import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { values, cart }: { values: any; cart: ICartItem[] } = await req.json();
  let bot: TelegramBot | null = new TelegramBot(process.env.TELEGRAM_BOT!, {
    polling: false,
  });

  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/getAllUsers`;
  const message = getMessageForTelegramBot(values, cart);
  const { users }: { users: TMongoDBUser[] } = await fetch(url).then(res =>
    res.json()
  );
  console.log('users in sendMessage', users);
  users.forEach(user => {
    bot?.sendMessage(user.userID, message);
  });
  bot.stopPolling();

  return NextResponse.json({});
  return NextResponse.error();
};
