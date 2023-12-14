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
import { Link } from "react-router-dom";

interface ProfileListMapProps {
  profiles: IProfile[];
}

export const ProfileListMap: React.FC<ProfileListMapProps> = ({ profiles }) => {
  return (
    <Card className="w-full shadow-none">
      <List>
        {profiles?.map((profile) => (
          <ListItem>
            <ListItemPrefix>
              <Link to={`/profile/${profile._id}`}>
                <Avatar
                  variant="circular"
                  alt="profileImage"
                  src={
                    profile?.image
                      ? FileServerURL + profile.image
                      : "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  }
                />
              </Link>
            </ListItemPrefix>
            <div>
              <Link to={`/profile/${profile._id}`}>
                <Typography variant="h6" color="blue-gray">
                  {profile?.name}
                </Typography>
              </Link>
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
