import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, CardMedia } from '@mui/material';

import space1 from '../assets/space1.jpg';
import space2 from '../assets/space2.jpg';
import space3 from '../assets/space3.jpg';
import space4 from '../assets/space4.jpg';

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

        <Typography variant='h4'>場館照片</Typography>
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
            src={space1}
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
            src={space2}
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
            src={space3}
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
            src={space4}
          ></CardMedia>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
