import nurseryImg from "@/assets/nursery.jpg";

const categories = [
  ["Seeds"],
  ["Veggie starts"],
  ["Tomato plants"],
  ["Bedding plants"],
  ["Basket stuffers"],
  ["Herbs"],
  ["Roses"],
  ["Shrubs"],
  ["…and more"],
];

export function NurseryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={nurseryImg} alt="Greenhouse rows of vegetable starts and herbs at Michell Valley Plants"
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/55 via-primary/35 to-background" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-40">
          <div className="eyebrow text-cream/85">Behind the market</div>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl text-cream sm:text-7xl">
            Michell Valley<br />
            <span className="font-display">Plants.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">
            Greenhouse nursery behind the market. Grown by us, ready for your garden.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="eyebrow text-clay">What you'll find</div>
        <h2 className="mt-3 text-3xl sm:text-4xl">A wonderful selection of plants</h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {categories.map(([title]) => (
            <li key={title} className="rounded-2xl border border-border bg-card px-6 py-5 text-center font-serif text-xl">
              {title}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="eyebrow text-moss">Visit the nursery</div>
            <h2 className="mt-3 font-serif text-4xl">Open every day, 9:30 — 5</h2>
            <p className="mt-4 text-foreground/75">
              Right behind the market, in the south-west corner of the parking lot.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-8 text-sm">
            <dt className="text-muted-foreground">Address</dt>
            <dd>2451 Island View Rd, Saanichton, BC</dd>
            <dt className="text-muted-foreground">Hours</dt>
            <dd>9:30 am — 5 pm, daily</dd>
            <dt className="text-muted-foreground">Phone</dt>
            <dd><a href="tel:12508860494" className="underline-offset-2 hover:underline">(250) 886-0494</a></dd>
            <dt className="text-muted-foreground">Follow</dt>
            <dd><a href="https://instagram.com/michellvalleyplants" target="_blank" rel="noreferrer"
              className="text-accent underline-offset-2 hover:underline">@michellvalleyplants</a></dd>
          </dl>
        </div>
      </section>
    </>
  );
}