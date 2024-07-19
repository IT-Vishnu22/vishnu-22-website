'use client';

import Image from "next/image";
import dotGraphic from "../images/vishnu_dot_graphic.svg";
import engMap from "../images/engmap.png";
import back from "../images/back.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MapCarousel from "@/components/MapCarousel";
import { useContext } from "react";
import { UserContext } from "@/lib/contexts/user";
import useGroupInfo from "@/lib/announcement/useGroupInfo";

export default function VishnuAnnouncement() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #ECD8C1 0%, #2B4F5A 66.5%)",
        }}
        className="relative max-h-full min-h-screen w-full pb-52 pt-7"
      >
        {/* Header */}
        <HeaderSection />

        {/* Content */}
        <AnnouncementSection />

        {/* background style  */}
        <Image
          className="absolute bottom-0 z-10 w-full md:max-w-[390px]"
          src={dotGraphic}
          alt="dot graphic"
        />
      </section>
    </>
  );
}

const LogoVishnuImage = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="95"
      height="35"
      viewBox="0 0 95 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.4435 13.5589C32.4435 15.2142 32.4435 16.8705 32.4435 18.5259C32.4435 18.6094 32.4065 18.708 32.4516 18.7728C32.5488 18.914 32.6876 19.0383 32.8103 19.1698C32.9618 19.073 33.1932 18.9993 33.2522 18.8767C33.6144 18.1183 33.9383 17.3483 34.2738 16.5819C35.4805 13.82 36.6896 11.0589 37.8882 8.29517C37.9912 8.05716 38.1323 7.94615 38.4817 7.96036C39.0544 7.98345 39.6294 7.9648 40.2044 7.96747C40.7227 7.96924 40.8303 8.08558 40.6579 8.47456C40.2438 9.40883 39.8238 10.3413 39.4026 11.2747C37.1477 16.2737 34.8893 21.2719 32.646 26.2736C32.5164 26.5622 32.3452 26.6679 31.9507 26.651C31.3629 26.6261 30.7706 26.6235 30.1828 26.651C29.7131 26.6732 29.5974 26.5196 29.6009 26.191C29.6147 24.7976 29.6067 23.4033 29.6067 22.0099C29.6067 20.152 29.6067 18.2932 29.6067 16.4354C29.6067 16.3403 29.6437 16.2311 29.5962 16.153C29.5199 16.0251 29.3799 15.8199 29.2792 15.8235C29.1138 15.8297 28.8697 15.9531 28.813 16.0712C28.4104 16.8954 28.0482 17.7302 27.6722 18.5614C26.5106 21.1333 25.3444 23.7035 24.1944 26.278C24.0683 26.5613 23.8843 26.6714 23.4898 26.651C22.9495 26.6235 22.4046 26.6457 21.8608 26.6439C21.3402 26.6421 21.2268 26.5285 21.3992 26.1386C21.8562 25.1031 22.327 24.0702 22.7921 23.0365C24.9811 18.1707 27.1759 13.3057 29.3521 8.43638C29.5129 8.0767 29.7281 7.9204 30.2418 7.95681C30.796 7.99589 31.3594 7.98256 31.9159 7.96036C32.3336 7.94349 32.4539 8.07226 32.4516 8.37599C32.4401 10.1033 32.4458 11.8306 32.4458 13.558L32.4435 13.5589Z"
        fill="#3E4C68"
      />
      <path
        d="M38.1959 26.6439C37.0158 26.6439 35.8357 26.6439 34.6568 26.6439C33.9892 26.6439 33.892 26.5373 34.113 26.048C35.0709 23.9237 36.0301 21.7994 36.9869 19.6751C38.6737 15.9327 40.364 12.1912 42.0359 8.44433C42.1932 8.09088 42.391 7.91415 42.9152 7.95766C43.4057 7.9994 43.9078 7.96566 44.4042 7.96654C44.956 7.96743 45.0659 8.07933 44.8843 8.48963C44.4863 9.39015 44.0744 10.288 43.6695 11.1867C41.7813 15.3794 39.8932 19.5712 38.0062 23.7647C37.8222 24.1732 37.9587 24.326 38.5083 24.3322C39.0208 24.3375 39.5334 24.3215 40.0447 24.3384C40.3999 24.3499 40.585 24.2309 40.6961 23.9841C41.9664 21.1502 43.2414 18.3181 44.5164 15.486C45.5935 13.0917 46.6776 10.6983 47.7443 8.30135C47.86 8.04292 48.0255 7.94612 48.3806 7.96033C48.9221 7.98253 49.467 7.96566 50.0108 7.96654C50.6147 7.96654 50.7084 8.07489 50.5037 8.53048C50.0895 9.45231 49.6753 10.3741 49.2599 11.2951C47.0096 16.2844 44.7559 21.2736 42.5172 26.2664C42.3899 26.5488 42.2302 26.659 41.8299 26.6519C40.6197 26.6306 39.4084 26.6439 38.1971 26.6439H38.1959Z"
        fill="#3E4C68"
      />
      <path
        d="M0 17.2703C0 14.3387 0 11.408 0 8.47643C0 7.98266 0.0196686 7.96845 0.645585 7.96756C1.23564 7.96756 1.82569 7.97466 2.41574 7.96489C2.71886 7.95957 2.84034 8.06702 2.84381 8.28372C2.84613 8.39118 2.84613 8.49775 2.84613 8.6052C2.84613 11.8822 2.84613 15.1593 2.84613 18.4354C2.84613 18.5189 2.84613 18.6024 2.84613 18.6859C2.84613 18.8928 2.83456 19.1201 3.17933 19.1681C3.56113 19.2205 3.62939 18.9727 3.71732 18.7729C4.36985 17.2854 5.0189 15.796 5.66912 14.3076C6.54494 12.3005 7.42422 10.2935 8.29195 8.2846C8.38913 8.06081 8.52102 7.95246 8.8496 7.96312C9.4385 7.98266 10.0297 7.96667 10.6186 7.96934C11.1068 7.972 11.226 8.09544 11.0652 8.46045C10.6417 9.4178 10.2079 10.3725 9.77748 11.3281C7.54455 16.2845 5.30698 21.2391 3.08793 26.1991C2.93868 26.5339 2.75241 26.6849 2.27227 26.6547C1.71693 26.62 1.15581 26.6475 0.596993 26.6467C0.0277675 26.6458 0.00115696 26.6262 0 26.1733C0 23.2062 0 20.2391 0 17.272V17.2703Z"
        fill="#3E4C68"
      />
      <path
        d="M22.4278 7.96672C24.1204 7.96672 25.8119 7.96584 27.5045 7.96672C28.0344 7.96672 28.1466 8.08395 27.9754 8.46583C27.5832 9.34326 27.1759 10.2171 26.7964 11.0972C26.6854 11.3557 26.4922 11.4605 26.1486 11.4551C25.6059 11.4462 25.0622 11.4605 24.5184 11.4498C24.0302 11.44 23.8913 11.2784 24.0255 10.9161C24.2268 10.3743 24.132 10.274 23.4135 10.274C22.0159 10.274 20.6194 10.2802 19.2218 10.2695C18.8574 10.2669 18.663 10.3628 18.5404 10.6363C17.1659 13.7073 15.7764 16.7739 14.3938 19.8422C14.196 20.2809 14.3186 20.415 14.9121 20.4168C15.766 20.4203 16.6198 20.4168 17.4737 20.4195C18.1725 20.4221 18.3148 20.5749 18.0903 21.0713C17.3047 22.8137 16.5145 24.5544 15.7382 26.2995C15.6271 26.5473 15.4698 26.6529 15.1053 26.6503C13.1339 26.6361 11.1624 26.6441 9.19096 26.6432C8.66454 26.6432 8.54075 26.5259 8.70156 26.1485C8.91329 25.6512 9.15741 25.1618 9.36797 24.6645C9.47094 24.4203 9.663 24.3315 9.98926 24.335C11.0294 24.3439 12.0695 24.3253 13.1096 24.3421C13.5203 24.3484 13.7378 24.2391 13.8477 23.9327C14.0028 23.4976 14.2018 23.0713 14.3811 22.6406C14.5951 22.129 14.4771 22.0082 13.7575 22.0074C12.9661 22.0065 12.1736 22.0091 11.3822 22.0065C10.7876 22.0047 10.636 21.8395 10.835 21.3999C12.7937 17.0501 14.7583 12.702 16.7077 8.35038C16.8419 8.05109 17.0352 7.95518 17.4447 7.95962C19.105 7.97738 20.7664 7.96761 22.4278 7.96761V7.96672Z"
        fill="#3E4C68"
      />
      <path
        d="M18.4931 26.6439C18.198 26.6439 17.903 26.6457 17.608 26.6439C17.0862 26.6394 16.9404 26.4831 17.1128 26.1048C17.6219 24.9814 18.1356 23.8597 18.6469 22.7372C19.4915 20.8864 20.3361 19.0357 21.183 17.1849C21.2871 16.9575 21.4422 16.716 21.0349 16.5774C20.6126 16.4336 20.2054 16.5836 20.0445 16.9256C19.7299 17.5961 19.4094 18.2666 19.1155 18.9424C18.9894 19.2337 18.7835 19.3696 18.3693 19.3518C17.859 19.3305 17.3454 19.3536 16.834 19.3447C16.3527 19.3358 16.193 19.16 16.3527 18.8065C17.4356 16.414 18.5266 14.0242 19.6061 11.6308C19.7194 11.3795 19.9034 11.2622 20.2528 11.2693C20.7804 11.2791 21.3079 11.2667 21.8355 11.2738C22.3654 11.28 22.5332 11.4594 22.3608 11.8475C22.0206 12.613 21.6666 13.3741 21.3195 14.1379C21.22 14.3563 21.0997 14.5863 21.5 14.7062C21.9269 14.8332 22.3029 14.7169 22.4464 14.4123C22.6778 13.9203 22.9046 13.4265 23.1163 12.9292C23.2285 12.6654 23.4344 12.5437 23.8024 12.5535C24.2987 12.5668 24.795 12.5535 25.2914 12.5571C25.9196 12.5615 26.07 12.7258 25.8664 13.1805C25.0044 15.1023 24.1413 17.0241 23.2771 18.946C22.1953 21.3509 21.1032 23.7532 20.0353 26.1608C19.8779 26.516 19.6697 26.7176 19.1444 26.6492C18.9339 26.6217 18.7106 26.6448 18.4942 26.6448L18.4931 26.6439Z"
        fill="#3E4C68"
      />
      <path
        d="M5.78124 26.6439C5.48621 26.6439 5.19119 26.6466 4.89732 26.6439C4.43338 26.6386 4.31537 26.5169 4.46577 26.1777C5.08244 24.794 5.70488 23.4122 6.32732 22.0303C8.3763 17.4807 10.4311 12.9328 12.4685 8.37955C12.605 8.07405 12.7716 7.93018 13.2193 7.9586C13.7435 7.99235 14.2733 7.9657 14.8009 7.96659C15.3644 7.96837 15.4673 8.07583 15.2845 8.48435C14.6077 9.98965 13.9263 11.4932 13.2483 12.9985C11.2757 17.3794 9.29609 21.7594 7.3443 26.1457C7.16612 26.5453 6.92432 26.715 6.38633 26.6484C6.18965 26.6244 5.98371 26.6448 5.7824 26.6448L5.78124 26.6439Z"
        fill="#3E4C68"
      />
      <path
        d="M48.059 26.6436C47.2989 26.6436 46.5387 26.6471 45.7786 26.6418C45.3748 26.6392 45.2545 26.5157 45.3517 26.2155C45.5345 25.656 45.8041 25.1605 46.4682 24.7964C47.2734 24.355 47.9919 23.8213 48.767 23.3461C49.0644 23.1641 49.1801 22.95 49.0679 22.6934C48.9325 22.3808 48.5542 22.5051 48.2649 22.4856C47.9398 22.4625 47.7582 22.562 47.6876 22.831C47.6078 23.1339 47.2584 23.2165 46.592 23.1339C46.2414 23.0904 45.9626 22.9252 46.0551 22.6543C46.2252 22.1525 46.4763 21.6659 46.7285 21.1836C46.7667 21.109 46.9888 21.0549 47.1265 21.054C48.1816 21.0433 49.2368 21.0504 50.2919 21.0469C50.6645 21.046 50.8322 21.1907 50.8334 21.4634C50.8368 22.0469 50.8554 22.6312 50.8218 23.2138C50.8125 23.3683 50.6795 23.5522 50.5279 23.6632C50.0675 23.9989 49.5549 24.2928 49.0979 24.6312C48.9579 24.7351 48.8411 24.9429 48.8793 25.0752C48.9047 25.1649 49.2113 25.2386 49.4045 25.2626C49.6614 25.2946 49.9309 25.2697 50.1947 25.2706C50.2873 25.2706 50.3845 25.2644 50.4724 25.2813C50.8299 25.3505 50.9352 25.6871 50.8345 26.3283C50.7929 26.5912 50.6055 26.6534 50.2942 26.6489C49.5503 26.6383 48.8052 26.6454 48.0601 26.6454L48.059 26.6436Z"
        fill="#3E4C68"
      />
      <path
        d="M49.0714 20.2682C48.6364 20.2682 48.2025 20.27 47.7675 20.2682C47.4412 20.2664 47.3197 20.1465 47.4054 19.8996C47.5176 19.5737 47.668 19.2851 48.0567 19.0693C48.5577 18.7904 49.0193 18.4672 49.4694 18.1403C49.6036 18.0427 49.6649 17.8713 49.7077 17.7238C49.717 17.6919 49.4833 17.5631 49.4011 17.5817C49.238 17.619 49.0471 17.7025 48.9649 17.8109C48.7231 18.1297 48.3529 17.9716 48.0486 17.9592C47.9746 17.9565 47.8473 17.6697 47.8739 17.5276C47.9167 17.2967 48.0394 17.0675 48.1805 16.858C48.2441 16.7638 48.4293 16.667 48.5635 16.6626C49.1836 16.6421 49.8049 16.6555 50.425 16.6519C50.7258 16.6501 50.8381 16.7718 50.8357 16.9876C50.8323 17.3215 50.8589 17.6563 50.823 17.9876C50.808 18.1235 50.6934 18.2744 50.5662 18.3766C50.3093 18.5817 50.0016 18.7496 49.7378 18.9503C49.6545 19.0133 49.5966 19.1377 49.6151 19.2229C49.6256 19.2735 49.8049 19.3108 49.9148 19.3375C49.9854 19.3544 50.0687 19.341 50.1462 19.3419C50.7906 19.3446 51.0359 19.5977 50.7999 20.0631C50.7524 20.1572 50.5268 20.2442 50.3753 20.2531C49.9437 20.2789 49.5075 20.262 49.0725 20.262V20.2691L49.0714 20.2682Z"
        fill="#3E4C68"
      />
      <path d="M59.6344 0L59.6344 34.9855" stroke="#3E4C68" strokeWidth="4" />
      <path
        d="M77.5967 31.9806C77.5967 31.2804 77.5893 30.5811 77.5984 29.8809C77.6065 29.2164 77.7909 29.0268 78.4112 29.0251C79.4772 29.0216 80.5424 29.0216 81.6084 29.0251C82.2016 29.0277 82.3885 29.1982 82.395 29.8314C82.4098 31.2891 82.4098 32.7469 82.3925 34.2047C82.3852 34.8109 82.1902 34.9918 81.6207 34.9953C80.544 35.0023 79.4674 35.0014 78.3907 34.9953C77.795 34.9918 77.6082 34.7935 77.5992 34.1481C77.5893 33.4253 77.5967 32.7017 77.5967 31.9789V31.9806ZM79.233 32.0111C79.233 32.6399 79.2379 33.2679 79.2306 33.8968C79.2281 34.1177 79.2986 34.216 79.5157 34.2082C79.8443 34.1969 80.1737 34.1995 80.5022 34.2073C80.694 34.2116 80.7849 34.1342 80.7849 33.9237C80.7825 32.6434 80.7825 31.3631 80.7849 30.0827C80.7849 29.8949 80.7136 29.8096 80.5285 29.8148C80.1999 29.8244 79.8697 29.8331 79.5419 29.8122C79.2838 29.7957 79.2256 29.914 79.2297 30.161C79.2412 30.7777 79.2338 31.3953 79.2338 32.0119L79.233 32.0111Z"
        fill="#3E4C68"
      />
      <path
        d="M84.9081 3.18709C85.1809 3.18709 85.4005 3.19927 85.6177 3.18361C85.8037 3.16969 85.8872 3.25406 85.9569 3.42976C86.3969 4.53526 86.8476 5.63642 87.2949 6.73845C87.3154 6.78976 87.3408 6.83934 87.3998 6.97068V3.20362H88.4626V10.1872C88.2159 10.1872 87.9644 10.2089 87.7202 10.1759C87.6325 10.1637 87.5317 10.035 87.4859 9.93406C87.0622 8.99903 86.6493 8.05879 86.233 7.12029C86.1732 6.98547 86.1109 6.85152 86.0151 6.6419V10.1828C85.6988 10.1828 85.3727 10.1985 85.0507 10.1672C84.9958 10.1619 84.9187 9.9558 84.9179 9.84186C84.9081 8.19622 84.9089 6.55057 84.9081 4.90579C84.9081 4.34826 84.9081 3.79072 84.9081 3.18622V3.18709Z"
        fill="#3E4C68"
      />
      <path
        d="M76.7201 10.1878C76.4701 10.1878 76.2358 10.2174 76.0146 10.1748C75.9072 10.1539 75.786 10.0182 75.7327 9.90255C75.2919 8.93795 74.8658 7.96552 74.4356 6.99658C74.3938 6.90264 74.3479 6.81131 74.2652 6.63648C74.2652 7.18184 74.2603 7.63674 74.266 8.09251C74.2742 8.68745 74.2849 9.28239 74.307 9.87646C74.3152 10.0939 74.2619 10.1861 74.0366 10.1939C73.1697 10.2244 73.1713 10.2322 73.1705 9.32153C73.1689 7.3845 73.1656 5.44748 73.1639 3.51045C73.1639 3.41913 73.1738 3.3278 73.182 3.18863C73.463 3.18863 73.7359 3.16776 74.003 3.20081C74.0857 3.21125 74.18 3.35389 74.2226 3.4574C74.6708 4.54637 75.11 5.6397 75.5516 6.73129C75.5729 6.78348 75.5967 6.83567 75.6565 6.97309V3.20516H76.7209V10.187L76.7201 10.1878Z"
        fill="#3E4C68"
      />
      <path
        d="M80.5883 15.2241C81.3896 16.2835 80.939 17.5299 81.1119 18.7241H79.8984C79.8984 18.2431 79.8984 17.7587 79.8984 17.2733C79.8984 17.0637 79.9041 16.8532 79.8967 16.6436C79.8787 16.1408 79.5608 15.7868 79.0937 15.7555C78.8995 15.7425 78.7029 15.7529 78.4685 15.7529V18.7259H77.3099V11.7884C77.4214 11.7728 77.5205 11.7467 77.6188 11.7458C78.1351 11.7414 78.6513 11.7458 79.1675 11.7432C80.0041 11.7406 80.6473 12.1128 80.9922 12.9244C81.3298 13.7185 81.193 14.4708 80.6481 15.1319C80.6268 15.158 80.6104 15.1876 80.5875 15.2232L80.5883 15.2241ZM78.4857 14.5256C78.7824 14.5256 79.0569 14.5457 79.3264 14.5204C79.714 14.4839 79.9942 14.1421 79.9934 13.7472C79.9926 13.341 79.7197 13.0218 79.3191 12.9931C79.0487 12.9731 78.7766 12.9896 78.4857 12.9896V14.5265V14.5256Z"
        fill="#3E4C68"
      />
      <path
        d="M83.1702 30.9789C83.1702 30.4771 83.1579 30.0117 83.1743 29.5473C83.1866 29.2115 83.398 29.0376 83.6971 29.035C84.9278 29.0245 86.1593 29.0254 87.3908 29.0341C87.7112 29.0358 87.9193 29.2298 87.9275 29.5734C87.9464 30.4249 87.9538 31.2764 87.939 32.1271C87.9333 32.468 87.7555 32.595 87.3663 32.5985C86.6411 32.6054 85.9151 32.6002 85.1892 32.6011C85.0695 32.6011 84.9499 32.6011 84.7844 32.6011C84.7844 33.0847 84.7672 33.5466 84.8008 34.0032C84.8065 34.0797 85.0286 34.1928 85.1523 34.1954C85.9438 34.2128 86.7353 34.205 87.5269 34.205C87.6473 34.205 87.7669 34.205 87.9169 34.205V34.9765C87.821 34.9835 87.7161 34.9965 87.6121 34.9965C86.392 34.9982 85.1711 34.9991 83.9511 34.9965C83.3202 34.9956 83.1514 34.8191 83.1432 34.1441C83.1358 33.5605 83.1366 32.9769 83.1432 32.3941C83.1481 31.907 83.2562 31.7913 83.7094 31.7887C84.4566 31.7835 85.2047 31.787 85.952 31.787C86.0692 31.787 86.1872 31.787 86.3306 31.787C86.3306 31.1825 86.342 30.6241 86.3191 30.0683C86.3158 29.9813 86.1634 29.8386 86.0716 29.8308C85.7332 29.8021 85.3907 29.8221 85.0499 29.8169C84.8532 29.8143 84.7713 29.9195 84.7721 30.117C84.7721 30.3953 84.7721 30.6736 84.7721 30.9789H83.171H83.1702Z"
        fill="#3E4C68"
      />
      <path
        d="M75.2296 31.788C75.2296 31.1887 75.2288 30.6529 75.2296 30.118C75.2296 29.9188 75.1493 29.8153 74.9526 29.817C74.6233 29.8214 74.293 29.8222 73.9637 29.8161C73.7506 29.8118 73.6638 29.9292 73.6613 30.1371C73.658 30.4137 73.6605 30.6911 73.6605 30.9869H72.0684C72.0684 30.492 72.0512 30.0066 72.075 29.523C72.0905 29.2108 72.3011 29.0377 72.5863 29.0351C73.8276 29.0255 75.069 29.0238 76.3104 29.0359C76.6299 29.0394 76.8192 29.2473 76.8241 29.5952C76.8356 30.4224 76.8487 31.2504 76.8364 32.0785C76.8307 32.4664 76.6791 32.5934 76.2784 32.5986C75.5426 32.6073 74.806 32.6012 74.0702 32.6012C73.9505 32.6012 73.8309 32.6012 73.6703 32.6012C73.6703 33.0761 73.6498 33.5275 73.6875 33.9729C73.6949 34.0616 73.9251 34.1912 74.0554 34.1947C74.8461 34.2155 75.6376 34.2051 76.4283 34.2051C76.5472 34.2051 76.6668 34.2051 76.8102 34.2051V34.9975H76.4947C75.2861 34.9975 74.0775 34.9992 72.869 34.9975C72.2118 34.9966 72.0537 34.8296 72.0479 34.1303C72.0438 33.5589 72.0447 32.9874 72.0479 32.4159C72.0504 31.8906 72.1471 31.7906 72.6543 31.7888C73.3794 31.7862 74.1046 31.7888 74.8297 31.7888C74.9477 31.7888 75.0657 31.7888 75.228 31.7888L75.2296 31.788Z"
        fill="#3E4C68"
      />
      <path
        d="M78.058 27.2864V20.3646C78.8602 20.3646 79.6451 20.2794 80.4047 20.3889C81.1651 20.4985 81.7485 21.3727 81.7591 22.1981C81.7714 23.2245 81.7722 24.2508 81.7591 25.2772C81.7468 26.2905 80.9717 27.2038 80.0196 27.2777C79.3764 27.3273 78.7258 27.2873 78.058 27.2873V27.2864ZM79.2256 21.5614V26.0043C80.1531 26.1731 80.6431 25.8556 80.5972 24.8397C80.5645 24.1203 80.5907 23.3976 80.5907 22.6756C80.5907 21.7075 80.3899 21.5005 79.4878 21.5379C79.4116 21.5414 79.3362 21.551 79.2256 21.5606V21.5614Z"
        fill="#3E4C68"
      />
      <path
        d="M93.0969 33.9566V34.969H91.4754V33.9479H88.4912C88.4477 33.4695 88.4437 33.0772 88.7026 32.6797C89.4269 31.5681 90.1127 30.4287 90.8026 29.2919C90.9239 29.0927 91.0558 29.0118 91.2812 29.0179C91.8703 29.0344 92.4611 29.024 93.083 29.024V33.105C93.305 33.125 93.496 33.1416 93.7106 33.1607V33.9192C93.5099 33.9313 93.319 33.9427 93.0969 33.9566ZM91.4467 30.2278C90.8469 31.2333 90.2995 32.1509 89.7276 33.1103H91.4467V30.2278Z"
        fill="#3E4C68"
      />
      <path
        d="M85.3407 14.5244C84.9572 14.5244 84.6303 14.5349 84.3058 14.5149C84.2476 14.5114 84.1591 14.3905 84.1493 14.3131C84.1247 14.1295 84.1387 13.9408 84.1362 13.7547C84.1288 13.2745 83.9551 12.9901 83.611 12.8927C83.325 12.8118 83.0153 12.9597 82.8563 13.2528C82.6802 13.579 82.7285 14.0556 82.994 14.3191C83.1357 14.4601 83.3111 14.5679 83.4807 14.6723C83.8035 14.8715 84.1436 15.0402 84.4574 15.2533C85.2579 15.7961 85.5259 16.7006 85.1793 17.6296C84.8622 18.4802 84.0272 18.9795 83.1611 18.8368C82.3057 18.6959 81.6469 17.9175 81.5986 16.9833C81.5879 16.7754 81.5969 16.5676 81.5969 16.3345H82.758C82.758 16.5354 82.7433 16.7293 82.7613 16.9207C82.8006 17.3434 83.1226 17.6435 83.4914 17.6191C83.8552 17.5948 84.1944 17.226 84.1223 16.8346C84.0821 16.6163 83.9084 16.3771 83.7306 16.2466C83.3258 15.9491 82.8653 15.7378 82.4557 15.4464C81.7133 14.9184 81.4863 14.1278 81.6379 13.2389C81.7723 12.4526 82.259 11.9429 82.9883 11.7228C83.9592 11.4297 85.0269 12.0934 85.2424 13.1562C85.3284 13.5807 85.3087 14.0295 85.3407 14.5227V14.5244Z"
        fill="#3E4C68"
      />
      <path
        d="M80.5571 10.1899C80.9594 7.82322 81.3511 5.52437 81.7444 3.20898H83.2283C83.6044 5.51654 83.9805 7.81714 84.3623 10.1577H83.2316C83.2168 10.116 83.2029 10.0838 83.1939 10.0508C83.1382 9.84462 83.1111 9.47583 83.0235 9.4593C82.6629 9.38885 82.2827 9.40798 81.914 9.44017C81.8558 9.44539 81.7764 9.68893 81.7764 9.82201C81.7764 10.1412 81.6338 10.2178 81.3642 10.1951C81.1151 10.1743 80.8636 10.1908 80.5571 10.1908V10.1899ZM82.8973 8.29117C82.7662 7.3431 82.6408 6.43678 82.5154 5.53046C82.4917 5.5322 82.4671 5.53394 82.4433 5.53568C82.3057 6.44896 82.1689 7.36137 82.0287 8.29117H82.8973Z"
        fill="#3E4C68"
      />
      <path
        d="M93.4305 3.18699C93.8124 5.52934 94.1876 7.83081 94.5719 10.1853C94.2016 10.1853 93.8738 10.2036 93.551 10.1714C93.4805 10.1645 93.3748 9.97658 93.3724 9.87047C93.365 9.49733 93.2167 9.34424 92.8668 9.40426C92.7701 9.42078 92.6693 9.40687 92.571 9.40687C92.0736 9.40687 92.0695 9.406 91.9679 9.93657C91.9343 10.1105 91.8729 10.2019 91.6885 10.1932C91.396 10.1792 91.1027 10.1897 90.7667 10.1897C90.8937 9.42774 91.0101 8.7206 91.1305 8.01346C91.3862 6.51307 91.6508 5.01442 91.895 3.51229C91.9343 3.27049 91.9983 3.16872 92.2424 3.18177C92.6243 3.20265 93.0086 3.18699 93.4305 3.18699ZM92.7095 5.43627C92.6947 5.43192 92.6792 5.42757 92.6644 5.42322C92.5227 6.37129 92.3809 7.31937 92.2367 8.28396H93.1028C92.9692 7.3185 92.8398 6.37651 92.7095 5.4354V5.43627Z"
        fill="#3E4C68"
      />
      <path
        d="M85.7194 27.2933C85.3916 27.2933 85.0753 27.3037 84.7599 27.2846C84.6959 27.2811 84.605 27.1767 84.5837 27.1002C84.5345 26.9245 84.5198 26.7383 84.4886 26.5392H83.2702C83.253 26.5618 83.2317 26.5783 83.2284 26.5974C83.147 27.0619 82.878 27.2941 82.4213 27.2941C82.2902 27.2941 82.16 27.2941 81.9674 27.2941C82.0387 26.8488 82.101 26.4322 82.1714 26.0173C82.4721 24.2403 82.7827 22.4642 83.0711 20.6846C83.1219 20.3689 83.2284 20.2471 83.5349 20.2801C83.8176 20.3106 84.1076 20.2688 84.3903 20.2967C84.4854 20.3062 84.6353 20.4211 84.6492 20.508C85.0147 22.6756 85.3654 24.8457 85.7169 27.0158C85.7292 27.0924 85.7185 27.1741 85.7185 27.2915L85.7194 27.2933ZM83.43 25.3919H84.2928C84.1633 24.4369 84.0372 23.5097 83.911 22.5816C83.8921 22.5816 83.8733 22.5807 83.8544 22.5799C83.7151 23.5045 83.5759 24.4282 83.43 25.3919Z"
        fill="#3E4C68"
      />
      <path
        d="M89.681 20.2886C90.679 20.2886 91.6336 20.2886 92.5882 20.2894C92.6406 20.2894 92.6931 20.3025 92.7652 20.3121V21.5385H90.8364V23.0719H92.7734V24.3027C92.2637 24.3027 91.7524 24.3027 91.2403 24.3027C90.9584 24.3027 90.8172 24.4555 90.8167 24.761C90.8167 25.1672 90.8167 25.5734 90.8167 26.0205H92.7701V27.2747H89.681V20.2894V20.2886Z"
        fill="#3E4C68"
      />
      <path
        d="M76.8954 24.8533V26.2232C76.4914 26.1788 76.4382 26.5302 76.3382 26.8068C76.2522 27.046 76.1309 27.1113 75.9179 27.0112C75.8884 26.9973 75.8548 26.9912 75.8236 26.9817C75.2566 26.8181 75.2443 26.8173 75.2943 26.1919C75.3132 25.951 75.2312 25.8344 75.0428 25.7309C74.8551 25.6274 74.697 25.5491 74.5085 25.7309C74.3725 25.8622 74.2086 25.9614 74.0022 26.1162C73.8071 25.8927 73.6072 25.6805 73.4302 25.4482C73.3876 25.3926 73.3983 25.2612 73.4278 25.1829C73.4679 25.0786 73.5408 24.9811 73.6179 24.9002C73.8153 24.6906 73.7817 24.5001 73.6597 24.2488C73.5343 23.9904 73.368 23.9739 73.1492 24.0078C73.0623 24.0218 72.9747 24.0261 72.887 24.0339C72.8436 24.0383 72.7665 24.0583 72.7608 24.0444C72.6494 23.7852 72.5305 23.5269 72.4511 23.2555C72.4265 23.1711 72.492 23.0302 72.5559 22.9528C72.6158 22.8806 72.7256 22.851 72.8182 22.8145C73.0336 22.7301 73.1869 22.6388 73.1811 22.3274C73.1762 22.0169 73.0738 21.8647 72.8116 21.7655C72.6657 21.7107 72.4232 21.5768 72.4306 21.5011C72.4601 21.1941 72.5412 20.8818 72.6682 20.6052C72.7018 20.533 72.9722 20.5583 73.1287 20.58C73.3598 20.6122 73.5744 20.6513 73.6515 20.293C74.0685 20.5487 74.4438 20.7792 74.8183 21.0088C73.9809 22.7658 74.9879 24.6967 76.8979 24.8533H76.8954Z"
        fill="#3E4C68"
      />
      <path
        d="M93.7509 13.6851C93.682 13.7886 93.5952 13.9208 93.5059 14.0512C93.2797 14.3852 93.2871 14.6036 93.5558 14.8958C93.6066 14.9506 93.7074 14.9758 93.7853 14.9767C93.9385 14.9784 94.0958 14.9271 94.2433 14.9497C94.3416 14.9645 94.4293 15.068 94.5162 15.1385C94.5375 15.1559 94.5375 15.2028 94.5457 15.2368C94.7169 15.9161 94.7218 15.9265 94.136 16.2266C93.9434 16.3257 93.9213 16.4658 93.9369 16.6484C93.9532 16.8346 93.9024 17.0242 94.1442 17.139C94.7194 17.4112 94.7128 17.4278 94.5498 18.0905C94.5252 18.1914 94.4949 18.2906 94.4686 18.3845C94.1327 18.5541 93.6788 18.0992 93.4288 18.6672C93.0429 18.4315 92.675 18.2062 92.2793 17.9644C92.6611 17.1077 92.7176 16.2527 92.2637 15.4194C91.8147 14.5949 91.1075 14.2052 90.2128 14.1313V12.7396C90.6053 12.7996 90.6577 12.4569 90.7527 12.1908C90.8429 11.9385 90.9715 11.8802 91.2018 11.9681C91.4066 12.0464 91.6213 12.0959 91.8056 12.1507C91.9843 12.5126 91.5459 12.951 92.0605 13.258C92.5726 13.5642 92.7143 12.9718 93.097 12.9179C93.2904 13.1449 93.5026 13.3945 93.7492 13.6842L93.7509 13.6851Z"
        fill="#3E4C68"
      />
      <path
        d="M71.3555 11.7451C72.3682 11.7451 73.3335 11.7417 74.2987 11.753C74.3618 11.753 74.4265 11.8643 74.4855 11.9287C74.497 11.9408 74.488 11.9739 74.4896 11.9974C74.5328 12.6636 74.2413 12.9968 73.6153 12.9968H72.5395V14.5119H74.4675V15.7427H72.5149V18.7296H71.3563V11.7451H71.3555Z"
        fill="#3E4C68"
      />
      <path
        d="M85.525 20.2887C86.7115 20.2887 87.8529 20.2844 88.9942 20.2983C89.0672 20.2983 89.1942 20.4322 89.1999 20.5114C89.2237 20.8341 89.2097 21.1594 89.2097 21.5308H87.9413V27.2749H86.7827V21.5456H85.5242V20.2887H85.525Z"
        fill="#3E4C68"
      />
      <path
        d="M80.8791 3.21533V4.41477C80.5415 4.41477 80.2162 4.42869 79.8934 4.41042C79.655 4.39651 79.5976 4.49653 79.6001 4.73399C79.6148 6.39094 79.6189 8.04789 79.6246 9.70484C79.6263 10.1884 79.6246 10.1884 79.1535 10.1893C78.9364 10.1893 78.7184 10.1893 78.4644 10.1893V4.42347H77.2034V3.21533H80.8791Z"
        fill="#3E4C68"
      />
      <path
        d="M89.2089 11.7446V12.991H87.9692V18.7212H86.8057V12.9963C86.4345 12.9963 86.1084 12.9884 85.7814 12.9989C85.5881 13.005 85.5135 12.9397 85.5094 12.7205C85.4922 11.7438 85.4856 11.7446 86.4164 11.7446C87.2186 11.7446 88.0208 11.7446 88.8221 11.7446C88.9401 11.7446 89.0589 11.7446 89.2089 11.7446Z"
        fill="#3E4C68"
      />
      <path
        d="M89.3056 3.20595H90.456V10.1869C90.1266 10.1869 89.8005 10.1965 89.476 10.1782C89.4162 10.1747 89.3129 10.0556 89.3129 9.98858C89.3047 7.74017 89.3056 5.49176 89.3056 3.20508V3.20595Z"
        fill="#3E4C68"
      />
      <path
        d="M71.1637 3.20448H72.3158V10.1846C71.9766 10.1846 71.6398 10.1941 71.3047 10.1741C71.2539 10.1715 71.1703 10.0323 71.1695 9.9558C71.1621 7.71783 71.1637 5.48073 71.1637 3.20361V3.20448Z"
        fill="#3E4C68"
      />
      <path
        d="M76.4709 18.7351H75.3434V11.7759H76.4709V18.7351Z"
        fill="#3E4C68"
      />
    </svg>
  );
};

