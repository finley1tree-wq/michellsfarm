import { createFileRoute } from "@tanstack/react-router";
import heritage from "@/assets/heritage.jpg";
import field from "@/assets/hero-field.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Michell's Farm, est. 1862" },
      { name: "description", content: "Six generations of the Michell family have farmed the Saanich Peninsula since 1862. From William Michell's first 100 acres to today's 400+ acre family operation." },
      { property: "og:title", content: "Our Story — Michell's Farm" },
      { property: "og:description", content: "Six generations on the same Saanich Peninsula soil." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pt-32">
        <div className="eyebrow text-moss">Our story</div>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl sm:text-7xl">
          One hundred and sixty<br /><span className="font-display">harvests in.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <img
            src={heritage}
            alt="Vintage photograph of the Michell family on their original farm"
            width={1200}
            height={1500}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-lg shadow-primary/10"
          />
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            The Michell family · Saanich Peninsula, late 1800s
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 lg:col-span-7">
          <p>
            Michell's Farm was started in the 1860s by William Michell, who bought a
            100-acre parcel on the Saanich Peninsula with the money he'd made in the
            Cariboo gold rush. He planted potatoes. Lots of them.
          </p>
          <p>
            For more than a century, the farm grew potatoes alongside a slowly widening
            roster of vegetables and berries. Then, in the 1980s, the federal government
            banned potato growing in Central Saanich after the discovery of the golden
            nematode. The local farming community took a hit.
          </p>
          <p>
            For the Michells, the ban became the push to diversify. The family
            experimented — beets, brassicas, brassicas again, corn, squash, peas — and
            slowly built the wide-ranging vegetable operation you'll find on our shelves
            today.
          </p>
          <p>
            The farm has grown to 400+ acres (with another 100+ leased) and now produces
            over four thousand tonnes of food a year. It's still owned and worked by the
            Michell family, six generations in.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src={field} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/85" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 text-cream lg:grid-cols-4 lg:px-10">
          {[
            ["1862", "Year William Michell broke ground"],
            ["6", "Generations farming the same land"],
            ["400+", "Acres under cultivation today"],
            ["50+", "Varieties of fruit & vegetables grown"],
          ].map(([n, l]) => (
            <div key={n}>
              <div className="font-serif text-6xl text-cream">{n}</div>
              <div className="mt-3 text-sm text-cream/75">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
