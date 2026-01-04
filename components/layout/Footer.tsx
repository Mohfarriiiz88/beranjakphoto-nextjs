import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        
        {/* BRAND */}
        <div>
          <h3 style={{ fontFamily: "EleganteClassica" }} className="text-xl font-semibold text-white">
            Beranjak Photo
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Jasa fotografi profesional untuk wedding, prewedding,
            event, dan kebutuhan komersial dengan hasil berkualitas tinggi.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 style={{ fontFamily: "EleganteClassica" }} className="text-white font-semibold mb-4">
            Menu
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-white transition">
                Booking
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={{ fontFamily: "EleganteClassica" }} className="text-white font-semibold mb-4">
            Hubungi Kami
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Tegal, Jawa Tengah</li>
            <li>Email: beranjakphoto@gmail.com</li>
            <li>WhatsApp: 08xxxxxxxxxx</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Beranjak Photo. All rights reserved.
      </div>
    </footer>
  )
}
