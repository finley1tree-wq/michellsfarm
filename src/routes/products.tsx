import { createFileRoute } from "@tanstack/react-router";
import produce from "@/assets/produce.jpg";
import berries from "@/assets/berries.jpg";
import cattle from "@/assets/cattle.jpg";
import pantry from "@/assets/pantry.jpg";
import christmas from "@/assets/christmas.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "What We Grow — Michell's Farm" },
      { name: "description", content: "Seasonal vegetables, fresh berries, pasture-raised beef, hay and straw, plus the best local goods from our neighbours on Vancouver Island." },
      { property: "og:title", content: "What We Grow — Michell's Farm" },
      { property: "og:description", content: "50+ vegetables, six kinds of berries, pasture-raised beef and the best of Vancouver Island." },
    ],
  }),
  component: ProductsPage,
});

const vegetables = [
  "Apples — Fuji, Jonagold, Jonafree, Liberty, Prima, Summer Red, Gravenstein",
  "Beans — green & yellow", "Beets — red & yellow", "Broccoli", "Brussels sprouts",
  "Cabbage — red, green, savoy & spring greens", "Carrots",
  "Cauliflower — white & purple", "Celery", "Celery root / celeriac", "Chard",
  "Corn — sweet yellow and peaches & cream", "Cucumbers", "Dill", "English peas",
  "Fennel / anise", "Fresh herbs", "Gourds & mini pumpkins",
  "Kale — green & red", "Leeks", "Lettuce — head, romaine, green & red leaf",
  "Onions — yellow, green", "Parsnips", "Pumpkins — regular, sugar/pie, U-Pick",
  "Rhubarb", "Spinach", "Squash — 9 varieties", "Vegetable marrow",
  "Zucchini — green & yellow",
];

const berriesList = ["Strawberries", "Raspberries", "Blackberries", "Tayberries", "Loganberries", "Blueberries (BC grown)"];

const partners = [
  ["Irene's Bakery Products", "https://www.irenesbakery.ca/"],
  ["Portofino Bakery Products", "https://www.portofinobakery.ca/"],
  ["Mitchell's Soup Mixes", "https://www.mitchellssoupco.com/"],
  ["Snowdon House vinegars & mixes", "https://snowdonhouse.ca/"],
  ["Island Farms Dairy", "https://www.islandfarms.com/en"],
  ["Berryman's Bacon", "https://berrymanfarms.ca/"],
  ["Cowichan Milk", "http://www.cowichanmilk.ca/"],
  ["Herbivores Choice Veggie Burgers", "https://www.herbivoreschoice.ca/"],
  ["Pasta Triestina", "https://lapastatriestina.com/"],
  ["Maiiz Tortillas", "https://maiiz.ca/"],
  ["Tannadice Farms Pork", "https://www.tannadicefarms.com/"],
  ["Stillmeadow Farm Products", "https://www.stillmeadowfarm.ca/"],
] as const;

function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-24 lg:px-10 lg:pt-32">
        <div className="eyebrow text-moss">What we grow</div>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl sm:text-7xl">
          Fifty-something varieties,<br />
          <span className="font-display">all grown right here.</span>
        </h1>
      </section>

      {/* Vegetables */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <img src={produce} alt="Fresh harvested vegetables on a wood table" loading="lazy"
            className="sticky top-28 w-full rounded-2xl object-cover" />
        </div>
        <div className="lg:col-span-7">
          <div className="eyebrow text-clay">Field-grown</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">Fruits & Vegetables</h2>
          <p className="mt-4 text-foreground/75">
            Apples, beans, beets, broccoli, brussels sprouts, cabbage, carrots,
            cauliflower, corn, kale, lettuce, onions, pumpkins, squash, zucchini — and
            another 30+ varieties through the season.
          </p>
          <details className="mt-6 group">
            <summary className="cursor-pointer text-sm font-medium text-primary underline-offset-4 hover:underline">
              See the full list →
            </summary>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {vegetables.map((v) => (
                <li key={v} className="flex gap-3 border-b border-border/50 pb-3 text-sm text-foreground/85">
                  <span className="font-display text-accent">·</span>{v}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      {/* Berries */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <div className="eyebrow text-clay">In season</div>
            <h2 className="mt-3 text-4xl sm:text-5xl">Seasonal Fresh Berries</h2>
            <p className="mt-4 max-w-xl text-foreground/75">
              Picked at peak. Fresh in season, frozen all winter.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {berriesList.map((b) => (
                <li key={b} className="rounded-full border border-border bg-card px-4 py-2 text-center text-sm">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <img src={berries} alt="Basket of fresh berries" loading="lazy" className="w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Beef + Hay */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <article className="overflow-hidden rounded-2xl bg-card">
          <img src={cattle} alt="Cattle grazing in pasture" loading="lazy" className="h-72 w-full object-cover" />
          <div className="p-8">
            <div className="eyebrow text-clay">Michell beef</div>
            <h3 className="mt-2 font-serif text-3xl">Pasture-raised, hormone & antibiotic free</h3>
            <p className="mt-3 text-foreground/75">
              Grazed on the fields off Island View Rd. Sold fresh and frozen, year-round.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="p-8">
            <div className="eyebrow text-clay">Hay, straw & compost</div>
            <h3 className="mt-2 font-serif text-3xl">Agricultural supplies, grown & sourced locally</h3>
            <p className="mt-3 text-foreground/75">
              1st & 2nd cut Michell-grown hay, local barley straw, bagged compost
              and aged manure.
            </p>
            <p className="mt-4 rounded-md bg-accent/10 px-3 py-2 text-sm text-accent">
              Pick up in store only · 2nd cut hay sold out
            </p>
          </div>
        </article>
      </section>

      {/* Pantry — eggs, honey, baked */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <img src={pantry} alt="Fresh brown eggs, jars of honey and artisan bread loaves" loading="lazy"
            className="w-full rounded-2xl object-cover" />
        </div>
        <div className="lg:col-span-7">
          <div className="eyebrow text-clay">Daily in the market</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">Eggs, baked goods & honey</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Fresh local farm eggs — brown, large",
              "Free-run & organic eggs",
              "Daily bread from Portofino Bakery",
              "Cookies, pies & pastries from Irene's",
              "Saanich Peninsula wildflower honey",
              "Comb honey & creamed honey",
              "Local jams, preserves & curds",
              "Cowichan Valley butter & cheese",
            ].map((v) => (
              <li key={v} className="flex gap-3 border-b border-border/50 pb-3 text-sm text-foreground/85">
                <span className="font-display text-accent">·</span>{v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Christmas trees & holly */}
      <section className="relative isolate overflow-hidden py-32">
        <img src={christmas} alt="Snowy field of Christmas trees and holly bundles"
          loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-xl text-cream">
            <div className="eyebrow text-cream/80">Every December</div>
            <h2 className="mt-4 font-serif text-5xl sm:text-6xl">
              Christmas trees<br /><span className="font-display">& fresh holly.</span>
            </h2>
            <p className="mt-6 text-lg text-cream/85">
              Fresh-cut Douglas, grand & noble fir, plus bundles of holly from our hedges.
            </p>
            <p className="mt-3 text-sm text-cream/70">
              Early December through Christmas Eve, while supplies last.
            </p>
          </div>
        </div>
      </section>

      {/* Local partners */}
      <section className="border-t border-border bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="eyebrow text-clay">From our neighbours</div>
          <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
            And a market full of the best <span className="font-display">local goods</span>.
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-accent hover:bg-cream">
                  <span className="text-sm text-foreground/85">{name}</span>
                  <span className="text-accent transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
