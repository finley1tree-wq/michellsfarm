import { useEffect, useState } from "react";
import "./styles.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { AboutPage } from "@/routes/about";
import { ContactPage } from "@/routes/contact";
import { HarvestRdPage } from "@/routes/harvest-rd";
import { Home } from "@/routes/index";
import { NurseryPage } from "@/routes/nursery";
import { ProductsPage } from "@/routes/products";
import { VisitPage } from "@/routes/visit";

const routes: Record<string, { title: string; description: string; component: () => React.ReactNode }> = {
  "/": {
    title: "Michell's Farm — Sixth-generation farm market on the Saanich Peninsula",
    description: "Visit our farm market for seasonal produce, pasture-raised beef, fresh berries and our famous U-Pick pumpkin patch. Open 7 days, 9-5.",
    component: Home,
  },
  "/about": {
    title: "Our Story — Michell's Farm, est. 1862",
    description: "Six generations of the Michell family have farmed the Saanich Peninsula since 1862.",
    component: AboutPage,
  },
  "/products": {
    title: "What We Grow — Michell's Farm",
    description: "Seasonal vegetables, fresh berries, pasture-raised beef, hay and straw, plus the best local goods from Vancouver Island.",
    component: ProductsPage,
  },
  "/harvest-rd": {
    title: "Harvest Rd — Farm-to-Table Grill at Michell's Farm",
    description: "A farm-to-table grill right beside the market on the Lochside Trail. Open 10—5 every day.",
    component: HarvestRdPage,
  },
  "/nursery": {
    title: "Michell Valley Plants — The Nursery at Michell's Farm",
    description: "Veggie starts, tomato plants, bedding plants, herbs, hanging baskets, roses and shrubs behind the market.",
    component: NurseryPage,
  },
  "/visit": {
    title: "Visit — Michell's Farm Market",
    description: "Find us at 2451 Island View Rd, right on the Lochside Trail. Open seven days a week, 9-5.",
    component: VisitPage,
  },
  "/contact": {
    title: "Contact — Michell's Farm Market",
    description: "Get in touch with Michell's Farm Market in Saanichton, BC. Phone (250) 652-6770 or email market@michellsfarm.com.",
    component: ContactPage,
  },
};

function getPath() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return routes[path] ? path : "/";
}

export default function App() {
  const [path, setPath] = useState(getPath);
  const route = routes[path];
  const Page = route.component;

  useEffect(() => {
    const updatePath = () => setPath(getPath());
    window.addEventListener("popstate", updatePath);
    window.addEventListener("app:navigate", updatePath);
    return () => {
      window.removeEventListener("popstate", updatePath);
      window.removeEventListener("app:navigate", updatePath);
    };
  }, []);

  useEffect(() => {
    document.title = route.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", route.description);
  }, [route]);

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Page />
        </main>
        <Footer />
      </div>
    </>
  );
}