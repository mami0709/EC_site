import '../styles/globals.css'
import { Provider } from "react-redux";
import {  store } from '../redux/store' 
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';



// function MyApp({ Component, pageProps }) {
//   return
    
//   <React.StrictMode>
//   <Provider store={store}>
//     <ChakraProvider>
//     <Component {...pageProps} />
//     </ChakraProvider>
//   </Provider>
// </React.StrictMode>
// }

// export default MyApp

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp