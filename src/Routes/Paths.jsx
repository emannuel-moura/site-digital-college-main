import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListaProdutos from "../Pages/ListaProdutos";
import DescricaoProduto from "../Pages/DescricaoProduto";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Paths = () => {
    return ( 
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/tenis" element={<ListaProdutos/>} />
            <Route path="/descricaoproduto" element={<DescricaoProduto />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </> 
    );
}

export default Paths;
