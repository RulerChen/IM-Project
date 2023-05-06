/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const Parking = () => {
  const [parking, setParking] = useState({});
  const [parking2, setParking2] = useState({});
  // TODO: change api
  useEffect(() => {
    axios
      .get(
        'https://motoretag.taichung.gov.tw/DataAPI/api/ParkingAPI?fbclid=IwAR2ZxQxUtjExm48SVcOIc5YTx9vC5q8Egy5Z8t53mGJ0BJl5OmupJKflEbo&ID=bettermoney02',
      )
      .then((res) => {
        setParking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        'https://motoretag.taichung.gov.tw/DataAPI/api/ParkingAPI?fbclid=IwAR2ZxQxUtjExm48SVcOIc5YTx9vC5q8Egy5Z8t53mGJ0BJl5OmupJKflEbo&ID=UnicomDD',
      )
      .then((res) => {
        setParking2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            m: 3,
            width: '600px',
            '@media (max-width:600px)': {
              width: '300px',
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: 'black', color: 'white' }} align='center'>
                    停車地點
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                      }}
                      component='a'
                      href='https://goo.gl/maps/Ck9EFWMwY7J63ERT8'
                      target='_blank'
                      color={'inherit'}
                    >
                      <span>
                        <TravelExploreIcon sx={{ color: 'green', pt: 0.5 }} />
                        東興立體停車場
                      </span>
                      <span>剩餘車位 : {parking?.AvailableCar}</span>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                      }}
                      component='a'
                      href='https://goo.gl/maps/fjWXiqdzP84kiZ2k6'
                      target='_blank'
                      color={'inherit'}
                    >
                      <span>
                        <TravelExploreIcon sx={{ color: 'green', pt: 0.5 }} />
                        台灣聯通停車場-台中大墩場
                      </span>
                      <span>剩餘車位 : {parking2?.AvailableCar}</span>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Parking;
