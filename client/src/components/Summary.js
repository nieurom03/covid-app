import { Grid } from '@material-ui/core'
import {React, useState, useEffect} from 'react'
import LighChart from './Charts/LighChart'
import HighMap from './Charts/HighMap'
import {getMapDataByCountryId} from '../api'

export default function Summary({countryId, report,ISO2}) {
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        if (ISO2) {
            
        getMapDataByCountryId(ISO2)
            .then((res) => {
            setMapData(res);
            })
            .catch((err) => console.log({ err }));
        }
    }, [ISO2]);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <LighChart data={report} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <HighMap mapData={mapData}/>
            </Grid>

        </Grid>
    )
}
