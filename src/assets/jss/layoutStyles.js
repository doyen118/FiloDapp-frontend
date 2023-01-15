import background from 'assets/img/background.jpg';

const layoutStyles = ((theme) => ({
  layout: {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
  }  
}));

export default layoutStyles;
