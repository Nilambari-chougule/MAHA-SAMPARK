import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Dashboard Sidebar */}
      <aside className="bg-blue-700 text-white w-full md:w-1/4 p-6 flex-shrink-0">
        <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
        <ul className="space-y-2">
          <SidebarLink to="/home" label="Home" />
          <SidebarLink to="/my-profile" label="My Profile" />
          <SidebarLink to="/mcs-officers" label="MCS Officers Profile" />
          <SidebarLink to="/govt-offices" label="Govt Offices" />
          <SidebarLink to="/revenue-forum" label="Revenue Forum" />
          <SidebarLink to="/news" label="News" />
          <SidebarLink to="/department-info" label="Department Information" />
          <SidebarLink to="/todays-birthday" label="Today's Birthday" />
          <SidebarLink to="/todays-joining" label="Today's Joining" />
          <SidebarLink to="/feedback" label="Feedback" />
          <SidebarLink to="/signout" label="Sign Out" />
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Welcome to the Dashboard</h2>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OptionCard title="MCS Officer Profile" />
          <OptionCard title="Department Information" />
          <OptionCard title="News" />
          <OptionCard title="Govt Offices Number" />
          <OptionCard title="Revenue Forum" />
          <OptionCard title="Feedback" />
          <OptionCard title="Today's Birthday" />
          <OptionCard title="Today's Joining" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4 text-center w-full mt-auto">
        <p className="text-sm">&copy; 2024 MAHA SAMPARK. All rights reserved.</p>
      </footer>
    </div>
  );
}

const OptionCard = ({ title }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <Link
      to={`/${title.replace(/\s+/g, '-').toLowerCase()}`}
      className="text-blue-500 underline hover:text-blue-600 mt-auto"
    >
      Go to {title}
    </Link>
  </div>
);

const SidebarLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="block py-2 px-4 rounded hover:bg-blue-800 transition duration-200"
    >
      {label}
    </Link>
  </li>
);

export default HomePage;
