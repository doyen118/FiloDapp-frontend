import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from 'components/layout';
import Landing from 'page/landing';
import Positions from 'page/positions';

import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, test } from "wagmi/chains";

const { provider, webSocketProvider } = configureChains([mainnet], [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const theme = createTheme({
  typography: {
    fontFamily: 'Epilogue'
  }
});

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <WagmiConfig client={client}>
          <Layout>            
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/positions' element={<Positions />} />
            </Routes>
          </Layout>
        </WagmiConfig>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
