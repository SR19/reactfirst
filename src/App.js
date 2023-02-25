import React,{useEffect, useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Dashboard  from './Components/DashBoard';

function App() {
  const [data,setData] = useState('')

  useEffect(() => {
    fetch('https://swapi.dev/api/films/?format=json')
      .then((resp) => resp.json())
      .then(({results,count,next,previous}) => {
        console.log(results)
        setData(results)
    })
  },[])
  return (
    <div className="App">
      <NavBar />
      <Dashboard data={data} />
    </div>
  );
}

export default App;
