import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import Picker from '../public/Components/Picker'
import PreloadedImage from '../public/Components/PreloadedImage'


export default function Home() {
  
  const data = 
  { aries: { description: "You know how to express yourself precisely. An art of charming aesthetics, your inclination will be beautiful and patient toward your sweetheart.", date_range: "March 21 - April 19" }
  , taurus : { description: "Having a great prospect for today, the Taurus horoscope favors new connections as well with consolidation of long lasting ones. Full of optimism and enthusiasm, your love life is set to be on a definite upward trajectory.", date_range: "April 20 - May 20" }
  , gemini : { description: "Taken Gemini signs will enjoy a quiet day inside with their loved one. Venus is affecting single Gemini signs heavily today, especially at night. Flirting with an Taurus will boost your ego.", date_range: "May 21 - June 21" }
  , cancer : { description: "Mercury is pulsating energy which is going to make communication with your other half a lot easier. Try being more affectionate towards your partner.", date_range: " June 22 - July 22" }
  , leo : { description: "Taken signs will feel passionate and crave intimacy. Single signs are going to feel fabulous and glorious around other fire signs today. Flirting is going to be a must.", date_range: "July 23 - August 22" }
  , virgo : { description: "Venus is sending energy that you can feel in your heart. Your love life is going amazing, and you find it easy to make deep and sensual connections with other people.", date_range: "August 23 - September 22" }
  , libra : { description: "Single Libra signs, don't settle for less than what you deserve. (You deserve the best!) Married signs might have a small argument that is related to your different tastes in things.", date_range: "September 23 - October 23" }
  , scorpio : { description: "Single signs may flirt with a Cancer sign today. Taken signs, you will feel some tension in your relationship, but it's nothing that a nice dinner date can't fix. Be a little imaginative and try to surprise them.", date_range: "October 24 - November 21" }
  , sagittarius : { description: "Sometimes, relationships don't work out. Stop fooling yourself that they are the one. Have a healthy conversation with them about this and let the both of you go your own way.", date_range: "November 22 - December 21" }
  , capricorn : { description: "It is likely that single signs will enjoy flirting with fire signs today. Taken signs are going to have a wonderful day with their partner, full of love and care.", date_range: "December 22 - January 19" }
  , aquarius : { description: "Single Aquarius signs might feel very compatible with an air sign. They will be mysterious and open for any kind of conversation.", date_range: "January 20 - February 18" }
  , pisces : { description: "Work with conflicting energy to build a better understanding of a loved one and their desires. Breakthrough a wall and move on to the next phase of your relationship.", date_range: "February 19 - March 20" } };

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