const HeaderSection = () => {
  return (
    <header className="grid w-full grid-cols-4 items-center px-9 pt-6">
      <Link href="/app/home">
        <Image src={back} alt="back to homepage button mx-auto" />
      </Link>
      <LogoVishnuImage className="col-span-2 flex w-[33.84%] min-w-[132.6px] justify-self-center" />
    </header>
  );
};

const AnnouncementSection = () => {
  const { firebaseUser, data } = useContext(UserContext);
  const group = data?.group || null
  const { houseName, registeration_place, line } = useGroupInfo(group);
  return (
    <div className="flex flex-col items-center">
      <div className="mx-11 mt-20 flex h-auto min-h-[393px] w-auto min-w-[302px] flex-col items-center space-y-3 bg-white p-3 font-athiti">
        <div className="relative h-[480px] w-[280px]">
          <Image
            className="max-w-[280px]"
            src={`/announcement/vishnu/${group}.png`}
            alt="Chula Engineering Map"
            fill={true}
          />
        </div>
        <a href={line || "https://line.me/en/"}>
          <Button className="rounded-[10px] bg-cream px-[67px] py-3 font-roboto-condensed text-lg font-medium text-blue-3">
            เข้ากลุ่ม Line
          </Button>
        </a>
      </div>
      <AnnouncementDetail houseName={houseName} registeration_place={registeration_place} group={group}/>
    </div>
  );
};

const AnnouncementDetail: React.FC<AnnouncementDetailProps> = ({ houseName, registeration_place, group }) => {
  const groupName = houseName;
  const meetingPoint = registeration_place;
  const img1 = `/announcement/vishnu/first/${meetingPoint}.svg`;
  const img2 = `/announcement/vishnu/second/${meetingPoint}.png`;
  return (
    <>
      <div className="my-4 text-center font-athiti text-white">
        <h1 className="text-[32px] font-bold leading-[52px]">หน่วย{groupName}</h1>
        <p className="text-base font-medium">{meetingPoint}</p>
      </div>
      <MapCarousel img1={img1} img2={img2}/>
    </>
  );
};
interface AnnouncementDetailProps {
  houseName: string | null;
  registeration_place: string | null;
  group: string | null;
}