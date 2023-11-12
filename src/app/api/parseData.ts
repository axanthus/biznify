// pages/api/parseData.js
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
  try {
    // Read the JSON file
    const rawData = fs.readFileSync('/sampleData94115.json');
    const data = JSON.parse(rawData.toString()); // Make sure to convert the Buffer to a string

    // Extract the required data
    const parsedData = data.records.map((record: any) => ({ // You might want to define a type for 'record'
      address: record.address,
      brokers: record.brokers,
      city: record.city,
      country: record.country,
      province: record.province,
      postalCode: record.postalCode,
      geoLocation: record.geoLocation,
      latitude: record.latitude,
      longitude: record.longitude,
    }));

    // Send the parsed data as a response
    res.json({status: 'ok'})
    //res.json(parsedData);
    //res.status(200).json({ parsedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
