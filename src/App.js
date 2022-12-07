import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from 'react-bootstrap';
import Header from './Header.jsx';
import CardImagen from './CardImagen.jsx';
import Footer from './Footer.jsx';



function App() {
  return (
    <div className="App">
      <Header titulo="Galería de Imagenes con React"></Header>
      <Container>
      <Row>
        <Col>
        <CardImagen  imagen="https://images.pexels.com/photos/10640445/pexels-photo-10640445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="mujer" descripcion="foto de mujer"></CardImagen>
        </Col>
        <Col>
        <CardImagen  imagen="https://images.pexels.com/photos/10547480/pexels-photo-10547480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="cisne" descripcion="foto de cisne"></CardImagen>
        </Col>
        <Col>
        <CardImagen  imagen="https://images.pexels.com/photos/14558772/pexels-photo-14558772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="paisaje" descripcion="foto de paisaje"></CardImagen>
        </Col>
      </Row>
      </Container>
      <Footer texto="Todos los derechos reservados @2022"></Footer>

    </div>
  );
};

export default App;
