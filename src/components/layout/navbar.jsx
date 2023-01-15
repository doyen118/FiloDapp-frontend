import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Modal from "@mui/material/Modal";

import menuIcon from 'assets/img/menu.png';
import logo from 'assets/img/logo.png';
import meteamaskIcon from 'assets/img/icon-metamask.png';
import walletconnectIcon from 'assets/img/icon-walletconnect.png';

import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import styles from 'assets/jss/navbarStyles';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const WALLETS = [
  {
    title: "Metamask",
    connector: 'METAMASK',
    icon: meteamaskIcon,
  },
  {
    title: "Wallet Connect",
    connector: 'WALLETCONNECT',
    icon: walletconnectIcon,
  },
];

const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

const useStyles = makeStyles(styles);

const Navbar = (props) => {

  const { handleOpen } = props;
  const classes = useStyles();

  const { connectAsync } = useConnect();

  const [isOpenConnectModal, setIsOpenConnectModal] = useState(false);
  const [wallet, setWallet] = useState(null);

  const connect = async (connector) => {
    if (connector == 'METAMASK') {
      const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });
      const userData = { address: account, chainId: chain.id };
      setIsOpenConnectModal(false);
      setWallet(account);
      console.log(userData)
    } else {
      const { account, chain } = await connectAsync( {connector: new WalletConnectConnector({ options: { qrcode: true } }) });
      const userData = { address: account, chainId: chain.id };
      setIsOpenConnectModal(false);
      setWallet(account);
      console.log(userData)
    }
  };

  const copyAddress = () => {
    if (!account || !navigator) return;
    navigator.clipboard.writeText(account);
    toast.success("Copied to clipboard.");
  };

  useEffect(() => {
    const isConnected = window.localStorage.getItem('wagmi.connected');
    const store = window.localStorage.getItem('wagmi.store');
    if (isConnected) {
      console.log('store', JSON.parse(store))
      setWallet(JSON.parse(store).state.data.account);
    }
  }, []);

  return (
    <>
      <Box position='relative' className={classes.navbar}>
        <Box className={classes.navbarInner} display='flex' mx='auto' alignItems='center' justifyContent='space-between'>
          <Box>
            <img src={logo} alt="" />
          </Box>
          <Box className={classes.navLinks}>
            {/* <Link href='/' underline='none' className={clsx(classes.activeLink)}>
              STATS
            </Link> */}
            <Link href='/positions' underline='none'>
              POSITIONS
            </Link>
            {
              !wallet ?
              <Button className={classes.connectWalletBtn} onClick={() => setIsOpenConnectModal(true)}>
                CONNECT
              </Button> :
              <Button className={classes.connectWalletBtn} onClick={() => console.log('wallet connected')}>
                { truncateAddress(wallet) }
              </Button>
            }
          </Box>
          <IconButton onClick={(handleOpen)}>
            <img src={menuIcon} alt="" />
          </IconButton>
        </Box>
      </Box>

      <Modal
        open={isOpenConnectModal}
        onClose={() => setIsOpenConnectModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          {WALLETS.map((wallet, index) => {
            return (
              <Button
                sx={{ marginBo: '10px' }}
                key={index}
                onClick={() => connect(wallet.connector)}
              >
                <img style={{ marginRight: '10px' }} src={wallet.icon} width='40px' />
                <Typography id="modal-modal-description">
                  {wallet.title}
                </Typography>
              </Button>
            );
          })}
        </Box>
      </Modal>
    </>
  )
}

export default Navbar;
