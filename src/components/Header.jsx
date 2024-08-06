import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const[inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/tenis', { state: {inputValue} });
    }
    return ( 
    <>
    <header>

    <img className="imagemlogo" src="/src/image/logo-header.svg" alt="" />

    <form onSubmit={handleSubmit}> 
    <input 
        className="barrapesquisa" 
        placeholder="Pesquisar Produto..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
    </form>

    <p className="texto">Cadrastre-se</p>
    <button className="botao">Entrar</button>
    <img className="imagemcarrinho" src="/src/image/mini-cart.svg" alt="" />

</header>
        
    <div className="header">  
    <nav>
        <ul className="ul-header">
            <li><Link className="link1" to={"/"}>Home</Link></li>
            <li><Link className="link2" to={"/tenis"}>Produtos</Link></li>
            <li className="categorias-header">Categorias</li>
            <li className="meus-pedidos-header">Meus Pedidos</li>
        </ul>
    </nav>
    </div> 
    </> 
    );
}

export default Header;