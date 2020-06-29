import React , {useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [latest,setLatest] = useState('');
  useEffect(()=>{
    axios
    .get('https://api.themoviedb.org/3/movie/419704?api_key=178a04566db87fea763461f13e269845')
  .then(res => {
    setLatest(res.data);
  } )
  .catch(err => {
    console.log(err);
  });
  
  },[]);
  return (
    <div className="app" >
    <CardDeck >
  <Card bg='light' text='dark' className='text-center' style={{margin:'20px'}}>
    <Card.Img variant="center" src="http://image.tmdb.org/t/p/w342/\/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" />
    <Card.Body>
      <Card.Title>{latest.original_title}</Card.Title>
      <Card.Text>
       popularity: {latest.popularity}
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    </div>
  );
}


export default App;