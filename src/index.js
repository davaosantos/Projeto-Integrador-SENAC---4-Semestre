import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import VisitPage from './pages/paginaVisita/VisitPage';
import ListaUsuarios from './pages/listaUsuarios/listaUsuarios';
import Home from './pages/home/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './pages/home/index';
import CadastroUsuario from './pages/cadastroUsuario/cadastroUsuario';
import CadastroProduto from './pages/cadastroProduto/cadastroProduto';
import ListaProdutos from './pages/listaProdutos/listaProdutos';
import Detalhes from './pages/detalhes/detalhes';
import CadastroCliente from './pages/cadastroCliente/cadastroCliente';
import HomeCliente from './pages/homeCliente/homeCliente';
import UpdateCliente from './pages/updateCliente/updateCliente';
import Carrinho from './pages/carrinho/carrinho';
import FechamentoPedido from './pages/fechamentoPedido/fechamentoPedido';
import ListaPedidos from './pages/listaPedidos/ListaPedidos';
import ResumoPedido from './pages/resumoPedido/resumoPedido';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path = '/'  exact={true} element={<VisitPage />}></Route>
        <Route path = '/login'  exact={true} element={<App />}></Route>
        <Route path='/cadastroProduto' element={<CadastroProduto/>}></Route>
        <Route path='/cadastroUsuario' element={<CadastroUsuario/>}></Route>
        <Route path='/' element></Route>
        <Route path='/listaUsuarios' element={<ListaUsuarios/>}></Route>
        <Route path='/listaProdutos' element={<ListaProdutos/>} > </Route>
        <Route path='/carrinho' element={<Carrinho/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/detalhes' element={<Detalhes/>}></Route>
        <Route path='/cadastroCliente' element={<CadastroCliente/>}></Route>
        <Route path='/homeCliente' element={<HomeCliente/>}></Route>
        <Route path='/updateCliente' element={<UpdateCliente/>}></Route>
        <Route path='/fechamentoPedido' element={<FechamentoPedido/>}></Route>
        <Route path='/listaPedidos' element={<ListaPedidos/>}></Route>
        <Route path='/resumoPedido' element={<ResumoPedido/>}></Route>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
