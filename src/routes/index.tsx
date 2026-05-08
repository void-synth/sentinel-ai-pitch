import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Squad-Sentinel AI — Investor Deck" },
      { name: "description", content: "Nigeria's real-time fraud immune system for banks. Detect. Explain. Recover." },
      { property: "og:title", content: "Squad-Sentinel AI — Investor Deck" },
      { property: "og:description", content: "Real-time fraud detection and recovery for Nigerian banks." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Deck />;
}
