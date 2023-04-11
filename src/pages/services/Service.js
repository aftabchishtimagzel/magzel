import React from 'react'
import Services from '../../component/services/Services'
import Ceo from '../../component/indestries/Ceo'
import { Box } from '@mui/material'

function Service() {
  return (
      <div style={{ backgroundColor: '#f1f4fd' }}>
          <Services />
          <Box sx={{backgroundColor:'white',paddingTop:'10px'}}>
              <Ceo /> 
          </Box>
        
      </div>
  )
}

export default Service