




import HeroSlider from "@/components/HeroSlider";
import PopularSearches from "@/components/PopularSearches";
import BrandGrid from "@/components/BrandGrid";
import CategoryTiles from "@/components/CategoryTiles";
import ProductCarousel from "@/components/ProductCarousel";
import StatsStrip from "@/components/StatsStrip";
import NotebooksSection from "@/components/NotebooksSection";
import FountainPenEssentials from "@/components/FountainPenEssentials";
import AboutStats from "@/components/AboutStats";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import WritersColony from "@/components/WritersColony";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import FeaturedItems from "@/components/FeaturedItems";
import { newArrivals, stockProducts } from "@/lib/dummyData";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <BrandLogoStrip />
      <CategoryTiles />
      <BrandGrid />

<ProductCarousel 
  title="New Arrivals" 
  tabs={["Fountain Pens", "Notebooks", "Inks"]} 
  products={newArrivals} 
/>


<ProductCarousel 
  title="In Stock" 
  tabs={["All", "Notebooks", "Pens"]} 
  products={stockProducts} 
/>
      <StatsStrip />
      <NotebooksSection />
      <FeaturedItems />
      <FountainPenEssentials />
      <AboutStats />
      <PopularSearches />
      <WritersColony />
    </main>
  );
}
