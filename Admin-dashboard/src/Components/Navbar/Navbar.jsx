import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
const Navbar=()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <div className="h-[60px] w-[100%] shadow-md flex items-center px-10 justify-between">
           <div>
            <input 
            type="search" 
            name="search" 
            id="id"
            className="h-[35px] w-[400px] border ml-20 outline-none pl-3 rounded "
            placeholder="Search..."
            />
            </div>
            <div className='flex gap-10  items-center'>
                <Badge badgeContent={3} color="secondary">
                    <NotificationsIcon 
                    sx={{color:'#3f51b5'}}
                    />
                </Badge>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <Avatar alt="Remy Sharp" src="" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
            </div>
        </div>
    )
}

export default Navbar