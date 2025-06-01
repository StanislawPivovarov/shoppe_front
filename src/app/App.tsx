import './styles/App.scss'
import Layout from "../widgets/Layout";
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';

function App() {

  return (

    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Layout>
  )
}

export default App
