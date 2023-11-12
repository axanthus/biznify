// pages/api/parseData.js
import { getLots, getTripsCount } from '@/lib/inrix';
import {promises as fs} from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url)
    const zipcode = searchParams.get('zip')
    if (zipcode === null) { return new Response(JSON.stringify({ error: 'Missing zipcode' }), { status: 400 }) }
    console.log("zipcode: " + zipcode)
    // Read the JSON file
    const rawData = await fs.readFile(process.cwd() + '/public/sfZipcodes.json', 'utf-8');
    const gData = JSON.parse(rawData); // Make sure to convert the Buffer to a string
    console.log(gData)
    const addresses = gData[zipcode].records
    //Inrix stuff
  

    // Extract the required data
    const parsedData = addresses.map((record: any) => ({ // You might want to define a type for 'record'
      address: record.address,
      brokers: record.brokers,
      city: record.city,
      country: record.country,
      province: record.province,
      postalCode: record.postalCode,
      geoLocation: record.geoLocation,
      latitude: record.latitude,
      longitude: record.longitude,
      numParkingLots: record.numParkingLots,
    }));

    for await (let record of parsedData) {
      const [numParkingLots, numTripCounts] = await Promise.all([getLots(record.latitude,record.longitude), getTripsCount(record.latitude,record.longitude)])
      // const numParkingLots = await getLots(record.latitude,record.longitude);
      // const numTripCounts = await getTripsCount(record.latitude,record.longitude);
      //console.log(numParkingLots?.count || 0)
      record['numParkingLots'] = numParkingLots?.count !== undefined ? numParkingLots?.count : 0;
      record['numTripCounts'] = numTripCounts?.count !== undefined ? numTripCounts?.count : 0;
    }
    console.log(parsedData)
    
    // Send the parsed data as a response
    return new Response(JSON.stringify(parsedData))
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
    //res.status(500).json({ error: 'Internal Server Error' });
  }
}
