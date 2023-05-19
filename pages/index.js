import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import Picker from '../public/Components/Picker'
import PreloadedImage from '../public/Components/PreloadedImage'


export default function Home() {
  const data = { aries: { description: "Aries description", date_range: "March 21 - April 19" }
  , taurus : { description: "Taurus description", date_range: "April 20 - May 20" }
  , gemini : { description: "Gemini description", date_range: "May 21 - June 21" }
  , cancer : { description: "Cancer description", date_range: " June 22 - July 22" }
  , leo : { description: "Leo description", date_range: "July 23 - August 22" }
  , virgo : { description: "Virgo description", date_range: "August 23 - September 22" }
  , libra : { description: "Libra description", date_range: "September 23 - October 23" }
  , scorpio : { description: "Scorpio description", date_range: "October 24 - November 21" }
  , sagittarius : { description: "Sagittarius description", date_range: "November 22 - December 21" }
  , capricorn : { description: "Capricorn description", date_range: "December 22 - January 19" }
  , aquarius : { description: "Aquarius description", date_range: "January 20 - February 18" }
  , pisces : { description: "Pisces description", date_range: "February 19 - March 20" } };
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

  /* useEffect(() => {
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
  }, [sign, day]); */

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
        <title>Daily horoscope</title>
        <meta name="description" content="Screensaver for lobby with astrology theme" />
        <meta property="og:title" content="Daily horoscope" />
        <meta property="og:description" content="Screensaver for lobby with astrology theme" />
        <meta property="og:image" content="/astrology/files/images/og-background.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/astrology/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/astrology/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/astrology/favicon-16x16.png" />
        <link rel="manifest" href="/astrology/site.webmanifest" />
        <link rel="mask-icon" href="/astrology/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
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
