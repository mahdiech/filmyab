import React , {useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
useEffect(()=>{
  axios
  .get('https://api.themoviedb.org/3/discover/movie?api_key=178a04566db87fea763461f13e269845&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
.then(res => {
  console.log(res.data);
} )
.catch(err => {
  console.log(err);
});

},[]);
  return (
    <div className="App">
    <CardDeck>
  <Card bg='light' text='dark' className='text-center' style={{margin:'20px'}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>movie name</Card.Title>
      <Card.Text>
        about
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg='light' text='dark' className='text-center' style={{margin:'20px'}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>movie name</Card.Title>
      <Card.Text>
        about
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg='light' text='dark' className='text-center' style={{margin:'20px'}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>movie name</Card.Title>
      <Card.Text>
        about
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    </div>
  );
}

export default App;