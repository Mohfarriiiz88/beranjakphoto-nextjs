import MasonryGallery from '@/components/gallery/MasonryGallery'

const items = [
  { id: 1, src: '/images/gallery/1.jpg', title: 'Beranjak Portrait', category: 'Portrait' },
  { id: 2, src: '/images/gallery/2.jpg', title: 'Beranjak Couple', category: 'Couple' },
  { id: 3, src: '/images/gallery/3.jpg', title: 'Beranjak Bestie', category: 'Bestie' },
  { id: 4, src: '/images/gallery/4.jpg', title: 'Wedding Day', category: 'Wedding' },
  { id: 5, src: '/images/gallery/5.jpg', title: 'Golden Hour', category: 'Portrait' },
  { id: 6, src: '/images/gallery/6.jpg', title: 'Night City', category: 'Event' },
  { id: 7, src: '/images/gallery/7.jpg', title: 'Studio Shot', category: 'Portrait' },
  { id: 8, src: '/images/gallery/8.jpg', title: 'Outdoor Couple', category: 'Couple' },
  { id: 9, src: '/images/gallery/9.jpg', title: 'Friends', category: 'Bestie' },
  { id: 10, src: '/images/gallery/10.jpg', title: 'Ceremony', category: 'Wedding' },
]

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1
          style={{ fontFamily: 'EleganteClassica' }}
          className="text-white text-5xl mb-3"
        >
          Galeri Photo
        </h1>
        <p className="text-white/70 mb-10">
          Susunan masonry yang eye-catching, klik foto untuk melihat lebih besar.
        </p>

        <MasonryGallery items={items} />
      </div>
    </section>
  )
}
