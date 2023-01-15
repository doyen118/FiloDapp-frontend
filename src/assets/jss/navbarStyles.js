const navbarStyles = ((theme) => ({
  navbar: {
    top: '0',
    left: '0',
    width: '100%'
  },
  navbarInner: {
    width: 'calc(100% - 48px)',
    maxWidth: '1320px',
    paddingTop: '70px',
    '& h3': {
      fontSize: '38px',
      lineHeight: '1'
    },

    '& .MuiIconButton-root': {
      display: 'none',
      padding: '12px',
      backgroundColor: '#4166F4',
      borderRadius: '7px',
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: '30px',
      '& h3': {
        fontSize: '24px'
      },
      '& .MuiIconButton-root': {
        display: 'inline-flex',
        '& img': {
          width: '24px',
          height: '18px'
        }
      }
    }
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiLink-root': {
      color: '#fff',
      fontSize: '20px',
      lineHeight: '27px',
      marginLeft: '46px',
      fontWeight: '500',
      
      // '&:hover': {
      //   position: 'relative',
      //   '&::before': {
      //     position: 'absolute',
      //     width: '40px',
      //     content: `''`,
      //     height: '2px',
      //     backgroundColor: '#E6C39F',
      //     right: '0',
      //     bottom: '-5px'
      //   }
      // }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  activeLink: {
    '&.MuiLink-root': {
      position: 'relative'      
    }
  },
  sidebar: {
    width: '300px',
    boxSizing: 'border-box',
    padding: '30px 16px',
    '& .MuiLink-root': {
      display: 'block',
      marginBottom: '24px'
    }
  },
  connectWalletBtn: {
    '&.MuiButton-root': {
      width: '132px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '42.6px',
      color: 'black',
      backgroundColor: 'white',
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '23.25px',
      marginLeft: '46px'
    },
    '&:hover': {
      opacity: '0.8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '42.6px',
      color: 'black',
      backgroundColor: 'white !important',
      fontSize: '20px',
      lineHeight: '23.25px',
    }
  }
}));

export default navbarStyles;
