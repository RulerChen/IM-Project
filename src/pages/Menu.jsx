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
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}
        >
          <Card>
            <CardActionArea>
              <CardMedia
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100vh',
                  objectFit: 'contain',
                  overflow: 'auto',
                }}
                component={'img'}
                src={menu}
                onClick={() => setModal(false)}
              ></CardMedia>
            </CardActionArea>
          </Card>
        </Box>
      </Modal>
      <Typography variant='h4' sx={{ margin: '30px 0 0 20px' }}>
        菜單 🗒︎
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: '450px', display: 'flex', m: 2 }} onClick={() => setModal(true)}>
          <CardActionArea>
            <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu} alt={'menu'} />
          </CardActionArea>
        </Card>
      </Box>
      <Divider></Divider>
      <Typography variant='h4' sx={{ margin: '30px 0 0 20px' }}>
        三夏手作 👨‍🌾
        <Button
          variant='contained'
          href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'
          sx={{
            backgroundColor: 'green',
            ml: 4,
          }}
          target='_blank'
          rel='noopener noreferrer'
        >
          點我預約
        </Button>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {FarmerList.map((menu) => (
          <Card sx={{ maxWidth: '450px', display: 'flex', m: 2 }} key={menu.name}>
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
        人氣商品 🥗
        <Button
          variant='contained'
          href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'
          sx={{
            backgroundColor: 'green',
            ml: 4,
          }}
          target='_blank'
          rel='noopener noreferrer'
        >
          點我預約
        </Button>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: '450px', display: 'flex', m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
                style={{ objectFit: 'cover' }}
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
        場地出租 🧱
        <Button
          variant='contained'
          href='https://line.me/R/ti/p/@290jkvwn?from=page&liff.referrer=https%3A%2F%2Fl.facebook.com%2F&accountId=290jkvwn&fbclid=IwAR0IIBG0krWZu2Tt8DZQTimmRUyrPxEJ7hcMoF1Cmcwwkidjr5mLaLzdKkc'
          sx={{
            backgroundColor: 'green',
            ml: 4,
          }}
          target='_blank'
          rel='noopener noreferrer'
        >
          點我預約
        </Button>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {SpaceList.map((menu) => (
          <Card sx={{ maxWidth: '450px', display: 'flex', m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
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
