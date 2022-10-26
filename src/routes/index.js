//Imports para as rotas
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro/index"
import Login from "../pages/Login/index"
import Home from "../pages/Home/index"

//Criando a verificação sobre estar logado ou não
const Private = ({ Item }) => {
  const logado = false;

  return logado > 0 ? <Item /> : <Login/>
}

//Criando as rotas
const RoutesApp = () => {
    return(
        <BrowserRouter>
          <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home}/>} />
                <Route exact path="/cadastro" element={< Cadastro />} />
                <Route exact path="/login" element={< Login />} />
                <Route path="/" element={< Login />} />
                <Route path="*" element={< Login />} />
            </Routes>
          </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;