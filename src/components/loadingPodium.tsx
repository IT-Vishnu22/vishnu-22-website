// loading state of podium, since it take a while to compile PodiumDisplay components


export default function LoadingPodium(props : {type : string}) {
  const color =  (props.type === "game" ? "#3E4C68" : "#506A53")

  return (
    <div className="absolute top-0 w-full z-0">
      {/* loading outliner */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 390 469"
        fill="none"
        className="w-full h-[500px]"
      >
        <rect width={400} height={500}></rect>
        <g filter="url(#filter0_i_2717_2858)" className="overflow-hidden">
          <path
            d="M171.998 463.722C185.922 469.653 201.654 469.696 215.61 463.84L388.666 391.232C409.466 382.504 423 362.149 423 339.593V-103C423 -133.928 397.928 -159 367 -159H24C-6.92795 -159 -32 -133.928 -32 -103V339.811C-32 362.258 -18.5969 382.535 2.05405 391.332L171.998 463.722Z"
            fill={color}
          />
        </g>
      </svg>

      {/* loading spinner */}
      <div className="absolute top-[40%] left-[45%]">
        <svg
          aria-hidden="true"
          className=" w-10 h-10 text-slate-900 animate-spin fill-pink-1"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
