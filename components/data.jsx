"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { TotalSummary } from '@/data/info';
import { useTranslation } from '@/app/i18n/client';

export const BarChart = ({lng}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { t } =  useTranslation(lng,'dashboard'); // Replace 'dashboard' with the appropriate translation namespace

  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 8; i++) {
      data.push(Math.floor(Math.random() * 1000) + 1);
    }
    return data;
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
          labels: [
            t('dashboard.week1'),
            t('dashboard.week2'),
            t('dashboard.week3'),
            t('dashboard.week4'),
            t('dashboard.week5'),
            t('dashboard.week6'),
            t('dashboard.week7'),
            t('dashboard.week8'),
          ],
          datasets: [{
            label: t('dashboard.# of Revenues'),
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
  }, [t]); 

  return (
      <canvas ref={chartRef} />
  );
};
export const Doughnut = ({lng}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { TotalRevenue, TotalExpenses } = TotalSummary;
  const { t } = useTranslation(lng,'dashboard'); // Replace 'dashboard' with your translation namespace

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [t('dashboard.totalRevenue'), t('dashboard.totalExpenses')],
          datasets: [{
            label: t('dashboard.myFirstDataset'),
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
  }, [TotalRevenue, TotalExpenses, t]); // Include translations and state dependencies

  return (
    <div className="h-60 w-[40%]">
      <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
    </div>
  );
};
export const LineChart = ({lng}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { t } = useTranslation(lng,'dashboard'); // Replace 'dashboard' with your translation namespace

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const labels = [t('dashboard.week1'), t('dashboard.week2'), t('dashboard.week3'), t('dashboard.week4'), t('dashboard.week5'), t('dashboard.week6')];

      // Random data for two lines representing car rental orders
      const line1Data = [40, 55, 30, 70, 45, 60]; // Example data for Line 1
      const line2Data = [60, 45, 70, 30, 55, 40]; // Example data for Line 2

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: t('dashboard.carRentalOrdersLastMonth'),
            data: line1Data,
            fill: false,
            borderColor: '#E6E8EC',
            tension: 0.1
          }, {
            label: t('dashboard.carRentalCurrentMonth'),
            data: line2Data,
            fill: false,
            borderColor: '#5A6ACF',
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
  }, [t]); // Include translations as a dependency

  return (
    <canvas ref={chartRef} id="myChart" width="200" height="150"></canvas>
  );
};
export const TotalSummaryChart = ({ lng }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { TotalVehicles, TotalRentalFrequency } = TotalSummary;
  const { t } = useTranslation(lng ,'dashboard'); // Replace 'dashboard' with your translation namespace

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const data = {
        labels: [t('dashboard.totalVehicles'), t('dashboard.totalRentalFrequency')],
        datasets: [
          {
            label: t('dashboard.totalSummary'),
            data: [TotalVehicles, TotalRentalFrequency],
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
              text: t('dashboard.totalSummary'),
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
  }, [TotalVehicles, TotalRentalFrequency, t]); // Include translations and state dependencies

  return (
    <div className="w-full">
      <canvas ref={chartRef} id="myChart" width="200" height="280"></canvas>
    </div>
  );
};