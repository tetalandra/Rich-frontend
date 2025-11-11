import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import BTCChart from "./components/BTCChart";
import Wallet from "./components/Wallet";
import Recent from "./components/Recent";

function App() {
  return (
    <div className="min-h-screen bg-black w-full font-poppins flex pb-[50px]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex flex-col lg:flex-row w-full flex-1 min-w-0 md:px-0">
          <section className="flex-1 flex flex-col gap-8 min-w-0 ml-[30px] mr-0 max-w-full order-1 lg:order-none">
            <BTCChart />
            <div className="overflow-x-auto min-w-0">
              <div className="min-w-[500px] md:min-w-[700px] max-w-full">
                <Recent />
              </div>
            </div>
            <div className="mt-8 lg:hidden block">
              <Wallet />
            </div>
          </section>
          <aside className="lg:w-[370px] w-full flex flex-col min-w-0 px-6 lg:px-4 pt-2 lg:pt-0 mt-8 lg:mt-0 hidden lg:block">
            <Wallet />
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;