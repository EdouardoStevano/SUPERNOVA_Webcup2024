import React, { useState } from "react";
import VoiceVisualizer from "./voiceVisualizer";
import "./speechTotexte.scss";
const SpeechTotexte = () => {
  const voiceVisualizer = new VoiceVisualizer();
  const [result, setResult] = useState("");
  const [recording, isrecording] = useState(false);
  let SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition,
    recognition;

  const recordbtn = () => {
    if (!recording) {
      setResult("");
      speechToText();
      isrecording(true);
    } else {
      setResult("");
      stopRecording();
      voiceVisualizer.stopVisualization();
    }
  };

  function speechToText() {
    try {
      recognition = new SpeechRecognition();
      recognition.lang = "fr-FR";
      recognition.interimResults = true;

      recognition.start();
      voiceVisualizer.startVisualization();

      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;

        if (event.results[0].isFinal) {
          setResult(result + " " + speechResult);

          if (speechResult.toLowerCase().includes("salut.")) {
            isrecording(false);
            stopRecording();
            speak("salut Agent, comment ça vas");
          } else if (speechResult.toLowerCase().includes("Missions.")) {
            isrecording(false);
            stopRecording();
            speak("Plongez dans l'univers intrigant des missions d'agent double avec notre site web. Notre plateforme offre une variété de missions captivantes, où vous aurez l'occasion de jouer un rôle crucial dans des opérations clandestines et des intrigues complexes. En tant qu'agent double, vous naviguerez entre les alliances, jonglerez avec les secrets et prendrez des décisions qui pourraient changer le cours de l'histoire.");
          } else if (speechResult.toLowerCase().includes("aide.")) {
            isrecording(false);
            stopRecording();
            speak(
              "Être un agent double peut être une tâche complexe et pleine de défis, mais avec les bonnes compétences et stratégies, vous pouvez naviguer avec succès dans ce monde d'intrigues et de mystères. "
            );
          }
        } else if (speechResult.toLowerCase().includes("carte.")) {
          isrecording(false);
          stopRecording();
          speak(
            "vous voulez voir la carte ok je vais vous rediriger vers la carte"
          );
        } else {
          setResult(" " + result + " " + speechResult);
        }
      };
      recognition.onspeechend = () => {
        speechToText();
      };

      recognition.onerror = (event) => {
        isrecording(false);
        recognition.stop();
        if (event.error === "no-speech") {
          // speak("JE DETECTE PAS DES MOTS");
        } else if (event.error === "audio-capture") {
          // alert(
          //   "No microphone was found. Ensure that a microphone is installed."
          // );
        } else if (event.error === "not-allowed") {
          // alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
          // alert("Listening Stopped.");
        } else {
          // alert("Error occurred in recognition: " + event.error);
          speak("salut  il ya une erreur " + event.error);
          isrecording(false);
        }
      };
    } catch (error) {
      isrecording(false);

      console.log(error);
    }
  }

  const speak = async (texte) => {
    if ("speechSynthesis" in window) {
      const message = new SpeechSynthesisUtterance();
      // Définir le texte à lire
      message.text = texte;

      window.speechSynthesis.speak(message);
    } else {
      console.error(
        "La synthèse vocale n'est pas supportée par ce navigateur."
      );
    }
  };
  function stopRecording() {
    isrecording(false);
    recognition.stop();
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="speeche-bloc"
    >
      <h1>Assistante Vocale</h1>
      <div id="visualizer-container">
        <canvas id="output" width="250" height="200"></canvas>
      </div>
      <button onClick={recordbtn}>
        <div className={`container-svg-btn ${recording ? "active" : ""}`}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z"
              stroke="#1C274C"
              stroke-width="1.5"
            />
            <path
              opacity="0.5"
              d="M13.5 8L17 8"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M13.5 11L17 11"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M7 8L9 8"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M7 11L9 11"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M20 10V11C20 15.4183 16.4183 19 12 19M4 10V11C4 15.4183 7.58172 19 12 19M12 19V22"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {recording ? "Arreter" : "Parler"}
      </button>
      <h1>{result}</h1>
    </div>
  );
};

export default SpeechTotexte;
