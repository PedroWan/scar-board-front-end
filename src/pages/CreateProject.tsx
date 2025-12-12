import { useState } from "react";
import * as S from "./CreateProject.styles";

type ProjectData = { name: string; description?: string; boardModel?: string };

export const CreateProject: React.FC<{
  onCancel: () => void;
  onCreate: (data: ProjectData) => void;
}> = ({ onCancel, onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [boardModel, setBoardModel] = useState(
    "Básico (A Fazer, Em Progresso, Feito)"
  );

  function handleCreate() {
    const data: ProjectData = { name, description, boardModel };
    onCreate(data);
  }

  return (
    <S.BackgroundPage>
      <S.Page>
        <S.Title>Criar Novo Projeto</S.Title>
        <S.Sub>
          Preencha os detalhes abaixo para iniciar seu novo projeto.
        </S.Sub>

        <S.Card>
          <S.Field>
            <S.Label>Nome do Projeto</S.Label>
            <S.Input
              placeholder="Ex: Campanha de Marketing Q4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </S.Field>

          <S.Field>
            <S.Label>Descrição</S.Label>
            <S.Textarea
              placeholder="Descreva o objetivo principal deste projeto..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </S.Field>

          <S.Field>
            <S.Label>Modelo do Quadro</S.Label>
            <S.Select
              value={boardModel}
              onChange={(e) => setBoardModel(e.target.value)}
            >
              <option>Básico (A Fazer, Em Progresso, Feito)</option>
              <option>Kanban Completo</option>
              <option>Roadmap</option>
            </S.Select>
          </S.Field>

          <S.Actions>
            <S.Button variant="muted" onClick={onCancel}>
              Cancelar
            </S.Button>
            <S.Button variant="primary" onClick={handleCreate}>
              + Criar Projeto
            </S.Button>
          </S.Actions>
        </S.Card>
      </S.Page>
    </S.BackgroundPage>
  );
};

export default CreateProject;
