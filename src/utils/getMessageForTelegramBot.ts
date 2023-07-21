import { ICartItem, TPaymemtMethod } from '@/interfaces/interfaces';
import { getTotalCartCost } from './getTotalCartCost';

export const getMessageForTelegramBot = (values: any, cart: ICartItem[]) => {
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
  return userInfo + orderItemsInfo + totalCostInfo;
};
