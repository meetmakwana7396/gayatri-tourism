import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <section className="py-32 container flex items-center">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center">
            <div className="mb-8 max-w-4xl">
              <p className="text-md tracking-widest mb-4 font-semibold uppercase text-blue-600">
                On-demand taxis with just a call away.
              </p>
              <h1 className="text-8xl font-semibold text-gray-800 mb-4">
                Reliable Taxi Service, Anytime
              </h1>
              <p className="text-xl mb-8 font-semibold text-gray-600">
                Convenient, fast, and dependable rides.
              </p>
              <Button
                size={"lg"}
                className="bg-yellow-400  text-lg text-black hover:text-white font-semibold px-8 h-14 rounded-lg transition duration-300"
              >
                Book Your Ride
              </Button>
            </div>
            <div className="relative w-full h-96 lg:h-auto">
              <Image
                src="/images/hero-img.jpg"
                alt="Hero-img"
                layout="responsive"
                width={800}
                height={600}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        {/* <div className="container flex py-20 justify-between items-center">
          <div className="space-y-6">
            <span className="tracking-widest text-xl font-semibold text-blue-500 uppercase">
              10+ Years and Still now
            </span>
            <h1 className="text-8xl font-extrabold max-w-2xl upp">
              Reliable Taxi Service, Anytime
            </h1>
          </div>
          <Image
            src="/images/hero-img.jpg"
            height={400}
            width={800}
            className="h-full max-w-[800x]"
            alt="Hero-img"
          />
        </div> */}
      </main>
    </div>
  );
}
