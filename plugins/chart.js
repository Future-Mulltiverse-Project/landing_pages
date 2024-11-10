import Chart from 'chart.js/auto';

export default (_, inject) => {
  inject('chart', Chart);
};