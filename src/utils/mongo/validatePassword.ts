import { TMongoDBUser } from '@/interfaces/mongo';
import TelegramBot from 'node-telegram-bot-api';
import { sendPasswordInlineKeyboard } from '../telegram/sendPasswordInlineKeyboard';

export const validatePassword = async (
  bot: TelegramBot | null,
  user: TMongoDBUser,
  password: string
) => {
  if (password !== process.env.TELEGRAM_BOT_PASSWORD) {
    bot?.sendMessage(user.userID, 'Пароль невірний');
    return;
  }

  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users`;
  user.isActive = true;

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
  };
  try {
    const { status } = await fetch(`${url}/findOne`, options);
    if (status !== 404) {
      bot?.sendMessage(user.userID, 'Підписка вже ввімнута!');
      return;
    }
    const res = await fetch(`${url}/add`, options);
    const { user: userFromDB } = (await res.json()) as { user: TMongoDBUser };

    if (res.status === 200 && userFromDB?.isActive) {
      bot?.sendMessage(user.userID, 'Підписку налаштовано!');
    }
  } catch (error) {}
};
