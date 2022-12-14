
import React from "react";

function MyApp({ Component, pageProps }) {
  return(  
  <>
  <div> <h1> Navbar Will come here  </h1></div>
  <Component {...pageProps} />
  </>
   )
}

export default MyApp
