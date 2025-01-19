'use client';
 
import { styled } from '@mui/material/styles';
import React from 'react';
import { Box, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import SideDrawer from "../components/side-drawer";
import { COLORS, DRAWER_WIDTH } from "../util/constants/app-dimensions";

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import TranscribeIcon from '@mui/icons-material/Transcribe';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { DrawerButtons } from '../util/types/component-types';

export const drawer_icons: DrawerButtons[] = [{
    title: 'Scribe',
    icon: <TranscribeIcon/>,
    page: '/dashboard'
},
{
    title: 'Templates',
    icon: <WidgetsIcon/>,
    page:  '/dashboard/templates'
}]
  
 
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: COLORS.green100,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
   
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div">
            Owl Health
          </Typography>
        </Toolbar>
      </AppBar>

        <SideDrawer open={open} set_open={setOpen} drawer_buttons={drawer_icons}/> 
              
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: COLORS.lightgreen200 }}>
          <Toolbar /> {/* Spacer for AppBar */}
          {children}
        </Box>
    </Box>
  );
}
