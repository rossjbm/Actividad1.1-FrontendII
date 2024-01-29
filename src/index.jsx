import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Principal from './Principal.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Principal/>
    <Footer/>
  </>
)
