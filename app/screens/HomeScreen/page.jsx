import Image from "next/image";
import mock from "@/public/mock2.jpeg";
import services from "@/public/Services.png";
import ach from "@/public/ach1.svg";
import avg from "@/public/avg.svg";
import equip from "@/public/equip.jpg";

export default function page() {
  return (
    <div>
      <div className=" Hero-section">
        <div className=" flex flex-col items-center justify-center gap-1 text-white">
          <h1 className=" text-6xl font-bold">
            <em className=" text-green-400">Namaste</em>, Welcome to Suvidha.
          </h1>
          <p className=" text-4xl font-semibold">
            Farmer&apos;s Eqipments at reasonable and affordable prices.
          </p>
          <span className=" text-3xl mt-2">Start now with just one click.</span>
          <div>
            <button className=" bg-green-400 px-6 text-2xl py-1 rounded my-2">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <section className="flex justify-center px-32">
        <div className=" flex flex-col justify-center items-start ps-20">
          <h2 className=" text-4xl font-bold">HOW KRISHI SUVIDHA WORKS?</h2>
          <p className=" text-2xl font-semibold mt-2">
            TAKE A LOOK AT OUR PLATFORM DEMO:
          </p>
          <ul className=" list-disc ps-8 mt-4">
            <li>Sign-up to the platform.</li>
            <li>Provide equipment details.</li>
            <li>Explore and filter lists of equipment.</li>
            <li>Check an available time slot.</li>
            <li>Chat with the owner and make a booking.</li>
            <li>Stay updated by SMS.</li>
          </ul>
        </div>
        <div className=" flex justify-center items-center">
          <Image src={mock} alt="mockup" className=" w-full h-fit" />
        </div>
      </section>
      <section className=" py-10">
        <div className="flex flex-col justify-center gap-2 items-center">
          <h3 className=" text-4xl font-bold ">Our Services</h3>
          <p className=" text-xl font-semibold">
            Following are the services that Suvidha market provides for Farmers:
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={services} alt="services" className=" h-[60vh] w-fit" />
        </div>
      </section>
      <section className=" py-10">
        <div className="flex justify-center">
          <h3 className=" text-4xl font-bold ">Our Achievements</h3>
        </div>
        <div className="flex justify-between px-32">
          <div className="flex flex-col justify-center items-center">
            <Image src={ach} alt="services" className=" h-[300px] w-fit" />
            <h4 className=" text-3xl font-bold">INR 954.3 Billion</h4>
            <p className=" text-xl">Agriculture Equipment Market Value</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={avg} alt="services" className=" h-[300px] w-fit" />
            <h4 className=" text-3xl font-bold">INR 10,218</h4>
            <p className=" text-xl">Farmer&apos;s Average Monthly Income</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={equip} alt="services" className=" h-[300px] w-fit" />
            <h4 className=" text-3xl font-bold">16% of Crop value</h4>
            <p className=" text-xl">Average Equipment Investments</p>
          </div>
        </div>
      </section>
      <footer className="py-10 bg-gray-700">
        <div className=" flex justify-center">
          <span className="text-white">
            Copyright © 2021 - All Rights Reserved 
          </span>
        </div>
      </footer>
    </div>
  );
}
