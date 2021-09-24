import React, { useEffect, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts';
import moment from 'moment';

const generateOption = (data) => {
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));

  return {
    chart: {
      height: 500,
    },
    title: {
      text: 'Tổng ca nhiễm',
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ['#F3585B'],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Tổng Ca nhiễm',
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
}

export default function LighChart(data) {
    const [options, setOptions] = useState({});
    console.log({data});
    useEffect(() =>{
        setOptions(generateOption(data));
    },[data])


    return (
        <div>
            <HighchartsReact 
            highcharts={Highchart}
            options={options}
            >

            </HighchartsReact>
        </div>
    )
}