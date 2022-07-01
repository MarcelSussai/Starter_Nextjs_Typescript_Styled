
import { useContext } from 'react';
import Head from '../src/components/head'
import Header from '../src/components/header';
import { AppCtx } from '../src/contexts/ctxGlobal';
import { Main } from '../src/styles/MainStyled';


const Home = () => {
  const context = useContext(AppCtx)
  const { ctx_Test, setCtx_Test, texts } = context

  const handleCtxValueTest = () => setCtx_Test('MUDOU O VALOR!')

  return (
  <>
    <Head title="Home" />
    <Header />
    <Main>
      <h1>Titulo Corpo</h1>
      <p>{ ctx_Test }</p>
      <p>{texts.txt0001}</p>
      <button onClick={handleCtxValueTest}>TESTE DE CONTEXTO</button>
    </Main>
  </>
);

}

export default Home;