import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  try {
    const response = await axios.post(
      "https://accounts.intania.org/api/v1/auth/app/validate",
      {
        token: body.token,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.INTANIA_AUTH_SECRET}`,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log(error);

    if (error.response) {
      return NextResponse.json(error.response.data, {
        status: error.response.status,
      });
    } else {
      return NextResponse.json(error.message, {
        status: 500,
      });
    }
  }
};
