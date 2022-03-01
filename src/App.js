import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [img,setImg] = useState('');
  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }

  const onChangeImg = function(evento){
    setImg(evento.target.value);
  }
  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }
  return (
    <div className="App">
      <select onChange={onChangeImg}>
        <option value="1">Eisntein Burlon</option>
        <option value="2">Eisntein Sabio</option>
        <option value="3"> Platon 1</option>
        <option value="4">Platon 2</option>
        <option value="5">Platon Pensador</option>
        <option value="6">Escritor Pensador</option>
      </select><br/>
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/><br/>
      <button onClick={onClickExportar}>Exportar</button>
      <div className='meme' id='meme'>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/img/memes/"+img+".jpg"}/>
      </div>
    </div>
  );
}

export default App;
