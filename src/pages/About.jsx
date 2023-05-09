import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, CardMedia } from '@mui/material';

import a10 from '../assets/a10.jpg';
import a11 from '../assets/a11.jpg';
import a12 from '../assets/a12.jpg';
import a13 from '../assets/a13.jpg';
import a14 from '../assets/a14.jpg';
import a15 from '../assets/a15.jpg';

const About = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          my: 5,
          mx: 'auto',
          textAlign: 'center',
          width: '80%',
          p: 2,
          '& h4': {
            fontWeight: 'bold',
            // my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'center',
          },
          '@media (max-width:600px)': {
            mt: '32px',
            '& h4 ': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant='h4'>Welcome To 三夏好食書坊 🙌</Typography>
        <br />
        <p>紀念三個好朋友相識以來的盛夏光年</p>
        <p>三夏也是古代樂曲《肆夏》《韶夏》《納夏》的總稱</p>
        <p>音樂、好書、好食，就是我們夢想的起點 適合放空、閱讀、聚會、手作課程、音樂發表......</p>
        <br />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <CardMedia
            sx={{
              height: '25vw',
              width: '25vw',
              margin: '10px',
              border: '1px solid grey',
              minWidth: '300px',
              minHeight: '300px',
            }}
            component={'img'}
            src={a10}
          ></CardMedia>
          <CardMedia
            sx={{
              height: '25vw',
              width: '25vw',
              margin: '10px',
              border: '1px solid grey',
              minWidth: '300px',
              minHeight: '300px',
            }}
            component={'img'}
            src={a11}
          ></CardMedia>
          <CardMedia
            sx={{
              height: '25vw',
              width: '25vw',
              margin: '10px',
              border: '1px solid grey',
              minWidth: '300px',
              minHeight: '300px',
            }}
            component={'img'}
            src={a12}
          ></CardMedia>
                    <CardMedia
            sx={{
              height: '25vw',
              width: '25vw',
              margin: '10px',
              border: '1px solid grey',
              minWidth: '300px',
              minHeight: '300px',
            }}
            component={'img'}
            src={a13}
          ></CardMedia>
                    <CardMedia
            sx={{
              height: '25vw',
              width: '25vw',
              margin: '10px',
              border: '1px solid grey',
              minWidth: '300px',
              minHeight: '300px',
            }}
            component={'img'}
            src={a14}
          ></CardMedia>
                    <CardMedia
            sx={{
              height: '25vw',
              width: '25vw',
              margin: '10px',
              border: '1px solid grey',
              minWidth: '300px',
              minHeight: '300px',
            }}
            component={'img'}
            src={a15}
          ></CardMedia>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
