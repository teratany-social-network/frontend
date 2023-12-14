import { useEffect, useState } from "react";
import MapContainerForm from "../../components/MapContainer";
import { SlideOver } from "../../components/SlideOver";
import { HiMenuAlt1 } from "@react-icons/all-files/hi/HiMenuAlt1";
import { Marker, Popup } from "react-leaflet";
import { MARKER_ICON } from "../../constants/MarkerIcon";
import { getProfileWithCoordonates } from "../../api/ProfileApi";
import { withAsync } from "../../helpers/withAsync";
import useToken from "../../hooks/useToken";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IProfile } from "../../types/profile.type";

const Map = () => {
  const [slideOpen, setSlideOpen] = useState<boolean>();
  const token = useToken();
  const [profiles, setProfiles] = useState<IProfile[]>();

  const changeSlideStatus = () => {
    setSlideOpen(true);
  };
  const closeSlide = () => {
    setSlideOpen(false);
  };

  const fetchProfileWithCoordonates = async () => {
    const { response, error } = await withAsync(() =>
      getProfileWithCoordonates(token)
    );
    if (error instanceof AxiosError) {
      const error_message: string =
        error?.response?.data.error.description ?? error.message;
      toast.error(error_message);
      return;
    } else {
      setProfiles(response?.data as IProfile[]);
    }
  };

  useEffect(() => {
    fetchProfileWithCoordonates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <SlideOver isOpen={slideOpen} onClose={closeSlide} profiles={profiles!} />
      <MapContainerForm
        lat={-18.91368}
        lng={47.53613}
        className="w-full h-screen"
      >
        {profiles?.map((profile) => (
          <Marker
            icon={MARKER_ICON}
            position={[
              profile?.localisation?.coordonates?.latitude!,
              profile?.localisation?.coordonates?.longitude!,
            ]}
          >
            <Popup>
              <span className="font-semibold">{profile?.name}</span> <br />
              <span className="text-slate-500">
                {profile?.followers?.length} followers
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainerForm>
    </div>
  );
};

export default Map;
