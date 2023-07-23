import { TMongoDBUser } from '@/interfaces/mongo';
import TelegramBot from 'node-telegram-bot-api';

export const removeUserFromDB = async (
  user: TMongoDBUser,
  bot: TelegramBot | null
) => {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/removeOne`;

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
  };
  try {
    await fetch(url, options);
    bot?.sendMessage(user.userID, 'Підписку скасовано!');
  } catch (error) {}
};
