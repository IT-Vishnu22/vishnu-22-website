"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
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

import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import loginImageLayer from "./images/login_image_layer.png";
import loginImage from "./images/login_image.png";
import dotGraphic from "./images/dot_graphic.svg";

export default function Login() {
  return (
    <>
      <style>
        {`  .login-page {
    --primary: 0 0% 100%;
    --primary-foreground: 224 30% 23%;
      }`}
      </style>
      <section className="flex max-h-full min-h-screen w-full flex-col bg-login-gradient">
        {/* Login Header */}
        <LoginHeader />
        {/* login logo */}
        <LoginLogo />
        <div className="relative mt-9 flex justify-center">
          {/* <InputForm /> */}
          <LoginSection />
        </div>
      </section>
      <Image
        className="absolute bottom-0 z-10 w-full md:max-w-[390px]"
        src={dotGraphic}
        alt="dot graphic"
      />
    </>
  );
}

const LoginSection = () => {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [alreadyLogin, setAlreadyLogin] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handleLogin = async () => {
      const token = searchParams.get("token");

      if (!token) {
        if (localStorage.getItem("studentInformation")) {
          setAlreadyLogin(true);
          setLoading(false);
        } else {
          setAlreadyLogin(false);
          setLoading(false);
        }
      } else {
        try {
          const response = await axios.post("/login/api/auth", {
            token,
          });
          localStorage.setItem(
            "studentInformation",
            JSON.stringify(response.data.data),
          );
          setAlreadyLogin(true);
          setLoading(false);
        } catch (error) {
          // nothing
        }
      }
    };

    handleLogin();
  }, [router, searchParams]);

  const Load = () => {
    return <h2 className="text-4xl font-bold text-white">Loading...</h2>;
  };

  const Login = () => {
    return (
      <>
        <Button
          className="w-[190px] rounded-xl py-7 text-center font-roboto-condensed text-2xl font-medium text-white"
          onClick={() => {
            router.replace("/app/home");
          }}
        >
          Continue
        </Button>
        <Button
          className="login-page w-[190px] rounded-xl py-7 text-center font-roboto-condensed text-2xl font-medium hover:bg-white/90"
          onClick={() => {
            localStorage.removeItem("studentInformation");
            setAlreadyLogin(false);
            router.replace("/app/login");
          }}
        >
          Logout
        </Button>
      </>
    );
  };
  const NotLogin = () => {
    return (
      <Button
        className="login-page rounded-xl px-14 py-7 font-roboto-condensed text-2xl font-medium hover:bg-white/90"
        onClick={() => {
          router.replace(
            "https://accounts.intania.org/?appId=vishnu22nd&callbackUrl=http://localhost:3000/login",
          );
        }}
      >
        Log In
      </Button>
    );
  };

  return (
    <div className="z-20 flex h-40 w-full flex-col items-center justify-center gap-4">
      {loading ? <Load /> : alreadyLogin ? <Login /> : <NotLogin />}
    </div>
  );
};

const LoginHeader = () => {
  return (
    <div className="flex w-full justify-center pt-6">
      <LogoVishnu className="w-[33.84%] min-w-[132.6px]" />
    </div>
  );
};

const LoginLogo = () => {
  return (
    <div className="relative aspect-square w-full">
      <TriangleBackground className="left-0 right-0" />
      <Image
        className="absolute -bottom-2 left-[1.28%] z-10 w-[61.5%]"
        src={loginImage}
        alt="login image"
      />
      <Image
        className="absolute -bottom-[1rem] left-0 w-[60%]"
        src={loginImageLayer}
        alt="login image shadow"
      />
      <h1 className="absolute right-10 top-1/2 flex -translate-y-[50%] flex-col font-roboto-condensed text-[96px] font-bold text-[#2A334E]">
        Log
        <span className="-mt-12">In</span>
      </h1>
    </div>
  );
};

