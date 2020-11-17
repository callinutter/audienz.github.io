import React from 'react'

function Card(props) {
    return (
        <div className={props.clasName} >
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt=""/>
      </div>

      <div className="big-div">
        <span className="div-title">
          {props.title}
        </span>
      </div>
    </div>
    )
}

export default Card
