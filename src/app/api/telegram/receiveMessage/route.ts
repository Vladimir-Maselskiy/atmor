import { ICartItem, TPaymemtMethod } from '@/interfaces/interfaces';
import { ITelegramUpdate } from '@/interfaces/telegram';
import { getMessageForTelegramBot } from '@/utils/getMessageForTelegramBot';
import { sendInlineKeyboard } from '@/utils/telegram/sendInlineKeyboard';
import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import TelegramBot, { InlineKeyboardButton } from 'node-telegram-bot-api';

let bot: TelegramBot | null = null;

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const body: ITelegramUpdate = await req.json();

  console.log('req.body', body);

  bot = bot
    ? bot
    : new TelegramBot(process.env.TELEGRAM_BOT!, {
        polling: false,
      });

  if (body.message) {
    const {
      chat: { id: chatId },
      text,
    } = body.message;
    if (text === '/start') {
      sendInlineKeyboard(bot, chatId);
    }
  }

  // bot.on('text', msg => {
  //   console.log('msg', msg);
  // });
  // await bot.stopPolling();
  return NextResponse.json({ res: 'Hello' });
};
