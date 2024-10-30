// import { About } from './pages/About'
// import { AulaUseReducer } from './pages/Aula-useReducer'
// import { AulaUseState } from './pages/Aula-useState'
// import { Home } from './pages/Home'
// import { Login } from "./pages/Login"
// import { HelloWorld } from "./components/HelloWorld"
import { SayMyName } from "./components/SayMyName"
import { Pessoa } from './components/Pessoa'
import { Frase } from "./components/frase"
import { List } from "./components/List"

export const App = () => {

  const nome = "Gorges"
  return (
    <div>
      {/* //  <Home />*/}
      {/*// <About />*/}
      {/*// <Login /> */}
      {/* <HelloWorld /> */}
      <Frase />
      <Frase />
      <SayMyName nome="Delmir" />
      <SayMyName nome={nome} />
      <Pessoa nome="Delmir" idade="20" profissao="desempregado" foto="https://via.placeholder.com/150" />
      <List/>
      {/* // <AulaUseReducer />*/}
      {/*// <AulaUseState /> */}
    </div>
  )
}
