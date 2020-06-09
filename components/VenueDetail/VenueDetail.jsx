import React from "react"
import s from "./VenueDetail.module.css"



const VenueDetail = (props) =>{


  return(
    <div className={s.venue}>
      <p className={s.vdheader}>Venue Detail</p>
      <hr/>
      <span className={s.iconOrgnizerName}></span><p id="vdname" className={s.vdname}>{props.name}</p>
      <span className={s.iconPhone}></span><p id="vdphone" className={s.vdname}>{props.phone}</p>
      <span className={s.iconEmail5}></span><p id="vdemail" className={s.vdname}>{props.email}</p>
      <span className={s.iconWebsite}></span><p id="vdwebsite" className={s.vdname}>{props.website}</p>
    </div>
)

if(props.venue){
  return(
    <span></span>
  )

}
}

export default VenueDetail
