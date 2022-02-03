import styled from 'styled-components';


const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Header = () => {
  return (
  <ContainerHeader>
    Teste
  </ContainerHeader>
);

}

export default Header;
