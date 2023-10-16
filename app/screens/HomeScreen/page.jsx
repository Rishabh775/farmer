import Image from "next/image";
import mock from "@/public/mock2.jpeg";

export default function page() {
  return (
    <div>
      <div className=" Hero-section">
        <div className=" flex flex-col items-center justify-center gap-1 text-white">
          <h1 className=" text-6xl font-bold">
            <em className=" text-green-400">Namaste</em>, Welcome to Suvidha.
          </h1>
          <p className=" text-4xl font-semibold">
            Farmer's Eqipments at reasonable and affordable prices.
          </p>
          <span className=" text-3xl mt-2">Start now with just one click.</span>
          <div>
            <button className=" bg-green-400 px-6 text-2xl py-1 rounded my-2">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <section className="flex justify-between px-32">
        <div className=" flex flex-col justify-center items-start w-2/4">
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
        <div className=" flex justify-center items-center w-2/4">
          <Image src={mock} className=" w-full h-[30rem]" />
        </div>
      </section>
    </div>
  );
}
