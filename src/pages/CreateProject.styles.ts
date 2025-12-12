import styled from "styled-components";

export const Page = styled.div`
  padding: 88px 24px 40px; /* leave space for header */
  max-width: 980px;
  min-width: 980px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textLight};
`;
export const BackgroundPage = styled.div`
  background: linear-gradient(135deg, #101922 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Card = styled.div`
  /* match ProjectCard palette: subtle overlay, soft border and shadow */
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => `${theme.spacing.xl}`};
  border: 1px solid ${({ theme }) => theme.colors["overlay-dark"]};
  box-shadow: 0 6px 24px ${({ theme }) => theme.colors["shadow-weak"]};
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Sub = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors["muted-light"]};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: linear-gradient(135deg, #101922 0%);

  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Input = styled.input`
  height: 44px;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors["overlay-dark"]};
  background: ${({ theme }) => theme.colors["overlay-dark"]};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Textarea = styled.textarea`
  min-height: 120px;
  resize: vertical;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors["overlay-dark"]};
  background: ${({ theme }) => theme.colors["overlay-dark"]};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Select = styled.select`
  height: 44px;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors["overlay-dark"]};
  background: ${({ theme }) => theme.colors["overlay-dark"]};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Button = styled.button<{ variant?: "primary" | "muted" }>`
  height: 40px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: none;
  cursor: pointer;
  font-weight: 700;
  ${(p) =>
    p.variant === "primary"
      ? `background: ${p.theme.colors.primary}; color: ${p.theme.colors.textLight};`
      : `background: transparent; color: ${p.theme.colors["muted-light"]}; border: 1px solid ${p.theme.colors["overlay-dark"]};`}
`;
