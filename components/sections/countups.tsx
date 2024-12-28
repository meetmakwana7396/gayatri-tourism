"use client";
import React from "react";
import CountUp from "react-countup";

const CountUps = () => {
  return (
    <div className="sm:py-20 py-14 bg-gradient-to-r from-yellow-500/80 to-yellow-400/60">
      <div className="container grid sm:grid-cols-3 gap-10">
        <div className="block">
          <CountUp
            start={0}
            end={5}
            duration={5}
            enableScrollSpy
            scrollSpyDelay={500}
            separator=" "
            //   decimals={4}
            decimal=","
            //   prefix="+"
            suffix="+"
            //   onEnd={() => console.log("Ended! 👏")}
            //   onStart={() => console.log("Started! 💨")}
            className="font-bold text-6xl flex  w-fit mx-auto"
          ></CountUp>
          <p className="text-center text-2xl mt-4 font-light">
            Years in business
          </p>
        </div>
        <div className="block">
          <CountUp
            start={3000}
            end={5000}
            duration={5}
            enableScrollSpy
            scrollSpyDelay={500}
            separator=" "
            //   decimals={4}
            decimal=","
            //   prefix="+"
            suffix="+"
            //   onEnd={() => console.log("Ended! 👏")}
            //   onStart={() => console.log("Started! 💨")}
            className="font-bold text-6xl flex  w-fit mx-auto"
          ></CountUp>
          <p className="text-center text-2xl mt-4 font-light">
            Trips Completed
          </p>
        </div>
        <div className="block">
          <CountUp
            start={5}
            end={7}
            duration={5}
            enableScrollSpy
            scrollSpyDelay={500}
            separator=" "
            //   decimals={4}
            decimal=","
            //   prefix="+"
            suffix="+"
            //   onEnd={() => console.log("Ended! 👏")}
            //   onStart={() => console.log("Started! 💨")}
            className="font-bold text-6xl flex  w-fit mx-auto"
          ></CountUp>
          <p className="text-center text-2xl mt-4 font-light">States</p>
        </div>
      </div>
    </div>
  );
};

export default CountUps;
