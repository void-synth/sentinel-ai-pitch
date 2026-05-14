import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide03Solution } from "./slides/Slide03Solution";
import { Slide04How } from "./slides/Slide04How";
import { Slide05Demo } from "./slides/Slide05Demo";
import { Slide06Market } from "./slides/Slide06Market";
import { Slide07Business } from "./slides/Slide07Business";
import { Slide08Compete } from "./slides/Slide08Compete";
import { Slide09Stack } from "./slides/Slide09Stack";
import { Slide10Roadmap } from "./slides/Slide10Roadmap";
import { Slide11Closing } from "./slides/Slide11Closing";

export const slides = [
  { title: "Cover", component: Slide01Cover },
  { title: "Problem", component: Slide02Problem },
  { title: "Why now", component: Slide03Solution },
  { title: "Product", component: Slide04How },
  { title: "Architecture", component: Slide05Demo },
  { title: "Operations", component: Slide06Market },
  { title: "Live demo", component: Slide07Business },
  { title: "Advantage", component: Slide08Compete },
  { title: "Roadmap", component: Slide09Stack },
  { title: "Team & ask", component: Slide10Roadmap },
  { title: "Closing", component: Slide11Closing },
];
