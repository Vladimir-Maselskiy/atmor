import TelegramBot from 'node-telegram-bot-api';

let bot: TelegramBot | null = null;

export const createTelegramBot = () => {
  return (bot = bot
    ? bot
    : new TelegramBot(process.env.TELEGRAM_BOT!, {
        webHook: true,
      }));
};
