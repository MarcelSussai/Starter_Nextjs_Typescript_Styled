import { useState, createContext } from 'react'

const AppCtx = createContext({})

export default function CtxProvider({ children }) {

  const [ctx_Test, setCtx_Test] = useState('')

  return (
    <>      
      <AppCtx.Provider value={{ 
        ctx_Test, setCtx_Test 
      }} >
        { children }
      </AppCtx.Provider>
    </>
  )
}