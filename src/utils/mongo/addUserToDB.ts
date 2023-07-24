import { TMongoDBUser } from '@/interfaces/mongo';
import TelegramBot from 'node-telegram-bot-api';
import { sendPasswordInlineKeyboard } from '../telegram/sendPasswordInlineKeyboard';

export const addUserToDB = async (
  user: TMongoDBUser,
  bot: TelegramBot | null
) => {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/findOne`;

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
  };
  try {
    const res = await fetch(url, options);
    const { user: userFromDB } = (await res.json()) as { user: TMongoDBUser };
    console.log('userFromDB in addUserToDB', userFromDB);

    if (res.status !== 200 || !userFromDB?.isActive) {
      try {
        sendPasswordInlineKeyboard(bot, user.userID);
      } catch (error) {}
    } else {
      bot?.sendMessage(user.userID, 'Підписка вже ввімнута!');
    }
  } catch (error) {}
};
