import { useState } from "react";
import Bg from "./assets/bg.jpg";
import imageSong1 from "./assets/cover-1.png";
import imageSong2 from "./assets/cover-2.png";
import song1 from "./assets/lost-in-city-lights-145038.mp3";
import song2 from "./assets/forest-lullaby-110624.mp3";
import MusicPlayer from "./components/MusicPlayer";

const songs = [
  {
    title: "Lost in the City Lights",
    artist: "Cosmo Sheldrake",
    img: imageSong1,
    src: song1,
  },
  {
    title: "Forest Lullaby",
    artist: "Lesfm",
    img: imageSong2,
    src: song2,
  },
];

function App() {
  return (
    <main
      style={{
        backgroundImage: `url(${Bg})`,
      }}
      className="h-[100dvh] w-full bg-cover bg-center"
    >
      <section className="w-full h-full grid place-content-center">
        <MusicPlayer songs={songs} />
      </section>
    </main>
  );
}

export default App;
