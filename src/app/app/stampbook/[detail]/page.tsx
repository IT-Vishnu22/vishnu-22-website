import Image from "next/image";
import InputForm from "./InputForm";
import Link from "next/link";
import {ReadDataSQ} from "@/lib/stampbook/readData";


export default async function DetailPage({ params }: { params: { detail: string } }) {

  const detail = await ReadDataSQ(params.detail)
  return (
    <main className="min-h-screen w-full bg-green-1 pb-[335px]">
      <header className="sticky top-0 z-10 grid grid-cols-4 items-center bg-blue-4 p-8 text-[32px] font-semibold text-white">
        <Link href="/app/stampbook" className="text-blue-3">
          <Image
            src="/stampbookImages/back.svg"
            alt="back button"
            width={25}
            height={25}
          />
        </Link>
        <h1 className="col-span-2 text-center">{detail?.NameTH}</h1>
      </header>
      <div className="relative h-52 w-full">
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={`/stampbookImages/${detail?.NameTH}.jpg`}
          alt={`${detail?.NameEN} location image`}
          fill={true}
        />
      </div>
      <div className="space-y-4 px-5 py-9 text-base font-medium text-blue-1">
        {detail?.Fact.map((item:string, index:number) => {
          return (
            <pre
              key={index} 
              className="text-wrap">
              {"    "}
              {item}
            </pre>
          );
        })}
      </div>

      <section className="fixed bottom-[85px] w-full rounded-t-[50px] bg-[#FFFBF4] p-10 md:max-w-[390px]">
        <InputForm question={detail?.Question} docId={params.detail} />
      </section>
    </main>
  );
}
