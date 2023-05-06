import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Line from '../assets/line.svg';

import { Box, Typography } from '@mui/material';
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', color: 'white', p: 3 }}>
        <Box
          sx={{
            my: 3,
            '& img': {
              fontSize: '60px',
              cursor: 'pointer',
              mr: 2,
            },
            '& img:hover': {
              color: 'goldenrod',
              transform: 'translateX(5px)',
              transition: 'all 400ms',
            },
          }}
        >
          <a
            href='https://www.instagram.com/ss.bookscoffee/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Instagram} alt='Instagram' width={'60px'} />
          </a>
          <a
            href='https://www.facebook.com/ss.bookscoffee/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Facebook} alt='Instagram' width={'60px'} />
          </a>
          <a
            href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Line} alt='Instagram' width={'60px'} />
          </a>
        </Box>
        <Typography
          variant='h5'
          sx={{
            '@media (max-width:600px)': {
              fontSize: '1rem',
            },
          }}
        ></Typography>
      </Box>
    </>
  );
};

export default Footer;
