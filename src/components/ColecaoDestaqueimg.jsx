const ColecaoDestaqueimg = () => {
    return ( 
    <>
    <div className="colecao-texto">
    <div className="titulo-colecao"><b>Coleções em destaque</b></div>
    </div>
    <div className="colecao-img"> 
        <div className="camisa" >
            <div className="desconto1"><b> 30%  OFF </b></div>
            <div className="texto-camisa"> <b>Novo drop
            Supreme</b></div>
            <button className="botao-camisa">Comprar</button>

        </div>
        
        <div className="tenis">
            <div className="desconto2"><b> 30%  OFF </b></div>
            <div className="texto-tenis"> <b>Coleção
            Adidas</b></div>
            <button className="botao-tenis">Comprar</button></div>

        <div className="fone"> 
        <div className="desconto3"><b> 30%  OFF </b></div>
            <div className="texto-fone"> <b>Novo 
            Beats Bass</b></div>
            <button className="botao-fone">Comprar</button>
            
            </div>

    </div>
    </> );
}

export default ColecaoDestaqueimg;