export interface ITelegramUser {
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

interface ITelegramReplyToMessage {
  message_id: number;
  from?: {};
  chat?: {};
  date: number;
  text: string;
}

interface TelegramMessage {
  message_id: number;
  text: string;
  from: ITelegramUser;
  chat: TelegramChat;
  date: number;
  reply_to_message?: ITelegramReplyToMessage;
}

interface TelegramCallbackQuery {
  id: string;
  from: ITelegramUser;
  message: TelegramMessage;
  data: string;
}

export interface ITelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}
