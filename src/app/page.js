"use client";
import Image from "next/image";
import {
  ThreeJSExample,
  ThreeJSExample2,
  JSexm,
  JSexm2,
} from "./components/threejs";
import { ScrollAnimation } from "./components/practice";
import { NavBar } from "./components/NavBar/Nav";

export default function Home() {
  return (
    <div>
      <NavBar />
      page
      <ThreeJSExample />
      <ThreeJSExample2 />
      <JSexm />
      <JSexm2 />
    </div>
  );
}