const LogoVishnu = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="133"
      height="50"
      viewBox="0 0 133 50"
      fill="none"
    >
      <path
        d="M45.4549 18.9966C45.4549 21.3158 45.4549 23.6364 45.4549 25.9556C45.4549 26.0726 45.403 26.2107 45.4662 26.3015C45.6024 26.4994 45.7969 26.6736 45.9687 26.8577C46.1811 26.7221 46.5052 26.6188 46.5879 26.4471C47.0953 25.3845 47.5491 24.3058 48.0192 23.232C49.7099 19.3624 51.4038 15.494 53.0831 11.6219C53.2273 11.2884 53.4251 11.1329 53.9146 11.1528C54.717 11.1852 55.5226 11.159 56.3282 11.1628C57.0544 11.1653 57.2052 11.3283 56.9636 11.8732C56.3833 13.1822 55.7949 14.4886 55.2049 15.7964C52.0457 22.8002 48.8816 29.8029 45.7385 36.8105C45.557 37.2148 45.3171 37.3629 44.7643 37.3393C43.9409 37.3044 43.111 37.3007 42.2875 37.3393C41.6294 37.3704 41.4673 37.1551 41.4722 36.6947C41.4916 34.7425 41.4803 32.789 41.4803 30.8368C41.4803 28.2339 41.4803 25.6296 41.4803 23.0267C41.4803 22.8935 41.5322 22.7405 41.4657 22.631C41.3587 22.4518 41.1626 22.1644 41.0215 22.1694C40.7898 22.1781 40.4477 22.351 40.3683 22.5165C39.8042 23.6712 39.2969 24.8408 38.77 26.0054C37.1426 29.6087 35.5087 33.2096 33.8975 36.8167C33.7208 37.2136 33.463 37.3679 32.9103 37.3393C32.1533 37.3007 31.3898 37.3318 30.628 37.3293C29.8986 37.3268 29.7397 37.1676 29.9812 36.6213C30.6215 35.1705 31.2812 33.7235 31.9329 32.2752C34.9997 25.4579 38.0747 18.6419 41.1237 11.8197C41.349 11.3158 41.6505 11.0968 42.3702 11.1478C43.1466 11.2026 43.936 11.1839 44.7157 11.1528C45.3009 11.1292 45.4695 11.3096 45.4662 11.7351C45.45 14.1552 45.4581 16.5752 45.4581 18.9953L45.4549 18.9966Z"
        fill="white"
      />
      <path
        d="M53.5142 37.3295C51.8608 37.3295 50.2075 37.3295 48.5557 37.3295C47.6204 37.3295 47.4842 37.1801 47.7938 36.4946C49.136 33.5183 50.4798 30.5421 51.8203 27.5658C54.1837 22.3226 56.5519 17.0806 58.8942 11.8311C59.1146 11.3359 59.3918 11.0883 60.1261 11.1492C60.8134 11.2077 61.5169 11.1604 62.2123 11.1617C62.9854 11.1629 63.1394 11.3197 62.885 11.8945C62.3273 13.1562 61.7503 14.4141 61.183 15.6733C58.5376 21.5474 55.8921 27.4203 53.2484 33.2956C52.9906 33.868 53.1819 34.082 53.9519 34.0907C54.6699 34.0981 55.388 34.0757 56.1045 34.0994C56.6021 34.1156 56.8615 33.9488 57.0171 33.6029C58.7969 29.6325 60.5832 25.6646 62.3695 21.6967C63.8786 18.3422 65.3974 14.989 66.892 11.6308C67.054 11.2687 67.2858 11.1331 67.7835 11.153C68.5421 11.1841 69.3056 11.1604 70.0674 11.1617C70.9135 11.1617 71.0448 11.3135 70.7579 11.9518C70.1776 13.2433 69.5973 14.5348 69.0154 15.8251C65.8626 22.8153 62.705 29.8055 59.5685 36.8006C59.3902 37.1963 59.1665 37.3506 58.6056 37.3407C56.9101 37.3108 55.213 37.3295 53.5158 37.3295H53.5142Z"
        fill="white"
      />
      <path
        d="M0 24.1965C0 20.0892 0 15.9832 0 11.8759C0 11.1841 0.0275566 11.1642 0.904494 11.163C1.73118 11.163 2.55787 11.1729 3.38456 11.1593C3.80925 11.1518 3.97945 11.3023 3.98431 11.6059C3.98755 11.7565 3.98755 11.9058 3.98755 12.0564C3.98755 16.6476 3.98755 21.2389 3.98755 25.8289C3.98755 25.9459 3.98755 26.0629 3.98755 26.1798C3.98755 26.4697 3.97134 26.7883 4.45439 26.8554C4.9893 26.9289 5.08494 26.5817 5.20813 26.3018C6.12235 24.2176 7.03171 22.131 7.94269 20.0457C9.16975 17.2337 10.4017 14.4217 11.6174 11.6072C11.7536 11.2936 11.9383 11.1418 12.3987 11.1568C13.2238 11.1841 14.0521 11.1617 14.8771 11.1655C15.5612 11.1692 15.7281 11.3422 15.5028 11.8535C14.9096 13.1948 14.3017 14.5324 13.6987 15.8712C10.5703 22.8154 7.43533 29.757 4.32633 36.7062C4.11723 37.1752 3.85625 37.3868 3.18356 37.3445C2.4055 37.2959 1.61934 37.3345 0.836414 37.3333C0.0389035 37.332 0.00162096 37.3046 0 36.6701C0 32.513 0 28.356 0 24.199V24.1965Z"
        fill="white"
      />
      <path
        d="M31.4223 11.1615C33.7938 11.1615 36.1636 11.1603 38.5351 11.1615C39.2775 11.1615 39.4347 11.3258 39.1948 11.8608C38.6453 13.0901 38.0747 14.3145 37.543 15.5475C37.3874 15.9096 37.1167 16.0564 36.6353 16.0489C35.8751 16.0365 35.1132 16.0564 34.3514 16.0415C33.6673 16.0278 33.4728 15.8013 33.6609 15.2937C33.9429 14.5347 33.81 14.3941 32.8034 14.3941C30.8453 14.3941 28.8888 14.4028 26.9306 14.3879C26.42 14.3841 26.1477 14.5185 25.9759 14.9017C24.0502 19.2043 22.1034 23.5007 20.1664 27.7996C19.8892 28.4143 20.061 28.6022 20.8926 28.6046C22.0888 28.6096 23.2851 28.6046 24.4814 28.6084C25.4604 28.6121 25.6598 28.8261 25.3453 29.5217C24.2447 31.9629 23.1376 34.4016 22.0499 36.8465C21.8943 37.1937 21.6739 37.3418 21.1633 37.338C18.4012 37.3181 15.6391 37.3293 12.877 37.3281C12.1394 37.3281 11.966 37.1638 12.1913 36.635C12.4879 35.9382 12.8299 35.2527 13.125 34.5559C13.2692 34.2137 13.5383 34.0893 13.9954 34.0943C15.4527 34.1067 16.9099 34.0806 18.3671 34.1042C18.9426 34.1129 19.2473 33.9599 19.4013 33.5306C19.6185 32.9209 19.8973 32.3237 20.1486 31.7202C20.4484 31.0036 20.2831 30.8343 19.2749 30.8331C18.1661 30.8318 17.0558 30.8356 15.947 30.8318C15.1139 30.8294 14.9015 30.5979 15.1803 29.982C17.9246 23.8877 20.677 17.7959 23.4083 11.699C23.5963 11.2797 23.867 11.1454 24.4409 11.1516C26.7669 11.1765 29.0946 11.1628 31.4223 11.1628V11.1615Z"
        fill="white"
      />
      <path
        d="M25.9096 37.3294C25.4962 37.3294 25.0829 37.3319 24.6695 37.3294C23.9385 37.3232 23.7342 37.1042 23.9758 36.5742C24.689 35.0002 25.4087 33.4287 26.1252 31.856C27.3085 29.263 28.4918 26.6699 29.6783 24.0769C29.8242 23.7584 30.0414 23.42 29.4708 23.2259C28.8792 23.0243 28.3086 23.2346 28.0833 23.7136C27.6424 24.653 27.1934 25.5924 26.7816 26.5393C26.605 26.9474 26.3164 27.1378 25.7361 27.1129C25.0213 27.083 24.3016 27.1154 23.5851 27.1029C22.9108 27.0905 22.6871 26.8441 22.9108 26.3489C24.428 22.9969 25.9566 19.6487 27.4689 16.2954C27.6278 15.9433 27.8855 15.779 28.375 15.789C29.1142 15.8027 29.8534 15.7853 30.5925 15.7952C31.3349 15.8039 31.5699 16.0553 31.3284 16.599C30.8519 17.6715 30.3558 18.7379 29.8696 19.8079C29.7302 20.114 29.5616 20.4363 30.1224 20.6042C30.7206 20.7822 31.2474 20.6192 31.4484 20.1924C31.7726 19.5031 32.0903 18.8113 32.3869 18.1145C32.5441 17.745 32.8327 17.5745 33.3481 17.5882C34.0435 17.6068 34.7389 17.5882 35.4343 17.5932C36.3145 17.5994 36.5252 17.8296 36.2399 18.4666C35.0323 21.1592 33.8231 23.8517 32.6122 26.5443C31.0966 29.9137 29.5664 33.2794 28.0703 36.6525C27.8498 37.1502 27.5581 37.4327 26.8222 37.3369C26.5271 37.2983 26.2143 37.3307 25.9112 37.3307L25.9096 37.3294Z"
        fill="white"
      />
      <path
        d="M8.0998 37.3294C7.68646 37.3294 7.27311 37.3331 6.86139 37.3294C6.21139 37.3219 6.04605 37.1515 6.25678 36.6762C7.12075 34.7376 7.99282 32.8016 8.86489 30.8655C11.7356 24.4913 14.6144 18.1195 17.4689 11.7402C17.6602 11.3122 17.8936 11.1106 18.5209 11.1504C19.2552 11.1977 19.9976 11.1604 20.7368 11.1616C21.5262 11.1641 21.6704 11.3147 21.4143 11.887C20.4661 13.996 19.5113 16.1025 18.5615 18.2115C15.7977 24.3494 13.0243 30.4861 10.2897 36.6314C10.0401 37.1913 9.70131 37.429 8.94756 37.3356C8.672 37.302 8.38347 37.3307 8.10142 37.3307L8.0998 37.3294Z"
        fill="white"
      />
      <path
        d="M67.3328 37.329C66.2678 37.329 65.2029 37.334 64.1379 37.3266C63.5722 37.3228 63.4036 37.1499 63.5398 36.7293C63.7959 35.9454 64.1736 35.2512 65.104 34.741C66.2322 34.1226 67.2388 33.3748 68.3248 32.7092C68.7414 32.4541 68.9035 32.1542 68.7463 31.7946C68.5566 31.3567 68.0266 31.5309 67.6213 31.5035C67.1658 31.4711 66.9114 31.6105 66.8125 31.9875C66.7006 32.4118 66.2111 32.5275 65.2774 32.4118C64.7863 32.3508 64.3956 32.1194 64.5253 31.7399C64.7636 31.0369 65.1153 30.355 65.4687 29.6794C65.5222 29.5749 65.8334 29.499 66.0263 29.4978C67.5046 29.4828 68.9829 29.4928 70.4612 29.4878C70.9832 29.4866 71.2182 29.6894 71.2199 30.0714C71.2247 30.8888 71.2506 31.7075 71.2036 32.5238C71.1907 32.7403 71.0043 32.9978 70.7919 33.1534C70.1468 33.6237 69.4287 34.0355 68.7884 34.5096C68.5923 34.6552 68.4286 34.9463 68.4821 35.1317C68.5177 35.2574 68.9473 35.3606 69.218 35.3942C69.5778 35.439 69.9555 35.4042 70.3251 35.4054C70.4548 35.4054 70.5909 35.3967 70.7141 35.4204C71.215 35.5174 71.3625 35.989 71.2215 36.8873C71.1631 37.2556 70.9005 37.3427 70.4645 37.3365C69.4222 37.3216 68.3783 37.3315 67.3344 37.3315L67.3328 37.329Z"
        fill="white"
      />
      <path
        d="M68.7512 28.3966C68.1417 28.3966 67.5339 28.3991 66.9244 28.3966C66.4673 28.3942 66.2971 28.2262 66.417 27.8803C66.5743 27.4236 66.785 27.0193 67.3296 26.7169C68.0315 26.3262 68.6783 25.8733 69.3088 25.4154C69.4969 25.2786 69.5828 25.0384 69.6427 24.8319C69.6557 24.7871 69.3283 24.6067 69.2132 24.6328C68.9846 24.685 68.7172 24.802 68.6021 24.9538C68.2633 25.4005 67.7446 25.179 67.3183 25.1616C67.2146 25.1579 67.0362 24.756 67.0735 24.5569C67.1335 24.2334 67.3053 23.9124 67.5031 23.6187C67.5922 23.4868 67.8516 23.3512 68.0396 23.345C68.9085 23.3164 69.7789 23.335 70.6477 23.3301C71.0692 23.3276 71.2264 23.498 71.2232 23.8004C71.2183 24.2682 71.2556 24.7373 71.2053 25.2014C71.1843 25.3918 71.0238 25.6033 70.8455 25.7464C70.4856 26.0338 70.0545 26.269 69.6849 26.5502C69.5682 26.6385 69.4871 26.8127 69.5131 26.9322C69.5277 27.0031 69.7789 27.0553 69.9329 27.0927C70.0318 27.1163 70.1485 27.0976 70.2571 27.0989C71.16 27.1026 71.5036 27.4572 71.1729 28.1092C71.1065 28.2411 70.7904 28.363 70.578 28.3755C69.9734 28.4116 69.3623 28.3879 68.7528 28.3879V28.3979L68.7512 28.3966Z"
        fill="white"
      />
      <path d="M83.5504 0L83.5504 49.0162" stroke="white" strokeWidth="4" />
      <path
        d="M108.717 44.8061C108.717 43.8252 108.706 42.8454 108.719 41.8644C108.73 40.9334 108.989 40.6677 109.858 40.6653C111.351 40.6604 112.844 40.6604 114.337 40.6653C115.168 40.6689 115.43 40.9078 115.439 41.7949C115.46 43.8373 115.46 45.8797 115.436 47.9221C115.425 48.7715 115.152 49.025 114.354 49.0299C112.846 49.0396 111.337 49.0384 109.829 49.0299C108.994 49.025 108.733 48.7471 108.72 47.8429C108.706 46.8303 108.717 45.8164 108.717 44.8037V44.8061ZM111.009 44.8488C111.009 45.7298 111.016 46.6097 111.006 47.4908C111.002 47.8003 111.101 47.938 111.405 47.927C111.865 47.9112 112.327 47.9148 112.787 47.9258C113.056 47.9319 113.183 47.8234 113.183 47.5285C113.18 45.7347 113.18 43.9409 113.183 42.1471C113.183 41.8839 113.083 41.7645 112.824 41.7718C112.364 41.7852 111.901 41.7974 111.442 41.7681C111.08 41.745 110.999 41.9107 111.004 42.2568C111.021 43.1208 111.01 43.986 111.01 44.85L111.009 44.8488Z"
        fill="white"
      />
      <path
        d="M118.96 4.46496C119.342 4.46496 119.65 4.48202 119.954 4.46008C120.215 4.44058 120.332 4.55879 120.43 4.80495C121.046 6.35381 121.677 7.89658 122.304 9.44057C122.333 9.51247 122.368 9.58193 122.451 9.76594V4.48811H123.94V14.2724C123.595 14.2724 123.242 14.3028 122.9 14.2565C122.777 14.2395 122.636 14.0591 122.572 13.9178C121.978 12.6078 121.4 11.2904 120.816 9.97554C120.733 9.78666 120.645 9.59899 120.511 9.3053V14.2663C120.068 14.2663 119.611 14.2882 119.16 14.2444C119.083 14.237 118.975 13.9482 118.974 13.7886C118.96 11.483 118.961 9.17735 118.96 6.87294C118.96 6.09181 118.96 5.31068 118.96 4.46374V4.46496Z"
        fill="white"
      />
      <path
        d="M107.488 14.2738C107.138 14.2738 106.81 14.3152 106.5 14.2555C106.349 14.2263 106.18 14.0362 106.105 13.8741C105.487 12.5227 104.89 11.1602 104.288 9.80271C104.229 9.6711 104.165 9.54315 104.049 9.2982C104.049 10.0623 104.042 10.6996 104.05 11.3382C104.062 12.1717 104.076 13.0052 104.107 13.8376C104.119 14.1422 104.044 14.2714 103.729 14.2823C102.514 14.325 102.516 14.336 102.515 13.0601C102.513 10.3462 102.508 7.63236 102.506 4.9185C102.506 4.79054 102.52 4.66258 102.531 4.46761C102.925 4.46761 103.307 4.43836 103.682 4.48467C103.797 4.49929 103.929 4.69914 103.989 4.84416C104.617 6.36987 105.232 7.90167 105.851 9.43103C105.881 9.50415 105.914 9.57727 105.998 9.76981V4.49076H107.489V14.2726L107.488 14.2738Z"
        fill="white"
      />
      <path
        d="M112.908 21.3296C114.03 22.8138 113.399 24.5601 113.641 26.2333H111.941C111.941 25.5594 111.941 24.8806 111.941 24.2006C111.941 23.9069 111.949 23.612 111.939 23.3183C111.914 22.614 111.468 22.118 110.814 22.0741C110.542 22.0559 110.266 22.0705 109.938 22.0705V26.2357H108.315V16.516C108.471 16.4941 108.61 16.4575 108.747 16.4563C109.471 16.4502 110.194 16.4563 110.917 16.4527C112.089 16.449 112.99 16.9706 113.474 18.1075C113.947 19.2201 113.755 20.2742 112.992 21.2004C112.962 21.2369 112.939 21.2784 112.907 21.3283L112.908 21.3296ZM109.962 20.351C110.378 20.351 110.762 20.379 111.14 20.3437C111.683 20.2925 112.075 19.8136 112.074 19.2604C112.073 18.6913 111.691 18.244 111.13 18.2038C110.751 18.1758 110.37 18.1989 109.962 18.1989V20.3522V20.351Z"
        fill="white"
      />
      <path
        d="M116.525 43.4032C116.525 42.7001 116.508 42.0481 116.531 41.3974C116.548 40.927 116.844 40.6833 117.263 40.6796C118.988 40.665 120.713 40.6662 122.438 40.6784C122.887 40.6808 123.179 40.9526 123.19 41.4339C123.217 42.627 123.227 43.82 123.206 45.0118C123.198 45.4895 122.949 45.6674 122.404 45.6723C121.388 45.682 120.371 45.6747 119.354 45.6759C119.186 45.6759 119.019 45.6759 118.787 45.6759C118.787 46.3535 118.763 47.0006 118.81 47.6404C118.818 47.7476 119.129 47.906 119.302 47.9097C120.411 47.934 121.52 47.9231 122.629 47.9231C122.798 47.9231 122.965 47.9231 123.175 47.9231V49.004C123.041 49.0137 122.894 49.032 122.748 49.032C121.039 49.0344 119.329 49.0357 117.619 49.032C116.735 49.0308 116.499 48.7834 116.487 47.8378C116.477 47.0201 116.478 46.2024 116.487 45.3859C116.494 44.7035 116.646 44.5414 117.281 44.5378C118.328 44.5304 119.376 44.5353 120.423 44.5353C120.587 44.5353 120.752 44.5353 120.953 44.5353C120.953 43.6884 120.969 42.906 120.937 42.1273C120.932 42.0055 120.719 41.8056 120.59 41.7946C120.116 41.7544 119.636 41.7825 119.159 41.7751C118.883 41.7715 118.768 41.9189 118.77 42.1956C118.77 42.5855 118.77 42.9755 118.77 43.4032H116.526H116.525Z"
        fill="white"
      />
      <path
        d="M105.4 44.5367C105.4 43.6971 105.399 42.9464 105.4 42.1969C105.4 41.9179 105.288 41.7729 105.012 41.7753C104.55 41.7814 104.088 41.7826 103.626 41.7741C103.328 41.768 103.206 41.9325 103.203 42.2238C103.198 42.6113 103.202 43 103.202 43.4143H100.971C100.971 42.7209 100.947 42.041 100.98 41.3634C101.002 40.9259 101.297 40.6834 101.697 40.6798C103.436 40.6664 105.175 40.6639 106.914 40.681C107.362 40.6859 107.627 40.9771 107.634 41.4646C107.65 42.6235 107.668 43.7836 107.651 44.9437C107.643 45.4872 107.431 45.6651 106.869 45.6724C105.839 45.6846 104.806 45.6761 103.776 45.6761C103.608 45.6761 103.44 45.6761 103.215 45.6761C103.215 46.3415 103.187 46.9739 103.239 47.5979C103.25 47.7222 103.572 47.9037 103.755 47.9086C104.863 47.9378 105.972 47.9232 107.08 47.9232C107.246 47.9232 107.414 47.9232 107.614 47.9232V49.0334H107.173C105.479 49.0334 103.786 49.0358 102.093 49.0334C101.172 49.0322 100.95 48.7982 100.942 47.8184C100.937 47.0178 100.938 46.2172 100.942 45.4165C100.946 44.6805 101.081 44.5403 101.792 44.5379C102.808 44.5343 103.824 44.5379 104.84 44.5379C105.005 44.5379 105.17 44.5379 105.398 44.5379L105.4 44.5367Z"
        fill="white"
      />
      <path
        d="M109.363 38.2293V28.5316C110.487 28.5316 111.587 28.4121 112.651 28.5657C113.716 28.7192 114.533 29.9439 114.548 31.1004C114.566 32.5384 114.567 33.9763 114.548 35.4143C114.531 36.834 113.445 38.1135 112.111 38.2171C111.21 38.2866 110.298 38.2305 109.363 38.2305V38.2293ZM110.999 30.2084V36.4331C112.298 36.6695 112.985 36.2247 112.92 34.8013C112.875 33.7935 112.911 32.7809 112.911 31.7694C112.911 30.4131 112.63 30.1231 111.366 30.1755C111.259 30.1803 111.154 30.1937 110.999 30.2071V30.2084Z"
        fill="white"
      />
      <path
        d="M130.433 47.575V48.9935H128.161V47.5628H123.98C123.919 46.8926 123.914 46.343 124.276 45.7861C125.291 44.2287 126.252 42.6323 127.219 41.0396C127.389 40.7605 127.573 40.6472 127.889 40.6557C128.715 40.6789 129.542 40.6643 130.414 40.6643V46.382C130.725 46.41 130.992 46.4332 131.293 46.46V47.5226C131.012 47.5397 130.744 47.5555 130.433 47.575ZM128.121 42.3508C127.281 43.7595 126.514 45.0452 125.713 46.3893H128.121V42.3508Z"
        fill="white"
      />
      <path
        d="M119.566 20.3492C119.029 20.3492 118.571 20.3638 118.116 20.3358C118.035 20.3309 117.911 20.1615 117.897 20.0531C117.863 19.796 117.882 19.5315 117.879 19.2707C117.868 18.598 117.625 18.1996 117.143 18.0631C116.742 17.9497 116.308 18.1569 116.085 18.5676C115.839 19.0246 115.906 19.6924 116.278 20.0616C116.477 20.259 116.723 20.4101 116.96 20.5564C117.413 20.8354 117.889 21.0718 118.329 21.3704C119.45 22.1308 119.826 23.3982 119.34 24.6997C118.896 25.8915 117.726 26.591 116.513 26.3911C115.314 26.1937 114.391 25.103 114.323 23.7942C114.308 23.503 114.321 23.2117 114.321 22.8851H115.948C115.948 23.1666 115.927 23.4384 115.952 23.7065C116.007 24.2987 116.459 24.7192 116.975 24.685C117.485 24.6509 117.96 24.1342 117.859 23.5858C117.803 23.28 117.56 22.9449 117.31 22.7621C116.743 22.3453 116.098 22.0492 115.524 21.6409C114.484 20.9012 114.166 19.7935 114.378 18.5481C114.567 17.4465 115.249 16.7323 116.27 16.424C117.631 16.0134 119.127 16.9432 119.428 18.4323C119.549 19.027 119.521 19.6558 119.566 20.3468V20.3492Z"
        fill="white"
      />
      <path
        d="M112.864 14.2762C113.428 10.9604 113.977 7.73956 114.528 4.49561H116.607C117.134 7.7286 117.66 10.9518 118.195 14.2311H116.611C116.591 14.1726 116.571 14.1276 116.558 14.0812C116.48 13.7924 116.442 13.2757 116.32 13.2526C115.814 13.1539 115.282 13.1807 114.765 13.2258C114.684 13.2331 114.572 13.5743 114.572 13.7607C114.572 14.208 114.373 14.3152 113.995 14.2835C113.646 14.2543 113.293 14.2774 112.864 14.2774V14.2762ZM116.143 11.616C115.959 10.2877 115.783 9.01789 115.608 7.74809C115.575 7.75053 115.54 7.75297 115.507 7.75541C115.314 9.03495 115.122 10.3133 114.926 11.616H116.143Z"
        fill="white"
      />
      <path
        d="M130.9 4.46492C131.435 7.74665 131.961 10.9711 132.499 14.2699C131.981 14.2699 131.521 14.2955 131.069 14.2504C130.97 14.2407 130.822 13.9774 130.819 13.8288C130.808 13.306 130.601 13.0915 130.111 13.1756C129.975 13.1987 129.834 13.1792 129.696 13.1792C128.999 13.1792 128.994 13.178 128.851 13.9214C128.804 14.1651 128.718 14.2931 128.46 14.2809C128.05 14.2614 127.639 14.276 127.168 14.276C127.346 13.2085 127.509 12.2178 127.678 11.227C128.036 9.12491 128.407 7.02523 128.749 4.92068C128.804 4.5819 128.894 4.43933 129.236 4.45761C129.771 4.48685 130.309 4.46492 130.9 4.46492ZM129.89 7.61626C129.869 7.61017 129.848 7.60407 129.827 7.59798C129.628 8.92627 129.43 10.2546 129.228 11.606H130.441C130.254 10.2533 130.073 8.93358 129.89 7.61504V7.61626Z"
        fill="white"
      />
      <path
        d="M120.097 38.2388C119.637 38.2388 119.194 38.2534 118.752 38.2266C118.663 38.2218 118.535 38.0755 118.505 37.9683C118.437 37.7221 118.416 37.4613 118.372 37.1823H116.665C116.641 37.214 116.611 37.2371 116.607 37.2639C116.493 37.9147 116.116 38.24 115.476 38.24C115.292 38.24 115.11 38.24 114.84 38.24C114.94 37.6161 115.027 37.0324 115.126 36.4511C115.547 33.9615 115.982 31.4731 116.386 28.9798C116.457 28.5374 116.607 28.3668 117.036 28.4131C117.432 28.4558 117.839 28.3973 118.235 28.4363C118.368 28.4497 118.578 28.6105 118.597 28.7324C119.109 31.7692 119.601 34.8096 120.093 37.8501C120.11 37.9573 120.095 38.0719 120.095 38.2364L120.097 38.2388ZM116.889 35.5749H118.098C117.917 34.2369 117.74 32.9378 117.563 31.6376C117.537 31.6376 117.51 31.6364 117.484 31.6351C117.289 32.9305 117.093 34.2247 116.889 35.5749Z"
        fill="white"
      />
      <path
        d="M125.647 28.4253C127.045 28.4253 128.383 28.4253 129.72 28.4265C129.794 28.4265 129.867 28.4448 129.968 28.4582V30.1764H127.266V32.3249H129.98V34.0492C129.266 34.0492 128.549 34.0492 127.832 34.0492C127.437 34.0492 127.239 34.2633 127.238 34.6914C127.238 35.2605 127.238 35.8296 127.238 36.456H129.975V38.2132H125.647V28.4265V28.4253Z"
        fill="white"
      />
      <path
        d="M107.734 34.8204V36.7397C107.168 36.6775 107.093 37.1698 106.953 37.5574C106.833 37.8925 106.663 37.9839 106.364 37.8437C106.323 37.8242 106.276 37.8157 106.232 37.8023C105.438 37.5732 105.421 37.572 105.491 36.6958C105.517 36.3582 105.402 36.195 105.138 36.0499C104.875 35.9049 104.654 35.7952 104.39 36.0499C104.199 36.2339 103.97 36.3729 103.68 36.5898C103.407 36.2766 103.127 35.9793 102.879 35.6539C102.819 35.5759 102.834 35.3919 102.876 35.2822C102.932 35.136 103.034 34.9995 103.142 34.8862C103.419 34.5925 103.372 34.3256 103.2 33.9734C103.025 33.6115 102.792 33.5883 102.485 33.6359C102.364 33.6554 102.241 33.6614 102.118 33.6724C102.057 33.6785 101.949 33.7065 101.941 33.687C101.785 33.3239 101.619 32.962 101.507 32.5818C101.473 32.4636 101.565 32.2661 101.654 32.1577C101.738 32.0565 101.892 32.0151 102.022 31.9639C102.323 31.8457 102.538 31.7178 102.53 31.2815C102.523 30.8464 102.38 30.6332 102.012 30.4943C101.808 30.4175 101.468 30.2298 101.479 30.1238C101.52 29.6936 101.633 29.2562 101.811 28.8686C101.858 28.7675 102.237 28.8028 102.457 28.8333C102.78 28.8784 103.081 28.9332 103.189 28.4312C103.773 28.7894 104.299 29.1124 104.824 29.4341C103.651 31.8957 105.061 34.601 107.737 34.8204H107.734Z"
        fill="white"
      />
      <path
        d="M131.349 19.1737C131.253 19.3187 131.131 19.5039 131.006 19.6867C130.689 20.1547 130.699 20.4606 131.076 20.87C131.147 20.9468 131.288 20.9821 131.397 20.9834C131.612 20.9858 131.832 20.9139 132.039 20.9456C132.177 20.9663 132.3 21.1113 132.421 21.21C132.451 21.2344 132.451 21.3002 132.463 21.3477C132.703 22.2995 132.709 22.3141 131.889 22.7345C131.619 22.8734 131.588 23.0696 131.61 23.3255C131.633 23.5863 131.561 23.852 131.9 24.0128C132.706 24.3943 132.697 24.4174 132.468 25.346C132.434 25.4874 132.391 25.6263 132.355 25.7579C131.884 25.9955 131.248 25.3582 130.898 26.1539C130.357 25.8237 129.842 25.5081 129.287 25.1693C129.822 23.969 129.901 22.7711 129.266 21.6036C128.636 20.4484 127.646 19.9024 126.392 19.7989V17.8491C126.942 17.9332 127.015 17.453 127.149 17.0801C127.275 16.7267 127.455 16.6451 127.778 16.7682C128.065 16.8778 128.365 16.9473 128.624 17.0241C128.874 17.531 128.26 18.1452 128.981 18.5754C129.698 19.0043 129.897 18.1744 130.433 18.0989C130.704 18.4169 131.001 18.7667 131.347 19.1725L131.349 19.1737Z"
        fill="white"
      />
      <path
        d="M99.9722 16.4558C101.391 16.4558 102.743 16.4509 104.096 16.4668C104.184 16.4668 104.275 16.6227 104.357 16.7129C104.374 16.73 104.361 16.7763 104.363 16.8092C104.424 17.7426 104.015 18.2094 103.138 18.2094H101.631V20.3322H104.332V22.0566H101.597V26.2413H99.9733V16.4558H99.9722Z"
        fill="white"
      />
      <path
        d="M119.824 28.4257C121.487 28.4257 123.086 28.4196 124.685 28.4391C124.787 28.4391 124.965 28.6268 124.973 28.7377C125.006 29.1898 124.987 29.6455 124.987 30.1659H123.21V38.2136H121.586V30.1866H119.823V28.4257H119.824Z"
        fill="white"
      />
      <path
        d="M113.315 4.50488V6.18536C112.842 6.18536 112.387 6.20485 111.934 6.17926C111.6 6.15976 111.52 6.2999 111.523 6.63259C111.544 8.95405 111.55 11.2755 111.558 13.597C111.56 14.2745 111.558 14.2745 110.898 14.2758C110.593 14.2758 110.288 14.2758 109.932 14.2758V6.19754H108.165V4.50488H113.315Z"
        fill="white"
      />
      <path
        d="M124.986 16.4551V18.2014H123.249V26.2296H121.619V18.2087C121.099 18.2087 120.642 18.1977 120.184 18.2123C119.913 18.2209 119.808 18.1295 119.803 17.8224C119.778 16.4539 119.769 16.4551 121.073 16.4551C122.197 16.4551 123.321 16.4551 124.444 16.4551C124.609 16.4551 124.776 16.4551 124.986 16.4551Z"
        fill="white"
      />
      <path
        d="M125.121 4.49194H126.733V14.2726C126.271 14.2726 125.815 14.286 125.36 14.2604C125.276 14.2555 125.132 14.0885 125.132 13.9947C125.12 10.8446 125.121 7.69447 125.121 4.49072V4.49194Z"
        fill="white"
      />
      <path
        d="M99.7036 4.4895H101.318V14.2689C100.842 14.2689 100.371 14.2823 99.9011 14.2543C99.8299 14.2506 99.7128 14.0556 99.7117 13.9484C99.7014 10.8129 99.7036 7.67862 99.7036 4.48828V4.4895Z"
        fill="white"
      />
      <path d="M107.139 26.2487H105.56V16.4985H107.139V26.2487Z" fill="white" />
    </svg>
  );
};

