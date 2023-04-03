export default function Pagination({ setPagination, pagination }) {
  return (
    <div className="row align-items-center">
      <div className="col-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => setPagination(pagination - 1)}
              >
                Geri
              </a>
            </li>

            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => setPagination(1)}
              >
                1
              </a>
            </li>

            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => setPagination(2)}
              >
                2
              </a>
            </li>

            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => setPagination(3)}
              >
                3
              </a>
            </li>

            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => setPagination(pagination + 1)}
              >
                İleri
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
