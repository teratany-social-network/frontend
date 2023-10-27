import TopNavBar from "../components/common/TopNavBar";
import Publication from "../components/Publication/Publication";
import PageTopList from "../views/Page/PageTopList";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-full w-full mt-12">
      <TopNavBar notifCount={9} messageCount={8} />
      <PageTopList />
      <Publication />
      <Publication />
    </div>
  );
};

export default Home;
