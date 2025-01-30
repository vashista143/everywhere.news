import { useEffect, useState } from 'react';
import './App.css';
import Article from './article';

function App() {
  let quea="https://newsapi.org/v2/everything?q="
  let queb="&apiKey=8492ff4eaac640f5b9874b303ce7b460"//8492ff4eaac640f5b9874b303ce7b460&&&&13d6ab777b7f4c9b865574e3b45c7735&&&&&&&a77dae21ec504516a9049c50b8cdec1c
  let [categ,setCateg]=useState("everything");
  let [newsarticles,setNewsarticles]=useState([]);
  useEffect(()=>{
      fetch(quea+categ+queb)
      .then((response)=>response.json())
      .then((data)=>{console.log(data); setNewsarticles(data.articles || [])})
      .catch((err)=>{console.error("error fetching data")})    
    })
  const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
      setCateg(event.target.value);
      }};
  return (
    <div>
    <div className='head-felx'>
    <div className='header'>
      <h1>EVERYWHERE NEWS</h1>
      <input type='text' placeholder='search for' onChange={(event)=>{setCateg(event.target.value); setCateg(event.target.value); console.log(event.target.value);}}></input>
    </div>
    </div>
    <div className='news'>
       {newsarticles.map((artic)=>{
          return(
              <Article art={artic}/>
          )
        })}
    </div>
    </div>
  )
}

export default App;
