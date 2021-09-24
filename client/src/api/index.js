import axios from 'axios'
import moment from 'moment';


export const getCountries = () => axios.get(`https://api.covid19api.com/countries`)
export const getReportByCountry = (slug) =>   axios.get(
    `https://api.covid19api.com/dayone/country/${slug}?from=2021-01-01T00:00:00&to=${moment()
      .utc(0)
      .format()}`
  );

// export const vnexpressByDay = () => axios.get(`https://vnexpress.net/microservice/sheet/type/covid19_2021_by_day`);
export const getMapDataByCountryId = (countryId) =>
  import(
    `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
  );