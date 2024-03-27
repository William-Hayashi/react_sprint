import Header from '../src/header/header';
import Body from './body/body';
import Formulario from './formulario/formulario';
import Footer from './footer/footer';
import './home.css'; 
import ClickTracker from './coleta';

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Body />
                <Formulario />
            </div>
            <Footer />
            <ClickTracker />
        </>
    );
}

export default App;