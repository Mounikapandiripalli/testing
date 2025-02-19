import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroText = () => {
  return (
    <Box sx={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'500px'
    }}>
        <Typography variant="h3" font-weight='500'>
            Post graduate in mathematics
        </Typography>
    </Box>

  )
}

export default HeroText
