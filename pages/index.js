import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import Picker from '../public/Components/Picker'


export default function Home() {
  const [data, setData] = useState([]);
  const [sign, setSign] = useState('aries');
  const [planet, setPlanet] = useState('mars');
  const [day, setDay] = useState('today');

  const signArray = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

  console.log(data);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  };

  useEffect(() => {
    fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong!");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sign, day]);

  useEffect(() => {
    if(sign === 'aries') {
      setPlanet('mars')
    }
    if(sign === 'taurus' || sign === 'libra') {
      setPlanet('venus')
    }
    if(sign==='gemini' || sign === 'virgo') {
      setPlanet('mercury')
    }
    if(sign==='cancer') {
      setPlanet('moon')
    }
    if(sign==='leo') {
      setPlanet('sun')
    }
    if(sign==='scorpio'){
      setPlanet('pluto')
    }
    if(sign==='sagittarius') {
      setPlanet('jupiter')
    }
    if(sign==='capricorn') {
      setPlanet('saturn')
    }
    if(sign==='aquarius') {
      setPlanet('uranus')
    }
    if(sign==='pisces') {
      setPlanet('neptune')
    }

  },[sign])

  return (
    <>
      <Head>
        <title>Astrology Screensaver</title>
        <meta name="description" content="Screensaver for lobby with astrology theme" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
                 
        <div className="content wrapper" >
          <div className="backgroundParallax">
            <div id='stars1'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </div> 
          <div className="title">
            <h1>HOROSCOPE</h1>
          </div>
          <div className="left-side">
            <div className="left-side__illustration"></div>
            <div className="left-side__description">
              <p>{data.description}</p>        
            </div>
          </div>
          <div className="right-side">
            <div className="right-side__top">
              <h2>{sign}</h2>
              <p>{data.date_range}</p>
              <p className="small-device-description">{data.description}</p>
            </div>
            <Picker signArray={signArray} planet={planet} sign={sign} setSign={setSign}/>
          </div>
        </div>
      </main>
    </>
  )
}
