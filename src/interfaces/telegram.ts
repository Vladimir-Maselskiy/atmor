interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

interface TelegramChat {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  type: string;
}

interface TelegramMessage {
  message_id: number;
  text: string;
  from: TelegramUser;
  chat: TelegramChat;
  date: number;
}

interface TelegramCallbackQuery {
  id: string;
  from: TelegramUser;
  message: TelegramMessage;
  data: string;
}

export interface ITelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}
