import {  Grid } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard'

export default function Highlight({summary}) {

    // console.log({todayCases});
    
    return (

            
            <Grid container spacing={3}>
                {
                    summary.map((item) => (
                        <Grid item xs={12} sm={4} key={item.title}>
                            <HighlightCard title={item.title} count={item.count} type={item.type}/>
                        </Grid>
                    ))
                }
                
            </Grid>

       
    )
}
