import ListItem from './components/ListItem';
import Head from './components/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let foodItems = ['Dal', 'Roti', 'Salad'];

  return (
    <>
      <Head></Head>
      <ListItem foodItem={foodItems}></ListItem>
    </>
  )
}

export default App
