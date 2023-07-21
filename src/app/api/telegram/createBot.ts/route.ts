import { ICartItem, TPaymemtMethod } from '@/interfaces/interfaces';
import { getMessageForTelegramBot } from '@/utils/getMessageForTelegramBot';
import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import TelegramBot, { InlineKeyboardButton } from 'node-telegram-bot-api';

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  let bot: TelegramBot | null = new TelegramBot(process.env.TELEGRAM_BOT!, {
    polling: true,
  });

  console.log('inGet');

  const sendInlineKeyboard = (
    chatId: number,
    text: string,
    buttons: InlineKeyboardButton[][]
  ) => {
    const inlineKeyboard = {
      inline_keyboard: buttons,
    };
    console.log('inSendInlineKeyboard');

    if (bot)
      bot.sendMessage(chatId, text, {
        reply_markup: inlineKeyboard,
      });
  };

  bot.on("message", msg => {
    const chatId = msg.chat.id;
    const messageText = 'Hello! What do you want to do?';

    const buttons: InlineKeyboardButton[][] = [
      [
        { text: 'Button 1', callback_data: 'button1' },
        { text: 'Button 2', callback_data: 'button2' },
      ],
      [{ text: 'Button 3', callback_data: 'button3' }],
    ];

    sendInlineKeyboard(chatId, messageText, buttons);
  });
  return NextResponse.json({});
  return NextResponse.error();
};
