const Speak = (texte) => {
  if ("speechSynthesis" in window) {
    const message = new SpeechSynthesisUtterance();
    // Définir le texte à lire
    message.text = texte;
    // Définir la vitesse de lecture
    message.rate = 1; // 1 correspond à la vitesse normale, vous pouvez ajuster si nécessaire

    window.speechSynthesis.speak(message);
  } else {
    console.error("La synthèse vocale n'est pas supportée par ce navigateur.");
  }
};

export default Speak;
