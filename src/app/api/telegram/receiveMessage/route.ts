import { ITelegramUpdate, ITelegramUser } from '@/interfaces/telegram';
import { addUserToDB } from '@/utils/mongo/addUserToDB';
import { removeUserFromDB } from '@/utils/mongo/removeUserFromDB';
import { validatePassword } from '@/utils/mongo/validatePassword';
import { createTelegramBot } from '@/utils/telegram/createTelegramBot';
import { getUserFromCallbackQuery } from '@/utils/telegram/getUserFromCallbackQuery';
import { sendStartInlineKeyboard } from '@/utils/telegram/sendStartInlineKeyboard';
import { NextResponse, NextRequest } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body: ITelegramUpdate = await req.json();

  const bot = createTelegramBot();
  console.log('bot', bot);

  // await bot.deleteWebHook();

  if (body.message) {
    const {
      chat: { id: chatId },
      text,
      reply_to_message: replyToMessage,
      from,
    } = body.message;
    if (text === '/start') {
      sendStartInlineKeyboard(bot, chatId);
      console.log('bot', bot);
    }
    if (replyToMessage?.text === 'Введіть пароль будь-ласка:') {
      validatePassword(bot, getUserFromCallbackQuery(from), text);
    }
    console.log('body in body.message:', body);
  }

  if (body['callback_query']) {
    const { data, from } = body['callback_query'] as {
      data: 'logOut' | 'signIn';
      from: ITelegramUser;
    };
    const user = getUserFromCallbackQuery(from);
    switch (data) {
      case 'signIn':
        console.log('signIn');
        addUserToDB(user, bot);
        break;
      case 'logOut':
        removeUserFromDB(user, bot);
        break;
      default:
        console.log('data in case:', data);
        break;
    }
  }

  return NextResponse.json({ res: 'Hello' });
};
