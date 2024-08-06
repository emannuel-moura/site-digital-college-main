import Carrosel from "../components/Carrosel";
import ColecaoDestaque from "../components/ColecaoDestaque";
import ColecaoDestaqueimg from "../components/ColecaoDestaqueimg";
import Oferta from "../components/Oferta";
import Produtos from "../components/Produtos";

const HomePage = () => {
    return ( 
    <>
    <Carrosel/>
    <ColecaoDestaqueimg/>
    <ColecaoDestaque/>
    <Produtos />
    <Oferta/>
    </> 
    );
}

export default HomePage;