import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cards from './Component/Cards';

function App() {
  const [data,setdata] =useState([])
//   useEffect(()=>{
//     axios.get('https://rickandmortyapi.com/api/character')
//     .then((res)=>{
//         console.log(res.data);
//         setdata(res.data)
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })
   
    let [fetchedData,updateFetchedData] =useState([]);
    let {info,results} =fetchedData;

    console.log(results);
    let api='https://rickandmortyapi.com/api/character';

    useEffect(()=>{
      (async function(){
        let data =await fetch(api).then((res)=>res.json());
        updateFetchedData(data);
      })();
    },[api]);
  return (
   <>
   <div className='body'>
    <h1 className='text-center'>Rick and Morty</h1>
    <Cards results={results}/>
    </div>
   </>
  );
}

export default App;
