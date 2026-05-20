import { createFileRoute } from "@tanstack/react-router";
import restaurantImg from "@/assets/restaurant.jpg";

export const Route = createFileRoute("/harvest-rd")({
  head: () => ({
    meta: [
      { title: "Harvest Rd — Farm-to-Table Grill at Michell's Farm" },
      { name: "description", content: "A farm-to-table grill right beside the market on the Lochside Trail. Seasonal menus built from the field next door. Open 10—5 every day." },
      { property: "og:title", content: "Harvest Rd — Farm-to-Table Grill" },
      { property: "og:description", content: "Seasonal menus inspired by the freshest local ingredients, right beside the market." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/8a11ebfe-f61c-42b2-8fc5-11a0dc027d57" },
    ],
  }),
  component: HarvestRdPage,
});

function HarvestRdPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={restaurantImg} alt="Inside the Harvest Rd farm-to-table grill"
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-40">
          <div className="eyebrow text-cream/85">Right next door</div>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl text-cream sm:text-7xl">
            Harvest Rd<br />
            <span className="font-display">Farm-to-table grill.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">
            A casual sit-down grill on the Lochside Trail, right beside the market.
            Seasonal menus built from the field next door — and from neighbours we know
            on Vancouver Island.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="space-y-8 lg:col-span-7">
          <div>
            <div className="eyebrow text-clay">The menu</div>
            <h2 className="mt-2 font-serif text-4xl">Built from the field next door</h2>
            <p className="mt-4 text-foreground/75">
              Our chefs walk across the gravel to the market every morning to see what
              came in. The menu changes with the season — sometimes weekly. Expect
              Michell beef burgers, salads bursting with heirloom tomatoes, soups from
              roasted squash, and desserts built around whichever berry is at peak.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Michell beef burger on a Portofino bun",
              "Heirloom tomato salad with Stillmeadow goat cheese",
              "Roasted squash & sage soup",
              "Harvest Rd grain bowl",
              "Tayberry galette à la mode",
              "Local craft beer & BC wine",
            ].map((item) => (
              <li key={item} className="flex gap-3 border-b border-border/50 pb-3 text-sm text-foreground/85">
                <span className="font-display text-accent">·</span>{item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-28 space-y-6 rounded-2xl bg-card p-8">
            <div>
              <div className="eyebrow text-clay">Hours</div>
              <p className="mt-2 text-foreground/85">10 am — 5 pm, every day</p>
              <p className="mt-1 text-xs text-muted-foreground">Seasonal hours — call to confirm in winter</p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="eyebrow text-clay">Find us</div>
              <p className="mt-2 text-foreground/85">
                2451 Island View Rd<br />
                Saanichton, BC · on the Lochside Trail
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="eyebrow text-clay">Follow</div>
              <a href="https://instagram.com/harvest.rd" target="_blank" rel="noreferrer"
                className="mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline">
                @harvest.rd on Instagram →
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <div className="eyebrow text-moss">The idea</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            The shortest <span className="font-display">supply chain</span> in town.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            The tomato on your plate was on the vine this morning, three hundred feet
            away. That's the whole pitch.
          </p>
        </div>
      </section>
    </>
  );
}