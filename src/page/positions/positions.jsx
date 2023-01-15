import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import styles from 'assets/jss/positionsPageStyles';
import { Box, Button } from '@mui/material';

const useStyles = makeStyles(styles);

function createData(predictions, amount, result) {
  return { predictions, amount, result };
}

const rows = [
  createData('HIGH', 100000, 'WIN'),
  createData('LOW', 170000, 'LOST'),
  createData('HIGH', 80000, 'WIN'),
  createData('LOW', 100000, 'WIN'),
  createData('HIGH', 17000, 'WIN'),
  createData('HIGH', 100000, 'WIN'),
  createData('HIGH', 130000, 'WIN'),
  createData('HIGH', 120000, 'LOST'),
  createData('HIGH', 100000, 'WIN'),
  createData('HIGH', 100000, 'WIN'),
  createData('LOW', 170000, 'LOST'),
  createData('HIGH', 80000, 'WIN'),
  createData('LOW', 100000, 'WIN'),
  createData('HIGH', 17000, 'WIN'),
  createData('HIGH', 100000, 'WIN'),
  createData('HIGH', 130000, 'WIN'),
  createData('HIGH', 120000, 'LOST'),
  createData('HIGH', 100000, 'WIN')
];

const Positions = () => {
  const classes = useStyles();

  const priceFormat = (number) => {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }

  return (
    <Box className={classes.block}>
      <Box className={classes.body}>
        <Box className={clsx(classes.trow, classes.header)}>
          <Box>#</Box>
          <Box>PAIR</Box>
          <Box>PREDICTIONS</Box>
          <Box>AMOUNT</Box>
          <Box>RESULT</Box>
          <Box></Box>
        </Box>
        <Box className={classes.scollBox}>
          {
            rows.map((row, key) => (
              <Box className={classes.trow} key={key}>
                <Box key={key}>{key + 1}</Box>
                <Box>ETH/USD</Box>
                <Box>{row.predictions}</Box>
                <Box>{priceFormat(row.amount)} $HILO</Box>
                <Box>{row.result}</Box>
                <Box >
                  <Button className={classes.claimBtn}>
                    CLAIM
                  </Button>
                </Box>
              </Box>
            ))
          }
        </Box>
      </Box>   
    </Box>
  );
}

export default Positions;