import React, { useEffect, useState } from 'react'
import {FormControl, FormHelperText, InputLabel, NativeSelect} from '@material-ui/core'



export default function CountrySelector({value, handleOnChange, countries}) {

    

    return (
        <FormControl>
            <InputLabel htmlFor="select-country" shrink>Quốc gia</InputLabel>
            <NativeSelect 
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'select-country'
                }}
            >
                {
                    countries.map((country) => {
                        return <option value={country.Slug} key={country.ISO2}>  {country.Country} </option>
                    })
                }
            </NativeSelect>
            <FormHelperText>Lựa chọn Quốc gia</FormHelperText>
        </FormControl>
    )
}
