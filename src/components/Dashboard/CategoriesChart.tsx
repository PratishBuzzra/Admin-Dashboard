import { Doughnut } from 'react-chartjs-2';
import dashboarddata from "../../data/dasboarddata.json"
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    type ChartOptions,
} from 'chart.js'

ChartJS.register(
    ArcElement, Tooltip, Legend
)
const CategoriesChart = () => {
    const {topCategories} = dashboarddata
    const data = {
        labels: topCategories.map((item)=>item.category),
        datasets: [
            {
                data: topCategories.map(item => item.sales),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',  
                    'rgba(255, 99, 132, 0.6)',  
                    'rgba(54, 162, 235, 0.6)',  
                    'rgba(255, 159, 64, 0.6)',  
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)', 
                    'rgba(255, 99, 132, 1)', 
                    'rgba(54, 162, 235, 1)', 
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1
            }
        ]
    };
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
         maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Sales by Category'
            },
            tooltip: {
                callbacks: {
                     label: (tooltipItem) => {
                        const category = tooltipItem.label;
                        const sales = tooltipItem.raw;
                        const percentage = topCategories.find(item => item.category === category)?.percentage;
                        return `${category}: $${sales} (${percentage}% of total)`;
                    }
                }
            },
            legend: {
                position: 'top'
            }
        }
    }
  return (
    <div className='relative h-full'>
       <Doughnut data={data} options={options} />
    </div>
  )
}

export default CategoriesChart
