import TelegramBot, { InlineKeyboardButton } from 'node-telegram-bot-api';

const messageText = 'Привіт! Вибери дію?';

const buttons: InlineKeyboardButton[][] = [
  [{ text: 'Підписатись на розсилання', callback_data: 'signIn' }],
  [{ text: 'Відписатись від розсилання', callback_data: 'logOut' }],
];

export const sendStartInlineKeyboard = async (
  bot: TelegramBot | null,
  chatId: number
) => {
  const inlineKeyboard = {
    inline_keyboard: buttons,
  };
  try {
    await bot?.sendMessage(chatId, messageText, {
      reply_markup: inlineKeyboard,
    });
    console.log('after bot?.sendMessage');
  } catch (error) {
    console.log('error in sendStartInlineKeyboard', error);
  }
};
