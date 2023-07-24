import TelegramBot, { InlineKeyboardButton } from 'node-telegram-bot-api';

const messageText = 'Введи пароль';

const buttons: InlineKeyboardButton[][] = [
  [{ text: 'Підписатись на розсилання', callback_data: 'signIn' }],
  [{ text: 'Відписатись від розсилання', callback_data: 'logOut' }],
];

export const sendPasswordInlineKeyboard = (
  bot: TelegramBot | null,
  chatId: number
) => {
  if (bot)
    bot.sendMessage(chatId, 'Введіть пароль будь-ласка:', {
      reply_markup: {
        force_reply: true,
      },
    });
};
