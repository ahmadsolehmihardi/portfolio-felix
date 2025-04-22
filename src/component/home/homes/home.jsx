
import React from 'react'
import home from'../../../assets/home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram,faTelegram,faTiktok,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Button} from '@mui/material'

const Home = () => {
  return (
    <section className='h-wrepper'>
      <div className="container flex">
        <div className="h-left">
          <div className="img">
            <img src={home} alt="" />
          </div>
        </div>
        <div className="h-right top-margin">
          <h1>I AM A <br/>WEB DESIGN & FRONTEND DEVELOPMENT</h1>
          <ul>
            <li><FontAwesomeIcon icon={faFacebook} className='icon'/></li>
            <li><FontAwesomeIcon icon={faInstagram} className='icon'/> </li>
            <li><FontAwesomeIcon icon={faTelegram} className='icon'/></li>
            <li><FontAwesomeIcon icon={faTiktok} className='icon'/></li>
            <li><FontAwesomeIcon icon={faLinkedin} className='icon'/> </li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt est voluptates obcaecati delectus porro, labore saepe sint assumenda recusandae?</p>
          <Button variant="contained" sx={{
    fontSize: '20px',
    padding: '10px 20px',
    width: '200px',
    height: '60px'
  }}>Submit</Button>
        </div>
        
      </div>
    </section>
  )
}

export default Home
