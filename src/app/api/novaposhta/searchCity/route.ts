import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { cityName } = await req.json();

  const url = process.env.NOVA_POSHTA_URL!;

  const body = {
    apiKey: process.env.NOVA_POSHTA_API_KEY,
    modelName: 'Address',
    calledMethod: 'searchSettlements',
    methodProperties: { CityName: cityName, Limit: 20, Page: 1 },
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
