
const landingPageStyles = ((theme) => ({
  mainContainer: {
    position: 'relative',
    marginTop: '213px',
    marginLeft: '6.5vw',
    marginRight: '6.5vw',
    [theme.breakpoints.down('md')]: {
      marginTop: '213px',
    }
  },
  carouselButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  beforeArrowButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '30px',
    minWidth: '30px',
    position: 'absolute',
    left: '-6vw',
    top: '45%',
    width: '3.1vw',
    height: '3.1vw',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    fontSize: '20px',
    fontWeight: '500',
    cursor: 'pointer'
  },
  nextArrowButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '30px',
    minWidth: '30px',
    position: 'absolute',
    right: '-4vw',
    top: '45%',
    width: '3.1vw',
    height: '3.1vw',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  }
}));

export default landingPageStyles;
