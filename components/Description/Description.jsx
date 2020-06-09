import React from "react"
import s from "./Description.module.css"






const Decription = (props) =>{

  return(
    <div className={s.desc}>
      <p className={s.descheader}>Description</p>
      <hr/>
      <img src={props.image} alt="description image" className={s.gidimage} id="descimage"/>
      <p className={s.descdesc} id="descdesc"> {props.desc}</p>
    </div>
  )
}


export default Decription
