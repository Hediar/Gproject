import { NextResponse } from "next/server";
import operation from "../../../../data/operation.json";

export const GET = async () => {
  const data = operation;
  return NextResponse.json({ data });
};
