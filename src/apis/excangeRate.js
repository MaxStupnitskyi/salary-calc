import axios from 'axios';

export default axios.create({
  baseURL: `https://bank.gov.ua/NBUStatService/v1/statdirectory`,
});
