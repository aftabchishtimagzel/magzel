import React from 'react'
import BlogCard from './Card'
import Data from './CardData'
import { Grid } from '@mui/material'

const Latest = () => {
  return (
    <Grid container gap={2} width={"100%"} justifyContent={"space-between"}>
            {
                Data.map((item,i)=>{
                    return(
         
                     <Grid  key={i} item xs={12} sm={6} md={3.5}>

                    <BlogCard img={item.img} title={item.title} des={item.des}/> 
                    </Grid>
                 )
                })
            }
       
    </Grid>
  )
}

export default Latest