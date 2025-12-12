import React from "react";
import * as S from "./Header.styles";

export const Header: React.FC<{ onNewProject?: () => void }> = ({
  onNewProject,
}) => {
  return (
    <S.HeaderWrap>
      <div className="left">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 22 }}>🔗</div>
          <h2 className="title">Painel de Projetos</h2>
        </div>
      </div>

      <div className="actions">
        <S.SearchWrapper>
          <S.SearchIcon aria-hidden>
            {/* simple magnifying glass SVG */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.SearchIcon>
          <S.SearchInput placeholder="Pesquisar" aria-label="Pesquisar" />
        </S.SearchWrapper>
        <S.PrimaryButton
          onClick={
            onNewProject ??
            (() => {
              window.history.pushState({}, "", "/create");
              window.dispatchEvent(new PopStateEvent("popstate"));
            })
          }
        >
          <span style={{ fontSize: 18 }}>＋</span>
          <span>Novo Projeto</span>
        </S.PrimaryButton>
      </div>
    </S.HeaderWrap>
  );
};

export default Header;
