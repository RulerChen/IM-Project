import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';

import { Box, Typography } from '@mui/material';
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: 'white', color: 'white', p: 3 }}>
        <Box
          sx={{
            my: 3,
            '& svg': {
              fontSize: '60px',
              cursor: 'pointer',
              mr: 2,
            },
            '& svg:hover': {
              color: 'goldenrod',
              transform: 'translateX(5px)',
              transition: 'all 400ms',
            },
          }}
        >
          {/* icons */}
          <a href='https://www.instagram.com/ss.bookscoffee/'>
            <InstagramIcon sx={{ color: '#E4405F' }} />
          </a>
          <a href='https://www.facebook.com/ss.bookscoffee/'>
            <FacebookIcon sx={{ color: '#1877F2' }} />
          </a>
          <a href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'>
            <MessageIcon sx={{ color: '#00C300' }} />
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
