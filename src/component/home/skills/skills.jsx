import * as React from 'react';
import {Button} from '@mui/material'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Skills = () => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress === 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        setProgress(progress + 1);
        if (buffer < 100 && progress % 5 === 0) {
          const newBuffer = buffer + 1 + Math.random() * 10;
          setBuffer(newBuffer > 100 ? 100 : newBuffer);
        }
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className='s-wrapper'>
      <div className="container">
        <div className="heading">
          <h3>Why choose Us</h3>
          <h1>Some of my skills</h1>
        </div>
        <div className="content flex">
          <div className="left topMargin">
            <div className="skills">
              <div className="flex">
              <h1>HTML</h1>
           <h1>90%</h1> 
           </div>
          <Box sx={{ width: '90%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
            </div>
            <div className="skills">
              <div className="flex">
              <h1>CSS</h1>
           <h1>85%</h1> 
           </div>
          <Box sx={{ width: '85%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
            </div>
            <div className="skills">
              <div className="flex">
              <h1>javaScript</h1>
           <h1>90%</h1> 
           </div>
          <Box sx={{ width: '90%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
            </div>
            <div className="skills">
              <div className="flex">
              <h1>REACT JS</h1>
           <h1>85%</h1> 
           </div>
          <Box sx={{ width: '85%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
            </div>
    
          </div>
          <div className="right ">
            <h1>Every day is New Challange</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eum repellendus aspernatur eveniet cumque. Quos porro sapiente doloremque laboriosam quibusdam sunt esse eum amet consequatur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio minus, dicta error cum ad obcaecati. Quis sint autem eos iste ipsa! Perferendis nisi dicta ex accusantium eum dolore labore.</p>
            <Button variant="contained" sx={{
                fontSize: '20px',
                padding: '10px 20px',
                width: '150px',
                height: '60px'
              }}>Submit</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
