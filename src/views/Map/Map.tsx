import { useState } from "react";
import MapContainerForm from "../../components/MapContainer";
import { SlideOver } from "../../components/SlideOver";
import { HiMenuAlt1 } from "@react-icons/all-files/hi/HiMenuAlt1";
import { Marker, Popup } from "react-leaflet";
import { MARKER_ICON } from "../../constants/MarkerIcon";

const Map = () => {
  const [slideOpen, setSlideOpen] = useState<boolean>();

  const changeSlideStatus = () => {
    setSlideOpen(true);
  };
  const closeSlide = () => {
    setSlideOpen(false);
  };

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
      <MapContainerForm
        lat={-18.91368}
        lng={47.53613}
        className="w-full h-screen"
      >
        <Marker icon={MARKER_ICON} position={[-18.91368, 47.53613]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainerForm>
    </div>
  );
};

export default Map;
