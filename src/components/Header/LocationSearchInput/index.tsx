import React, { useContext, useState } from "react";
import LocationContext from "../../../locationContext";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Location } from "../../../typings/index";

import "./searchInputStyle.css";

interface SearchInputProps {
  address: string;
  setAddress: (address: string) => void;
  setDisplayInput: (bool: boolean) => void;
}

const LocationSearchInput: React.FC<SearchInputProps> = ({
  address,
  setAddress,
  setDisplayInput
}) => {
  const { setLocation, setIsLocationChanged } = useContext(LocationContext);

  const handleChange = (address: string) => {
    setAddress(address);
  };

  const handleSelect = (address: string) => {
    geocodeByAddress(address)
      .then((results: any) => getLatLng(results[0]))
      .then((latLng: Location) => {
        setLocation(latLng);
        setIsLocationChanged(true);
        setDisplayInput(false)
      })
      .catch((error: any) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="input" style={{ width: 400 }}>
          <input
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span style={{ padding: 10 }}>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
