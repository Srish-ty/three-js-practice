"use client";
import SmoothScrollAnimation from "./script";
import { NavBar } from "../components/NavBar/Nav";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="h-[40vw] flex flex-col justify-center">
        <div>
          <SmoothScrollAnimation />
        </div>
      </div>
    </>
  );
}
