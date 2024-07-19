// PodiumDisplay : most of this components are svg
// you can edit data in  "./Podiums"

import Podiums from "./Podiums";

export default function PodiumsDisplay(props : {type : string, data: {name: string, score: number}[]}) {
  const color = (props.type === "game" ? "#3E4C68" : "#506A53")


  return (
    <div className="relative top-0 w-full z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 390 469"
        fill="none"
        className="w-full min-h-[500px]"
      >
        {/* blue background */}
        <g filter="url(#filter0_i_2717_2858)" className="overflow-hidden">
          <path
            d="M171.998 463.722C185.922 469.653 201.654 469.696 215.61 463.84L388.666 391.232C409.466 382.504 423 362.149 423 339.593V-103C423 -133.928 397.928 -159 367 -159H24C-6.92795 -159 -32 -133.928 -32 -103V339.811C-32 362.258 -18.5969 382.535 2.05405 391.332L171.998 463.722Z"
            fill="white"
          />

          <path
            d="M171.998 463.722C185.922 469.653 201.654 469.696 215.61 463.84L388.666 391.232C409.466 382.504 423 362.149 423 339.593V-103C423 -133.928 397.928 -159 367 -159H24C-6.92795 -159 -32 -133.928 -32 -103V339.811C-32 362.258 -18.5969 382.535 2.05405 391.332L171.998 463.722Z"
            fill="#C5D3C9"
          />
          <path
            d="M171.998 463.722C185.922 469.653 201.654 469.696 215.61 463.84L388.666 391.232C409.466 382.504 423 362.149 423 339.593V-103C423 -133.928 397.928 -159 367 -159H24C-6.92795 -159 -32 -133.928 -32 -103V339.811C-32 362.258 -18.5969 382.535 2.05405 391.332L171.998 463.722Z"
            fill="url(#paint0_linear_2717_2858)"
            fillOpacity="0.3"
          />
          <path
            d="M171.998 463.722C185.922 469.653 201.654 469.696 215.61 463.84L388.666 391.232C409.466 382.504 423 362.149 423 339.593V-103C423 -133.928 397.928 -159 367 -159H24C-6.92795 -159 -32 -133.928 -32 -103V339.811C-32 362.258 -18.5969 382.535 2.05405 391.332L171.998 463.722Z"
            fill={color}
          />
        </g>

        <defs>
          <filter
            id="filter0_i_2717_2858"
            x="-32"
            y="-162"
            width="455"
            height="630.202"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-3" />
            <feGaussianBlur stdDeviation="15.35" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_2717_2858"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2717_2858"
            x1="196"
            y1="11.5"
            x2="195"
            y2="490"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.52" stopColor="white" stopOpacity="0" />
            <stop offset="0.83" stopColor={color} />
          </linearGradient>
        </defs>

        {/* podiums inside svg */}
        <defs>
          <clipPath id="clipPath">
            <path
              transform="scale(1.001)"
              d="M171.998 463.722C185.922 469.653 201.654 469.696 215.61 463.84L388.666 391.232C409.466 382.504 423 362.149 423 339.593V-103C423 -133.928 397.928 -159 367 -159H24C-6.92795 -159 -32 -133.928 -32 -103V339.811C-32 362.258 -18.5969 382.535 2.05405 391.332L171.998 463.722Z"
            />
          </clipPath>
        </defs>

        <g clipPath="url(#clipPath)">
          <foreignObject x="0" y="0" width="400" height="500">
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <Podiums type={props.type} data={props.data} />
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
