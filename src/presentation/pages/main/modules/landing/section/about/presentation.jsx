import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Tilt } from "react-tilt";

// Style importation
import "./presentation.scss";

// Assets importation
import Mogule1 from "presentation/assets/image/illustration/mogule5-1.png";

function Presentation() {
  const animateRef = useRef();

  const tiltOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const bannerAnimate = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.fromTo(
        ".presentation-title1",
        {
          x: -200,
          y: 300,
          opacity: 0,
          duration: 1,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "expo.in",
          duration: 0.5,
        }
      );
      timeline.fromTo(
        ".presentation-title2",
        {
          x: 1000,
          y: 300,
          opacity: 0,
          duration: 0.3,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 0.5,
        }
      );
      ScrollTrigger.create({
        animation: timeline,
        scrub: 3,
        start: "700px bottom",
        end: "900px",
      });
    });
  }, animateRef);

  return (
    <div className="super-global-container presentation" ref={animateRef}>
      <div className="super-container" id="presentation">
        <div className="super-container-p80 presentation">
          <div className="presentation-title1">
            <img
              src={Mogule1}
              alt="mogule1"
              className="mogule1"
              width={"250px"}
            />
            <h1>
              {/* Il faut reagir dès maintenant :{" "} */}
              <span>
              Quelle est la véritable identité lorsque chaque masque révèle une autre facette?
              </span>
              "
            </h1>
            <p>
            Dans le labyrinthe des loyautés divisées et des alliances changeantes, naviguer demande une finesse d'esprit et une intuition aiguisée, car chaque pas vers la lumière pourrait simplement nous plonger plus profondément dans les ténèbres de la double vie.
            </p>
          </div>

          <Tilt options={tiltOptions}>
            <div className="presentation-title2">
              <div className="inner">Dans le jeu complexe des identités dissimulées et des vérités déguisées, chaque décision pèse comme une pièce sur l'échiquier, où la moindre erreur pourrait nous précipiter dans les abîmes insondables de la trahison et de la duplicité."
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
