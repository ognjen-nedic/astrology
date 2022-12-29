import React from 'react'
import Image from 'next/image'

const Picker = (props) => {
  return (
    <div loading="lazy" className="sign-pick" style={{backgroundImage: [`url(/astrology/files/images/${props.planet}.jpg)`,`url(/astrology/files/images/nightsky.jpg)`]}}>
        <div className="sign-blur-effect"><img src={`/astrology/files/images/${props.sign}.svg`} alt={`${props.sign} sign icon`}/></div>
        {props.signArray.map((element,index) => {
          return (
            <div className="sign-element" key={index}>
              <label className="sign-box">
                <input type="radio" name="sign" value={element} id={element} onChange={(e) => props.setSign(e.target.value)}/>
                <img src={`/astrology/files/images/${element}.svg`} alt={`${element} sign icon`}/>
              </label>
            </div>)        
        })}
      </div>
  )
}

export default Picker