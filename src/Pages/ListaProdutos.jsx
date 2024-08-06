import { useEffect } from "react";
import Produtos2 from "../components/Produtos2";

const ListaProdutos = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    return ( 
    <>
    <Produtos2/>
    </> 
    );
}

export default ListaProdutos;