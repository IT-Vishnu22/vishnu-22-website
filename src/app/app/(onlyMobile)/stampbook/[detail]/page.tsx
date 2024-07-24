import Image from "next/image";
import InputForm from "./InputForm";
import Link from "next/link";
import { ReadDataSQ } from "@/lib/stampbook/readData";
import { Toaster } from "@/components/ui/toaster";

export default async function DetailPage({
    params,
}: {
    params: { detail: string };
}) {
    const detail = await ReadDataSQ(params.detail);
    return (
        <main className="relative h-auto min-h-screen w-full bg-green-1 pb-[350px]">
            <header className="sticky top-0 z-10 grid grid-cols-4 items-center bg-blue-4 p-8 text-[32px] font-semibold text-white">
                <Link href="/app/stampbook" className="text-blue-3">
                    <Image
                        src="/stampbookImages/back.svg"
                        alt="back button"
                        width={25}
                        height={25}
                    />
                </Link>
                <h1 className="col-span-2 text-center font-athiti">
                    {detail?.NameTH}
                </h1>
            </header>
            <div className="relative h-52 w-full">
                <Image
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    src={`/stampbookImages/${detail?.NameTH.replace(" ", "")}.jpg`}
                    alt={`${detail?.NameEN} location image`}
                    fill={true}
                />
            </div>
            <div className="space-y-4 px-5 py-9 text-base font-medium text-blue-1">
                {detail?.Fact.map((item: string, index: number) => {
                    return (
                        <pre
                            key={index}
                            className="whitespace-break-spaces text-wrap font-athiti"
                        >
                            {"    "}
                            {item}
                        </pre>
                    );
                })}
            </div>

            <section className="absolute bottom-0 w-full rounded-t-[50px] bg-[#FFFBF4] p-10 pb-[100px] font-athiti md:max-w-[390px]">
                <InputForm question={detail?.Question} docId={params.detail} />
            </section>
            <Toaster />
        </main>
    );
}
