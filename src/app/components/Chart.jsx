import React from 'react'
import { CChart } from '@coreui/react-chartjs';
import '@coreui/coreui/dist/css/coreui.min.css'

const Chart = () => {
    const data = [40, 20, 12, 39, 10, 40, 39, 80, 40]
    // const data1 = [20, 50, 43, 19, 23, 42, 9, 2, 44]

    return (
        <div className="md:px-[80px]  flex justify-center bg-white">
            <CChart
                className='w-[700px]'
                type="bar"
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Male Dropout',
                            backgroundColor: 'red',
                            data: data,
                        },
                        // {
                        //     label: 'Female Dropout',
                        //     backgroundColor: 'red',
                        //     data: data1,
                        // },
                    ],

                }}

                labels="months"
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: 'red',
                            },
                            labels: {
                                color: 'green'
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'red',
                            },
                            ticks: {
                                color: 'red',
                            },
                        },
                        y: {
                            grid: {
                                color: 'red',
                            },
                            ticks: {
                                color: 'red',
                            },
                        },
                    },
                }}
            />
        </div>
    )
}

export default Chart