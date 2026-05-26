import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Printer } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mitchell's Farm Market" },
      { name: "description", content: "Get in touch with Mitchell's Farm Market in Saanichton, BC. Phone (250) 652-6770 or email market@michellsfarm.com." },
      { property: "og:title", content: "Contact Mitchell's Farm" },
      { property: "og:description", content: "Reach the farm market by phone, email or in person." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32 pt-24 lg:px-10 lg:pt-32">
      <div className="eyebrow text-moss">Get in touch</div>
      <h1 className="mt-6 max-w-4xl font-serif text-5xl sm:text-7xl">
        We'd love to <span className="font-display">hear from you.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-foreground/75">
        Drop by the market, give us a call, or send a note — we'll get back to you as
        soon as we're in from the fields.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ContactCard icon={<MapPin className="h-5 w-5" />} label="Visit" lines={["2451 Island View Road", "Saanichton, BC V8M 1W3"]} />
        <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" lines={["(250) 652-6770"]} href="tel:12506526770" />
        <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" lines={["market@michellsfarm.com"]} href="mailto:market@michellsfarm.com" />
        <ContactCard icon={<Printer className="h-5 w-5" />} label="Fax" lines={["(250) 652-6710"]} />
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8">
        <div className="eyebrow text-clay">Market hours</div>
        <p className="mt-2 font-serif text-3xl">Open 9 — 5, every day of the week.</p>
      </div>
    </section>
  );
}

function ContactCard({
  icon, label, lines, href,
}: { icon: React.ReactNode; label: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent">
      <div className="flex items-center gap-2 text-primary">{icon}<span className="eyebrow">{label}</span></div>
      <div className="mt-4 space-y-1 text-base text-foreground/85">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
