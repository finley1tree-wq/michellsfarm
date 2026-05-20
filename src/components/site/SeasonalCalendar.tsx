type Status = "in" | "soon" | "out";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
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
  in:   "bg-[oklch(0.62_0.14_145)] text-cream",
  soon: "bg-[oklch(0.82_0.14_85)] text-foreground/85",
  out:  "bg-muted text-muted-foreground/60",
};

export default function SeasonalCalendar() {
  const currentMonth = new Date().getMonth();

  return (
    <section className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow text-moss">A year on the farm</div>
            <h2 className="mt-3 text-4xl sm:text-5xl">What's In Season</h2>
            <p className="mt-4 max-w-xl text-foreground/70">
              A month-by-month look at what's coming out of our fields.
              We've highlighted this month so you can see what's ready right now.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/70">
            <LegendDot className="bg-[oklch(0.62_0.14_145)]" label="In season" />
            <LegendDot className="bg-[oklch(0.82_0.14_85)]" label="Coming soon" />
            <LegendDot className="bg-muted" label="Out of season" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MONTHS.map((month, i) => {
            const isCurrent = i === currentMonth;
            return (
              <div
                key={month}
                className={`rounded-2xl border p-5 transition-all ${
                  isCurrent
                    ? "border-primary bg-primary text-cream shadow-xl shadow-primary/20"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3
                    className={`font-serif text-2xl ${
                      isCurrent ? "text-cream" : "text-foreground"
                    }`}
                  >
                    {month}
                  </h3>
                  {isCurrent && (
                    <span className="eyebrow rounded-full bg-accent px-2.5 py-1 text-[0.6rem] text-accent-foreground">
                      Now
                    </span>
                  )}
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {PRODUCTS.map((p) => (
                    <li
                      key={p.name}
                      className={`rounded-full px-2.5 py-1 text-[0.7rem] ${STATUS_STYLES[p.schedule[i]]}`}
                      title={
                        p.schedule[i] === "in"
                          ? `${p.name} — in season`
                          : p.schedule[i] === "soon"
                          ? `${p.name} — coming soon`
                          : `${p.name} — out of season`
                      }
                    >
                      {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-3 w-3 rounded-full ${className}`} />
      {label}
    </span>
  );
}