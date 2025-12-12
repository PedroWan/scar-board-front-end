import styled from "styled-components";
import type { DefaultTheme } from "styled-components";

export const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${(p) => p.theme.colors["overlay-light"]};
  border-radius: ${({ theme }) => theme.radii.xl};
  border: 1px solid ${(p) => p.theme.colors["overlay-light"]};
  transition: transform 0.18s ease, box-shadow 0.18s ease,
    border-color 0.18s ease;
  will-change: transform, box-shadow;

  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
    color: ${({ theme }) => theme.colors.textLight};
  }
  p {
    margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
    color: ${({ theme }) => theme.colors["muted-light"]};
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px ${(p) => p.theme.colors["shadow-primary"]};
    border-color: ${(p) => p.theme.colors["shadow-primary-strong"]};
  }

  @media (prefers-color-scheme: dark) {
    background: ${(p) => p.theme.colors["overlay-dark"]};
    border-color: ${(p) => p.theme.colors["overlay-dark"]};
  }
`;

export const Badge = styled.span<{ variant?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.textDark};
  background: ${(p: { theme: DefaultTheme; variant?: string }) => {
    const { variant, theme } = p;
    if (variant === "danger") return `${theme.colors.danger}1E`;
    if (variant === "warning") return `${theme.colors.warning}1E`;
    if (variant === "success") return `${theme.colors.success}14`;
    return theme.colors["overlay-light"];
  }};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  overflow: hidden;

  .fill {
    height: 100%;
    background: linear-gradient(90deg, #f59e0b, #fb923c);
    border-radius: 999px;
  }
`;

export const Avatars = styled.div`
  display: flex;
  align-items: center;

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background-size: cover;
    border: 2px solid ${({ theme }) => theme.colors["surface-light"]};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    margin-left: -10px;
  }
`;
