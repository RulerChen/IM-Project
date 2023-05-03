import Header from '../components/Header';
import Footer from '../components/Footer';
import Parking from '../components/Parking';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{ my: 5, '& h4': { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant='h4' align='center'>
          如何聯絡我們
        </Typography>
        <Typography variant='body1' align='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio beatae ducimus magni
          nobis culpa praesentium velit expedita quae, corrupti, pariatur inventore laboriosam
          consectetur modi impedit error, repudiandae obcaecati doloribus.
        </Typography>
      </Box>
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
                    聯絡方式
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <LocationOnIcon sx={{ color: 'red', pt: 1 }} /> 大墩十九街112號, Taichung,
                    Taiwan
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: 'skyblue', pt: 1 }} /> ss.bookscoffee@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: 'green', pt: 1 }} /> 04 2310 0306
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Parking />
      <Footer />
    </>
  );
};

export default Contact;
