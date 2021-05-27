import { useContext, useEffect } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GoogleMapReact from "google-map-react";
import GlobalContext from "../../../GlobalContext";
import Loading from "../../../common/Loading/index";

const Marker = () => <LocationOnIcon style={{ color: "red" }} />;

const Map = () => {
  const { location, isLocationChanged, setIsLocationChanged } =
    useContext(GlobalContext);

  useEffect(() => {
    if (isLocationChanged) {
      setTimeout(() => {
        setIsLocationChanged(false);
      }, 1000);
    }
  }, [isLocationChanged]);

  if (isLocationChanged) return <Loading />;
  return (
    <div style={{ height: "30vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAu8axlrbXc9Fv64E4NJdssfQwcm2h5XFA" }}
        defaultCenter={{ lat: location.lat, lng: location.lng }}
        defaultZoom={8}
      >
        <Marker lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
