import { useEffect, useState } from "react";
import MapContainerForm from "../../components/MapContainer";
import { SlideOver } from "../../components/SlideOver";
import { HiMenuAlt1 } from "@react-icons/all-files/hi/HiMenuAlt1";
import { Marker, Popup, useMap } from "react-leaflet";
import { MARKER_ICON } from "../../constants/MarkerIcon";
import { getProfileWithCoordonates } from "../../api/ProfileApi";
import { withAsync } from "../../helpers/withAsync";
import useToken from "../../hooks/useToken";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IProfile } from "../../types/profile.type";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { Link } from "react-router-dom";
import {
  setCoordonates,
  setProfilesWithCoordonates,
} from "../../store/reducer/page.reducer";
import { useDispatch } from "react-redux";

type profileCoordonatesType = {
  latitude: number;
  longitude: number;
};

const MapCoordonatesProfileSelected = () => {
  const profileCoordonates = useSelector<RootState>(
    (state) => state.teratany_page.profileCoordonates
  ) as profileCoordonatesType;
  const map = useMap();

  useEffect(() => {
    map.flyTo(
      { lat: profileCoordonates.latitude, lng: profileCoordonates.longitude },
      map.getZoom(),
      { animate: true }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileCoordonates.latitude, profileCoordonates.longitude]);

  return null;
};

const Map = () => {
  const [slideOpen, setSlideOpen] = useState<boolean>();
  const token = useToken();
  const [profiles, setProfiles] = useState<IProfile[]>();
  const dispatch = useDispatch<AppDispatch>();

  const initialiseMapCoordonates = () => {
    dispatch(
      setCoordonates({
        profileCoordonates: {
          latitude: -18.91368,
          longitude: 47.53613,
        },
      })
    );
  };

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
      dispatch(
        setProfilesWithCoordonates({ profiles: response?.data as IProfile[] })
      );
    }
  };

  useEffect(() => {
    initialiseMapCoordonates();
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
      <SlideOver isOpen={slideOpen} onClose={closeSlide} />
      <MapContainerForm
        lat={-18.91368}
        lng={47.53613}
        className="w-full h-screen"
      >
        <MapCoordonatesProfileSelected />
        {profiles?.map((profile) => (
          <Marker
            icon={MARKER_ICON}
            position={[
              profile?.localisation?.coordonates?.latitude!,
              profile?.localisation?.coordonates?.longitude!,
            ]}
            interactive
          >
            <Popup>
              <Link to={`/profile/${profile?._id}`}>
                <span className="font-semibold hover:underline-offset-2">
                  {profile?.name}
                </span>
              </Link>{" "}
              <br />
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
