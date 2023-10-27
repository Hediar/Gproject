import { NextResponse } from "next/server";
import smartservice from "../../../../data/smartCityData.json";

export const GET = async () => {
  const data = smartservice;
  return NextResponse.json({ data });
};
