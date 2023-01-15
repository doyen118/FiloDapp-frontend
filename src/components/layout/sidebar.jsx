import React from 'react';
import { makeStyles } from "@mui/styles";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import styles from 'assets/jss/navbarStyles';
const useStyles = makeStyles(styles);

const Sidebar = (props) => {

  const { open, handleClose } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={handleClose}
    >
      <Box className={classes.sidebar}>
        <Box display='flex'>
          <IconButton sx={{ marginLeft: 'auto' }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Link href='/' underline='none'>
          STATS
        </Link>
        <Link href='/' underline='none'>
          POSITIONS
        </Link>
        <Link href='/' underline='none'>
          NEXT POOLS
        </Link>
      </Box>
    </Drawer>
  )
}

export default Sidebar;
