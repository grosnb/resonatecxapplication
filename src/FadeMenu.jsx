import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Component that fades the menu
const FadeMenu = ({ selected, setSelected }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.textContent) {
      setSelected(e.target.textContent);
    }
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ border: 'gray solid 1px', marginTop: '15px', color: 'white' }}
        startIcon={<ExpandMoreIcon />}
      >
        {selected}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <React.Fragment>
          <MenuItem name='Name' onClick={handleClose}>Name</MenuItem>
          <MenuItem name='Username' onClick={handleClose}>Username</MenuItem>
          <MenuItem name='Email' onClick={handleClose}>Email</MenuItem>
          <MenuItem name='Address' onClick={handleClose}>Address</MenuItem>
          <MenuItem name='Phone' onClick={handleClose}>Phone</MenuItem>
          <MenuItem name='Website' onClick={handleClose}>Website</MenuItem>
          <MenuItem name='Company' onClick={handleClose}>Company</MenuItem>
        </React.Fragment>
      </Menu>
    </div>
  );
}

export default FadeMenu
