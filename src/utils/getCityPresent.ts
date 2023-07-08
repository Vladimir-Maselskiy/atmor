import { DefaultOptionType } from 'antd/es/select';

type TType = {
  deliveryCities: DefaultOptionType[] | undefined;
  newValue: any;
};

export const getCityPresent = ({ deliveryCities, newValue }: TType) => {
  if (deliveryCities) {
    const currentCity = deliveryCities.find(
      city => city.DeliveryCity === newValue
    );
    return currentCity?.Present;
  }
};
