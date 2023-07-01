import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
const url = process.env.NEXT_PUBLIC_API_HOST!;

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { cityName } = await req.json();

  const url = process.env.NEXT_PUBLIC_NOVA_POSHTA_URL!;

  const body = {
    apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API_KEY,
    modelName: 'Address',
    calledMethod: 'searchSettlements',
    methodProperties: { CityName: cityName, Limit: 20, Page: 1 },
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
  };

  const fetchData = await fetch(url, options).then(res => res.json());

  const { data: warehouses } = fetchData;

  if (Array.isArray(warehouses)) {
    return NextResponse.json(warehouses);
  }

  return NextResponse.error();
};
