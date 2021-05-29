import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../GlobalContext";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Location } from "../../../typings/index";

import { useMediaQuery, useTheme } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./searchInputStyle.css";

interface SearchInputProps {
  address: string;
  setAddress: (address: string) => void;
  setDisplayInput: (bool: boolean) => void;
  displayInput: boolean;
}

const LocationSearchInput: React.FC<SearchInputProps> = ({
  address,
  setAddress,
  setDisplayInput,
  displayInput,
}) => {
  const { setLocation, setIsLocationChanged } = useContext(GlobalContext);
  const [error, setError] = useState<boolean>(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    if (displayInput) {
      var nameRegex = /[!$%^*()+|~={}\[\]:;<>?\/@#]/;
      const bool = nameRegex.test(address);
      setError(bool);
    }
  }, [displayInput, address]);

  const handleChange = (address: string) => {
    setAddress(address);
  };

  const handleSelect = (address: string) => {
    geocodeByAddress(address)
      .then((results: any) => getLatLng(results[0]))
      .then((latLng: Location) => {
        setLocation(latLng);
        setIsLocationChanged(true);
        setDisplayInput(false);
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
        <div className={` input_container flex `}>
          <div
            className={`  ${error && "error_input"}`}
            style={{ width: matches ? 200 : 300 }}
          >
            <input
              style={{ width: "100%", flex: 1 }}
              {...getInputProps({
                className: "input_main",
                placeholder: "Search Places ...",
                // className: "location-search-input",
              })}
            />
            {!error && (
              <div
                className="autocomplete-dropdown-container"
                style={{ width: matches ? 200 : 300, position: "absolute" }}
              >
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
                      <span style={{ padding: 10 }}>
                        {suggestion.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {error ? (
            <CancelIcon style={{ color: "red" }} />
          ) : (
            suggestions.length < 1 && (
              <CheckCircleIcon style={{ color: "green" }} />
            )
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
