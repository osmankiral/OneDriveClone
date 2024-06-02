import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Logs = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [totalDataCount, setTotalDataCount] = useState(0); // Toplam Veri Sayısı state'i

    useEffect(() => {
        // UserData endpoint'ini kullanarak tüm kullanıcı verilerini getir
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://onedrivebackend-5a68774f51f4.herokuapp.com/api/userdata');
                setUserData(response.data);
                setTotalDataCount(response.data.length); // Toplam Veri Sayısını güncelle
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`https://onedrivebackend-5a68774f51f4.herokuapp.com/api/userdata/${id}`);
            // Kullanıcıyı başarıyla sildikten sonra, kullanıcı verilerini yeniden getir
            const response = await axios.get('https://onedrivebackend-5a68774f51f4.herokuapp.com/api/userdata');
            setUserData(response.data);
            setTotalDataCount(prevCount => prevCount - 1); // Toplam Veri Sayısını azalt
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    // Mevcut sayfadaki verileri döndüren fonksiyon
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

    // Sayfa değiştikçe çağrılan fonksiyon
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
                <Link to="/adminpanel">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Admin Panele Geri Dön
                    </button>
                </Link>
            </div>
            <h2 className="text-xl font-semibold mb-4">Admin Panel - User Data</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p className="mb-2">Toplam Veri Sayısı: {totalDataCount}</p>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">IP Address</th>
                                <th className="border border-gray-400 px-4 py-2">Browser</th>
                                <th className="border border-gray-400 px-4 py-2">Location</th>
                                <th className="border border-gray-400 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((user, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-400 px-4 py-2">{user.ip}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.browser}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.location.split(',')[1].trim()}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <button onClick={() => handleDeleteUser(user._id)} className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-200">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <div className="flex justify-center mt-4">
                        {[...Array(Math.ceil(totalDataCount / itemsPerPage)).keys()].map(number => (
                            <button key={number} onClick={() => paginate(number + 1)} className="mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-400 rounded mb-2">
                                {number + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logs;
