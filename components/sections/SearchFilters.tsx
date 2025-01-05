"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

type IForm = {
  from: string;
  to: string;
  passengers: string;
};

const cities = [
  { name: "Surat", value: "surat" },
  { name: "Ahmedabad", value: "ahmedabad" },
  { name: "Mumbai", value: "mumbai" },
  { name: "Vadodara", value: "vadodara" },
  { name: "Rajkot", value: "rajkot" },
  { name: "Bhavnagar", value: "bhavnagar" },
  { name: "Jaipur", value: "jaipur" },
  { name: "Udaipur", value: "udaipur" },
];

export default function SearchFilters() {
  const { watch, setValue, handleSubmit } = useForm<IForm>({
    defaultValues: { from: "", to: "", passengers: "" },
  });

  const message = (formData: IForm) => {
    // Detect mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const message = `Hey i want your help to travel \n\nfrom: ${formData?.from} \nto: ${formData?.to} \nwith: ${formData?.passengers} passengers. \n\nCan you help me?`;
    if (isMobile) {
      // WhatsApp mobile deep link
      window.location.href = `https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
    } else {
      // Fallback to web WhatsApp
      window.open(`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    }
  };
  return (
    <div className="container mt-8 relative sm:max-w-6xl w-full p-0">
      <form
        onSubmit={handleSubmit(message)}
        className="bg-white border overflow-hidden shadow-lg shadow-neutral-300/40 rounded-xl p-2 flex flex-col sm:flex-row gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 shrink-0 grow">
          <div className="relative w-full">
            <Select
              value={watch("from")}
              onValueChange={(value) => setValue("from", value)}
            >
              <SelectTrigger className="border-0 rounded-lg px-4 !h-16 text-lg hover:bg-neutral-100">
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {cities?.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full">
            <Select
              value={watch("to")}
              onValueChange={(value) => setValue("to", value)}
            >
              <SelectTrigger className="border-0 rounded-lg px-4 !h-16 text-lg hover:bg-neutral-100">
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {cities?.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="relative w-full">
            <Select
              value={watch("passengers")}
              onValueChange={(value) => setValue("passengers", value)}
            >
              <SelectTrigger className="border-0 rounded-lg px-4 !h-16 text-lg hover:bg-neutral-100">
                <SelectValue placeholder="No of passengers" />
              </SelectTrigger>
              <SelectContent>
                {["1", "2", "3", "4", "5", "6", "7"]?.map((number) => (
                  <SelectItem key={number} value={number}>
                    {number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="">
          <Button className="rounded-lg text-xl h-full w-full sm:w-auto font-semibold px-12">
            {/* <Search className="mr-2 h-4 w-4" /> */}
            Book
          </Button>
        </div>
      </form>
    </div>
  );
}
