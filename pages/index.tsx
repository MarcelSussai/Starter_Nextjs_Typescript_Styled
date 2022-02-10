
import Head from '../src/components/head'
import Header from '../src/components/header';
import { Main } from '../src/styles/Main_Styled';


const Home = () => {
  return (
  <>
    <Head title="Home" />
    <Header />
    <Main>
      <h1>Titulo Corpo</h1>
    </Main>
  </>
);

}

export default Home;