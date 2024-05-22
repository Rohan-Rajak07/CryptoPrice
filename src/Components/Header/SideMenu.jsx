
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "./Header.css"
import { useState } from 'react';


export default function AnchorTemporaryDrawer() {
    const [open,setOpen]=useState(false);

    return(
        <div>
            <Button onClick={()=>setOpen(true)}><MenuOutlinedIcon /></Button>
            <Drawer anchor={"right"} open={open} onClose={()=>setOpen(false)}>
                <div className="sideContainer">
                    <a href="#"><p>Home</p></a>
                    <a href="#"><p>Compare</p></a>
                    <a href="#"><p>Watchlist</p></a>
                    <a href="#"><p>Dashboard</p></a>
                </div>
            </Drawer>
        </div>
    )
}