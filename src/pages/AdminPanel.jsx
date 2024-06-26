import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [totalDataCount, setTotalDataCount] = useState(0); // Toplam Veri Sayısı state'i

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://onedrivebackend-5a68774f51f4.herokuapp.com/api/users"
      );
      setUsers(response.data);
      setTotalDataCount(response.data.length); // Toplam Veri Sayısını güncelle
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `https://onedrivebackend-5a68774f51f4.herokuapp.com/api/users/${id}`
      );
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  // Mevcut sayfadaki verileri döndüren fonksiyon
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  // Sayfa değiştikçe çağrılan fonksiyon

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <Link to="/logs">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Loglar
        </button>
      </Link>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2 border border-gray-300 text-center">
                Email
              </th>
              <th className="w-1/4 py-2 border border-gray-300 text-center">
                Password
              </th>
              <th className="w-1/4 py-2 border border-gray-300 text-center">
                Created At
              </th>
              <th className="w-1/4 py-2 border border-gray-300 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {currentItems.map((user) => (
              <tr key={user._id} className="border-b border-gray-300">
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {user.email}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {user.password}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-2 border border-gray-300"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(totalDataCount / itemsPerPage)).keys()].map(
            (number) => (
              <button
                key={number}
                onClick={() => paginate(number + 1)}
                className="mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-400 rounded mb-4"
              >
                {number + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
