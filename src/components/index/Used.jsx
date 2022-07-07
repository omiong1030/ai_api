import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import "../../css/index/used.css"

export const Used = () => {

    { Chart.register(ArcElement) }

    const graphdata = {
        datasets: [
            {
                data: [15, 25, 35],
                backgroundColor: ['#B9D8F7', '#FFE5EC', '#DEDFE0'],
            },
        ],
        labels: ['item1', 'item2', 'item3'],
    };

    const doughnutOptions = {
        legend: {
            display: false,
        },
        plugins: {
            doughnutlabel: {
                labels: [
                    {
                        text: 'ITEMS',
                        color: '#666666',
                        font: {
                            size: 10,
                        },
                    },
                    {
                        text: 'TEST',
                        color: '#888888',
                    },
                ],
            },
        },
    };

  return (
      <div>
          <div className="used_title">
              <h1>
                  <a href="/">Home /</a>
                  Home
              </h1>
          </div>
          <div className="used_main_img">
            <div className='doughnut'>    
                  <Doughnut data={graphdata} options={doughnutOptions} />
            </div>
            <div className='doughnut'>
                <Doughnut data={graphdata} options={doughnutOptions} />
            </div>
            <div className='doughnut'>
                <Doughnut data={graphdata} options={doughnutOptions} />
            </div>
          </div>
      </div>
  )
}
