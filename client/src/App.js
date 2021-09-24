
import './App.css';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import {getCountries, getReportByCountry} from './api'
import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core';
import {sortBy} from 'lodash'

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [report, setReport] = useState([]);

    useEffect(()=> {
        getCountries().then(res => {

            setCountries( sortBy(res.data,'Country'))
        });
    },[])

    const handleOnChange = (e) => {
      setSelectedCountry(e.target.value);
    }

    useEffect(() => {
      getReportByCountry(selectedCountry).then(res => {
          //console.log({res});
          setReport(res.data);
      });
    },[selectedCountry])

  return (
    <Container style={{marginTop: 20}}>
      <CountrySelector countries={countries} handleOnChange={handleOnChange}/>
      <Highlight report={report}/>
      <Summary report={report}/>
    </Container>
  );
}

export default App;
