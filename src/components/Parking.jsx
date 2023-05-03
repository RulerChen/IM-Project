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
  const [parking, setParking] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://datacenter.taichung.gov.tw/swagger/OpenData/56a846ca-bc23-4754-b14a-0170f0541e09',
      )
      .then((res) => {
        console.log(res.data[6].ParkingLots);
        console.log(res.data[6].ParkingLots[0].AvailableCar);
        console.log(res.data[6].ParkingLots[2].AvailableCar);
        console.log(res.data[6].ParkingLots[3].AvailableCar);
        setParking(res.data[6].ParkingLots);
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
                      href='https://goo.gl/maps/22yeSG7oeNuV7usDA'
                      target='_blank'
                      color={'inherit'}
                    >
                      <span>
                        <TravelExploreIcon sx={{ color: 'green', pt: 0.5 }} />
                        新光三越停車場
                      </span>
                      <span>剩餘車位 : {parking[0]?.AvailableCar}</span>
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
                      href='https://goo.gl/maps/EFwAUzdG5VKWrhE97'
                      target='_blank'
                      color={'inherit'}
                    >
                      <span>
                        <TravelExploreIcon sx={{ color: 'green', pt: 0.5 }} />
                        市政公園停車場
                      </span>
                      <span>剩餘車位 : {parking[2]?.AvailableCar}</span>
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
                      href='https://goo.gl/maps/2pyYgSmWs6h6jTtu9'
                      target='_blank'
                      color={'inherit'}
                    >
                      <span>
                        <TravelExploreIcon sx={{ color: 'green', pt: 0.5 }} />
                        惠新停車場
                      </span>
                      <span>剩餘車位 : {parking[3]?.AvailableCar}</span>
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
