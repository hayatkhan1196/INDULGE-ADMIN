import React, { useState } from 'react'
import { styled, useTheme, makeStyles } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
// import Logo1 from '../assets/images/Logo png@2x.png';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import Typography from "@mui/material/Typography";
import './../../style/home.scss'


const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Menu = () => {
  const [open, setOpen] = useState(true);
  const [handleOpen, setHandleOpen] = useState(true)

  const handleClick = () => {
    setHandleOpen(!handleOpen);
  };
  return (
    <div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="drawer_header">
          <Typography variant="h6" noWrap component="div" color="black">
            INDULGE ADMIN </Typography>

        </DrawerHeader>
        <Divider style={{ background: '#ca2129' }} />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {/* 
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton onClick={handleClick}>

            </ListItemButton> */}

          <List component="div" disablePadding>

            <ListItemButton >
              <ListItemIcon >
                <StarBorder style={{ color: 'black' }} />
              </ListItemIcon>
              <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemText primary="Products" style={{ color: 'black' }} />
              </Link>

            </ListItemButton>
          </List>

          {/* </Link> */}
          <Link to="/sellers" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              <ListItemIcon>
                <PersonPinIcon style={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Sellers" style={{ color: 'black' }} />
            </ListItemButton>
          </Link>
          <Link to="/order" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              <ListItemIcon>
                <NoteAltIcon style={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Orders" style={{ color: 'black' }} />
            </ListItemButton>
          </Link>
          <ListItemButton >
            <ListItemIcon>
              <StarBorder style={{ color: 'black' }} />
            </ListItemIcon>
            <Link to="/Users" style={{ textDecoration: 'none', color: 'black' }} >
              <ListItemText primary="Users" />
            </Link>
          </ListItemButton>
          {/* <Link to="/feedback" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon style={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="FeedBack" style={{ color: 'black' }} />
            </ListItemButton>
          </Link> */}
        </List>
      </Drawer>

    </div>
  )
}

export default Menu
