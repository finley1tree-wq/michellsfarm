import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Clock, Leaf } from "lucide-react";
import hero from "@/assets/hero-field.jpg";
import produce from "@/assets/produce.jpg";
import cattle from "@/assets/cattle.jpg";
import pumpkins from "@/assets/pumpkins.jpg";
import berries from "@/assets/berries.jpg";
import restaurant from "@/assets/restaurant.jpg";
import nursery from "@/assets/nursery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michell's Farm — Sixth-generation farm market on the Saanich Peninsula" },
      { name: "description", content: "Visit our farm market for seasonal produce, pasture-raised beef, fresh berries and our famous U-Pick pumpkin patch. Open 7 days, 9-5." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Sunset over Michell's farm fields on the Saanich Peninsula"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/40 via-primary/20 to-background" />
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-28 lg:px-10 lg:pb-48 lg:pt-40">
          <div className="max-w-3xl">
            <div className="eyebrow text-cream/90">Saanich Peninsula · est. 1862</div>
            <h1 className="mt-6 font-serif text-5xl text-cream sm:text-7xl lg:text-[5.5rem]">
              Six generations,<br />
              <span className="font-display">one piece of earth.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-cream/85">
              Farming the same land outside Saanichton since 1862.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-accent hover:text-accent-foreground"
              >
                What's in season
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm text-cream backdrop-blur hover:bg-cream/10"
              >
                Plan your visit
              </Link>
            </div>
          </div>
        </div>

        {/* Open card */}
        <div className="relative mx-auto -mt-16 max-w-7xl px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-xl shadow-primary/10 sm:grid-cols-3">
            <Info icon={<Clock className="h-5 w-5" />} title="Open daily" body="9 am — 5 pm, seven days a week" />
            <Info icon={<MapPin className="h-5 w-5" />} title="2451 Island View Rd" body="Saanichton, BC · on the Lochside Trail" />
            <Info icon={<Leaf className="h-5 w-5" />} title="Grown here" body="50+ varieties of fruits & vegetables" />
          </div>
        </div>
      </section>

      {/* STORY STRIP */}
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <div className="eyebrow text-moss">A family farm</div>
        <h2 className="mt-4 text-3xl sm:text-4xl">
          Six generations on the same Saanich soil — 400+ acres, 50+ crops, all grown here.
        </h2>
        <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
          Read our story
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      {/* THREE BUSINESSES */}
      <section className="border-y border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="eyebrow text-moss">Three businesses, one family</div>
            <h2 className="mt-3 text-4xl sm:text-5xl">All on the same property</h2>
            <p className="mt-5 text-lg text-foreground/75">
              The Michell family runs three businesses side by side on Island View Rd —
              the farm market, a farm-to-table grill, and a working plant nursery.
              Visit one, stay for all three.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <BizCard
              image={produce}
              eyebrow="The Farm Market"
              title="Michell's Farm Market"
              body="Produce, berries, beef, eggs, baked goods & honey. Open daily 9–5."
              to="/products"
              cta="What's in season"
            />
            <BizCard
              image={restaurant}
              eyebrow="The Restaurant"
              title="Harvest Rd"
              body="Farm-to-table grill right next to the market. Seasonal hours."
              to="/harvest-rd"
              cta="See the menu"
            />
            <BizCard
              image={nursery}
              eyebrow="The Nursery"
              title="Michell Valley Plants"
              body="Veggie starts, bedding plants, herbs & perennials. Spring through fall."
              to="/nursery"
              cta="Visit the nursery"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE GROW — editorial grid */}
      <section className="bg-secondary/60 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-moss">From our fields</div>
              <h2 className="mt-3 text-4xl sm:text-5xl">What you'll find this week</h2>
            </div>
            <Link to="/products" className="text-sm text-primary underline-offset-4 hover:underline">
              See everything we grow →
            </Link>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:grid-rows-2">
            <Feature
              className="lg:col-span-7 lg:row-span-2"
              image={produce}
              label="Vegetables"
              title="50+ varieties, picked at peak"
              body="Heirloom tomatoes, sweet corn, brussels sprouts, three kinds of kale and most of what's in between."
            />
            <Feature
              className="lg:col-span-5"
              image={berries}
              label="Berries"
              title="Straight from the cane"
              body="Strawberries, raspberries, tayberries, loganberries and blackberries in season — frozen all winter."
            />
            <Feature
              className="lg:col-span-5"
              image={cattle}
              label="Beef"
              title="Pasture-raised, hormone-free"
              body="Our herd grazes the fields you can see from Island View Rd. Sold fresh and frozen, year-round."
            />
          </div>
        </div>
      </section>

      {/* PUMPKIN MOMENT */}
      <section className="relative isolate overflow-hidden py-32">
        <img
          src={pumpkins}
          alt="U-pick pumpkin patch at sunset"
          width={1440}
          height={1080}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-xl text-cream">
            <div className="eyebrow text-cream/80">Every October</div>
            <h2 className="mt-4 font-serif text-5xl sm:text-6xl">
              The <span className="font-display">U-Pick</span><br />Pumpkin Patch
            </h2>
            <p className="mt-6 text-lg text-cream/85">
              Wagon rides, sugar pumpkins, and a field that goes on as far as a kid can run.
            </p>
            <Link
              to="/visit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground hover:opacity-90"
            >
              Plan a visit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="bg-card p-7">
      <div className="flex items-center gap-3 text-primary">{icon}<span className="eyebrow">{title}</span></div>
      <p className="mt-3 text-base text-foreground/85">{body}</p>
    </div>
  );
}

function Feature({
  image, label, title, body, className = "",
}: { image: string; label: string; title: string; body: string; className?: string }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl bg-card ${className}`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full lg:min-h-[20rem]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
        <div className="eyebrow text-cream/75">{label}</div>
        <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm text-cream/80">{body}</p>
      </div>
    </article>
  );
}

function BizCard({
  image, eyebrow, title, body, to, cta,
}: { image: string; eyebrow: string; title: string; body: string; to: string; cta: string }) {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="eyebrow text-moss">{eyebrow}</div>
        <h3 className="mt-2 font-serif text-2xl">{title}</h3>
        <p className="mt-3 flex-1 text-sm text-foreground/75">{body}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
