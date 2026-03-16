
interface ConstantHeaderProps  {
  headerTitle: string;
  headerText: string;
  btnText: string;
  onClick: () => void;
};
const ConstantHeader = ({headerTitle, headerText, btnText, onClick}:ConstantHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 pt-4">
        <div>
            <h1 className="text-2xl font-bold">{headerTitle}</h1>
            <p className="text-sm text-gray-500">{headerText}</p>
        </div>
      <button className="bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold" onClick={onClick}>{btnText}</button>
    </div>
  )
}

export default ConstantHeader
