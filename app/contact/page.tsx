import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Web IT Shop — Head office at 48-A, Rama Road, Kirti Nagar, New Delhi. Call +91-7065740676 or email tws.laxmi@gmail.com.",
};

export default function Page() {
  return <ContactClient />;
}
