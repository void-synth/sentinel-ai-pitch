import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide04How } from "./slides/Slide04How";
import { Slide05Demo } from "./slides/Slide05Demo";
import { SlideSquadIntegration } from "./slides/SlideSquadIntegration";
import { SlideAIRisk } from "./slides/SlideAIRisk";
import { SlideMonetization } from "./slides/SlideMonetization";
import { SlideScalability } from "./slides/SlideScalability";
import { Slide07Business } from "./slides/Slide07Business";
import { Slide10Roadmap } from "./slides/Slide10Roadmap";
import { Slide11Closing } from "./slides/Slide11Closing";

/** Eleven slides total — cap for this deck */
export const slides = [
  { title: "Cover", component: Slide01Cover },
  { title: "Problem & approach", component: Slide02Problem },
  { title: "Product", component: Slide04How },
  { title: "Architecture", component: Slide05Demo },
  { title: "Webhook", component: SlideSquadIntegration },
  { title: "Risk & AI", component: SlideAIRisk },
  { title: "Business model", component: SlideMonetization },
  { title: "Scalability", component: SlideScalability },
  { title: "Live demo", component: Slide07Business },
  { title: "Team & ask", component: Slide10Roadmap },
  { title: "Closing", component: Slide11Closing },
];
