import React, { useEffect } from "react";
import TopNavBar from "../components/common/TopNavBar";
import Publication from "../components/Publication/Publication";
import PageTopList from "../views/Page/PageTopList";
import { IPublication } from "../types/publication.type";
import useFetchProfile from "../hooks/useFetchProfile";
import { getPublicationByProfile } from "../api/PublicationApi";
import { withAsync } from "../helpers/withAsync";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useToken from "../hooks/useToken";

const Home = () => {
  const [publications, setPublications] = React.useState<IPublication[]>();
  const profileConnectedUser = useFetchProfile();
  const token = useToken();

  const fetchPublications = async () => {
    if (profileConnectedUser) {
      const { error, response } = await withAsync(() =>
        getPublicationByProfile(
          token,
          profileConnectedUser?._id!,
          profileConnectedUser?._id!
        )
      );
      if (error instanceof AxiosError) {
        const error_message: string =
          error?.response?.data.description ||
          error?.response?.data ||
          error.message;
        toast.error(error_message);
      } else {
        setPublications(response?.data as Array<IPublication>);
      }
    }
  };

  useEffect(() => {
    fetchPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileConnectedUser?._id]);
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-full w-full mt-12">
      <TopNavBar notifCount={9} messageCount={8} />
      <PageTopList />
      <div className="flex flex-col-reverse">
        {publications?.map((pub) => (
          <Publication
            key={pub?._id}
            _id={pub?._id}
            profileId={pub?.profile?._id}
            profileName={pub?.profile?.name}
            profileImage={pub?.profile?.image}
            date={pub?.date}
            comments={pub?.comments?.length!}
            reactions={pub?.reactions?.length!}
            content={pub?.content}
            images={pub?.images!}
            isReacted={pub.isReacted}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
