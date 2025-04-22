import { useEffect, useState } from "react";
import { TbArrowRightDashed } from "react-icons/tb"

const HomeProject = () => {
  const sentence = "Text of the Detected Sign language is shown here";
  const words = sentence.split(" ");
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev < words.length) {
          return prev + 1;
        } else {
          // Restart after short delay
          setTimeout(() => setVisibleWords(0), 1000);
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, [visibleWords]);

  return (
    <div className="py-20 relative">
      <div className="dotted-bg absolute inset-0 z-[-1]" />
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-[12px] font-geist uppercase tracking-wider text-secondary">Projects</p>
          <h3 className="font-ubuntu text-5xl mt-4">Explore Our Projects</h3>
        </div>

        <div className="mt-16 grid grid-cols-3">
          <div className=""></div>
          <div className="w-full h-[500px] bg-zinc-800 p-2 rounded-xl">
            <div className="h-full border border-white/20 hover:border-white/50 cursor-pointer transition-colors ease-in-out duration-500 rounded-lg p-6 flex flex-col group">
              <div className="">
                <h3 className="text-2xl font-geist tracking-wider font-semibold text-secondary">Nepali Sign Language Detection</h3>
              </div>
              <div className="grid grid-cols-5 h-[150px] border-t border-white/20 mt-20 border-b">
                <div className="border-r col-span-3 border-white/20 py-3 pr-3">
                  <div className="bg-darkBlack w-full h-full">

                  </div>
                </div>
                <div className="col-span-2">
                  <div className="bg-darkBlack w-full h-full">
                    <h1 className="text-white/60 text-xs font-light p-2 font-geist leading-5 tracking-wider">
                      {words.slice(0, visibleWords).join(" ")}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <button className="border rounded-full border-white/60 p-2 flex gap-2 items-center font-ubuntu tracking-wide text-white/70 transition-all ease-in-out duration-500 cursor-pointer">
                  <TbArrowRightDashed
                    size={24}
                    className="text-white/60 -rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-500"
                  />
                  <span className="hidden group-hover:inline-block animate-slide-in transition-all ease-in-out duration-500">Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}
export default HomeProject