const TriangleBackground = ({ className = "" }) => {
  return (
    <svg
      className={className + " aspect-square w-full"}
      viewBox="0 0 390 395"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M-23 143L460.5 0L416 395L-23 272V143Z" fill="white" />
      <path
        d="M-23 143L460.5 0L416 395L-23 272V143Z"
        fill="url(#paint0_linear_2383_1793)"
        fill-opacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2383_1793"
          x1="-23"
          y1="198"
          x2="383"
          y2="198"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.21" stop-color="#00557C" />
          <stop offset="0.9" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const InputForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="z-30 w-2/3 space-y-6 pb-16"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <div className="space-y-0.5">
                <FormLabel className="font-roboto-condensed text-xl font-medium text-white">
                  Username
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} />
                </FormControl>
              </div>
              <div className="space-y-0.5">
                <FormLabel className="font-roboto-condensed text-xl font-medium text-white">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <div className="flex w-full justify-center">
          {/* <a
            href={
              "https://accounts.intania.org/?appId=vishnu22nd&callbackUrl=http://localhost:3000/login"
            }
            className="font-bold text-white"
          >
            test Login
          </a> */}
          <Button
            className="login-page rounded-xl px-9 py-3 font-roboto-condensed text-xl font-medium hover:bg-white/90"
            type="submit"
          >
            Log In
          </Button>
        </div>
      </form>
    </Form>
  );
};
