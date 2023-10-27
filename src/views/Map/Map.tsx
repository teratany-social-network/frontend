import { useState } from "react";
import MapContainerForm from "../../components/MapContainer";
import { SlideOver } from "../../components/SlideOver";
import { HiMenuAlt1 } from "@react-icons/all-files/hi/HiMenuAlt1";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  const [slideOpen, setSlideOpen] = useState<boolean>();

  const changeSlideStatus = () => {
    setSlideOpen(true);
  };
  const closeSlide = () => {
    setSlideOpen(false);
  };

  const marker_icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    className: "leaflet-marker-icon leaflet-zoom-animated leaflet-interactive",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    iconAnchor: [12 * 1.3, 32 * 1.3],
    popupAnchor: [0, -32 * 1.3],
    shadowRetinaUrl:
      "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41 * 1.3, 41 * 1.3],
    shadowAnchor: [14 * 1.3, 41 * 1.3],
  });

  return (
    <div>
      {/* slideover */}
      <div>
        <button
          onClick={changeSlideStatus}
          className="fixed bottom-16 left-3 z-1000 flex items-center gap-1 bg-gray-800 text-white py-2 px-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <HiMenuAlt1 />
        </button>
      </div>
      <SlideOver isOpen={slideOpen} onClose={closeSlide} />
      <MapContainerForm className="w-full h-screen">
        <Marker icon={marker_icon} position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainerForm>
    </div>
  );
};

export default Map;
