// pages/api/parseData.js
import {promises as fs} from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url)
    const zipcode = searchParams.get('zip')
    if (zipcode === null) { return new Response(JSON.stringify({ error: 'Missing zipcode' }), { status: 400 }) }
    //console.log("zipcode: " + zipcode)
    // Read the JSON file
    const rawData = await fs.readFile(process.cwd() + '/public/retail_locations.json', 'utf-8');
    const gData = JSON.parse(rawData); // Make sure to convert the Buffer to a string
    //console.log(gData)
    const addresses = gData[zipcode].records
    //Inrix stuff
  
    //console.log(addresses[0].features[6].value[0])
    //addresses.forEach((record) => console.log(record.prices) )
    
    // Extract the required data
    const parsedData = addresses.map((record: any) => ({ // You might want to define a type for 'record'
      address: record.address,
      //brokers: record.brokers,
      floorSizeValue: record.prices?.amountMin,
      mostRecentPriceAmount: record.mostRecentPriceAmount,
      pricerPerSquareFoot: record.prices?.pricePerSquareFoot,
      vacantSqft: record.features.filter((feature) => feature.key === 'Vacant SQFT')[0]?.value[0],
      city: record.city,
      country: record.country,
      province: record.province,
      postalCode: record.postalCode,
      geoLocation: record.geoLocation,
      latitude: record.latitude,
      longitude: record.longitude,
      numParkingLots: record.numParkingLots,
    }));
    
    // Send the parsed data as a response
    return new Response(JSON.stringify(parsedData))
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
    //res.status(500).json({ error: 'Internal Server Error' });
  }
}
