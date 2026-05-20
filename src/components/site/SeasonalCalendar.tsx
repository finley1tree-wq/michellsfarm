type Status = "in" | "soon" | "out";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const MONTHS_FULL = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

// 12-month availability per product (0 = Jan ... 11 = Dec)
const PRODUCTS: { name: string; schedule: Status[] }[] = [
  { name: "Strawberries",     schedule: ["out","out","out","out","soon","in","in","out","out","out","out","out"] },
  { name: "Raspberries",      schedule: ["out","out","out","out","out","soon","in","in","out","out","out","out"] },
  { name: "Tayberries",       schedule: ["out","out","out","out","out","soon","in","out","out","out","out","out"] },
  { name: "Blackberries",     schedule: ["out","out","out","out","out","out","soon","in","in","out","out","out"] },
  { name: "Corn",             schedule: ["out","out","out","out","out","out","soon","in","in","out","out","out"] },
  { name: "Tomatoes",         schedule: ["out","out","out","out","out","out","soon","in","in","in","out","out"] },
  { name: "Kale",             schedule: ["out","out","out","out","soon","in","in","in","in","in","in","out"] },
  { name: "Brussels Sprouts", schedule: ["in","in","out","out","out","out","out","out","soon","in","in","in"] },
  { name: "Pumpkins",         schedule: ["out","out","out","out","out","out","out","soon","in","in","out","out"] },
  { name: "Potatoes",         schedule: ["out","out","out","out","out","soon","in","in","in","in","in","in"] },
  { name: "Carrots",          schedule: ["in","in","in","out","out","soon","in","in","in","in","in","in"] },
  { name: "Apples",           schedule: ["out","out","out","out","out","out","out","soon","in","in","in","out"] },
  { name: "Beef",             schedule: ["in","in","in","in","in","in","in","in","in","in","in","in"] },
];

const STATUS_STYLES: Record<Status, string> = {
  in:   "bg-[oklch(0.62_0.14_145)]",
  soon: "bg-[oklch(0.82_0.14_85)]",
  out:  "bg-muted",
};

export default function SeasonalCalendar() {
  const currentMonth = new Date().getMonth();
  const nowAvailable = PRODUCTS.filter((p) => p.schedule[currentMonth] === "in").map((p) => p.name);
  const comingSoon = PRODUCTS.filter((p) => p.schedule[currentMonth] === "soon").map((p) => p.name);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow text-moss">A year on the farm</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">What's In Season</h2>
          <p className="mt-4 text-foreground/70">
            Here's what's ready in {MONTHS_FULL[currentMonth]} — and a quick look at the rest of the year.
          </p>
        </div>

        {/* Right now */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary bg-primary p-7 text-cream shadow-lg shadow-primary/15">
            <div className="eyebrow text-cream/80">Available right now</div>
            <p className="mt-3 font-serif text-2xl leading-snug">
              {nowAvailable.length ? nowAvailable.join(" · ") : "Check back soon — fields are resting."}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="eyebrow text-moss">Coming soon</div>
            <p className="mt-3 font-serif text-2xl leading-snug text-foreground/85">
              {comingSoon.length ? comingSoon.join(" · ") : "Nothing new on the horizon this month."}
            </p>
          </div>
        </div>

        {/* Year-at-a-glance chart */}
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-card px-4 py-3 text-left font-medium text-foreground/70">
                  Product
                </th>
                {MONTHS.map((m, i) => (
                  <th
                    key={m}
                    className={`px-2 py-3 text-center text-xs font-medium ${
                      i === currentMonth ? "bg-primary text-cream rounded-t-md" : "text-foreground/60"
                    }`}
                  >
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.name} className="border-t border-border">
                  <td className="sticky left-0 z-10 bg-card px-4 py-3 font-medium text-foreground">
                    {p.name}
                  </td>
                  {p.schedule.map((s, i) => (
                    <td
                      key={i}
                      className={`px-1 py-3 text-center ${i === currentMonth ? "bg-primary/5" : ""}`}
                      title={`${p.name} — ${s === "in" ? "in season" : s === "soon" ? "coming soon" : "out of season"} in ${MONTHS_FULL[i]}`}
                    >
                      <span className={`mx-auto block h-3 w-6 rounded-full ${STATUS_STYLES[s]}`} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-foreground/70">
          <LegendDot className="bg-[oklch(0.62_0.14_145)]" label="In season" />
          <LegendDot className="bg-[oklch(0.82_0.14_85)]" label="Coming soon" />
          <LegendDot className="bg-muted" label="Out of season" />
        </div>
      </div>
    </section>
  );
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-3 w-6 rounded-full ${className}`} />
      {label}
    </span>
  );
}