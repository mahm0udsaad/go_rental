"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { TotalSummary } from '@/data/info';

export const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const generateRandomData = () => {
    return Array.from({ length: 8 }, () => Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6','Week 7','Week 8'],
          datasets: [{
            label: '# of Revenues',
            data: generateRandomData(),
            backgroundColor: [
              '#E6E8EC',
              '#5A6ACF',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-5/6 h-60">
      <h1 className='text-lg'>Revenues</h1>
      <canvas ref={chartRef} id="myChart" width="650" height="300"></canvas>
    </div>
  );
};
export const Doughnut = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const { TotalRevenue, TotalExpenses } = TotalSummary;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Total Revenue', 'Total Expenses'],
          datasets: [{
            label: 'My First Dataset',
            data: [TotalRevenue, TotalExpenses],
            backgroundColor: [
              '#5A6ACF',
              '#C7CEFF'
            ],
            hoverOffset: 4
          }]
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [TotalSummary]);

  return (
    <div className="h-60 w-[40%]">
      <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
    </div>
  );
};
export const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];

      // Random data for two lines representing car rental orders
      const line1Data = [40, 55, 30, 70, 45, 60]; // Example data for Line 1
      const line2Data = [60, 45, 70, 30, 55, 40]; // Example data for Line 2

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Car Rental Orders last month',
            data: line1Data,
            fill: false,
            borderColor: '#E6E8EC',
            tension: 0.1
          }, {
            label: 'Car Rental current month',
            data: line2Data,
            fill: false,
            borderColor:  '#5A6ACF',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
      <canvas ref={chartRef} id="myChart" width="200" height="150"></canvas>
  );
};
export const TotalSummaryChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const data = {
        labels: ['Total Vehicles', 'Total Rental Frequency'],
        datasets: [
          {
            label: 'Total Summary',
            data: [TotalSummary.TotalVehicles, TotalSummary.TotalRentalFrequency],
            backgroundColor: [
              '#F99C30',
              '#6463D6', 
            ],
            borderWidth: 1,
          },
        ],
      };

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Total Summary',
              font: { size: 18 },
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                font: { size: 14 },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [TotalSummary]);

  return (
    <div className="w-full">
      <canvas ref={chartRef} id="myChart" width="200" height="280"></canvas>
    </div>
  );
};