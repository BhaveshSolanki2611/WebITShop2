import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { ScrollReveal, Section } from "@/components/sections/ScrollReveal";

const legalDocs: Record<string, { title: string; content: string }> = {
  "terms-and-conditions": {
    title: "Terms & Conditions",
    content: `These Terms and Conditions govern your use of The Web IT Shop website and services. By accessing our website or engaging our services, you agree to these terms.

**1. Services**
The Web IT Shop provides web design, web development, digital marketing, SEO, graphic design, mobile application development, software development, and related digital services.

**2. Payment Terms**
- A 50% advance payment is required before project commencement.
- Remaining payment is due upon project completion and before final delivery.
- All payments are non-refundable once work has commenced, except as outlined in our Refund Policy.

**3. Project Timeline**
- Project timelines are estimates and may vary based on scope, client feedback delays, and requirement changes.
- The Web IT Shop is not liable for delays caused by late client feedback or content submission.

**4. Intellectual Property**
- Upon full payment, the client receives ownership of the deliverables.
- The Web IT Shop reserves the right to showcase completed work in its portfolio unless otherwise agreed.

**5. Limitation of Liability**
The Web IT Shop shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.

**6. Governing Law**
These terms are governed by the laws of India, with jurisdiction in the courts of New Delhi.

For questions about these terms, contact us at tws.laxmi@gmail.com.`,
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: `The Web IT Shop ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.

**1. Information We Collect**
- Name, email address, phone number, and business details provided through contact forms.
- Website usage data through cookies and analytics (Google Analytics).
- Communication records from emails, phone calls, and WhatsApp messages.

**2. How We Use Your Information**
- To provide and improve our services.
- To communicate about projects, updates, and promotional offers.
- To analyze website usage and improve user experience.

**3. Data Protection**
- We implement industry-standard security measures to protect your data.
- We do not sell or share your personal information with third parties for marketing purposes.

**4. Cookies**
Our website uses cookies for analytics and user experience. You can control cookie settings in your browser.

**5. Third-Party Services**
We use Google Analytics, Meta Pixel, and other analytics tools that may collect usage data.

**6. Your Rights**
You may request access to, correction of, or deletion of your personal data by contacting us.

**7. Contact**
For privacy-related queries, contact: tws.laxmi@gmail.com`,
  },
  "refund-policy": {
    title: "Refund Policy",
    content: `This Refund Policy outlines the conditions under which The Web IT Shop provides refunds.

**1. Before Project Commencement**
- Full refund available if requested before any work has begun.
- A 10% administrative fee may apply.

**2. During Project Development**
- Partial refund available based on the percentage of work completed.
- The completed work will be assessed and the refund calculated accordingly.

**3. After Project Delivery**
- No refunds after the final project has been delivered and approved by the client.

**4. Service-Specific Policies**
- **SEO/Digital Marketing**: No refunds for monthly services already rendered.
- **Domain & Hosting**: Non-refundable once activated.
- **SSL Certificates**: Non-refundable once issued.

**5. Refund Process**
- Submit refund requests to tws.laxmi@gmail.com.
- Refunds are processed within 7-14 business days.

**6. Dispute Resolution**
Any disputes will be resolved through mutual discussion before pursuing legal remedies.

Contact: +91-7065740676 | tws.laxmi@gmail.com`,
  },
};

export function generateStaticParams() {
  return Object.keys(legalDocs).map((doc) => ({ doc }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ doc: string }>;
}): Promise<Metadata> {
  const { doc } = await params;
  const page = legalDocs[doc];
  if (!page) return {};
  return { title: page.title };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ doc: string }>;
}) {
  const { doc } = await params;
  const page = legalDocs[doc];
  if (!page) notFound();

  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">{page.title}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-brass-500">{page.title}</span>
          </h1>
        </div>
      </section>

      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto prose prose-lg">
            {page.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3 key={i} className="font-display text-lg font-bold mt-8 mb-3">
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="space-y-1 my-4">
                    {paragraph.split("\n").map((line, j) => (
                      <li key={j} className="text-sm text-ink-700 dark:text-paper-200">
                        {line.replace(/^- /, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-ink-700 dark:text-paper-200 leading-relaxed mb-4">
                  {paragraph.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="font-semibold text-ink-900 dark:text-paper-50">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
