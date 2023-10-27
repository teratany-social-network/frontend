import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export const ItemListAvatar = () => {
  return (
    <Card className="w-full shadow-none">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="candice"
              src="https://randomuser.me/api/portraits/men/10.jpg"
            />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Tania Andrew
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Software Engineer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="alexander"
              src="https://randomuser.me/api/portraits/men/11.jpg"
            />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Alexander
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Backend Developer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="emma"
              src="https://randomuser.me/api/portraits/men/12.jpg"
            />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Emma Willever
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              UI/UX Designer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
      </List>
    </Card>
  );
};
