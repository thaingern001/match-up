"use client";

import { DemoProvider } from "@/context/DemoContext";
import { PresentationContainer } from "@/components/layout/PresentationContainer";

export default function Home() {
  return (
    <DemoProvider>
      <PresentationContainer />
    </DemoProvider>
  );
}
