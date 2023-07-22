import { ICartItem, TPaymemtMethod } from '@/interfaces/interfaces';
import { getMessageForTelegramBot } from '@/utils/getMessageForTelegramBot';
import { getTotalCartCost } from '@/utils/getTotalCartCost';
import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { values, cart }: { values: any; cart: ICartItem[] } = await req.json();
  let bot: TelegramBot | null = new TelegramBot(process.env.TELEGRAM_BOT!, {
    polling: true,
  });

  const message = getMessageForTelegramBot(values, cart);
  const resBot = await bot.sendMessage(915873774, message);
  bot.stopPolling();

  return NextResponse.json({});
  return NextResponse.error();
};
