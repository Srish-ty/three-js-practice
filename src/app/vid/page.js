"use client";
import Image from "next/image";
import {
  ThreeJSExample,
  ThreeJSExample2,
  JSexm,
  JSexm2,
} from "../components/threejs";
import { ScrollVidAnimation } from "../components/practice";
import { ScrollAni } from "../components/onScroll";

export default function Home() {
  return (
    <div>
      leaf vid on scroll
      <ScrollAni />
    </div>
  );
}
