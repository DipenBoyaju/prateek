import { Flame } from "lucide-react";
import React from "react";

const CoreValues = () => {
  const items = [
    { id: 1, title: "Impact Over Hype", description: "We build AI to solve real problems, not chase trends.", circlePos: "top-6 left-1/2 -translate-x-1/2", linePos: "top-0 left-1/2 ", boxPos: "top-[-60px] left-1/2 -translate-x-1/2 bg-indigo-300/10 rounded-2xl" },
    { id: 2, title: "Built With, Not For", description: "We co-create with the disabled and elderly communities. Their voices guide our design.", circlePos: "top-1/4 left-10 -translate-y-1/2", linePos: "top-1/4 left-[-60px]", boxPos: "top-1/4 left-[100px] bg-blue-300/10 rounded-2xl" },
    { id: 3, title: "Openness & Collaboration", description: "We share our research, code, and learnings. Progress accelerates when it's shared.", circlePos: "top-1/4 right-10 -translate-y-1/2", linePos: "top-1/4 right-[-60px]", boxPos: "top-1/4 right-[100px] bg-purple-300/10 rounded-2xl" },
    { id: 4, title: "Ethics by Default", description: "Privacy, transparency, fairness, and consent are not optional—they’re core features.", circlePos: "bottom-1/4 left-10 translate-y-1/2", linePos: "bottom-1/4 left-[-60px]", boxPos: "bottom-1/4 left-[60px]  bg-cyan-300/10 rounded-2xl" },
    { id: 5, title: " Learning Culture", description: "We are students of science, society, and humanity. Every failure is fuel for growth.", circlePos: "bottom-1/4 right-10 translate-y-1/2", linePos: "bottom-1/4 right-[-60px]", boxPos: "bottom-1/4 right-[60px] bg-green-300/10 rounded-2xl" },
    { id: 6, title: "Think Global, Act Local", description: "We start with low resource communities like in Nepal—but we dream of global impact.", circlePos: "bottom-5 left-1/2 translate-x-[-50%]", boxPos: "bottom-[-60px] left-1/2 -translate-x-1/2 rounded-2xl bg-lime-300/10", },
  ];

  return (
    <div className="py-10 md:py-38 relative bg">
      <div className="dotted-bg absolute inset-0 z-[-1]" />
      {/* //small screen */}
      <div className="container mx-auto px-4 md:px-0 md:hidden">
        <p className="text-[12px] font-geist uppercase tracking-wider text-secondary mb-10">Values</p>
        <h2 className="text-3xl font-ubuntu text-primary">Core Values</h2>
        <div className="grid pt-4 gap-4">
          {
            items.map((item, index) => (
              <div className="p-3 border border-white/10 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <p className="font-geist text-xs border border-white/10 text-white/20 rounded-full py-1 px-4">0{index + 1}</p>
                  <h4 className="font-geist tracking-wide font-semibold text-primary">{item.title}</h4>
                </div>
                <p className="font-ubuntu text-sm text-white/30">{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>

      {/* largescreen */}
      <div className="container mx-auto hidden md:block">
        <div className="relative min-h-screen flex items-center justify-center text-white  p-10">
          {/* Big Circle */}
          <div className="relative bg-zin-950 w-[400px] h-[500px] border-4 border-white/10 rounded-full flex items-center justify-center">

            <div className="relative bg-zinc-950  w-[300px] h-[400px] rounded-full flex items-center justify-center border-2 border-white/20">

              {/* Inner Core Values Circle */}
              <div className="w-42 h-42 bg-secondary border-4 border-white/50 text-darkBlack rounded-full flex items-center justify-center text-center p-4 text-xl font-bold uppercase font-geist tracking-wider ">
                <div className="z-20">Core Values</div>
                <Flame strokeWidth={0.5} className="absolute text-white" size={100} />
              </div>
            </div>

            {/* Numbers and Lines */}
            {items.map((item) => (
              <div key={item.id}>
                {/* Number Circles */}
                <div className={`absolute ${item.circlePos} w-8 h-8 rounded-sm  bg-zinc-950 flex items-center justify-center text-lg font-geist  tracking-wider px-6 py-5`}>
                  0{item.id}
                </div>

                {/* Horizontal Lines */}
                {/* {(item.id !== 1 && item.id !== 6) && (
                  <div className={`absolute ${item.linePos} w-30 h-0.5 bg-white/10`}></div>
                )} */}

                {/* Vertical Line for item 1 and 6 */}
                {(item.id === 1 && item.id === 6) && (
                  <div className={`absolute ${item.verticalLinePos} h-[500px] w-0.5 border-white`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Boxes (Title + Description) */}
          {items.map((item) => (
            <div
              key={`box-${item.id}`}
              className={`absolute ${item.boxPos} flex flex-col items-center overflow-hidden`}
            >
              <div className="border border-white/20 p-3 rounded-2xl shadow-xl w-[24vw] text-center tracking-wider overflow-hidden">

                <h4 className="font-bold mb-1 text-sm font-geist underline underline-offset-8">{item.title}</h4>
                <p className="text-xs font-ubuntu pt-4 text-white/40">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Boxes (Title + Description) next to the Number Circles */}
          {/* {items.map((item) => (
            <div
              key={`side-box-${item.id}`}
              className={`absolute ${item.circlePos} flex items-center justify-center`}
              style={{ top: item.circlePos.includes("top") ? "calc(100% + 10px)" : "calc(-100% - 10px)" }}
            >
              <div className="bg-gray-800 p-3 rounded-lg shadow-md w-36 text-center">
                <h4 className="font-bold mb-1 text-sm">{item.title}</h4>
                <p className="text-xs">{item.description}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
