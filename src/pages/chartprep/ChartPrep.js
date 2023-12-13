import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import "../home/index.css";
import homeDashboard from '../../static/Dashboard';
import { Chart } from '../home/chart/Chart';
import HomeDataTable from '../home/datatable/DataTable';
export default function ChartPrep() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'left',
    borderRadius: '5px',
    display: 'block',
    boxShadow: 'rgba(0, 0, 0, 0.05)'
  }));
  return (

    <Box sx={{ width: '100%', pt: 5 }}>
      <Grid container rowSpacing={1} spacing={2}>
        {homeDashboard.map((deshdata, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={index}>
            <Item >
              <div className={`card_bx ${deshdata.className}`}>
                <div className='iconbx'>
                  <img src={deshdata.imgIcon} />
                </div>
                <div className='cardtext'>
                  <Typography>
                    {deshdata.cardDetail}
                  </Typography>
                </div>
                <div className='cardtext2'>
                  <Typography>
                    {deshdata.cardItem}
                  </Typography>
                </div>
              </div>
            </Item>

          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <Chart />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <HomeDataTable />
        </Grid>
      </Grid>

    </Box>

  )
}
