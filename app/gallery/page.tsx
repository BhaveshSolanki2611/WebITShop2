import { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of The Web IT Shop — team celebrations, office events, client visits, and company milestones.",
};

export default function Page() {
  return <GalleryClient />;
}
