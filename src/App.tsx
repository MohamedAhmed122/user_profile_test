import { useState } from "react";
import GlobalContext from "./GlobalContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Location, Skill } from "./typings";

function App() {
  const [location, setLocation] = useState<Location>({
    lat: 1,
    lng: 1,
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
