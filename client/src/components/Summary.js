import { Grid } from '@material-ui/core'
import React from 'react'
import LighChart from './Charts/LighChart'

export default function Summary() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                {/* <LighChart data={[]}/> */}
            </Grid>
            <Grid item xs={12} sm={4}>

            </Grid>

        </Grid>
    )
}
