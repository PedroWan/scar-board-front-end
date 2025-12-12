import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${(p) => p.theme.colors["overlay-light"]};
  background: transparent;
  min-height: 64px;

  .left {
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: flex-start;
  }

  .title {
    color: ${(p) => p.theme.colors.textLight};
    font-weight: 700;
  }

  .actions {
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 220px;
  max-width: 560px;
  height: 44px;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${(p) => p.theme.colors["overlay-light"]};
  border: 1px solid ${(p) => p.theme.colors["overlay-light"]};
  box-shadow: 0 4px 16px ${(p) => p.theme.colors["shadow-weak"]};

  @media (prefers-color-scheme: dark) {
    background: ${(p) => p.theme.colors["overlay-dark"]};
    border-color: ${(p) => p.theme.colors["overlay-dark"]};
  }
`;

export const SearchIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  width: 28px;
  height: 28px;
`;

export const SearchInput = styled.input`
  flex: 1 1 auto;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors["muted-light"]};
  }
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0 14px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: pointer;
  font-weight: 700;
`;
