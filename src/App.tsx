import { FC } from 'react'
import CardContainer from './components/CardContainer';
import './App.css';


const App: FC = () => {
  return (
    <div>
      <div className="app">
        <CardContainer />
      </div>
      <div className="attribution">
        Diseñado y desarrollado por <a href="https://github.com/login"> Hugo García Rosas.</a>
      </div>
    </div>
  )
}

export default App
