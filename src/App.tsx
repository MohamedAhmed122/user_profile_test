import { useState } from "react";
import GlobalContext from "./GlobalContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Location, Skill } from "./typings";
import { initLocation, initSkills } from "./data/data";

function App() {
  const [location, setLocation] = useState<Location>(initLocation);
  const [isLocationChanged, setIsLocationChanged] = useState(false);
  const [skills, setSkills] = useState<Array<Skill>>(initSkills);

  console.log(location);
  return (
    <GlobalContext.Provider
      value={{
        isLocationChanged,
        setIsLocationChanged,
        location,
        setLocation,
        skills,
        setSkills,
      }}
    >
      <Header />
      <div className="container">
        <Body />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
