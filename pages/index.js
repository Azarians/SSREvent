import App from "../components/App.js"
import Axios from 'axios';
import NextHead from 'next/head';


const Index = () =>{

  const [state, setState] = React.useState({a:1});



let id;

    React.useEffect(() => {
      let id_string = window.location.href;
      id = new URL(id_string);
      id = id.searchParams.get("id");

        const fetchData = async () => {




          const response = await Axios.get(`http://shahen.boomtechdev.com/APICalendar/api/event/${id}?comp_id=comp-k92rwqtf&instance=yA8GN892gVyB
            J0H7ksp6x3ZnWmWuttPrgnswvkyQqeE.eyJpbnN0YW5jZUlkIjoiNzcxYzc3MzMtNmYzZi00YWYxLTlhZDktNGM1MTUxN
            mFmMzczIiwiYXBwRGVmSWQiOiJkZTJiNWU1Yy02MzI4LTQwNDctOTFjMC1iODJiNWNkN2I2MzUiLCJzaWduRGF0ZSI6IjIwMjAtMDMtMjBUMTg6MDQ6MTAuMDg3WiIsImRlb
            W9Nb2RlIjpmYWxzZSwiYWlkIjoiY2EyMTI4NzgtY2JhNi00YzA5LTljMDYtNTZmZGExYmViMjg4Iiwic2l0ZU93bmVySWQiOiJjZDQ4NmE0Ny0yODA4LTQxYmUtYjA0NS0xMGI2MDdhZTFiZTQifQ`).then(response =>{
          response.data[0].image = "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/52/e5/da/shutterstock-422516326.jpg";

          setState(response.data[0])


          }
        )

}
fetchData();

}, []);

console.log(state)

  return(
    <>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={state.desc}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={state.title}/>
      <meta property="og:image" content={state.image}/>
      <meta name="twitter:title" content={state.title}/>
      <meta name="twitter:description" content={state.desc}/>
      <meta name="twitter:image" content={state.image}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>

    <App state={state} />

</>)
}

export default Index
