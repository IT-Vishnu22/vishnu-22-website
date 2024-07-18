"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import CheckAnswer from "@/lib/stampbook/checkAnswer";
import { useContext, useState } from "react";
import { UserContext } from "@/lib/contexts/user";

const FormSchema = z.object({
    username: z.string().min(1, {
        message: "The answer must be at least 1 characters.",
    }),
});

//const studentId = 'test'
//const group = 'A'

export default function InputForm({
    question,
    docId,
}: {
    question: String;
    docId: string;
}) {
    //get studentId from login
    const { firebaseUser, data } = useContext(UserContext);
    const studentId = data?.studentId
    const group = data?.group || null

    const router = useRouter();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const result = await CheckAnswer(
            docId,
            data.username,
            studentId,
            group,
        );

        if (result) {
            router.refresh();
            router.push("/app/stampbook/");

            toast({
                className: "bg-green-500",
                title: "Answer Check",
                description: "Your answer is correct!",
            });
        } else {
            console.log("incorrect!!");

            toast({
                variant: "destructive",
                title: "Answer Check",
                description: "Your answer is incorrect!",
            });
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full text-[#555]"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base">
                                Q: {question}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="rounded-none bg-[#E8EDE9]"
                                    placeholder="คำตอบ"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="mt-0 flex justify-between px-16 py-4 text-white">
                    <Button
                        type="reset"
                        className="h-7 w-20 rounded-none bg-pink-3 hover:bg-pink-3/90"
                    >
                        ยกเลิก
                    </Button>
                    <Button
                        type="submit"
                        className="h-7 w-20 rounded-none bg-green-2 hover:bg-green-2/90"
                    >
                        ตกลง
                    </Button>
                </div>
            </form>
        </Form>
    );
}
