import { useState } from "react";
import LocationContext from "./locationContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Location } from "./typings";
import Map from "./components/Footer/Map";

function App() {
  const [location, setLocation] = useState<Location>({
    lat: 1,
    lng: 1,
  });
  const [isLocationChanged, setIsLocationChanged] = useState(false);

  return (
    <LocationContext.Provider
      value={{ isLocationChanged, setIsLocationChanged, location, setLocation }}
    >
      <Header />
      <div className="container">
        <Body />
        <Footer />
        {/* <Map /> */}
      </div>
    </LocationContext.Provider>
  );
}

export default App;
