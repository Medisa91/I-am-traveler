import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterBox = () => {
  return (
    <div className="container search-wrapper mt-4">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle dropdown-filter dropdown-filter-type"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Type
          <FontAwesomeIcon className="chevron-icon"icon={faChevronDown} />
        </button>
        <button
          className="btn dropdown-toggle dropdown-filter dropdown-filter-size"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Size
          <FontAwesomeIcon className="chevron-icon"icon={faChevronDown} />        </button>
        <button
          className="btn dropdown-toggle dropdown-filter dropdown-filter-delivery"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Delivery Type
          <FontAwesomeIcon className="chevron-icon"icon={faChevronDown} />
        </button>
        <button type="button" class="btn add-travel-btn">
          Add my travel
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
