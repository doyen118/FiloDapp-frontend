const footerStyles = ((theme) => ({
  footer: {
    paddingTop: '88px',
    paddingBottom: '36px',
    '& h3': {
      fontSize: '38px',
      lineHeight: '39px',
    },
    '& p': {
      fontSize: '31px',
      lineHeight: '1.5'
    },
    [theme.breakpoints.down('md')]: {      
      paddingTop: '50px',
      paddingBottom: '20px',
      '& h3': {
        fontSize: '24px',
        lineHeight: '26px'
      },
      '& p': {
        fontSize: '16px'
      }
    }
  },
  socialLinks: {
    marginTop: '73px',
    marginBottom: '73px',
    '& .MuiLink-root': {
      display: 'flex',
      marginLeft: '22px',
      marginRight: '22px',
      color: 'white',
      textDecoration: 'none'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
      marginBottom: '24px',
      '& .MuiLink-root': {      
        marginLeft: '12px',
        marginRight: '12px'      
      }
    }
  }
}));

export default footerStyles;
