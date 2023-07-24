import TelegramBot, { InlineKeyboardButton } from 'node-telegram-bot-api';

const messageText = 'Привіт! Вибери дію?';

const buttons: InlineKeyboardButton[][] = [
  [{ text: 'Підписатись на розсилання', callback_data: 'signIn' }],
  [{ text: 'Відписатись від розсилання', callback_data: 'logOut' }],
];

export const sendStartInlineKeyboard = (
  bot: TelegramBot | null,
  chatId: number
) => {
  const inlineKeyboard = {
    inline_keyboard: buttons,
  };

  if (bot)
    bot.sendMessage(chatId, messageText, {
      reply_markup: inlineKeyboard,
    });
};
