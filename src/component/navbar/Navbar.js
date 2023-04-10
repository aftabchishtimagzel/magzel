import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from './Data';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const drawerWidth = 240;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
           Magzel
            </Typography>
            <Divider />
            <List sx={{ display: "flex", flexDirection: 'column' }}>

                {navItems.map(({ id, title, url }) => (
                    <Link style={{ color: 'white', textDecoration: 'none' }} key={id} to={url}>
                        <Stack direction="column" alignItems="center">

                            <p style={{ fontSize: "13px",color:'black' }}>{title}</p>
                        </Stack>
                    </Link>
                ))}


            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'black', color: 'white'}}  >
                <Toolbar sx={{ width: { sx: '100%', sm: '100%', md: '60%' } }} mx={'auto'}>   
                  
                    <Box
                        variant="h5"
                        sx={{ flexGrow: 1 }}
                   >
                        <Link to='/' style={{
                            textDecoration: 'none',
                            color:'white'
                    }}>
                      
                            Magzel
                         </Link>
                    </Box>
                   
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        
                        {navItems.map(({ id, title, url }) => (
                            <Link style={{ color: 'white', textDecoration: 'none' }} key={id} to={url}>
                            <Button sx={{ color: '#fff' }} >
                                    {title}
                                </Button>
                                </Link>
                        ))}
                    </Box>
                    
                    <Box>
                        <Button variant="contained" sx={{
                            bgcolor: '  #db5156', color: 'white', padding: '10.5px 50.5px', borderRadius: '64px', ":hover": {
                                bgcolor: '  #db5156'
                            }
                        }}>Contact Us</Button>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" >
                <Toolbar />

            </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;