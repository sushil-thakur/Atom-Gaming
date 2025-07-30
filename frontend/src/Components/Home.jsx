import React from "react";

const Home = () => {
  return (
    <div className="relative w-full" style={{ height: "95vh" }}>
      <img
        src="/home.jpg"
        alt="home"
        style={{ height: "90vh", width: "100%", objectFit: "cover" }}
      />
      <div className="absolute left-0 bottom-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-60 left-45 flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <h1 className="h-6 w-12 bg-red-500 text-amber-50 flex items-center justify-center text-xs font-semibold cursor-pointer">
            TIPS
          </h1>
          <span className="text-xs text-white">OCTOBER 29, 2019</span>
        </div>
        <div>
          <h1 className="bebas text-5xl font-bold tracking-wide text-amber-50">
            FAMILY-OWNED FLORIST BUSINESS <br />
            LOOKS
          </h1>
        </div>
        {/* Cards row below main heading */}
        <div className="mt-44 flex flex-row items-stretch gap-8">
          {/* Card 1 */}
          <div className="flex flex-col justify-between h-0 items-start gap-4">
            <div className="flex items-center gap-3">
              <h1 className="h-6 w-12 bg-red-500 text-amber-50 flex items-center justify-center text-xs font-semibold cursor-pointer">TIPS</h1>
              <span className="text-xs text-white">OCTOBER 29, 2019</span>
            </div>
            <h1 className="bebas text-3xl font-bold tracking-wide text-amber-50 mt-2">
              IT'S BETTER TO BE A LION FOR A DAY<br />THAN SHEEP ALL YOUR LIFE
            </h1>
          </div>
          {/* Vertical line */}
          <div className="h-32 w-px bg-white mx-1 opacity-60"></div>
          {/* Card 2 */}
          <div className="flex flex-col justify-between h-0 items-start gap-4">
            <div className="flex items-center gap-3">
              <h1 className="h-6 w-12 bg-red-500 text-amber-50 flex items-center justify-center text-xs font-semibold cursor-pointer">GAMES</h1>
              <span className="text-xs text-white">OCTOBER 18, 2019</span>
            </div>
            <h1 className="bebas text-3xl font-bold tracking-wide text-amber-50 mt-2">
              KEEP YOUR EYES ON THE STARS AND<br />YOUR FEET ON THE GROUND
            </h1>
          </div>
          {/* Vertical line */}
          <div className="h-32 w-px bg-white mx-1 opacity-60"></div>
          {/* Card 3 */}
          <div className="flex flex-col justify-between h-0 items-start gap-4">
            <div className="flex items-center gap-3">
              <h1 className="h-6 w-12 bg-red-500 text-amber-50 flex items-center justify-center text-xs font-semibold cursor-pointer">ONLINE</h1>
              <span className="text-xs text-white">OCTOBER 18, 2019</span>
            </div>
            <h1 className="bebas text-3xl font-bold tracking-wide text-amber-50 mt-2">
              EVERY NEXT LEVEL OF YOUR LIFE <br/>WILL DEMAND A DIFFERENT YOU
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
