import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Chart from 'react-apexcharts'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styles from 'assets/jss/hiloCardStyles';
import { Button, Typography, TextField, Alert } from '@mui/material';

const useStyles = makeStyles(styles);

const HiloCard = (props) => {

  const { data } = props;

  const classes = useStyles();
  const [countDown, setCountDown] = React.useState(0);
  const [liveCountDown, setLiveCountDown] = React.useState(0);
  const [nextCountDown, setNextCountDown] = React.useState(0);
  const [isGraphOpen, setIsGraphOpen] = React.useState(false);
  const [isConfirm, setIsConfirm] = React.useState(false);
  const [betAmount, setBetAmount] = React.useState(0);
  const [approvedAmount, setApprovedAmount] = React.useState(20);
  const [approveErrorMessage, setApproveErrorMessage] = React.useState(false);

  const handleGraph = (status) => {
    console.log('status', status);
    setIsGraphOpen(status)
  }

  useEffect(() => {
    let timerId;

    setCountDown(60 * 8 + 54);

    timerId = setInterval(() => {
      setCountDown((countDown) => countDown - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, []);

  useEffect(() => {
    let liveTimerId;
    setLiveCountDown(60 * 2 + 43);

    liveTimerId = setInterval(() => {
      setLiveCountDown((liveCountDown) => liveCountDown - 1);
    }, 1000);

    return () => {
      clearInterval(liveTimerId);
    }
  }, []);

  useEffect(() => {
    let nextTimerId;
    setNextCountDown(56);

    nextTimerId = setInterval(() => {
      setNextCountDown((nextCountDown) => nextCountDown - 1);
    }, 1000);

    return () => {
      clearInterval(nextTimerId);
    }
  }, []);

  useEffect(() => {
    if (countDown < 0) {
      console.log("expired");
      setCountDown(0);
    }
  }, [countDown]);

  useEffect(() => {
    if (liveCountDown < 0) {
      console.log("expired");
      setLiveCountDown(0);
    }
  }, [liveCountDown]);

  useEffect(() => {
    if (nextCountDown < 0) {
      console.log("expired");
      setNextCountDown(0);
    }
  }, [nextCountDown]);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  const liveSeconds = String(liveCountDown % 60).padStart(2, 0);
  const liveMinutes = String(Math.floor(liveCountDown / 60)).padStart(2, 0);

  const nextSeconds = String(nextCountDown % 60).padStart(2, 0);
  const nextMinutes = String(Math.floor(nextCountDown / 60)).padStart(2, 0);

  var options = {
    series: [{
      name: "Desktops",
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    // fill: {
    //   type: 'solid'
    // },
    legend: {
      show: false
    },
    grid: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  useEffect(() => {
    if (betAmount > approvedAmount || approvedAmount == 0) {
      setApproveErrorMessage(true);
    } else {
      setApproveErrorMessage(false);
    }
  }, [betAmount]);

  return (
    <Box className={classes.blockContainer}>
      {
        isConfirm ?
          <Box className={classes.confirmBtns}>
            <Typography variant='body1' sx={{ color: 'white', fontSize: '20px', textAlign: 'center', padding: '0 40px' }}>
              Are you sure you want<br /> be xxx amount of<br /> tokens for max amount<br /> of xxx?
            </Typography>
            <Box sx={{ gap: '10px', marginTop: '10px' }}>
              <Button sx={{}} onClick={() => setIsConfirm(false)}>YES</Button>
              <Button style={{ backgroundColor: 'white', color: 'black' }} onClick={() => setIsConfirm(false)}>NO</Button>
            </Box>
          </Box> :
          <Box style={{ height: '100%' }}>
            <Box className={classes.header}>
              <Box className={classes.status}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="white" className="bi bi-play-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
                <Typography variant='body1'>
                  {data.status}
                </Typography>
              </Box>
              {
                data.status != 'LATER' &&
                <Box className={classes.time}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="white" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <Typography variant='body1'>
                    {
                      data.status == 'LIVE' && liveMinutes + ':' + liveSeconds
                    }

                    {
                      data.status == 'NEXT' && nextMinutes + ':' + nextSeconds
                    }
                  </Typography>
                </Box>
              }

              <Box className={classes.number}>
                <Typography variant='body1'>
                  #{data.number}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.progressBar}>
              <LinearProgress variant="determinate" value={parseInt(data.progressbar)} />
            </Box>
            {
              data.status == 'LATER' &&
              <Box className={classes.laterBox}>
                <Typography variant='body1'>
                  ENTRY STARTS
                </Typography>
                <Typography variant='h3'>
                  {minutes}:{seconds}
                </Typography>
              </Box>
            }
            {
              data.status != 'LATER' &&
              <Box className={classes.mainBox}>
                <Box className={classes.cardHeader}>
                  <span />
                  <Typography variant='body1'>
                    ETH/USD
                  </Typography>
                  {
                    !isGraphOpen &&
                    <Button className={classes.graph} onClick={() => handleGraph(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#4166F4" className="bi bi-graph-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                      </svg>
                    </Button>
                  }
                  {
                    isGraphOpen &&
                    <Button className={classes.graph} onClick={() => handleGraph(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </Button>
                  }

                </Box>
                <Box className={classes.priceBox} style={{ backgroundColor: isGraphOpen ? 'none' : '#031225' }}>
                  {
                    data.status == 'LIVE' &&
                    <Box className={classes.topBox}>
                      <Box>
                        <Typography variant='body1'>
                          Last Price
                        </Typography>
                        <Typography variant='h1'>
                          ${data.lastPrice}
                        </Typography>
                      </Box>
                      {
                        !isGraphOpen ?
                          <Box className={classes.tokenBox}>
                            <Typography variant='body1'>
                              <span className={classes.plus}>
                                {
                                  data.lastPrice >= data.lockedPrice ? "+" : '-'
                                }
                              </span>
                              ${(Math.abs(data.lastPrice - data.lockedPrice)).toFixed(2)}
                            </Typography>
                          </Box> :
                          <Box className={classes.mBox}>
                            <Typography variant='body1'>
                              <span style={{ marginRight: '8px' }}>1m</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4166F4" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </Typography>
                          </Box>
                      }

                    </Box>
                  }
                  {
                    data.status == 'NEXT' &&
                    <Box>
                      {approveErrorMessage &&
                        <Alert severity="warning">Please reapprove more tokens</Alert>
                      }
                      <Box className={classes.topBox}>
                        <Typography variant='body1'>
                          Commit:
                        </Typography>
                        {/* <Box className={classes.tokenBox} sx={{ width: '216px', textAlign: 'center', display: 'block' }}>
                          <Typography variant='body1' sx={{ textAlign: 'center' }}>
                            {data.commit}
                            <span style={{ marginLeft: '5px', color: '#E0E3E7' }}>$HILO</span>
                          </Typography>
                        </Box> */}
                        <TextField
                          value={betAmount}
                          onChange={(e) => setBetAmount(e.target.value)}
                          variant="filled"
                          type="number"
                          sx={{ mb: 5, background: "#031225", input: { color: "white" } }}
                          placeholder="0"
                          InputProps={{
                            inputProps: { min: 0 },
                          }}
                        ></TextField>
                      </Box>
                    </Box>
                  }
                  {
                    !isGraphOpen &&
                    <Box className={classes.bottomBox}>
                      <Box className={classes.lockedBox}>
                        <Typography variant='body1'>
                          {data.status == 'LIVE' ? 'Locked Price' : 'Current Price'}
                        </Typography>
                        <Typography variant='h3'>
                          {data.lockedPrice}
                        </Typography>
                      </Box>
                      <Box className={classes.prizeBox}>
                        <Typography variant='body1'>
                          Prize Pool
                        </Typography>
                        <Typography variant='h3'>
                          {data.prizePool}
                          <span style={{ marginLeft: '5px' }}>$HILO</span>
                        </Typography>
                      </Box>
                    </Box>
                  }
                  {
                    isGraphOpen &&
                    <Box>
                      <Chart options={options} series={options.series} type="area" />
                    </Box>
                  }

                </Box>
                {approveErrorMessage && !isGraphOpen && data.status == 'NEXT' &&
                  <Box className={classes.payoutBox} justifyContent='center'>
                    <Button
                      className={classes.payoutHigherButton}
                      onClick={() => console.log('You clicked approve button')}>
                      <Typography variant='body1'>
                        APPROVE
                      </Typography>
                    </Button>
                  </Box>
                }
                {!isGraphOpen && data.status == 'LIVE' &&
                  <Box className={classes.payoutBox}>
                    <Button
                      className={clsx(classes.payoutHigherButton, classes.noCursor)}                     
                      disabled={data.lastPrice <= data.lockedPrice ? true : false}>
                      <Typography variant='body1'>
                        HIGHER
                      </Typography>
                      <Typography variant='h3'>
                        Payout
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        {data.higherPayout}
                      </Typography>
                    </Button>
                    <Button 
                      className={clsx(classes.payoutLowerButton, classes.noCursor)}                    
                      disabled={data.lastPrice >= data.lockedPrice ? true : false}
                    >
                      <Typography variant='body1'>
                        LOWER
                      </Typography>
                      <Typography variant='h3'>
                        Payout
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        {data.higherPayout}
                      </Typography>
                    </Button>
                  </Box>
                }

                {!isGraphOpen && (!approveErrorMessage && data.status == 'NEXT') &&
                  <Box className={classes.payoutBox}>
                    <Button
                      className={classes.payoutHigherButton}
                      onClick={() => setIsConfirm(true)}
                      >
                      <Typography variant='body1'>
                        HIGHER
                      </Typography>
                      <Typography variant='h3'>
                        Payout
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        {data.higherPayout}
                      </Typography>
                    </Button>
                    <Button className={classes.payoutLowerButton}                      
                      onClick={() => setIsConfirm(true)} >
                      <Typography variant='body1'>
                        LOWER
                      </Typography>
                      <Typography variant='h3'>
                        Payout
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        {data.higherPayout}
                      </Typography>
                    </Button>
                  </Box>
                }
              </Box>
            }
          </Box>
      }
    </Box >
  )
}

export default HiloCard;
