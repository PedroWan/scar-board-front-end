import React from "react";
import { ProjectCard } from "./ProjectCard";
import * as S from "./Home.styles";

type SampleProject = {
  title: string;
  description?: string;
  status?: string;
  statusVariant?: "danger" | "warning" | "success" | "neutral";
  progress?: number;
  avatars?: string[];
  meta?: string;
};

const sampleProjects: SampleProject[] = [
  {
    title: "Project Phoenix",
    description: "Revitalizing the customer support platform.",
    status: "At Risk",
    statusVariant: "warning",
    progress: 75,
    avatars: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
    ],
    meta: "Tasks: 30/40 | Due: 1 week",
  },
  {
    title: "Marketing Campaign Q3",
    description: "Launch new social media and ad campaigns.",
    status: "Blocked",
    statusVariant: "danger",
    progress: 20,
    avatars: ["https://i.pravatar.cc/150?img=3"],
    meta: "Tasks: 5/25 | Due: 3 weeks",
  },
  {
    title: "Mobile App Refresh",
    description: "Update UI/UX for the iOS and Android apps.",
    status: "Planning",
    statusVariant: "neutral",
    progress: 5,
    avatars: [
      "https://i.pravatar.cc/150?img=4",
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=6",
    ],
    meta: "Tasks: 1/60 | Due: 2 months",
  },
];

export const Home: React.FC = () => {
  return (
    <S.Container>
      <main style={{ padding: "24px", width: "100%" }}>
        <h2 style={{ fontSize: 28, marginBottom: 16, color: "white" }}>
          My View
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {sampleProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              status={p.status}
              statusVariant={p.statusVariant}
              progress={p.progress}
              avatars={p.avatars}
              meta={p.meta}
            />
          ))}
        </div>
      </main>
    </S.Container>
  );
};

export default Home;
