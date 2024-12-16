import React from 'react';
import Chart from 'react-apexcharts';
import UsersChart from './CardChard';

const VerticalBarChart = () => {
    const options = {
        chart: {
            type: 'bar',
            toolbar: { show: true },
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                borderRadius: 7,
            },
        },
        dataLabels: { enabled: false },
        // xaxis: {
        //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //     labels: { style: { colors: '#fff' } }, // X o'q matn rangi
        // },
        yaxis: {
            max: 500,
            labels: { style: { colors: '#fff' } }, // Y o'q matn rangi

        },
        grid: { show: false },
        colors: ['#fff'],

    };

    const series = [
        {
            name: 'Active Users',
            data: [300, 200, 100, 300, 500, 400, 300, 450, 500, 300, 200, 100],
        },
    ];

    return (
        <div className='grid rounded-[20px] p-[20px] mb-[24px]'>
            <div className='active  rounded-[20px] mb-[24px]'>
                <Chart className='mb-[24px]' options={options} series={series} type="bar"  height={300} />
            </div>
            <UsersChart/>
        </div>
    )
};

export default VerticalBarChart;

