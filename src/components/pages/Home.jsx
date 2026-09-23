import React from "react";
import Typography from "@mui/material/Typography";
import HomeCard from "../layout/HomeCard";

const SECTIONS = [
  {
    title: "Aniversario 5",
    description: "Un mensaje especial para ti, con música y recuerdos.",
    to: "/aniversario5",
    comingSoon: false,
  },
  {
    title: "Flores Amarillas",
    description: "Un jardín animado y una sorpresa musical para ti.",
    to: "/flores-amarillas",
    comingSoon: false,
  },
  {
    title: "Nuestra Boda Civil",
    description: "El video y el contador de nuestro gran día.",
    to: "/boda-civil",
    comingSoon: false,
  },
  {
    title: "Te Amo 3 Millones",
    description: "Una carta de amor y el contador de momentos juntos.",
    to: "/te-amo-3-millones",
    comingSoon: false,
  },
  {
    title: "Próximamente",
    to: "/",
    comingSoon: true,
  },
  {
    title: "Próximamente",
    to: "/",
    comingSoon: true,
  },
];

const Home = () => (
  <div className="home-landing">
    <Typography variant="h3" className="home-landing__title">
      Bienvenida, mi amor 🐼
    </Typography>
    <Typography variant="subtitle1" className="home-landing__subtitle">
      Cada sección es un pequeño regalo para ti.
    </Typography>
    <div className="home-landing__grid">
      {SECTIONS.map((section, index) => (
        <HomeCard
          key={index}
          title={section.title}
          description={section.description}
          to={section.to}
          comingSoon={section.comingSoon}
        />
      ))}
    </div>
  </div>
);

export default Home;
