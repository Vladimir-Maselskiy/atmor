import { TMongoDBUser } from '@/interfaces/mongo';
import TelegramBot from 'node-telegram-bot-api';

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
    const userFromDB = await fetch(url, options);

    if (userFromDB.status !== 200) {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/add`;
        await fetch(url, options);
        bot?.sendMessage(user.userID, 'Підписка на розсилку ввімнута!');
      } catch (error) {}
    }
  } catch (error) {}
};
