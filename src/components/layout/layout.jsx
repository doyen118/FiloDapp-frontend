import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from 'components/footer';
import styles from 'assets/jss/layoutStyles';
const useStyles = makeStyles(styles);

const Layout = (props) => {

  const { children } = props;
  const classes = useStyles();
  const [open, setOpen ] = useState(false);

  return (
    <Box position='relative' className={classes.layout}>
      <Navbar handleOpen={() => setOpen(true)} />
      {children}
      <Footer />
      <Sidebar open={open} handleClose={() => setOpen(false)} />
    </Box>
  )
}

export default Layout;
