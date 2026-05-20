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
    author: "Celia Michell",
    title: "Raspberry Muffins",
    body: "2 cups flour, ½ cup sugar, 3 tsp baking powder, ½ tsp salt, 1 egg, 1 cup milk, ½ cup melted butter, 1 cup fresh or frozen raspberries. Mix dry, beat egg with milk and butter, combine and stir until moist. Fold in raspberries, fill muffin pan, bake at 425°F for 20 min. Dunk warm tops in melted butter, then sugar. Makes one dozen.",
  },
  {
    author: "Celia Michell",
    title: "Leek & Potato Soup",
    body: "12 cups water, 3 chicken bouillon cubes, 5 medium potatoes, 6 medium leeks (white parts, chopped), 2 carrots, 2 stalks celery, ½ cup light cream, 2 bay leaves, salt & pepper. Boil water with bouillon, add veg and bay leaves, simmer until tender (1 hr+). Remove bay, blend if you like, stir in cream and season. Reheat to serve.",
  },
  {
    author: "Nicole Verhagen",
    title: "Kale Chips",
    body: "1 bunch kale, 1 tbsp extra virgin olive oil, sea salt to taste. Wash and dry kale thoroughly. Remove thick stems, tear into bite-size pieces. Toss with oil, spread on a cookie sheet, season. Bake at 325°F for ~15 min, checking constantly — remove pieces as they're golden and firm. Try with balsamic, garlic powder or seasoning salt.",
  },
];

const hints = [
  "Berries are perishable — process the day you buy them, especially in bad weather.",
  "Freeze raspberries & hulled strawberries right in the containers they come in, then bag later.",
  "Handle cauliflower carefully — it marks easily and bruises in the centre of the head.",
  "A slightly discoloured cauliflower can be whitened by adding a tsp of milk or lemon juice to the cooking water.",
  "To tell if corn is ripe, look at the tassel and feel the top of the cob — the darker the tassel, the riper the corn.",
  "Freeze corn on the cob: pull off a few outer husk layers, trim the tassels, bag and freeze. Or husk, blanch until colour changes, ice-bath, dry and bag.",
  "Squash & pumpkin freeze well — just prepare as usual and freeze any leftovers in containers.",
  "For most vegetables, blanch only until you see a colour change, then ice-bath, dry and freeze.",
  "Brussels sprouts keep for weeks on the stalk — stand them in a bucket with a little water outside, away from critters.",
  "Leeks are mild and easy — boil them tender, or use in cream sauces, around roasts, or in salads in place of onions.",
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
            Simple ideas for whatever's in your basket this week.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <article key={r.title} className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent">
              <div className="eyebrow text-clay">From {r.author}</div>
              <h2 className="mt-3 font-serif text-2xl">{r.title}</h2>
              <p className="mt-3 text-sm text-foreground/75">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/60 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="eyebrow text-moss">Helpful hints from the Michells</div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Tips from the farm</h2>
          <ol className="mt-10 space-y-4">
            {hints.map((h, i) => (
              <li key={i} className="flex gap-4 border-b border-border/50 pb-4 text-sm text-foreground/85">
                <span className="font-display text-2xl text-accent leading-none">{i + 1}.</span>
                <span>{h}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}