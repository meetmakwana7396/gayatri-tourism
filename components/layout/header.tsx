import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="container py-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link href={"#"} className="font-extrabold text-3xl">
          GAYATRI TOURISM
        </Link>
        <Button>Call on 9879876751</Button>
      </div>
    </nav>
  );
}
