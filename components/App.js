import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import GeneralInfo from "./GeneralInfo/GeneralInfo.jsx"
import Description from "./Description/Description.jsx"
import VenueDetail from "./VenueDetail/VenueDetail.jsx"
import AddShare from "./AddShare/AddShare.jsx"




const App = (props) => {

  return (
    <>


      <div className={s.App}>

  <button className={s.goToCalendar}>Go to Calendar</button>
<div className={s.content}>

      <GeneralInfo title={props.state.title} start={props.state.start} end={props.state.end} place="place" />
      <Description desc={props.state.desc} image={props.state.image}/>
      <VenueDetail name={props.state.venue.name} phone={props.state.venue.phone} email={props.state.venue.email} website={props.state.venue.website}/>
      <VenueDetail name={props.state.venue.name} phone={props.state.venue.phone} email={props.state.venue.email} website={props.state.venue.website}/>

</div>
    </div>

</>
  )
}



export default App
