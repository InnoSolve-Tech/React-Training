import { Search } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const pages = ['Home', 'Our Stories', 'Pricing', "Support"];

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{zIndex:0, boxShadow:0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex', color:"#0047AB" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#0047AB',
              textDecoration: 'none',
              flexGrow:4
            }}
          >
            CoDesk
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"#0047AB"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                 <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Typography textAlign="center" sx={{color:"#0047AB"}}>{page}</Typography>
               </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none', color:"#0047AB" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#0047AB',
              textDecoration: 'none',
            }}
          >
            Codesk
          </Typography>
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                 page === "Support" ? 
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#0047AB', display: 'block', textTransform:"none" }}
              >
               <span style={{ paddingRight:"30px"}}>|</span> {page}
              </Button>:
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#0047AB', display: 'block', textTransform:"none" }}
            >
              {page}
            </Button> 
            ))}
          </Box>

          <Box sx={{ flexGrow: 0.5, color:"#0047AB", display: { xs: 'none', md: 'block' } }}>
            Sign In &nbsp;
               <Search/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
