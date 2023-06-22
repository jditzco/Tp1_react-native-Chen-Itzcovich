import Card from 'react-bootstrap/Card';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
import { StyleSheet } from 'react-native-web';



function Carta() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../assets/coffee1.jpeg')} />
      <Card.Body style={styles.title}>
        <h2 style={styles.text}>Mocha</h2>
      </Card.Body>
    </Card>
  );
}
const styles = StyleSheet.create({

title: {
  flex: 1,
  backgroundColor: '#265828'
},
text: {
  color: '#FFFFFF'
}
});


export default Carta