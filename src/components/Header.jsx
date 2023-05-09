import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../assets/logo.png';
import '../styles/Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //  TODO: change icon size
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'white'} variant='h6' component='div' sx={{ flexGrow: 1, my: 2 }}>
        <img src={Logo} alt='logo' height={'70'} />
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to={'/'}>
            首頁
          </NavLink>
        </li>
        <li>
          <NavLink to={'/menu'}>菜單/場地</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>關於我們</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>聯絡方式</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'white' }}>
          <Toolbar>
            <IconButton
              color='black'
              aria-label='open drawer'
              edge='start'
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={'white'} variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <img src={Logo} alt='logo' height={'70'} />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to={'/'}>
                    首頁
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>菜單/場地</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>關於我們</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>聯絡方式</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
