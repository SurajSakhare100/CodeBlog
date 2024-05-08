// AboutPage.js
import React from 'react';

function AboutPage() {
  return (
    <div className="'w-full h-full bg-gradient-to-tr from-black to-slate-900 px-8 lg:px-32 pt-20">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">About Our Website</h1>
        <p className="text-white">Learn more about our mission, purpose, and team.</p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec odio a quam molestie ultrices.</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec odio a quam molestie ultrices.</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec odio a quam molestie ultrices.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec odio a quam molestie ultrices.</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <footer className="text-center">
        <p className="text-gray-500">&copy; 2024 Our Website</p>
      </footer>
    </div>
  );
}

export default AboutPage;
