import { createFileRoute } from "@tanstack/react-router";
import recipesImg from "@/assets/recipes.jpg";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "Recipes from the Farm — Michell's Farm" },
      { name: "description", content: "Seasonal recipes from the Michell family kitchen — soups, salads, sides and preserves built around what's in the field this week." },
      { property: "og:title", content: "Recipes from the Farm — Michell's Farm" },
      { property: "og:description", content: "Seasonal recipes built around what's in the field this week." },
    ],
  }),
  component: RecipesPage,
});

const recipes = [
  {
    season: "Summer",
    title: "Heirloom Tomato & Berry Salad",
    time: "15 min",
    body: "Sliced tomatoes, halved strawberries, torn basil, sea salt, a glug of olive oil and a splash of Snowdon House blackberry vinegar. That's it.",
  },
  {
    season: "Autumn",
    title: "Roasted Sugar Pumpkin Soup",
    time: "1 hr",
    body: "Halve and roast one of our sugar pumpkins with onion and garlic. Blend with stock, a knob of butter and a swirl of Berryman's bacon for the top.",
  },
  {
    season: "Autumn",
    title: "Brussels Sprouts on the Stalk",
    time: "30 min",
    body: "Snap sprouts from the stalk, halve, toss with olive oil, salt, maple. Roast hot until charred. Finish with a squeeze of lemon.",
  },
  {
    season: "Winter",
    title: "Michell Beef Pot Roast",
    time: "4 hrs",
    body: "Sear a chuck roast, then braise low and slow with carrots, parsnips, celery root and onions. Serve over mashed potatoes.",
  },
  {
    season: "Spring",
    title: "Rhubarb & Honey Crisp",
    time: "45 min",
    body: "First-of-season rhubarb tossed with local honey, topped with an oat-and-butter crumble. Eat warm with Island Farms vanilla ice cream.",
  },
  {
    season: "Year-round",
    title: "Frozen Berry Smoothie",
    time: "5 min",
    body: "A handful of our frozen tayberries, a banana, plain yogurt, a spoon of honey, a splash of Cowichan milk. Blend.",
  },
];

function RecipesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={recipesImg} alt="Fresh farm vegetables on a wooden board with a handwritten recipe card"
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/55 via-primary/35 to-background" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-40">
          <div className="eyebrow text-cream/85">From our kitchen</div>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl text-cream sm:text-7xl">
            What to do with <span className="font-display">a basket of it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">
            Six generations of cooks have figured out what to do with everything that
            comes out of these fields. Here are some of the recipes we keep coming back to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <article key={r.title} className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-clay">{r.season}</span>
                <span className="text-xs text-muted-foreground">{r.time}</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl">{r.title}</h2>
              <p className="mt-3 text-sm text-foreground/75">{r.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-secondary/60 p-8 text-center lg:p-12">
          <div className="eyebrow text-moss">In the market</div>
          <h3 className="mt-2 font-serif text-3xl">Pick up a printed recipe card</h3>
          <p className="mx-auto mt-3 max-w-xl text-foreground/75">
            Our market staff post new recipe cards next to whatever's in peak season —
            grab one on your way through.
          </p>
        </div>
      </section>
    </>
  );
}