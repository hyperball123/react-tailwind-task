import Header from "./Header";
import Cover from "./Cover";
import Tagline from "./Tagline";
import CoverCard from "./CoverCard";
import Stats from "./Stats";
import EmptyCard from "./EmptyCard";
import Card from "./Card";
import Footer from "./Footer";

function AppLayout() {
  return (
    <main className="">
      <div className="bg-card-image bg-no-repeat bg-cover bg-center">
        <section className="max-w-[1360px] mx-auto">
          <Header />
        </section>
      </div>
      {/* <div className="h-[400px] w-full bg-cover-image bg-cover bg-no-repeat bg-center bg-red-400"></div> */}
      <div className="h-1/2 relative">
        <Cover />
        <Tagline />
        <CoverCard />
      </div>
      <div className="max-w-[1360px] mx-auto">
        <Stats />
        <div className="flex gap-8 mb-[15rem]">
          <EmptyCard />
          <Card />
        </div>
      </div>
      <div className="border-t border-[#D8D8D8] pt-40 pb-32 flex items-center">
        <Footer />
      </div>
    </main>
  );
}

export default AppLayout;
