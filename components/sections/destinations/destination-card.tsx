import { ArrowRightLeft } from "lucide-react";

export default function DestinationCard({
  destination,
}: {
  destination: { from: string; to: string; bg: string };
}) {
  const { from, to, bg } = destination;
  return (
    <div
      className="relative w-full h-48 rounded-lg overflow-hidden shadow-md transform transition-transform "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center text-xl">
          <div className="sm:flex gap-4 items-center justify-center hidden">
            {from}
            <span>
              <ArrowRightLeft className="size-5 text-white" />
            </span>
            {to}
          </div>
          <div className="sm:hidden text-center flex flex-col items-center gap-4">
            {from} <ArrowRightLeft className="size-5 text-white rotate-90" />{" "}
            {to}
          </div>
        </div>
      </div>
    </div>
  );
}
