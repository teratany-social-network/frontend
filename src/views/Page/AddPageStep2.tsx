import MapContainerForm from "../../components/MapContainer";
import { InfoModal } from "../../components/InfoModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { MARKER_ICON } from "../../constants/MarkerIcon";
import Button from "../../components/common/Button";
import useLoadingButton from "../../hooks/useLoadingButton";

type PositionMarkerType = {
  lat: number;
  lng: number;
};

const LocationMarker = () => {
  const [position, setPosition] = useState<PositionMarkerType | null>(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={MARKER_ICON}></Marker>
  );
};

const AddPageStep2: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, startLoading] = useLoadingButton();

  const addPageSecondStep = () => {
    startLoading();
    setTimeout(() => {
      navigate("/add-page/step-3");
    }, 2000);
  };

  return (
    <>
      <MapContainerForm className="w-full h-screen">
        <LocationMarker />
      </MapContainerForm>
      <div className="fixed bottom-0 z-1000 flex items-center justify-center p-4 w-full">
        <Button
          isLoading={isLoading}
          width="w-[90%]"
          height="py-3"
          name="Save my position"
          onClick={addPageSecondStep}
        />
      </div>
      <InfoModal
        title="Select you position"
        text=" Enter the location of your organization by selecting it on the following interactive map. Organizations registering on our platform are required to be transparent. Your data will be used solely to inform users interested in your organization about your location and will not be used for advertising purposes."
      />
    </>
  );
};

export default AddPageStep2;
