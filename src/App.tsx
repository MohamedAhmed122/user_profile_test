import { useState } from "react";
import LocationContext from "./locationContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Location } from "./typings";

function App() {
  const [location, setLocation] = useState<Location>({
    lat: 1,
    lng: 1,
  });
  const [isLocationChanged, setIsLocationChanged] = useState<boolean>(false);

  return (
    <LocationContext.Provider
      value={{ location, setLocation, isLocationChanged, setIsLocationChanged }}
    >
      <Header />
      <div className="container">
        <Body />
        <Footer />
      </div>
    </LocationContext.Provider>
  );
}

export default App;
