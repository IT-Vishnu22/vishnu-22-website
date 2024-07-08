import vectorImage from "@/app/intania_news/images/vector.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-roboto-condensed">
      <div className="mx-[5%] my-[0.5%] flex justify-start space-x-[10%]">
        <div>vector</div> <div>intania news</div>
      </div>
      <div>
        <div className="relative mx-auto mt-20 max-w-xl">
          <img
            className="h-64 w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
            alt="Random image"
          ></img>
          <div className="absolute inset-0 rounded-md bg-gray-700 opacity-60"></div>

          <div className="absolute inset-0 flex place-content-end">
            <div className="content-end">
              <h2 className="text-3xl font-bold text-white">
                Ge Lost in Mountains
              </h2>
              <h2 className="text-3xl font-bold text-white">123141551</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
