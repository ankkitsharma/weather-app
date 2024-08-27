import Image from "next/image";
import React from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { WiWindDeg } from "react-icons/wi";
import { IoRainyOutline } from "react-icons/io5";
import { LuCloudRainWind } from "react-icons/lu";

export default function WeatherInfo() {
  const [morning, setMorning] = React.useState(true);
  return (
    <div className="mt-10 flex justify-center animate-fade-in ">
      <div className="w-80 sm:w-[35rem] md:w-[45rem] lg:w-[55rem] h-[40rem] px-3 py-3 overflow-x-visible rounded-xl bg-gray-600 bg-opacity-50 backdrop-blur-md backdrop-filter">
        <div className="text-2xl font-bold text-gray-800 ">
          <span className="hidden md:block">Weather Forecast in</span>
          Dwarka, Delhi, Delhi NCR
        </div>
        <div className="flex justify-between mt-8 items-center">
          <div className="text-5xl font-bold text-slate-800 ">31° C | F</div>{" "}
          {morning ? (
            <MdSunny size={45} color="#FFD700" />
          ) : (
            <FaMoon size={35} color="orange" />
          )}
        </div>
        <div className="mt-8 p-2 flex justify-between items-center text-wrap rounded-xl bg-gray-600 bg-opacity-30 backdrop-blur-md backdrop-filter">
          <div className="tooltip">
            <WiHumidity size={25} />
            <div className="tooltiptext">Humidity</div>
            <div className="text-slate-900">12</div>
          </div>
          <div className="tooltip border-r border-l border-slate-600 px-4">
            <FaWind size={20} />
            <div className="tooltiptext">Wind</div>
            <div className="text-slate-900">12</div>
          </div>
          <div className="tooltip">
            <WiWindDeg size={25} />
            <div className="tooltiptext">Wind Direction</div>
            <div className="text-slate-900">12</div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <div className="p-2 rounded-xl bg-gray-600 bg-opacity-30 backdrop-blur-md backdrop-filter">
            <div className="flex justify-between border-b border-gray-600">
              <div>Rain Intesity</div>
              <div>
                <IoRainyOutline />
              </div>
            </div>
            <div className="mt-2 text-slate-900">0.4 mm</div>
          </div>
          <div className="p-2 rounded-xl bg-gray-600 bg-opacity-30 backdrop-blur-md backdrop-filter">
            <div className="flex justify-between border-b border-gray-600">
              <div>Rain Accumulation</div>
              <div>
                <LuCloudRainWind />
              </div>
            </div>
            <div className="mt-2 text-slate-900">0.4 mm</div>
          </div>
        </div>
      </div>
    </div>
  );
}
