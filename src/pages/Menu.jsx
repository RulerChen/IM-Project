import { useState } from 'react';
import { MenuList } from '../data/menu';
import { FarmerList } from '../data/farmer';
import { SpaceList } from '../data/space';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Button,
  Modal,
} from '@mui/material';
import menu from '../assets/menu.jpg';

const Menu = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Modal open={modal} onClose={() => setModal(false)}>
        <Box
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
        >
          <CardMedia
            sx={{ maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain', overflow: 'auto' }}
            component={'img'}
            src={menu}
            onClick={() => setModal(false)}
          ></CardMedia>
        </Box>
      </Modal>
      <Typography variant='h4' sx={{ margin: '30px 0 0 20px' }}>
        菜單 🗒︎
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <CardMedia
          sx={{
            width: '25vw',
            margin: '10px',
            border: '1px solid grey',
            minWidth: '300px',
            minHeight: '300px',
          }}
          component={'img'}
          src={menu}
          onClick={() => setModal(true)}
        ></CardMedia>
      </Box>
      <Typography variant='h4' sx={{ margin: '30px 0 0 20px' }}>
        農產品 👨‍🌾
        <Button
          variant='contained'
          href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'
          sx={{
            backgroundColor: 'green',
            ml: 4,
          }}
        >
          點我預約
        </Button>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {FarmerList.map((menu) => (
          <Card sx={{ maxWidth: '390px', display: 'flex', m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name} ${menu.price}
                </Typography>
                <Typography variant='body2'>{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Divider />
      <Typography variant='h4' sx={{ margin: '30px 0 0 20px' }}>
        菜單 🥗
        <Button
          variant='contained'
          href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'
          sx={{
            backgroundColor: 'green',
            ml: 4,
          }}
        >
          點我預約
        </Button>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: '390px', display: 'flex', m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name} ${menu.price}
                </Typography>
                <Typography variant='body2'>{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Divider />
      <Typography variant='h4' sx={{ margin: '30px 0 0 20px' }}>
        空間出租 🧱
        <Button
          variant='contained'
          href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'
          sx={{
            backgroundColor: 'green',
            ml: 4,
          }}
        >
          點我預約
        </Button>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {SpaceList.map((menu) => (
          <Card sx={{ maxWidth: '390px', display: 'flex', m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name} ${menu.price}
                </Typography>
                <Typography variant='body2'>{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default Menu;
