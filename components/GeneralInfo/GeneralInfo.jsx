import s from "./GeneralInfo.module.css"


const GeneralInfo = (props) =>{







    return(
      <div className={s.general}>
        <p className={s.giheader}>General Info</p>
        <hr/>
        <span className={s.iconEventtitle}></span><p id="giname" className={s.giname}>{props.title}</p>
        <span className={s.iconStarttime}></span><p id="gistart" className={s.giname}>{props.start}</p>
        <span className={s.iconEndtime}></span><p id="giend" className={s.giname}>{props.end}</p>
        <span className={s.iconLocation}></span><p id="giplace" className={s.giname}>{props.place}</p>
      </div>
    )

}

export default GeneralInfo;
