
import { useState } from 'react';

import Sidebar from './layout/Sidebar/Sidebar';
import TopBar from './layout/TopBar/TopBar';

import FindPeopleModal from './dashboard/FindPeopleModal/FindPeopleModal';
import GridsTable from './dashboard/GridsTable/GridsTable';
import LatestCard from './dashboard/LatestCard/LatestCard';
import ProductDemoCard from './dashboard/ProductDemoCard/ProductDemoCard';
import WelcomeHeader from './dashboard/WelcomeHeader/WelcomeHeader';

const DashboardPage = () => {

  const [isFindPeopleOpen, setFindPeopleOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white relative">

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0" style={{ backgroundColor: '#ffffff' }}>

        {}
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        {}
        <main className="flex-1 overflow-y-auto">

          {}
          <WelcomeHeader
            userName="Tim"
            onFindPeopleClick={() => setFindPeopleOpen(true)}
          />

          {}
          <div className="px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <LatestCard />
            <ProductDemoCard />
          </div>

          {}
          <GridsTable />

          {}
          <div className="h-6" />
        </main>
      </div>

      {}
      {isFindPeopleOpen && (
        <FindPeopleModal onClose={() => setFindPeopleOpen(false)} />
      )}
    </div>
  );
};

export default DashboardPage;
