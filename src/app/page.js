"use client";
import Image from "next/image";
import {
  ThreeJSExample,
  ThreeJSExample2,
  JSexm,
  JSexm2,
} from "./components/threejs";
import { ScrollAnimation } from "./components/practice";

export default function Home() {
  return (
    <div>
      page
      <ThreeJSExample />
      <ThreeJSExample2 />
      <JSexm />
      <JSexm2 />
    </div>
  );
}
