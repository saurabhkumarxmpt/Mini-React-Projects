import * as React from 'react';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/sidebar.css'
const Sidebar=()=>{
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [open, setOpen] = React.useState(true);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };

      const handleClick = () => {
        setOpen(!open);
      }
    return(
        <div className="h-screen w-[240px] fixed border bg-white z-20">
            <div>
                <h2
                className="text-3xl py-6 px-12"
                >Portal</h2>
            </div>
            <div className='h-[60%] overflow-scroll custom-scrollbar'>
            <Box 
            sx={{ width: '100%', maxWidth: 320, fontSize:'small'}}
            >
      <List component="nav" aria-label="main mailbox folders">
        <NavLink to="/">
        <ListItemButton 
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)
          }
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        </NavLink>
        <NavLink to="/docs">
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Docs" />
        </ListItemButton>
        </NavLink>
        <NavLink to='/orders'>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        </NavLink>
        <Divider />
        <ListItemButton 
        onClick={handleClick}
        >
        <ListItemIcon>
          <ContentCopyIcon />
        </ListItemIcon>
        <ListItemText primary="Pages" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4,}}>
            <ListItemText primary=" | Notifications" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary=" | Account" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItemButton>
      </List>
    </Box>
            </div>
            <div className="border-top h-auto mt-[45%] px-1">
            <Divider />
            <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
            
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>
            </div>
        </div>
    )
}

export default Sidebar