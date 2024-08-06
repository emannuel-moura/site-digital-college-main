const ColecaoDestaque = () => {
    return ( 
    <>
    <div className="titulo-da-colecao">
        <div className="texto-titulo-colecao"><b>Coleções em destaque</b></div>
    </div>

    <div className="colecao">

        <div className="circulos">
        <div className="circulo1"><img className="img-circulo-1" src="/src/image/camiseta-2.png" alt="" /></div>
        <div className="circulo2"><img className="img-circulo-2" src="/src/image/calca-2.png" alt="" /></div>
        <div className="circulo3"><img className="img-circulo-3" src="/src/image/bone2.png" alt="" /></div>
        <div className="circulo4"><img className="img-circulo-4" src="/src/image/fones-de-ouvido-2.png" alt="" /></div>
        <div className="circulo5"><img className="img-circulo-5" src="/src/image/tenis-2.png" alt="" /></div>
        </div>

        <div className="texto-circulos" >

            <div className="texto-circulo1"><b>Camisetas</b></div>
            <div className="texto-circulo2"><b>Calças</b></div>
            <div className="texto-circulo3"><b>Bonés</b></div>
            <div className="texto-circulo4"><b>Headphones</b></div>
            <div className="texto-circulo5"><b>Tênis</b></div>
        </div>
    </div>
    </> 
);
}

export default ColecaoDestaque;