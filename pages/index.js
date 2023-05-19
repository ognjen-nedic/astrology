import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import Picker from '../public/Components/Picker'
import PreloadedImage from '../public/Components/PreloadedImage'


export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [sign, setSign] = useState('aries');
  const [planet, setPlanet] = useState('mars');
  const [day, setDay] = useState('today');

  const signArray 
    = ["aries"
      , "taurus"
      , "gemini"
      , "cancer"
      , "leo"
      , "virgo"
      , "libra"
      , "scorpio"
      , "sagittarius"
      , "capricorn"
      , "aquarius"
      , "pisces"];
  // For image preloading -- should find better solution.
      const images
     = ["/astrology/files/images/sun.jpg"
     , "/astrology/files/images/mercury.jpg"
     , "/astrology/files/images/venus.jpg"
     , "/astrology/files/images/moon.jpg"
     , "/astrology/files/images/mars.jpg"
     , "/astrology/files/images/jupiter.jpg"
     , "/astrology/files/images/saturn.jpg"
     , "/astrology/files/images/uranus.jpg"
     , "/astrology/files/images/neptune.jpg"
     , "/astrology/files/images/pluto.jpg" ]

  console.log(data);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  };

  useEffect(() => {
    fetch(`https://ognjen-nedic.github.io/astrology/api/data`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong!");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
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

  if(loading) 
  {
    return (
    <div className="content wrapper" >
      <div className="backgroundParallax">
            <div id='stars1'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
      </div>
      <div className="title">
        <h1>HOROSCOPE</h1>
      </div>
    </div>)
  }

  return (
    <>
      <Head>
        <title>Daily horoscope</title>
        <meta name="description" content="Screensaver for lobby with astrology theme" />
        <meta property="og:title" content="Daily horoscope" />
        <meta property="og:description" content="Screensaver for lobby with astrology theme" />
        <meta property="og:image" content="/astrology/files/images/og-background.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/astrology/favicon.ico" />
      </Head>
      <main>
                 
        <div className="content wrapper" >
          <div className="backgroundParallax">
            <div id='stars1'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </div>
          {images.map((image, index) => (
            <PreloadedImage key={index} src={image} />
          ))}
          <div className="title">
            <h1>HOROSCOPE</h1>
          </div>
          <div className="left-side">
            <div className="left-side__illustration"></div>
            <div className="left-side__description">
              <p>{data[sign].description}</p>        
            </div>
          </div>
          <div className="right-side">
            <div className="right-side__top">
              <h2>{sign}</h2>
              <div className="right-side__top__date-range"><p>{data[sign].date_range}</p></div>
              <p className="small-device-description">{data[sign].description}</p>
            </div>
            <Picker signArray={signArray} planet={planet} sign={sign} setSign={setSign}/>
          </div>
        </div>
      </main>
    </>
  )
}
