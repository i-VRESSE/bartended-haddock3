import { Link } from "@remix-run/react";
import Card from "~/components/Card";
import { useIsAuthenticated } from "~/cookies";

const cards = [
  {
    "target": "/builder",
    "image": "https://static.thenounproject.com/png/1781890-200.png",
    "title": "Build",
    "description": "Use the workflow builder to create and submit a jobs.",
  },
  {
    "target": "/upload",
    "image": "https://www.filemail.com/images/marketing/anonymously-upload-files.svg",
    "title": "Upload",
    "description": "Upload a workflow and submit as job.",
  },
  {
    "target": "/jobs",
    "image": "https://www.strategie-bourse.com/nl/images/categories/technische-analyse.jpg",
    "title": "Analyse",
    "description": "Explore and analyse the results of completed jobs.",
  },
]

export default function Index() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <main className="p-24 flex justify-evenly">
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </main >
  );
}