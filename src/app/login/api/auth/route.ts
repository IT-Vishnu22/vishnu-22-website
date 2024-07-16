import { adminAuth, adminFirestore } from "@/lib/admin";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const validateResponseSchema = z.object({
  studentId: z.string(),
  name: z.object({
    en: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }),
    th: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }),
  }),
});

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  try {
    // console.log(body.lineId)
    const response = await axios.post(
      "https://account.intania.org/api/v1/auth/app/validate",
      {
        token: body.token,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.INTANIA_AUTH_SECRET}`,
        },
      },
    );

    let validatedResponse = validateResponseSchema.parse(response.data.data);

    // Check if user already exists
    try {
      await adminAuth.getUser(validatedResponse.studentId);
    } catch {
      console.log("User does not exist, creating user...");
      await adminAuth.createUser({
        uid: validatedResponse.studentId,
        displayName: `${validatedResponse.name.th.firstName} ${validatedResponse.name.th.lastName}`,
      });

      await adminFirestore
        .collection("users")
        .doc(validatedResponse.studentId)
        .set({
          username: `${validatedResponse.name.th.firstName} ${validatedResponse.name.th.lastName}`,
          studentId: validatedResponse.studentId,
          lineId: body.lineId,
        }, { merge: true });
    }

    const authToken = await adminAuth.createCustomToken(
      validatedResponse.studentId,
    );

    return NextResponse.json(
      {
        ...response.data,
        authToken,
      },
      {
        status: 200,
      },
    );
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
