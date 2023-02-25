import React,{useEffect, useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Dashboard  from './Components/DashBoard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function App() {
  const [data, setData] = useState([]);
  const [selectSort, setSelectSort] = React.useState("none");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/films/?format=json')
      .then((resp) => resp.json())
      .then(({results}) => {
        setData(results)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      console.log(err)
    })
  }, [])
  
  return (
    <div className="App">
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <NavBar selectSort={selectSort} setSelectSort={setSelectSort} setSearchQuery={setSearchQuery} />
      <Dashboard data={data} selectSort={selectSort} searchQuery={ searchQuery} />
    </div>
  );
}

export default App;
