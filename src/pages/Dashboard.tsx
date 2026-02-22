import DataCard from "../components/Dashboard/DataCard"
import dashboarddata from "../data/dasboarddata.json"
import { FiShoppingBag } from "react-icons/fi";
import { BiSolidNotepad } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
const Dashboard = () => {
  const {summary} = dashboarddata
    const previousSummary = {
    totalProducts: 2400,
    totalSales: 20000,
    totalIncome: 210000,
    totalExpenses: 15000
  };
   const calculateProgress =(current:number, previous:number) => {
    const diff = current - previous;
    const percentage = ((diff / previous) * 100).toFixed(1);
    return `${(diff >= 0 ? "+" : "")}${percentage}% increase`;
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DataCard title="Total Products" value={summary.totalProducts} progress={calculateProgress(summary.totalProducts, previousSummary.totalProducts)} icon={<FiShoppingBag />}/>
         <DataCard title="Total Sales" value={summary.totalSales} progress={calculateProgress(summary.totalSales, previousSummary.totalSales)}  icon={<BiSolidNotepad />}/>
         <DataCard title="Total Income" value={summary.totalIncome} progress={calculateProgress(summary.totalIncome, previousSummary.totalIncome)}  icon={<MdAttachMoney />}/>
         <DataCard title="Total Expenses" value={summary.totalExpenses} progress={calculateProgress(summary.totalExpenses, previousSummary.totalExpenses)}  icon={<CiCreditCard1 />}/>
      </div>
    </div>
  )
}

export default Dashboard
