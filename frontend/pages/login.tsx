import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { WebsocketContext } from "../src/contexts/WebsocketContext";
import { AiFillGithub } from "react-icons/ai";
import {
  Activity,
  Brackets,
  Code2,
  FileCode,
  Github,
  GithubIcon,
  Tag,
} from "lucide-react";
import { BsDiscord, BsGithub, BsGoogle } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { MdLock } from "react-icons/md";
import { Button } from "@/components/ui/Button";
import { GridOverlay } from "@/components/global/GridOverlay";
import useScreenType from "@/hooks/useScreenType";

const width = 400;
const height = 500;

const Home: NextPage = () => {
  const myDevice = useScreenType();

  const left =
    typeof window !== "undefined" && window.innerWidth / 2 - width / 2;
  const top =
    typeof window !== "undefined" && window.innerHeight / 2 - height / 2;

  const googleLogin = () => {
    myDevice == "isDesktop"
      ? window.open(
          `${
            process.env.NODE_ENV == "production"
              ? `${process.env.NEXT_PUBLIC_PROD_API}/auth/google`
              : `${process.env.NEXT_PUBLIC_DEV_API}/auth/google`
          }`,
          "",
          `toolbar=no, location=no, directories=no, status=no, menubar=no, 
  scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
  height=${height}, top=${top}, left=${left}`
        )
      : window.location.replace(
          `${
            process.env.NODE_ENV == "production"
              ? `${process.env.NEXT_PUBLIC_PROD_API}/auth/google`
              : `${process.env.NEXT_PUBLIC_DEV_API}/auth/google`
          }`
        );
  };

  const githubLogin = () => {
    myDevice == "isDesktop"
      ? window.open(
          `${
            process.env.NODE_ENV == "production"
              ? `${process.env.NEXT_PUBLIC_PROD_API}/auth/github`
              : `${process.env.NEXT_PUBLIC_DEV_API}/auth/github`
          }`,
          "",
          `toolbar=no, location=no, directories=no, status=no, menubar=no, 
    scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
    height=${height}, top=${top}, left=${left}`
        )
      : window.location.replace(
          `${
            process.env.NODE_ENV == "production"
              ? `${process.env.NEXT_PUBLIC_PROD_API}/auth/github`
              : `${process.env.NEXT_PUBLIC_DEV_API}/auth/github`
          }`
        );
  };

  const { conn } = useContext(WebsocketContext);

  return (
    <>
      <Head>
        <title>Streamcord - Login </title>
        <meta name="description" content="Streamcord login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="w-screen h-screen text-white font-display bg-app_bg_deepest flex items-center justify-center">
        <GridOverlay />
        <div className="w-[450px] h-auto rounded-lg p-6 z-20">
          <div className="text-white flex flex-col items-center space-y-2 ">
            <span className="text-2xl font-bold text-center">
              Welcome to Streamcord 🚀
            </span>
            <span className="text-center text-[12px] opacity-90 w-4/5">
              Create a new account on Streamcord or{" "}
              <span className="text-green-400 cursor-pointer">log in </span> to
              an existing account to proceed
            </span>
          </div>
          <div className="text-white space-y-3 my-4">
            <Button
              onClick={() => {
                githubLogin();
              }}
              className="shadow-app_shadow bg-app_bg_deeper p-3 space-x-2 font-semibold flex items-center justify-center  rounded-md w-full"
            >
              <BsGithub size={17} style={{ marginRight: "1rem" }} />
              Continue with Github
            </Button>
            <Button
              onClick={() => {
                googleLogin();
              }}
              className="shadow-app_shadow bg-white p-3 font-semibold flex items-center justify-center  rounded-md w-full focus:outline-none focus:ring text-black hover:text-white"
            >
              <img src="/google.svg" width={"20px"} className="mr-[1rem]" />
              Continue with Google
            </Button>
          </div>
        </div>

        <footer className="z-10 py-7 px-10 fixed bottom-0 left-0 w-full flex justify-center items-center space-x-10">
          <h1 className="font-logo text-[1rem] leading-[2.3rem] flex items-center relative cursor-pointer">
            <span className="relative">
              Streamcord
              <span className="absolute text-[8px] px-1 text-green-400">
                Beta
              </span>
            </span>
          </h1>
        </footer>
      </div>
    </>
  );
};

export default Home;