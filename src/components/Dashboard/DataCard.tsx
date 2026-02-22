
import type { ReactNode } from "react";

interface DataCardProps {
    title: string;
    value: number | string;
    progress: string;
    icon: ReactNode;
}
const DataCard = ({title, value, progress, icon}:DataCardProps) => {
  return (
    <div className="group flex items-start justify-between shadow-2xl bg-white p-6 rounded-xl" >
        <div className="flex flex-col gap-2 group-hover:scale-110 transition-all ease-in-out">
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-xs">{progress}</p>
        </div>
        <div className="group-hover:scale-110 transition-all ease-in-out bg-green-200 p-3 rounded-xl">
            <span className="text-2xl">{icon}</span>
        </div>
    </div>
  )
}

export default DataCard
