import React from "react";
import Banner from "../../components/Banner";
import SearchBox from "../../components/SearchBox";
import FilterBox from "../../components/FilterBox";
import AvailableRequest from "../../components/AvailableRequest";

export default function Home() {
  return (
    <div>
      <Banner />
      <SearchBox />
      <FilterBox />
      <AvailableRequest />
    </div>
  );
}
