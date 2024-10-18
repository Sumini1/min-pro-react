import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ selectedUserId }) => {
  const location = useLocation(); 

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Home Breadcrumb */}
        <li className="inline-flex items-center">
          <Link
            to={"/"}
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-indigo-500 dark:hover:text-indigo-500"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>

        {/* Users Breadcrumb */}
        <li>
          <div className="flex items-center">
            <svg
              className="w-3 h-3 mx-1 text-indigo-500 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              to={"/users"}
              className={`text-sm font-medium ms-1 md:ms-2 ${
                location.pathname.includes("/users")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-blue-600 dark:text-indigo-500 dark:hover:text-indigo-500"
              }`}
            >
              Users
            </Link>
          </div>
        </li>

        {/* Users Detail Breadcrumb */}
        {selectedUserId && (
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-purple-500 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span
                className="text-sm font-medium text-purple-700 ms-1 md:ms-2"
              >
                Users Detail
              </span>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
