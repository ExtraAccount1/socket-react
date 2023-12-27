import React, { useState } from 'react';
import productList from '../src/products.json'; // Assuming the JSON file is in the same directory

export const ProductList = () => {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleNavbar = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  console.log(productList); // To verify if data is imported correctly

  return (
    <div className="bg-gray-100 h-screen flex">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 flex flex-col mt-16 justify-between ${isSidebarCollapsed ? 'hidden' : ''}`} >
        <div className="p-4">
          {/* Sidebar items */}
          <ul>
            <li className="py-2 p-4 cursor-pointer hover:bg-gray-300 rounded-full">
              <a href="#home" className="block text-white hover:text-black font-bold">Home</a>
            </li>
            <li className="py-2 p-4 cursor-pointer hover:bg-gray-300 rounded-full">
              <a href="#shorts" className="block text-white hover:text-black font-bold">Shorts</a>
            </li>
            <li className="py-2 p-4 cursor-pointer hover:bg-gray-300 rounded-full">
              <a href="#subscriptions" className="block text-white hover:text-black font-bold">Subscriptions</a>
            </li>
            <li className="py-2 p-4 cursor-pointer hover:bg-gray-300 rounded-full">
              <a href="#your-channel" className="block text-white hover:text-black font-bold">Your Channel</a>
            </li>
            {/* Add more sidebar items here */}
          </ul>
        </div>
      </aside>

      {/* Navbar */}
      <nav className={`bg-white shadow-md p-4 fixed top-0 w-full z-30 flex items-center justify-between ${isNavbarCollapsed ? 'hidden' : ''}`}>
        {/* Left Side - Logo */}
        <div className="flex items-center lg:ml-16">
          <span className="text-2xl font-extrabold mr-4">Hardik</span>
          {/* <span className="text-lg font-semibold mr-4">YourLogo</span> */}
        </div>

        {/* Center - Search Bar */}
        <div className="flex-grow mx-4 lg:ml-32"> 
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
          {/* You can add a search button/icon if needed */}
        </div>

        {/* Right Side - Profile */}
        <div className="flex items-center">
          {/* Profile Button with Avatar and Data */}
          <button className="flex items-center space-x-2">
            <img
              src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
              alt="Profile Avatar"
              className="w-8 h-8 rounded-full"
            />
            {/* <span>Username</span> */}
          </button>
          {/* Add profile data here */}
        </div>
      </nav>

      {/* Toggle buttons for Navbar and Sidebar */}
      <div className="fixed top-4 left-4">
        <button onClick={toggleNavbar}>Toggle Navbar</button>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto ml-0 mt-16">
        {/* Product List */}
        <div className="grid grid-cols-3 gap-4">
          {productList.map(product => (
            <div key={product.id} className="border rounded-md overflow-hidden">
              {/* Product card content */}
              <div className="p-4">
                <div className="flex justify-center">
                  <img
                    src={product.image || 'https://via.placeholder.com/150'} // Show placeholder image if product.image is null
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mt-2">{product.name}</h3>
                <p className="text-gray-700 text-center">Description: {product.description}</p>
                <p className="text-gray-700 text-center">Price: ${product.price}</p>
                <p className="text-gray-700 text-center">Quantity: {product.quantity}</p>
                {/* You can add an 'Order now' button or any other action here */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
