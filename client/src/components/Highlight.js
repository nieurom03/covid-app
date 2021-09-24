import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard'

export default function Highlight({report}) {
    
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: report.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: report.Recoverd,
            type: 'recoverd'
        },
        {
            title: 'Tử vong',
            count: report.Deaths,
            type: 'deaths'
        }
    ]

    return (
        <Grid container spacing={3}>
            {
                summary.map((item) => {
                    <Grid item xs={12} sm={4}>
                        <HighlightCard title={item.title} count={item.count} type={item.type}/>
                    </Grid>
                })
            }
            
                
            
        </Grid>
    )
}
