import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Enquiry",
  description: "Submit an enquiry to The Web IT Shop for web development, digital marketing, and IT services.",
};

export default function EnquiryPage() {
  redirect("/contact");
}
