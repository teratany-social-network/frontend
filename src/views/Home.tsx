import TopNavBar from "../components/common/TopNavBar";
import Publication from "../components/common/Publication";
import PageTopList from "../components/common/PageTopList";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-full w-full">
      <TopNavBar notifCount={9} messageCount={8} />
      <PageTopList />
      <Publication />
      <Publication />
    </div>
  );
};

export default Home;
