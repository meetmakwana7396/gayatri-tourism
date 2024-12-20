"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  return (
    <div className="container mt-8 relative sm:max-w-6xl w-full p-0">
      <div className="bg-white border overflow-hidden shadow-lg shadow-neutral-300/40 rounded-xl p-2 flex flex-col sm:flex-row gap-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 shrink-0 grow">
          <div className="relative w-full">
            <Select>
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
            <Select>
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
            <Select>
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
      </div>
    </div>
  );
}
