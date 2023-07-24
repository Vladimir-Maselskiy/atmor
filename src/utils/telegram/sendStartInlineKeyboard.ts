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
  console.log('In sendStartInlineKeyboard in if bot block');
  console.log('chatId', chatId);
  console.log('messageText', messageText);
  try {
    await bot?.sendMessage(
      915873774,
      messageText
      //    {
      //   reply_markup: inlineKeyboard,
      // }
    );
  } catch (error) {
    console.log('error in sendStartInlineKeyboard', error);
  }
};
