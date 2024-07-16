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
import {ReadDataSQ} from "@/lib/stampbook/readData";
import CheckAnswer from "@/lib/stampbook/checkAnswer";
import { useContext, useState } from "react";
import { UserContext } from "@/lib/context";


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function InputForm({ question, docId }: { question: String, docId:string }) {
  //const { user, group} = useContext(UserContext);
  //const studentId = user?.uid 
  const studentId = '6638206121'
  const group = 'L'
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await CheckAnswer(docId, data.username, studentId, group)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="z-50 mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    if(result){
      router.refresh()
      router.push("/app/stampbook/")
    }
    else{
      console.log('incorrect!!')
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
              <FormDescription className="mb-4 text-sm">
                คำใบ้คำใบ้คำใบ้คำใบ้คำใบ้คำใบ้คำใบ้
              </FormDescription>
              <FormLabel className="text-base">{question}</FormLabel>
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
