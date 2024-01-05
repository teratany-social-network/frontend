import { useEffect, useState } from "react";
import MapContainerForm from "../../components/MapContainer";
import { SlideOver } from "../../components/SlideOver";
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
import { FileServerURL } from "../../api/FileApi";
import ProfilePicture from "../../assets/userPics.jpg";
import {
  setCoordonates,
  setProfilesWithCoordonates,
} from "../../store/reducer/page.reducer";
import { useDispatch } from "react-redux";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

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
  const [profilesSearched, setProfilesSearched] = useState<IProfile[]>();
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

  const handleChildData = (data: IProfile[]) => {
    // Faites quelque chose avec les données reçues du composant enfant
    console.log("Données reçues du composant enfant :", data);
    setProfilesSearched(data);
  };

  const changeSlideStatus = () => {
    window.history.pushState({ page: "" }, "", "?isModal=true");

    setSlideOpen(true);
  };
  const closeSlide = () => {
    setSlideOpen(false);
  };
  window.addEventListener("popstate", () => {
    closeSlide();
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace(/(\?|&)isModal=true/, "");
    window.history.replaceState({ page: "" }, "", newUrl);
  });
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
    // Mettre à jour profiles avec profilesSearched si la longueur est supérieure à 0
    if (profilesSearched && profilesSearched.length > 0) {
      setProfiles(profilesSearched);
    }
  }, [profilesSearched]);

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
          className="fixed bottom-16 left-3 z-1000 flex items-center gap-1 bg-gray-900 text-white p-2.5 rounded-md transition duration-300 ease-in-out transform"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
      <SlideOver
        isOpen={slideOpen}
        onClose={closeSlide}
        onChildData={handleChildData}
      />
      <MapContainerForm
        lat={-18.91368}
        lng={47.53613}
        className="w-full h-screen"
      >
        <MarkerClusterGroup chunkedLoading polygonOptions={{ opacity: 0 }}>
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
                <Link
                  to={`/profile/${profile?._id}`}
                  className="flex flex-col overflow-hidden pl-1"
                >
                  <div className="flex items-center w-[40vw]">
                    <img
                      src={
                        profile?.image
                          ? FileServerURL + profile?.image
                          : ProfilePicture
                      }
                      className="w-10 h-10 border-2 rounded-full border-black object-cover"
                      alt=""
                    />
                    <span className="font-semibold hover:underline-offset-2 overflow-hidden px-2">
                      {profile?.name}
                    </span>
                  </div>
                  <div className="flex items-center pt-2 pb-1">
                    <span className="text-slate-500 px-1">
                      {profile?.publications?.length} posts
                    </span>
                    <span className="text-slate-500 px-1">
                      {profile?.followers?.length} followers
                    </span>
                  </div>
                  <span className="text-slate-500 px-1">
                    {profile?.profileType}
                  </span>
                </Link>{" "}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainerForm>
    </div>
  );
};

export default Map;
