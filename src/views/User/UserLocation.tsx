import React, { useState } from "react";
import SwitchToggle from "../../components/common/switchToggle";
import Button from "../../components/common/Button";
import TopBar from "../../components/common/TopBar";
import MapContainerForm from "../../components/MapContainer";
import { Marker, useMapEvents } from "react-leaflet";
import { MARKER_ICON } from "../../constants/MarkerIcon";
import useFetchUser from "../../hooks/useFetchUser";
import { withAsync } from "../../helpers/withAsync";
import { updateLocationParameter } from "../../api/UserApi";
import useToken from "../../hooks/useToken";
import useLoadingButton from "../../hooks/useLoadingButton";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

type PositionMarkerType = {
  lat: number;
  lng: number;
};

const LocationMarker = () => {
  const [position, setPosition] = useState<PositionMarkerType | null>(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      localStorage.setItem("lat", String(e.latlng.lat));
      localStorage.setItem("lng", String(e.latlng.lng));
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={MARKER_ICON}></Marker>
  );
};

const EditUserLocation: React.FC = () => {
  const token = useToken();
  const user = useFetchUser();

  const [isLoading, startLoading, endLoading] = useLoadingButton();
  const [locationStatus, setLocationStatus] = useState<boolean>();

  const changeLocationStatus = (status: any) => {
    setLocationStatus(status.target.checked);
  };

  const updateLocation = async () => {
    const lat: number = Number(localStorage.getItem("lat"));
    const lng: number = Number(localStorage.getItem("lng"));
    startLoading();
    if (lat && lng) {
      const { error } = await withAsync(() =>
        updateLocationParameter(token, lat, lng, locationStatus!)
      );
      if (error instanceof AxiosError) {
        endLoading();
        const error_message: string =
          error?.response?.data.description ?? error.message;
        toast.error(error_message);
      } else {
        endLoading();
        toast.success("Location information updated!");
        localStorage.removeItem("lat");
        localStorage.removeItem("lng");
      }
    } else {
      toast.error("Coordonates information required!!!");
      endLoading();
    }
  };

  return (
    <>
      <TopBar text="Location parameter" />
      <MapContainerForm className="w-[90%] h-96 mx-auto mt-16 flex justify-center items-center">
        {user && (
          <Marker
            position={[
              user?.coordonates?.latitude!,
              user?.coordonates?.longitude!,
            ]}
            icon={MARKER_ICON}
          ></Marker>
        )}
        <LocationMarker />
      </MapContainerForm>

      <div className="mt-4 flex flex-col items-center mx-4">
        <p className="font-medium">
          You have the choice to make your location public or private. The
          location data is only utilized within the "map" page, and we
          absolutely do not make any use of your personal data in any way.
        </p>
        <div className="flex items-start mt-4">
          <SwitchToggle
            label="Show Location"
            isChecked={user?.coordonates?.isPrivate}
            onClick={changeLocationStatus}
          />
        </div>
        <div className="my-10 w-full">
          <Button
            width="w-full"
            height="py-3"
            name="Save"
            isLoading={isLoading}
            onClick={updateLocation}
          />
        </div>
      </div>
    </>
  );
};
export default EditUserLocation;
