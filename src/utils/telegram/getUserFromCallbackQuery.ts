import { TMongoDBUser } from '@/interfaces/mongo';
import { ITelegramUser } from '@/interfaces/telegram';

export const getUserFromCallbackQuery = (from: ITelegramUser): TMongoDBUser => {
  const { id: userID, first_name: firstName } = from;

  const user: TMongoDBUser = { userID, firstName };
  if (from['last_name']) user.lastName = from['last_name'];
  if (from['username']) user.userName = from['username'];

  return user;
};
