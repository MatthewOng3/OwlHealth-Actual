'use client'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TranscribeIcon from '@mui/icons-material/Transcribe';
import WidgetsIcon from '@mui/icons-material/Widgets';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  //Shrinks drawer based on theme spacing system
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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

//Custom styled MUI component with variants of styles depending on state
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
        {
            props: ({ open }) => open, //Returns a condition
            //styles to apply if condition defined in props is met
            style: {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme), //Internal child element
            },
        },
        {
            props: ({ open }) => !open,
            style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            },
        },
        ],
    }),
);
  
const DrawerIcons = [{
    title: 'Scribe',
    icon: <TranscribeIcon/>
},
{
    title: 'Templates',
    icon: <WidgetsIcon/>
}]
  

type SideDrawerProps = {
    setOpen: (state: boolean) => void;
    open: boolean;
}

/**
 * @description 
 * @param 
 * @returns 
 */
function SideDrawer({setOpen, open}: SideDrawerProps){

    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
            {DrawerIcons.map((text, index) => (
                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                    },
                    open
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                    ]}
                >
                    <ListItemIcon
                    sx={[
                        {
                        minWidth: 0,
                        justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                            }
                        : {
                            mr: 'auto',
                            },
                    ]}
                    >
                    {text.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={text.title}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                            }
                        : {
                            opacity: 0,
                            },
                    ]}
                    />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
    )
}

export default SideDrawer

 