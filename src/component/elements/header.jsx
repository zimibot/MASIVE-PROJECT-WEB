import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { Drawer, IconButton } from "@mui/material"
import { Close, Home, List, Menu, People } from "@mui/icons-material"
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useState } from "react"


export const Header = () => {

    return <div className="w-full bg-red-100">
        <div className="container mx-auto py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-56" src={Logo}></img>
                </div>
                <WebMenu></WebMenu>
                <MobileMenu></MobileMenu>
            </div>
        </div>
    </div>
}


const WebMenu = () => {
    return <div className="hidden gap-8 items-center lg:flex">
        <div>
            <NavLink to={"/"} className={active => {
                return active.isActive ? "border-b-2 border-b-red-500  py-2 text-red-500" : ""
            }} >Home</NavLink>
        </div>
        <div>
            <NavLink className={active => {
                return active.isActive ? "border-b-2 border-b-red-500  py-2 text-red-500" : ""
            }} to={"/kontak-kami"}>Kontak Kami</NavLink>
        </div>
        <div>
            <NavLink to={"/tentang-kami"} className={active => {
                return active.isActive ? "border-b-2 border-b-red-500 py-2 text-red-500" : ""
            }} >Tentang Kami</NavLink>
        </div>
        {/* <div>
            <ButtonBorder>
                Login
            </ButtonBorder>
        </div> */}
    </div>
}

const MobileMenu = () => {
    const [isShow, setisShow] = useState(false)

    const onShow = () => {
        setisShow(d => !d)
    }
    return <div className="max-lg:flex hidden">
        <IconButton size="large" onClick={onShow}>
            <Menu fontSize="large"></Menu>
        </IconButton>
        <Drawer open={isShow}>
            <div className="w-[320px]">
                <div className="flex items-center py-4 relative">
                    <img className="w-56" src={Logo}></img>
                    <div className="absolute right-0 px-4">
                        <IconButton onClick={onShow}>
                            <Close></Close>
                        </IconButton>
                    </div>
                </div>
                <Divider></Divider>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <Home fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <List fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Fitur</ListItemText>

                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <People fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Tentang Kami</ListItemText>
                    </MenuItem>
                    <Divider></Divider>
                    {/* <div className="flex px-4 gap-4">
                        <Button variant="contained" color="error" fullWidth>
                            Login
                        </Button>
                        <Button variant="outlined" color="error" fullWidth>
                            Register
                        </Button>
                    </div> */}
                </MenuList>
            </div>
        </Drawer>
    </div>
}