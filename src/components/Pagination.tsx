
interface PaginationProps {
  handlePrevPage: () => void;
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
};
const Pagination = ({handlePrevPage, currentPage, handleNextPage, totalPages}:PaginationProps) => {
  return (
    <div className="flex items-center justify-start gap-4 mt-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-30">Prev</button>
        <p className="text-sm font-medium">Page {currentPage} of {totalPages}</p>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-30">Next</button>
      
    </div>
  )
}

export default Pagination
