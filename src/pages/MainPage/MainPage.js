import React, { useState } from 'react';
import {
  Container,
  Header,
  MainContent,
  FeaturedSection,
  ActivitiesSection,
  Footer,
  SelectChildDropdown,
  ConfirmButton
} from './Style.js';

export default function MainPage() {
  const [selectedChild, setSelectedChild] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  // Lista de crianças
  const childrenList = ['Criança 1', 'Criança 2', 'Criança 3'];

  const handleChildChange = (event) => {
    setSelectedChild(event.target.value);
  };

  const handleConfirmation = () => {
    if (selectedChild) {
      setConfirmation(true);
      // Aqui você pode adicionar a lógica para lidar com a confirmação, se necessário
    }
  };

  return (
    <Container>
      <Header>
        <h1>Bem-vindo ao Educandario Bezerra de Menezes!</h1>
      </Header>

      <MainContent>
        <FeaturedSection>
          <p>Selecione a criança para responder ao questionário:</p>
          <SelectChildDropdown value={selectedChild} onChange={handleChildChange}>
            <option value="" disabled>
              Escolha uma criança
            </option>
            {childrenList.map((child, index) => (
              <option key={index} value={child}>
                {child}
              </option>
            ))}
          </SelectChildDropdown>
          <ConfirmButton onClick={handleConfirmation}>Confirmar</ConfirmButton>
          {confirmation && <p>Criança selecionada: {selectedChild}</p>}
        </FeaturedSection>

        <ActivitiesSection>
          <h2>Atividades Divertidas</h2>
          {/* Adicione aqui uma lista de atividades com links ou imagens */}
        </ActivitiesSection>
      </MainContent>

      <Footer>
        <p>&copy; Emotion Helper</p>
      </Footer>
    </Container>
  );
}

