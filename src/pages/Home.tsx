import {useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'

import  {
  PieChart,
  PropertyReferrals,
  PropertyCard,
  TotalRevenue
} from 'components'

function Home() {

  const {data, isLoading,isError} = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 5
      }
    }
  })

  const latestProperties = data?.data ?? []

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error...</div>
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
        title="Properties for Sale"
        value={684}
        series={[75,25]}
        colors={['#475be8', '#e4e8ef']}
        />
            <PieChart
        title="Properties for Rent"
        value={550}
        series={[60,40]}
        colors={['#475ae8', '#e4b8ef']}
        />
            <PieChart
        title="Total Customers"
        value={5723}
        series={[75,25]}
        colors={['#275be8', '#c4e8ef']}
        />
            <PieChart
        title="Properties for Cities"
        value={555}
        series={[75,25]}
        colors={['#475pe8', '#l4e8ef']}
        />
      </Box>


    <Stack mt="25px" width="100%" 
    direction={{xs : 'column' , lg: 'row'}} gap={4}>
      <TotalRevenue />
      <PropertyReferrals />
    </Stack>
    <Box 
    flex={1}
    borderRadius="15px"
    padding="20px"
    bgcolor="#fcfcfc"
    display="flex"
    minWidth="100%"
    mt="25px"
    flexDirection="column"
    >
      <Typography fontSize="18px" fontWeight={600} color="#11142d" >
        Lates Properties
      </Typography>
    <Box mt={2.5} sx={{display: "flex", flexWrap: "wrap", gap: 4}}>
    {latestProperties.map((property) => (
      <PropertyCard title={property.title} location={property.location} price={property.price} photo={property.photo} key={property._id} id={property._id}  />
    ))}
    </Box>
    </Box>


      </Box>
  )
}

export default Home