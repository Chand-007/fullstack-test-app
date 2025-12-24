import "./reader.css";

export default function MarkReaderContainer({
  allCheck,
  setAllCheck,
  handleAllCheckbox,
  handleAllFavorite,
  pagination,
  setPagination,
}) {
  return (
    <div className="reader-container">
      <div className="reader-container-check">
        <input
          type="checkbox"
          checked={allCheck}
          onChange={handleAllCheckbox}
        />
        <button onClick={handleAllFavorite}>Favorite</button>
      </div>
      <div className="reader-container-pagination">
        <button
          onClick={() => {
            if (pagination <= 0) {
              setPagination(0);
            } else {
              setPagination((prev) => prev - 1);
            }
          }}
          disabled={pagination === 0}
        >
          prev
        </button>
        <button disabled={true} style={{ color: "white" }}>
          {pagination + 1}/25
        </button>
        <button
          onClick={() => {
            if (pagination > 24) {
              setPagination(24);
            } else {
              setPagination((prev) => prev + 1);
            }
          }}
          disabled={pagination === 24}
        >
          next
        </button>
      </div>
    </div>
  );
}
