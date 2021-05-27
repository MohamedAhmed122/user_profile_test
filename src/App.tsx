import { useState } from "react";
import GlobalContext from "./GlobalContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Location, Skill } from "./typings";

function App() {
  const [location, setLocation] = useState<Location>({
    lat: 41.8745746,
    lng: -87.668836,
  });
  const [isLocationChanged, setIsLocationChanged] = useState(false);
  const [skills, setSkills] = useState<Array<Skill>>([
    {
      years: 2.4,
      skill: "React",
    },
    {
      years: 12.4,
      skill: "JS",
    },
    {
      years: 10.4,
      skill: "TS",
    },
  ]);

  console.log(location)
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
