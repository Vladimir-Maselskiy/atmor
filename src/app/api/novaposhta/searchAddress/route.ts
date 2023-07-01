import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
const url = process.env.NEXT_PUBLIC_API_HOST!;

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { cityRef, findByString = '' } = await req.json();

  const url = process.env.NEXT_PUBLIC_NOVA_POSHTA_URL!;

  const body = {
    apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityRef: cityRef,
      FindByString: findByString,
    },
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
  };

  const fetchData = await fetch(url, options).then(res => res.json());

  const { data } = fetchData;
  const addresses = data[0]?.Addresses;
  if (Array.isArray(addresses)) {
    const addressesWithWarehouses = addresses.filter(
      address => address.Warehouses > 0
    );
    return NextResponse.json(addressesWithWarehouses);
  }

  return NextResponse.error();
};
