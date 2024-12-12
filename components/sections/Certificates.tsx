import Image from "next/image";
import React from "react";

export default function Certificates() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-center">Certificates</h2>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-8">
          <Image
            alt="Certificate"
            src="/images/iso-certificate.jpg"
            width={300}
            height={300}
            className="mx-auto"
          />
          <Image
            alt="Certificate"
            src="/images/iso-certificate.jpg"
            width={300}
            height={300}
            className="mx-auto"
          />
          <Image
            alt="Certificate"
            src="/images/iso-certificate.jpg"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
