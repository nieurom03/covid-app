
import './App.css';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import {getCountries, getReportByCountry} from './api'
import React, { useEffect, useState , useMemo } from 'react'
import { Container, Typography } from '@material-ui/core';
import {sortBy} from 'lodash'
import moment from 'moment';
import Province from './components/Province';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [report, setReport] = useState([]);
  const [iso2, setIso2] = useState([]);
    useEffect(()=> {

        getCountries().then(res => {

            setCountries( sortBy(res.data,'Country'))
            setSelectedCountry('vietnam');
            setIso2('vn');
        });
    },[])

    const handleOnChange = (e) => {

      setSelectedCountry(e.target.value);
      const {ISO2} = countries.find((country) => country.Slug === e.target.value)

      setIso2(ISO2.toLowerCase());
    }

    useEffect(() => {
      if(selectedCountry){
        // const {Slug} = countries.find((country) => country.ISO2.toLowerCase() === selectedCountry)
        getReportByCountry(selectedCountry).then(res => {
            //console.log({res});
            //res.data.pop();
            setReport(res.data);

        });
      }
      
    },[selectedCountry ])

    

    const summary = useMemo(() => {

        if (report && report.length) {
          const latestData = report[report.length - 1];
          // console.log({latestData});
          return [
              {
                  title: 'Số ca nhiễm',
                  count: latestData.Confirmed,
                  type: 'confirmed'
              },
              {
                  title: 'Số ca khỏi',
                  count: latestData.Recovered,
                  type: 'recovered'
              },
              {
                  title: 'Tử vong',
                  count: latestData.Deaths,
                  type: 'deaths'
              }
          ]
      }
      return [];
  },[report])

  return (
    <Container style={{marginTop: 20}}>
      <Typography variant='h2' component='h2'>
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountry}/>
      
      <Highlight summary={summary}/>
      
      <Province />
      
      <Summary countryId={selectedCountry} report={report} ISO2={iso2}/>
    </Container>
  );
}

export default App;
