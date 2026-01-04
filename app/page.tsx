import HeroSection from '@/components/home/HeroSection'
import ServiceSection from '@/components/home/ServiceSection'
import StepsSection from '@/components/home/StepsSection'
import GalleryPreview from '@/components/home/GalleryPreview'
import FAQSection from '@/components/home/FAQSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <StepsSection />
      <GalleryPreview />
      <FAQSection />
    </>
  )
}
