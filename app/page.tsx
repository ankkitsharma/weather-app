import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar";
import WeatherInfo from "@/components/WeatherInfo/WeatherInfo";

export default function Home() {
  const locationSet = true;
  return (
    <div className="relative h-screen">
      <SearchBar locationSet={locationSet} />
      {locationSet && <WeatherInfo />}
    </div>
  );
}
