import { useEffect, useState } from "react";
import './App.css'




function WorldClock ({location, time}){
 return(
  <div className="world-clock">
      <h2> 🕘 </h2>
      <h2> {location}</h2>
      <p className="clock-text">{time} </p>
  </div>
 )
}

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); //milisegundos

    return () => clearInterval (intervalId);
  }, []);

  return (
    <div className="App">
      <h1> Relógio Mundial 🌎</h1>
      <div className="clock-container">
        <WorldClock location="Brasília"
                      time={time.toLocaleTimeString('pt-br', {
                      timeZone: 'America/Sao_Paulo' } )} />

        <WorldClock location="Nova York"
                      time={time.toLocaleTimeString('en-US', {
                      timeZone: 'America/New_York' } )} />

        <WorldClock location="Londres"
                      time={time.toLocaleTimeString('en-GB', {
                      timeZone: 'Europe/London' } )} />

        <WorldClock location="Tokyo"
                      time={time.toLocaleTimeString('ja-JP', {
                      timeZone: 'Asia/Tokyo' } )} />

      </div>
    </div>
  )
}

export default App;