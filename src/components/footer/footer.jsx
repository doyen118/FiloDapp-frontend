import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import styles from 'assets/jss/footerStyles';

const useStyles = makeStyles(styles);

const Footer = () => {

  const classes = useStyles();

  return (
    <Box className={classes.footer}>      
      <Box display='flex' justifyContent='center' className={classes.socialLinks}>
        <Link href='/'>
          HOME
        </Link>
        <Link href='https://www.hilodapp.com'>
          ABOUT
        </Link>
        <Link href='https://hilo-1.gitbook.io/hilo-white-paper/' target="_blank">
          WHITEPAPER
        </Link>
        <Link href='mailto:Support@hilodapp.com' >
          CONTACT
        </Link>
      </Box>      
    </Box>
  )
}

export default Footer;
