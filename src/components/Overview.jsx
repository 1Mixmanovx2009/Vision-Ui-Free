import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    colors: ['#0075FF'], // Chiziq va gradient rangi
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: '#fff' } }, // X o'q matn rangi
    },
    yaxis: {
      max: 500,
      labels: { style: { colors: '#fff' } }, // Y o'q matn rangi
    },
    grid: { borderColor: 'rgba(255,255,255,0.2)' }, // Grid rangini sozlash
  };

  const series = [
    { name: 'Data', data: [450, 150, 250, 300, 400, 500, 450, 300, 350, 200, 450, 400] },
  ];

  return (
    <div className='pt-[28px] pl-[21px] mb-[24px]'
      style={{
        background: 'linear-gradient(126.97deg, #041644, #0042B5',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
        <p className='text-white font-[700] text-[18px] leading-[25.2px]'>Sales overview</p>
        <p className='text-[#8998AE] font-[400] text-[14px] leading-[19.6px]'><span className='text-[#029C6C] font-[700] text-[14px] leading-[19.6px]'>(+5) more </span>in 2021</p>

      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default AreaChart;
