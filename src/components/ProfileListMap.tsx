import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { IProfile } from "types/profile.type";
import { FileServerURL } from "api/FileApi";
import { useDispatch } from "react-redux";
import { setCoordonates } from "../store/reducer/page.reducer";
import profileDefault from "../assets/userPics.jpg";

interface ProfileListMapProps {
  profiles: IProfile[];
  onCloseSlideOver: () => void;
}

export const ProfileListMap: React.FC<ProfileListMapProps> = ({
  profiles,
  onCloseSlideOver,
}) => {
  const dispatch = useDispatch();

  const setCoordonatesProfile = (lat: number, lng: number) => {
    dispatch(
      setCoordonates({
        profileCoordonates: {
          latitude: lat,
          longitude: lng,
        },
      })
    );
  };

  return (
    <Card className="w-full shadow-none">
      <List>
        {profiles?.map((profile) => (
          <ListItem>
            <ListItemPrefix>
              <div
                onClick={() => {
                  setCoordonatesProfile(
                    profile.localisation?.coordonates.latitude!,
                    profile.localisation?.coordonates.longitude!
                  );
                  onCloseSlideOver();
                }}
              >
                <Avatar
                  variant="circular"
                  alt="profileImage"
                  src={
                    profile?.image
                      ? FileServerURL + profile.image
                      : profileDefault
                  }
                />
              </div>
            </ListItemPrefix>
            <div>
              <div
                onClick={() => {
                  setCoordonatesProfile(
                    profile.localisation?.coordonates.latitude!,
                    profile.localisation?.coordonates.longitude!
                  );
                  onCloseSlideOver();
                }}
              >
                <Typography variant="h6" color="blue-gray">
                  {profile?.name}
                </Typography>
              </div>
              <Typography variant="small" color="gray" className="font-normal">
                {profile?.followers?.length} followers
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
