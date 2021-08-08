import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

  const [word, setWord] = useState("");
  const [meaning, setMeanings] = useState([]);
  const dictionaryApi = async() => {
    try {
      const data = await axios.get(
          'https://api.dictionaryapi.dev/api/v2/entries/en/plan'
      );

      setMeanings(data.data);

    } catch(error){
      console.log(error);
    }
  };
  console.log("meanings: ", meaning);

  useEffect(() => {
    dictionaryApi();
  }, []);
  return (

    <div className="App" style={{height:'1000vh', backgroundColor:'#282c34', color: 'white'}}>
      <Container maxWidth="md" style={{display: "flex", flexDirection: "column", height:'100vh'}}>
        Dictionary
      </Container>
      <Header />
    </div>
  );
}

export default App;
