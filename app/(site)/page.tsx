import HeroSection from '@/components/site/home/HeroSection'
import ServiceSection from '@/components/site/home/ServiceSection'
import StepsSection from '@/components/site/home/StepsSection'
import GalleryPreview from '@/components/site/home/GalleryPreview'
import FAQSection from '@/components/site/home/FAQSection'
import AirisChat from '@/components/ui/AirisChat'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <StepsSection />
      <GalleryPreview />
      <FAQSection />
      <AirisChat />
    </>
  )
}
