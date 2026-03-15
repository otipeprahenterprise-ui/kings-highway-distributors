import { HeroSection } from "@/components/home/hero-section"
import { FeatureGrid } from "@/components/home/feature-grid"
import { ProductCategoryCards } from "@/components/home/product-category-cards"
import { TrustSection } from "@/components/home/trust-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <ProductCategoryCards />
      <TrustSection />
      <CTASection />
    </>
  )
}
