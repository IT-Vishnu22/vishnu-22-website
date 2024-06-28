import Image from "next/image";

export default function StampbookPage() {
  return (
    <div className="flex flex-col items-center justify-evenly">
      <h1 className="text-blue-1 text-[32px] font-bold">Stamp Book</h1>
      <div className="w-[320px] h-[190px] bg-gray-300">
        <img
          className="relative w-auto h-auto"
          src="https://placehold.co/320x190"
          alt="stampbook page"
        />
      </div>
      <div className="relative w-auto pb-80">
        <div className="w-auto filter drop-shadow-[-14px_20px_0px_#D98487]">
          <img
            className="rotate-[5.825deg] relative"
            src="https://placehold.co/200x100"
            alt="First image of stampbook page"
          />
        </div>
        <div className="w-auto filter drop-shadow-[-20px_25px_0px_#D98487]">
          <img
            className="-rotate-[8.317deg] "
            src="https://placehold.co/200x100"
            alt="Second image of stampbook page"
          />
        </div>
        <div className="w-auto filter drop-shadow-[20px_29px_0px_#D98487]">
          <img
            className="rotate-[16.406deg]"
            src="https://placehold.co/200x100"
            alt="Thrid image of stampbook page"
          />
        </div>
        <div className="w-auto filter drop-shadow-[15px_20px_0px_#D98487]">
          <img
            className="-rotate-[2.36deg]"
            src="https://placehold.co/200x100"
            alt="Fourth image of stampbook page"
          />
        </div>
        <div className="w-auto filter drop-shadow-[-20px_29px_0px_#D98487]">
          <img
            className="-rotate-[14.762deg]"
            src="https://placehold.co/200x100"
            alt="Fifth image of stampbook page"
          />
        </div>
        <div className="w-auto filter drop-shadow-[15px_29px_0px_#D98487]">
          <img
            className="rotate-[5.825deg]"
            src="https://placehold.co/200x100"
            alt="Sixth image of stampbook page"
          />
        </div>
        <div className="w-auto filter drop-shadow-[-10px_29px_0px_#D98487]">
          <img
            className="-rotate-[8.317deg]"
            src="https://placehold.co/200x100"
            alt="Seventh image of stampbook page"
          />
        </div>
      </div>
    </div>
  );
}
