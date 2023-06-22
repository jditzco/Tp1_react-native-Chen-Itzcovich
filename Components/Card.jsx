import Card from 'react-bootstrap/Card';
import './Carta.css'
function Carta() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../assets/coffee1.jpeg')} />
      <Card.Body>
        <Card.Title className='Title'>Mocha</Card.Title>
      </Card.Body>
    </Card>
  );
}



export default Carta