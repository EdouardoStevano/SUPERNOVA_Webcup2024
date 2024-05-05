import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Style importation
import "./band.scss";
import { ScrollTrigger } from "gsap/all";

function Band() {
  const animateRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const bannerAnimate = gsap.context(() => {
      gsap.to(".marquee", {
        opacity: 1,
        delay: 3,
      });
      const timeline = gsap.timeline();
      timeline.to(".marquee-wrapper", {
        x: -5000,
        ease: "sine.inOut",
        duration: 1,
      });
      ScrollTrigger.create({
        animation: timeline,
        scrub: 3,
        start: "top center",
      });
    });
  }, animateRef);

  return (
    <div class="marquee" ref={animateRef}>
      <h3>
        <div class="marquee-wrapper">
          <div class="marquee-title">
            / Un avenir <span class="text-stroke-black">Dans </span>
            &amp; l'ombre.
            <span class="text-stroke-black">" secrets </span> /  le silence
            <span class="text-stroke-black">est une</span>
            &amp; stratégie.
            <span class="text-stroke-black"> . "</span>
          </div>
          <div class="marquee-title">
            / Un avenir <span class="text-stroke-black">Dans </span>
            &amp; l'ombre.
            <span class="text-stroke-black">" secrets </span> /  le silence
            <span class="text-stroke-black">est une</span>
            &amp; stratégie.
            <span class="text-stroke-black"> . "</span>
          </div>
          <div class="marquee-title">
            / Un avenir <span class="text-stroke-black">Dans </span>
            &amp; l'ombre.
            <span class="text-stroke-black">" secrets </span> /  le silence
            <span class="text-stroke-black">est une</span>
            &amp; stratégie.
            <span class="text-stroke-black"> . "</span>
          </div>
      
        </div>
      </h3>
    </div>
  );
}

export default Band;
