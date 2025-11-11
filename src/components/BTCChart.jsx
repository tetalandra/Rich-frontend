import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const BTCChart = () => {
  
  const data = [
    { time: '', price: 71500 },  
    { time: '', price: 70800 },   
    { time: '', price: 71200 },   
    { time: '', price: 70500 },   
    { time: '', price: 70900 },  
    { time: '', price: 80200 },
    { time: '', price: 75600 },   
    { time: '', price: 69800 }, 
    { time: '', price: 74500 }, 
    { time: '', price: 69200 },  
    { time: '', price: 68800 },   
    { time: '', price: 68500 },  
    { time: '', price: 68000 },   
    { time: '', price: 67500 },   
    { time: '', price: 67000 },
    { time: '', price: 66500 },   
    { time: '', price: 68000 },   
    { time: '', price: 65500 }, 
    { time: '', price: 65000 },   
    { time: '', price: 64500 },   
    { time: '', price: 64000 },   
    { time: '', price: 64800 },   
    { time: '', price: 64200 },   
    { time: '', price: 65500 },   
    { time: '', price: 65000 },  
    { time: '', price: 66200 },   
    { time: '', price: 65800 },   
    { time: '', price: 66500 },   
    { time: '', price: 66000 },   
    { time: '', price: 67000 },   
    { time: '', price: 67500 }, 
    { time: '', price: 68000 },   
    { time: '', price: 69000 },   
    { time: '', price: 70000 },   
    { time: '', price: 68500 },   
    { time: '', price: 69500 },   
    { time: '', price: 67500 },   
    { time: '', price: 70000 },  
    { time: '', price: 69000 },  
    { time: '', price: 72500 },   
    { time: '', price: 70500 },  
    { time: '', price: 74000 },   
    { time: '', price: 71500 },   
    { time: '', price: 68000 },  
  ];

  const timeTabs = ['1H', 'all', '1D', '1W', '1M'];
  const activeTab = '1D';

  return (
    <div className="bg-black border border-gray-700 rounded-none p-4 shadow-[0_0_20px_rgba(250,204,21,0.05)] flex flex-col font-poppins">
      
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <h2 className="text-white text-3xl font-bold tracking-wide">BTC = 68,320.00</h2>
          <div className="flex items-center gap-1">
            <span className="text-green-400 font-semibold text-base">+27.8%</span>
            <span className="text-green-400 text-sm">(0.73%)</span>
          </div>
        </div>

        
        <div className="flex gap-4">
          {timeTabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm uppercase tracking-wide px-2 py-0.5 rounded-sm transition-colors ${
                tab === activeTab
                  ? 'text-black bg-yellow-400'
                  : 'text-yellow-400 hover:text-black hover:bg-yellow-400/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative overflow-hidden">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="btcChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#facc15" stopOpacity={0.45} />
                <stop offset="35%" stopColor="#facc15" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#facc15" stopOpacity={0} />
              </linearGradient>
              {/* Soft glow for stroke */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <pattern id="btcStripes" width="3" height="400" patternUnits="userSpaceOnUse">
                <rect width="1" height="400" fill="rgba(250,204,21,0.22)" />
              </pattern>
              <linearGradient id="verticalFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="45%" stopColor="#ffffff" stopOpacity="0.18" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <mask id="stripesMask">
                <rect x="0" y="0" width="100%" height="100%" fill="url(#verticalFade)" />
              </mask>
            </defs>

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={false}
              interval={0}
            />

            <YAxis
              domain={[63500, 81000]}
              hide={true}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#000000',
                border: '1px solid #facc15',
                borderRadius: '8px',
                color: '#facc15',
                fontSize: '12px'
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Price']}
              labelFormatter={(label) => `Point: ${label}`}
              labelStyle={{ color: '#facc15' }}
            />

            <Area
              type="linear"
              dataKey="price"
              stroke="#facc15"
              strokeWidth={3}
              fill="url(#btcChartFill)"
              dot={false}
              activeDot={false}
              isAnimationActive={false}
              connectNulls={true}
              strokeLinejoin="round"
              strokeLinecap="round"
              className="[filter:url(#glow)]"
            />
            <g mask="url(#stripesMask)">
              <Area
                type="linear"
                dataKey="price"
                stroke="none"
                fill="url(#btcStripes)"
                dot={false}
                activeDot={false}
                isAnimationActive={false}
                connectNulls={true}
              />
            </g>
          </AreaChart>
        </ResponsiveContainer>
        
        {/* Bottom faint floor to match depth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))'
          }}
        />
      </div>

      {/* Time Labels */}
      <div className="flex justify-between text-xs text-yellow-500/80 mt-2 px-1">
        <span>08:01</span>
        <span>18:00</span>
        <span>20:00</span>
        <span>08:00</span>
        <span>18:40</span>
        <span>10:40</span>
      </div>
    </div>
  );
};

export default BTCChart;