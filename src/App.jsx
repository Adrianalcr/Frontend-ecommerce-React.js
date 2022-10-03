import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Loja from './pages/Loja';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import InfoProduto from './pages/InfoProduto'
import Error404 from "./pages/Error404";

const App = () =>{
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/loja" element={<Loja/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route path="/infoProduto" element={<InfoProduto/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path='*' element={<Error404/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
