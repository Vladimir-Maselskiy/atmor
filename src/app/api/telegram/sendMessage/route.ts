import { ICartItem, TPaymemtMethod } from '@/interfaces/interfaces';
import { getTotalCartCost } from '@/utils/getTotalCartCost';
import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { values, cart }: { values: any; cart: ICartItem[] } = await req.json();
  let bot: TelegramBot | null = new TelegramBot(process.env.TELEGRAM_BOT!, {
    polling: true,
  });
  const {
    'user-phone': phone,
    'user-name': name,
    'user-surname': surname,
    'user-email': email,
    'user-city': city,
    'user-warehouse': warehouse,
    'paymaent-method': paymaentMethod,
  } = values;
  let paymaentMethodInMessage;
  switch (paymaentMethod as TPaymemtMethod) {
    case 'upon receipt':
      paymaentMethodInMessage = 'Оплата при отриманні';
      break;
    case 'liqpay':
      paymaentMethodInMessage = 'Оплата Liqpay';
      break;
    case 'other':
      paymaentMethodInMessage = 'Інший варіант';
      break;
    default:
      paymaentMethodInMessage = 'Інший варіант';
  }

  const userInfo = `Імя: ${name}\nПрізвище: ${surname}\nE-mail: ${email}\nТелефон: ${phone}\nНаселений пункт доставки: ${city}\nВідділення НОВОЇ ПОШТИ: ${warehouse}\nМетод оплати: ${paymaentMethodInMessage}\n`;
  const orderItemsInfo = cart
    .map((item, index) => {
      return `${index + 1}. ${item.product.options.name} - ${
        item.quantity
      }шт * ${item.product.options.price}грн`;
    })
    .join('\n');
  const totalCostInfo = `\nЗагальна сума замовлення: ${getTotalCartCost(
    cart
  )}грн`;
  const message = userInfo + orderItemsInfo + totalCostInfo;
  const resBot = await bot.sendMessage(915873774, message);
  bot.stopPolling();
  console.log('resBot', resBot);

  return NextResponse.json({});
  return NextResponse.error();
};
