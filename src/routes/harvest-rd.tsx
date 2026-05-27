import restaurantImg from "@/assets/restaurant.jpg";

export function HarvestRdPage() {
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
            Beside the market on the Lochside Trail. Seasonal menus from the field next door.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="space-y-8 lg:col-span-7">
          <div>
            <div className="eyebrow text-clay">The menu</div>
            <h2 className="mt-2 font-serif text-4xl">Seasonal menus, fresh local ingredients</h2>
            <p className="mt-4 text-foreground/75">
              The menu changes with what's coming out of the field next door.
              Custom cold-press juicing too. Full menu and updates are posted
              on Instagram and on the Harvest Rd website.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.harvestrd.com" target="_blank" rel="noreferrer"
                className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90">
                harvestrd.com →
              </a>
              <a href="https://instagram.com/harvest.rd" target="_blank" rel="noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-sm hover:bg-secondary">
                @harvest.rd
              </a>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-28 space-y-6 rounded-2xl bg-card p-8">
            <div>
              <div className="eyebrow text-clay">Hours</div>
              <p className="mt-2 text-foreground/85">10 am — 5 pm, every day</p>
              <p className="mt-1 text-xs text-muted-foreground">Check Instagram for updates</p>
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
            The tomato on your plate was on the vine this morning, 300 feet away.
          </p>
        </div>
      </section>
    </>
  );
}