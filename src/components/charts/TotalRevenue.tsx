import React from 'react'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import ReactApexChart from 'react-apexcharts'

import { ArrowCircleUpRounded } from '@mui/icons-material'

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'

function TotalRevenue() {
  return (
    <Box
    p={4}
    flex={1}
    bgcolor='#fcfcfc'
    display="flex"
    id="chart"
    flexDirection="column"
    borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $253.231
        </Typography>
        <Stack alignItems="center" direction="row" gap={1}>
          <ArrowCircleUpRounded  sx={{
            fontSize: 25, color: '475be8'
          }}/>
          <Stack>
          <Typography fontSize={15} color="#475be8">
            0.8%
          </Typography>
          <Typography fontSize={12} color="#808191">
            Than Last Month
          </Typography>
          </Stack>
        </Stack>
      </Stack>


      <ReactApexChart 
      series={TotalRevenueSeries}
      type='bar'
      height={310}
      options={TotalRevenueOptions}
      />
        
    

    </Box>


  )
}

export default TotalRevenue