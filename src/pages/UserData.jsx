import React, { useEffect, useState } from "react";
import { api_url } from "../api/api";

const UserData = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  // Filter users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic applied to filtered users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset to page 1 when the search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5">User Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentUsers.length > 0 ? (
          currentUsers.map((user, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg flex items-center"
            >
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="font-bold">
                  {user.name.first} {user.name.last}
                </h2>
                <p>{user.gender}</p>
                <p>{user.phone}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No users found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredUsers.length > usersPerPage && (
        <div className="mt-6 flex justify-center">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded-lg mr-2 disabled:bg-gray-300"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded-lg ml-2 disabled:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserData;
