import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { ArrowBack, Help, KeyboardArrowDown, People, StickyNote2 } from '@mui/icons-material';
import Logo from "../../assets/logo.svg"

const drawerWidth = 240;

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
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(2.7, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

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

export function LayoutAdmin({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color="inherit" className="border-b py-2" sx={{
                boxShadow: 0,
            }} position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="flex justify-between w-full items-center">
                        <Typography variant="h6" noWrap component="div">
                            <img src={Logo}></img>
                        </Typography>
                        <div>
                            <Button color="inherit" startIcon={<Avatar sx={{ bgcolor: "red" }}>A</Avatar>} endIcon={<KeyboardArrowDown />}>
                                Admin
                            </Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <div className="flex justify-between items-center w-full pl-4 text-red-500">
                        <div> MENU</div>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                </DrawerHeader>
                <Divider />
                <div className="h-full bg-[#E6E6E6]">
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <NavLink to="/admin/kategori" className={res => {
                                return res.isActive ? "bg-red-500 block text-white isActive" : ""
                            }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 60,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                        <StickyNote2></StickyNote2>
                                    </ListItemIcon>
                                    <ListItemText primary={"Data Soal"} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </NavLink>
                            <NavLink to={"/admin/user"} className={res => {
                                return res.isActive ? "bg-red-500 block text-white isActive" : ""
                            }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 60,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                        <People></People>
                                    </ListItemIcon>
                                    <ListItemText primary={"Data User"} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </NavLink>
                            <NavLink to="/admin/helpcenter" className={res => {
                                return res.isActive ? "bg-red-500 block text-white isActive" : ""
                            }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 60,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                        <Help></Help>
                                    </ListItemIcon>
                                    <ListItemText primary={"Help Center"} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    </List>
                </div>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
                <DrawerHeader />
                <div className="container m-auto">
                    {children}
                </div>

            </Box>
        </Box>
    );
}
