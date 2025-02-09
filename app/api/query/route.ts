import database from '@/lib/database/db';
import { NextResponse } from 'next/server';


export async function GET(req:any) {
    const collection = database.collection('nameCollection');
    const allData = await collection.find({}).toArray();
    return NextResponse.json(allData);
}