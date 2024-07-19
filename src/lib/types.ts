import { z } from "zod";

export const validateUserData = z.object({
    faculty: z.string().optional(),
    group: z.string().optional(),
    prefix: z.string().optional(),
    username: z.string(),
    studentId: z.string(),
    lineId: z.string(),
});

export type UserData = z.infer<typeof validateUserData>;

export type ScoreboardData = {
  [group: string]: number
};