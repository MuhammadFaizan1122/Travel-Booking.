import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/Header/Header.jsx";
import Featured from "../components/featured/Featured";
import PropertyList from "../components/PropertyList/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import MailList from "../components/MailList/MailList";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Booking</title>
        <meta name="description" content="Travel Booking." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />
        <Header />
        <div className="mt-[50px] flex flex-col	items-center gap-[30px]">
          <Featured />
          <h1 className="w-[1024px] text-[24px] font-semibold">
            Browse by property type
          </h1>
          <PropertyList />
          <h1 className="w-[1024px] text-[24px] font-semibold">
            Homes guests love
          </h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  );
}
