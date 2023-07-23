import { ICartItem, TPaymemtMethod } from '@/interfaces/interfaces';
import { ITelegramUpdate, ITelegramUser } from '@/interfaces/telegram';
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

  if (body['callback_query']) {
    const { data, from } = body['callback_query'] as {
      data: 'logOut' | 'signIn';
      from: ITelegramUser;
    };
    const user = getUserFromCallbackQuery(from);
    switch (data) {
      case 'signIn':
        break;
      case 'logOut':
        break;
      default:
        break;
    }
  }

  return NextResponse.json({ res: 'Hello' });
};
