export interface IAtmorItem {
  options: {
    article: string;
    name: string;
    price: number;
    country: string;
    productivity: number;
    power: number;
    firstPhoto: string;
  };
  aditional: {
    brand: string;
    type: string;
    insalation: string;
    supplyVoltage: string;
    height: number;
    width: number;
    depth: number;
    model: string;
    using: string;
    appointment: string;
    color: string;
    weight: number;
    completeSet: string;
    quarantee: number;
    photos: string[];
  };
}

export interface ICartItem {
  product: IAtmorItem;
  quantity: number;
}

export interface IUser {
  name: string;
  email: string;
  address: string;
  phone: string;
}
