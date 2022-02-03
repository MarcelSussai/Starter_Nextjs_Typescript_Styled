import styled from 'styled-components';


const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #1188aa;
  color: #eee;
  padding: 16px;
  font-size: 32px;
`;

const Header = () => {
  return (
  <ContainerHeader>
    Teste
  </ContainerHeader>
);

}

export default Header;
