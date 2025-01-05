import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";

export default function CallUsButton() {
  return (
    <Link href={`tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`}>
      <Button className="text-md h-auto py-3 px-6">
        <PhoneCall className="h-5 w-5 mr-3" />
        Call on {process.env.NEXT_PUBLIC_CONTACT_NUMBER}
      </Button>
    </Link>
  );
}
