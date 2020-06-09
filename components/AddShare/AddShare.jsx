import React from "react"
import s from "./AddShare.module.css"
//import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
//import 'react-sharingbuttons/dist/main.css'



const AddShare = (props) =>{
  console.log("addShare")
  console.log(props)


  return(
    <>



    <div className={s.addShare}>
      <p className={s.asheader}>Add & Share</p>
      <hr/>
      <p className={s.addto}>Add to calendar</p>

      <p className={s.share}>Share this event</p>

      <button onClick={() => window.open(`http://shahen.boomtechdev.com/singleEvent.html?id=${props.id}`,"_blank")}>TEST</button>

      <button onClick={() => window.open("https://facebook.com/sharer/sharer.php?u=http://shahen.boomtechdev.com/singleEvent.html&title=Title","_blank")}>Facebook</button>
      <br/>
      <button  onClick={() =>   window.open("http://twitter.com/share?url=http://shahen.boomtechdev.com/singleEvent.html","_blank")}>twitter</button>
      <br/>
      <button onClick={() => window.open("https://www.reddit.com/submit?url=http://shahen.boomtechdev.com/singleEvent.html","_blank")}>reddit</button>
      <br/>

      <img alt="copyLink" src="https://cdn0.iconfinder.com/data/icons/feather/96/591256-link-512.png" className={s.copyLink}
        onClick={() =>{
            navigator.clipboard.writeText('http://shahen.boomtechdev.com/singleEvent.html');

          }}>
      </img>



    </div>
</>
  )

}

export default AddShare
