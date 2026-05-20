import { createFileRoute } from "@tanstack/react-router";
import pumpkins from "@/assets/pumpkins.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Michell's Farm Market" },
      { name: "description", content: "Find us at 2451 Island View Rd, right on the Lochside Trail. Open seven days a week, 9-5. Plus the U-Pick pumpkin patch every fall." },
      { property: "og:title", content: "Visit Michell's Farm" },
      { property: "og:description", content: "On the Lochside Trail in Saanichton. Open 7 days a week, 9-5." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pt-32">
        <div className="eyebrow text-moss">Come see us</div>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl sm:text-7xl">
          Right on the <span className="font-display">Lochside Trail.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-2 lg:px-10">
        <div className="space-y-8 rounded-2xl bg-card p-8 lg:p-10">
          <div>
            <div className="eyebrow text-clay">The market</div>
            <h2 className="mt-2 font-serif text-3xl">Open seven days a week</h2>
            <p className="mt-3 text-foreground/75">
              Our produce, neighbours' produce, local baked goods, honey & more.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
            <dt className="text-muted-foreground">Address</dt>
            <dd>2451 Island View Rd, Saanichton, BC V8M 1W3</dd>
            <dt className="text-muted-foreground">Hours</dt>
            <dd>9 am — 5 pm, every day</dd>
            <dt className="text-muted-foreground">Phone</dt>
            <dd><a href="tel:12506526770" className="underline-offset-2 hover:underline">(250) 652-6770</a></dd>
            <dt className="text-muted-foreground">Email</dt>
            <dd><a href="mailto:market@michellsfarm.com" className="underline-offset-2 hover:underline">market@michellsfarm.com</a></dd>
          </dl>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img src={pumpkins} alt="U-pick pumpkin patch in autumn" loading="lazy"
            className="h-full min-h-[24rem] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-cream">
            <div className="eyebrow text-cream/80">Every fall</div>
            <h3 className="mt-2 font-serif text-3xl">U-Pick Pumpkin Patch</h3>
            <p className="mt-2 max-w-sm text-cream/85">
              Open every October. Wagon rides and a field full of pumpkins.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Map to Michell's Farm Market"
            src="https://www.google.com/maps?q=2451+Island+View+Rd,+Saanichton,+BC&output=embed"
            width="100%" height="450" loading="lazy" className="block w-full"
          />
        </div>
      </section>

      {/* Neighbours */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <a href="/harvest-rd"
            className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent">
            <div className="eyebrow text-clay">Right next door</div>
            <h3 className="mt-2 font-serif text-3xl">Harvest Rd — Farm to Table Grill</h3>
            <p className="mt-3 text-foreground/75">Open every day 10—5.</p>
            <span className="mt-4 inline-block text-sm text-accent">See the menu →</span>
          </a>
          <a href="/nursery"
            className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent">
            <div className="eyebrow text-clay">Behind the market</div>
            <h3 className="mt-2 font-serif text-3xl">Michell Valley Plants</h3>
            <p className="mt-3 text-foreground/75">
              Veggie starts, herbs, baskets, shrubs. Open daily 9:30—5.
            </p>
            <span className="mt-4 inline-block text-sm text-accent">Visit the nursery →</span>
          </a>
        </div>
      </section>
    </>
  );
}
