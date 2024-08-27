"use client";
import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar";
import WeatherInfo from "@/components/WeatherInfo/WeatherInfo";
import { useEffect, useState } from "react";

export default function Home() {
  const [locationSet, setLocationSet] = useState(true);

  return (
    <div className="relative h-screen">
      <SearchBar locationSet={locationSet} />
      {locationSet && <WeatherInfo />}
    </div>
  );
}
