import React from 'react';
import Chart from 'react-apexcharts';

const Satisfaction = () => {
  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -100,
        endAngle: 100,
        hollow: {
          size: '70%',
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: '#fff',
            fontSize: '17px',
          },
          value: {
            color: '#fff',
            fontSize: '30px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#00b894'],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Smile'],
  };

  const series = [95];

  return (
    <div className='smile w-[500px] rounded-[20px] p-[16px]'>
      <p className='text-[18px] font-[700] leading-[25.2px] text-white mb-[15px]'>Satisfaction Rate</p>
      <p className='text-[14px] font-[400] leading-[14px] text-[#A0AEC0]'>From all projects</p>
      <Chart options={options} series={series} type="radialBar" height={250} />
    </div>
  );
};

export default Satisfaction;
