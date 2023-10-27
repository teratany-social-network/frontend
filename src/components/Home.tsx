import PageTopList from "../views/Page/PageTopList";
import Publication from "../views/Publication/Publication";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-full">
      <PageTopList />
      <Publication />
    </div>
  );
};

export default Home;
