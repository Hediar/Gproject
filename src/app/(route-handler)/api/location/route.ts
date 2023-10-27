import { NextResponse } from "next/server";
import location from "../../../../data/location.json";

export const GET = async () => {
  const data = location;
  return NextResponse.json({ data });
};
