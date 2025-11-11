import React from "react";
import Avatar from "../../assets/Big.png";
import People from "../../assets/People.png";
import SupportSidebar from "../../support/SupportSidebar";
import SearchIcon from "../../assets/Search.png";

const poolsTop = [
  {
    name: "Pool Alpha",
    by: "Alexander D",
    members: 120,
    desc: "A pool for Medium-term BTC growth with weekly buys.",
  },
  {
    name: "AndraBag",
    by: "Will Chrisset",
    members: 90,
    desc: "Mixed strategy pool with dollar-cost averaging enabled.",
  },
  {
    name: "Pool Memphis",
    by: "Linda Manya",
    members: 27,
    desc: "A pool for aggressive weekly buys managed by experts.",
  },
];

const myPools = [
  { name: "Physic Tied", by: "Alex Newton", members: 96 },
  { name: "Lama pitPool", by: "Samuel U", members: 14 },
  { name: "Pool Alpha", by: "Alexander D", members: 120 },
];

const Card = ({ name, by, members, desc, compact = false }) => {
  return (
    <div className="rounded-2xl border-2 border-yellow-500/80 bg-black/50 p-6 md:p-7 shadow-[0_0_20px_rgba(250,204,21,0.08)] text-white font-poppins h-full">
      <div className="text-2xl md:text-3xl font-semibold mb-1">{name}</div>
      <div className="text-yellow-400 text-base md:text-lg mb-4">By {by}</div>
      <div className="flex items-center gap-2 text-gray-300 text-base md:text-lg mb-3">
        <img src={People} alt="members" className="w-6 h-6" />
        <span className="font-semibold text-white">{members} Members</span>
      </div>
      {!compact && (
        <p className="text-gray-400 text-base md:text-lg mb-5 line-clamp-2">
          {desc}
        </p>
      )}
      <div className="flex items-center gap-3">
        <button className="px-5 py-2.5 rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold text-base md:text-lg">
          Join
        </button>
        <button className="px-5 py-2.5 rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold text-base md:text-lg">
          Details
        </button>
      </div>
    </div>
  );
};

const PoolPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-poppins flex w-full">
      {/* Sidebar (same as support) */}
      <SupportSidebar />

      {/* Content */}
      <div className="flex-1 min-h-screen flex flex-col w-full">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-900 w-full">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-white bg-clip-text text-transparent font-bold text-2xl md:text-3xl tracking-wide">
            POOL MANAGEMENT
          </div>
          <div className="flex items-center gap-3">
            <img src={Avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-yellow-600/60" />
            <div className="text-right leading-5">
              <div className="text-white text-lg md:text-xl font-semibold">Big McDonalds</div>
              <div className="text-xs md:text-sm text-gray-500">151210122027</div>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-6 py-6 flex-1 flex flex-col">
          {/* Search + CTA */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 flex-1 min-w-[260px]">
              <div className="flex-1 relative">
                <img src={SearchIcon} alt="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80" />
                <input
                  placeholder="Search a pool name"
                  className="w-full bg-transparent border-2 border-yellow-500/70 rounded-full pl-11 pr-4 py-3 md:py-4 text-yellow-100 placeholder:text-yellow-300/70 outline-none text-base md:text-lg"
                />
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold text-base md:text-lg">
              View more pools
            </button>
          </div>

          {/* Top pools grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
            {poolsTop.map((p) => (
              <Card key={p.name} {...p} />
            ))}
          </div>

          {/* My Pools header */}
          <div className="mt-10 flex items-center justify-between">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-white bg-clip-text text-transparent font-bold text-2xl md:text-3xl tracking-wide">
              MY POOLS
            </div>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black text-2xl font-bold shadow hover:opacity-90" title="Add Pool">
              +
            </button>
          </div>

          {/* My pools grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-10">
            {myPools.map((p) => (
              <Card key={p.name} {...p} compact />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolPage;
