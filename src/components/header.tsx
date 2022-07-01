import styled from 'styled-components';


const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #1188aa;
  color: ${({theme}) => theme.colors.yellow};
  padding: 16px;
  font-size: 32px;
`;



const Header = () => {
  return (
  <ContainerHeader>
    Header de Exemplo
  </ContainerHeader>
);

}

export default Header;
