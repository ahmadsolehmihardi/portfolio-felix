import React from 'react';
import {Button} from '@mui/material'

const galery = () => {
  return (
    <section className='g-wrapper'>
      <div className="paddings">
        <h4>looking for exclusive service ?</h4>
        <h1>Get the best for your business</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, consectetur.<br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button variant="contained" sx={{
    fontSize: '20px',
    padding: '10px 20px',
    width: '200px',
    height: '60px'
  }}>Submit</Button>
      </div>
    </section>
  ) 
}

export default galery
