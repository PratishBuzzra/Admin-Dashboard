
import { Bar } from 'react-chartjs-2';

import dashboarddata from "../../data/dasboarddata.json"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,

} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
 

const SalesRevenueChart = () => {
    const { salesRevenue} = dashboarddata
    const data = {
    labels: salesRevenue.map((item)=>item.month),
    datasets: [
        {
            label: 'one-time revenue',
            data: salesRevenue.map((item)=>item.oneTime),
            backgroundColor: 'rgba(75, 192, 192, 02)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
        label: 'Recurring Revenue',
        data: salesRevenue.map((item) => item.recurring), 
        backgroundColor: 'rgba(255, 99, 132, 0.2)', 
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
}
const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Sales Revenue by month'
        },
        legend: {
            position: 'top'
        }
    },
      scales: {
      x: {
        stacked: false 
      },
      y: {
        stacked: false 
      }
    }

}
  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default SalesRevenueChart
