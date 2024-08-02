"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { ModalProvider } from "./ui/AnimatedModal";

export function FastHire() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.9], [0.0, 1.6]);

  return (
    <div
      className="h-[200vh] bg-brown w-full relative pt-12 overflow-clip"
      ref={ref}
      id="#Quick-Hire"
    >
        <ModalProvider>
      <GoogleGeminiEffect
      title="Quick Hire" 
      description="Fullfilling your needs with no hassle, just for a flat fee."
        pathLengths={[
          pathLengthFirst,
        ]}
      />
      </ModalProvider>
    </div>
  );
}
