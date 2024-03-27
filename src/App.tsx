import Header from '../src/header/header';
import Body from './body/body';
import Formulario from './formulario/formulario';
import Footer from './footer/footer';
import './App.css'; 

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Body />
                <Formulario />
            </div>
            <Footer />
        </>
    );
}

export default App;