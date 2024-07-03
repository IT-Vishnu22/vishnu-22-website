export default function Title() {
  return (
    <>
      <div className="w-full pt-[35px] absolute items-center top-0 flex flex-row justify-start px-[30px]">
        <BackIcon />
        <p className="text-3xl relative text-white self-center flex-1 text-center font-semibold">
          LeaderBoard
        </p>
      </div>
    </>
  );
}

export const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
    >
      <path
        d="M7.8125 8.20714H17.1875C19.7719 8.20714 21.875 10.3725 21.875 13.0333C21.875 15.6941 19.7719 17.8594 17.1875 17.8594H12.5V21.0768H17.1875C21.4953 21.0768 25 17.4685 25 13.0333C25 8.59805 21.4953 4.98971 17.1875 4.98971H7.8125V0.163574L0 6.59842L7.8125 13.0333V8.20714Z"
        fill="white"
      />
    </svg>
  );
};
