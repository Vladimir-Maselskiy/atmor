import { ITelegramUpdate, ITelegramUser } from '@/interfaces/telegram';
import { addUserToDB } from '@/utils/mongo/addUserToDB';
import { removeUserFromDB } from '@/utils/mongo/removeUserFromDB';
import { getUserFromCallbackQuery } from '@/utils/telegram/getUserFromCallbackQuery';
import { sendInlineKeyboard } from '@/utils/telegram/sendInlineKeyboard';
import { NextResponse, NextRequest } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

let bot: TelegramBot | null = null;

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body: ITelegramUpdate = await req.json();

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
        addUserToDB(user, bot);
        break;
      case 'logOut':
        removeUserFromDB(user, bot);
        break;
      default:
        break;
    }
  }

  return NextResponse.json({ res: 'Hello' });
};
