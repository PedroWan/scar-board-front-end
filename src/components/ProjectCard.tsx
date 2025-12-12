import React from "react";
import * as S from "./ProjectCard.styles";

export interface ProjectCardProps {
  title: string;
  description?: string;
  status?: string;
  statusVariant?: "danger" | "warning" | "success" | "neutral";
  progress?: number; // 0-100
  avatars?: string[];
  meta?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  status,
  statusVariant = "neutral",
  progress = 0,
  avatars = [],
  meta,
}) => {
  return (
    <S.Card>
      <div className="meta">
        <h3>{title}</h3>
        {status && <S.Badge variant={statusVariant}>{status}</S.Badge>}
      </div>

      {description && <p>{description}</p>}

      <S.ProgressBar>
        <div
          className="fill"
          style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
        />
      </S.ProgressBar>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <S.Avatars>
            {avatars.slice(0, 4).map((a, i) => (
              <div
                key={i}
                className="avatar"
                style={{ backgroundImage: `url(${a})` }}
              />
            ))}
          </S.Avatars>
          <div style={{ marginLeft: 12, fontSize: 12, color: "#6b7280" }}>
            {meta}
          </div>
        </div>
      </div>
    </S.Card>
  );
};

export default ProjectCard;
