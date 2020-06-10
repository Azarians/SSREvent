import fetch from 'isomorphic-unfetch';
import Head from "next/head";

import App from "../components/App.js"

let id;


const Id = () =>{
    React.useEffect(() => {

      var url = require('url');
      var adr = "http://localhost:5000/?id=1";
      var q = url.parse(adr, true);

      console.log(q.query.id)
}, []);
return null
}



export async function getStaticProps() {


  const res = await fetch(`http://shahen.boomtechdev.com/APICalendar/api/event/${1}?comp_id=comp-k92rwqtf&instance=yA8GN892gVyB
    J0H7ksp6x3ZnWmWuttPrgnswvkyQqeE.eyJpbnN0YW5jZUlkIjoiNzcxYzc3MzMtNmYzZi00YWYxLTlhZDktNGM1MTUxN
    mFmMzczIiwiYXBwRGVmSWQiOiJkZTJiNWU1Yy02MzI4LTQwNDctOTFjMC1iODJiNWNkN2I2MzUiLCJzaWduRGF0ZSI6IjIwMjAtMDMtMjBUMTg6MDQ6MTAuMDg3WiIsImRlb
    W9Nb2RlIjpmYWxzZSwiYWlkIjoiY2EyMTI4NzgtY2JhNi00YzA5LTljMDYtNTZmZGExYmViMjg4Iiwic2l0ZU93bmVySWQiOiJjZDQ4NmE0Ny0yODA4LTQxYmUtYjA0NS0xMGI2MDdhZTFiZTQifQ`)
  const data = await res.json()
  data[0].image = "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/52/e5/da/shutterstock-422516326.jpg"
  return {
    props: {
      data,
    },
  }
}

const Index = ({ data }) => {
  console.log(data)


return(
  <>
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={data[0].desc}/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content={data[0].title}/>
    <meta property="og:image" content={data[0].image}/>
    <meta name="twitter:title" content={data[0].title}/>
    <meta name="twitter:description" content={data[0].desc}/>
    <meta name="twitter:image" content={data[0].image}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
<Id/>
  <App state={data[0]} />

</>
)
}

export default Index
