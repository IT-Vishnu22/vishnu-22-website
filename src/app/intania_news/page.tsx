export default function Home() {
  return (
           
    <>
      <div className=" flex justify-center space-x-[10%] mt-10">
        <div>vector</div> <div>intania news</div>
      </div>

      <div className=" mx-auto gap-6   max-w-[80%] mt-5">
        <div className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 h-64">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-xs text-white ml-5 text-xs">
            รีวิวชีวิตปี 1 วิศวฯจุฬา
          </span>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3 mx-auto gap-6  max-w-[80%] mt-5">
        <div>
          <div>
            <h2 className="relative  mb-3 inline-block  text-black ml-5 text-xs break-words max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            </h2>
          </div>
        </div>
        <div className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 h-64">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-xs text-white ml-5 text-xs">
          SOTUS ตัดทิ้งไป
          </span>
        </div>
      </div>   

      <div className="grid gap-4 grid-cols-3 mx-auto gap-6  max-w-[80%] mt-5">
        <div className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 h-64">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-xs text-white ml-5 text-xs">
          วิศวฯกับการเรียน
          </span>
        </div>
        <div>
          <h2 className="relative  mb-3 inline-block  text-black ml-5 text-xs break-words max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            
          </h2>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-4 mx-auto gap-6  max-w-[80%] mt-5">
        <div className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 h-64">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-xs text-white ml-5 text-xs">
           ฟุตบอลประเพณี
          </span>
        </div>
        <div className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 h-64">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-xs text-white ml-5 text-xs">
          ไอเทมวิศวฯ 
          </span>
        </div>
      </div>

      <div className=" mx-auto gap-6  max-w-[80%] mt-5">
        <div className="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 h-64">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-xs text-white ml-5 text-xs">
          บิดาแห่งคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          </span>
        </div>
      </div>
      
      <div className="relative max-w-[80%] mx-auto mt-5">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="https://placehold.co/1080x720"
          alt="Random image"
        ></img>
      </div>
    </>
  );
}

/*
<div className="relative max-w-[40%] mx-auto mt-10">
  <img
    className="h-64 w-full object-cover rounded-md"
    src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
    alt="Random image"
  ></img>
  <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
  <div className="absolute inset-0 flex place-content-end">
    <div className="content-end">
      <h2 className="text-white text-3xl font-bold">
        รีวิวชีวิตปี 1 วิศวฯจุฬา
      </h2>
      <h2 className="text-white text-3xl font-bold">placeholder2?</h2>
    </div>
  </div>
</div>
</div>
*/
