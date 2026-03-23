// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "🎵", time: 3 },
  { text: "Pues, no hace falta ", time: 7 },
  { text: "que sea primavera en el hemisferio norte xD", time: 12 },
  { text: "para que hayan flores amarillas en el mundo ", time: 17 },
  { text: "y al menos aquí", time: 23 },
  { text: "hay unas manzanillas Amarillas xD", time: 28 },
  { text: "Ánimo siempre flaquita 🎶 ", time: 33 },
  { text: "ánimo siempre flaquita 🎵🎶 ", time: 37 },
  { text: "ánimo siempre flaquita 🎼🎵🎶 ", time: 42 },
  { text: "Ánimo siempre flaquita 🎸🎼🎶🎵 ", time: 47 },
  { text: "🎸🎼🎶🎵 ", time: 55 }, 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
