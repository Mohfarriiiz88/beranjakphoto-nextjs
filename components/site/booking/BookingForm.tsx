'use client'

import { useMemo, useState } from 'react'
import Reveal from '@/components/ui/Reveal'

type PackageOption = {
  value: string
  label: string
  desc: string
  price: string
  duration: string
}

const PACKAGES: PackageOption[] = [
  {
    value: 'portrait',
    label: 'Beranjak Portrait',
    desc: 'Cocok untuk personal branding / graduation / profil.',
    price: 'Mulai dari Rp 250K',
    duration: '60 menit',
  },
  {
    value: 'couple',
    label: 'Beranjak Couple',
    desc: 'Untuk prewedding, anniversary, couple session.',
    price: 'Mulai dari Rp 350K',
    duration: '90 menit',
  },
  {
    value: 'bestie',
    label: 'Beranjak Bestie',
    desc: 'Untuk grup sahabat / event kecil.',
    price: 'Mulai dari Rp 450K',
    duration: '90–120 menit',
  },
]

const TIME_SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
]

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    package: 'portrait',
    date: '',
    time: '',
    location: '',
    note: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const selectedPackage = useMemo(
    () => PACKAGES.find((p) => p.value === form.package),
    [form.package]
  )

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setSuccess(false)
  }

  const validate = () => {
    if (!form.name.trim()) return 'Nama wajib diisi.'
    if (!form.phone.trim()) return 'Nomor WhatsApp wajib diisi.'
    if (!form.date) return 'Tanggal wajib dipilih.'
    if (!form.time) return 'Jam wajib dipilih.'
    if (!form.location.trim()) return 'Lokasi wajib diisi.'
    return null
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      alert(err)
      return
    }

    setSubmitting(true)

    // ✅ sementara: simulasi submit
    await new Promise((r) => setTimeout(r, 900))

    setSubmitting(false)
    setSuccess(true)

    // ✅ contoh nanti bisa kirim ke API:
    // await fetch('/api/booking', { method: 'POST', body: JSON.stringify(form) })
  }

  const whatsappText = useMemo(() => {
    const pkgLabel = selectedPackage?.label ?? 'Paket'
    const msg = [
      `Halo Beranjak Photo 👋`,
      `Saya ingin booking:`,
      `- Nama: ${form.name || '-'}`,
      `- WhatsApp: ${form.phone || '-'}`,
      `- Paket: ${pkgLabel}`,
      `- Tanggal: ${form.date || '-'}`,
      `- Jam: ${form.time || '-'}`,
      `- Lokasi: ${form.location || '-'}`,
      `- Catatan: ${form.note || '-'}`,
    ].join('\n')

    return encodeURIComponent(msg)
  }, [form, selectedPackage])

  return (
    <section className="min-h-screen bg-zinc-950 py-20 pt-28 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal y={18}>
          <div className="flex flex-col gap-3">
            <h1
              style={{ fontFamily: 'EleganteClassica' }}
              className="text-5xl sm:text-6xl leading-none"
            >
              Booking
            </h1>
            <p className="max-w-2xl text-white/70">
              Isi form berikut untuk melakukan pemesanan. Kami akan menghubungi kamu
              melalui WhatsApp untuk konfirmasi jadwal & detail.
            </p>
          </div>
        </Reveal>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
          {/* Left: Form Card */}
          <Reveal delay={80} y={20}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-black/40">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Nama Lengkap">
                    <input
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="input"
                      placeholder="Nama kamu"
                    />
                  </Field>

                  <Field label="Nomor WhatsApp">
                    <input
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="input"
                      placeholder="08xxxxxxxxxx"
                      inputMode="tel"
                    />
                  </Field>
                </div>

                {/* Package */}
                <Field label="Pilih Paket">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {PACKAGES.map((p) => {
                      const active = p.value === form.package
                      return (
                        <button
                          type="button"
                          key={p.value}
                          onClick={() => update('package', p.value)}
                          className={[
                            'rounded-2xl border p-4 text-left transition',
                            active
                              ? 'border-violet-400/40 bg-violet-500/15'
                              : 'border-white/10 bg-white/5 hover:bg-white/10',
                          ].join(' ')}
                        >
                          <div className="text-sm font-semibold">{p.label}</div>
                          <div className="mt-1 text-xs text-white/70">
                            {p.duration}
                          </div>
                          <div className="mt-2 text-xs text-white/60">
                            {p.price}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </Field>

                {/* Date + Time */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Tanggal">
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className="input"
                    />
                  </Field>

                  <Field label="Jam">
                    <select
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                      className="input"
                    >
                      <option value="">Pilih jam</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Location */}
                <Field label="Lokasi (alamat singkat)">
                  <input
                    value={form.location}
                    onChange={(e) => update('location', e.target.value)}
                    className="input"
                    placeholder="Contoh: Alun-alun / Studio / Rumah"
                  />
                </Field>

                {/* Notes */}
                <Field label="Catatan (opsional)">
                  <textarea
                    value={form.note}
                    onChange={(e) => update('note', e.target.value)}
                    className="input min-h-[110px] resize-none"
                    placeholder="Contoh: tema outfit, jumlah orang, request pose..."
                  />
                </Field>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={[
                      'rounded-full px-6 py-3 font-semibold transition',
                      'bg-white text-black hover:opacity-90',
                      submitting ? 'opacity-70 cursor-not-allowed' : '',
                    ].join(' ')}
                  >
                    {submitting ? 'Mengirim...' : 'Kirim Booking'}
                  </button>

                  <a
                    className="text-sm text-white/70 hover:text-white transition"
                    href={`https://wa.me/?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kirim via WhatsApp →
                  </a>
                </div>

                {/* Success */}
                {success && (
                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                    Booking berhasil dikirim! Kami akan segera menghubungi kamu via WhatsApp.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          {/* Right: Summary / Info */}
          <div className="space-y-6">
            <Reveal delay={120} y={18}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40">
                <div className="text-sm font-semibold text-white">
                  Ringkasan
                </div>

                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <InfoRow label="Paket" value={selectedPackage?.label ?? '-'} />
                  <InfoRow label="Durasi" value={selectedPackage?.duration ?? '-'} />
                  <InfoRow label="Tanggal" value={form.date || '-'} />
                  <InfoRow label="Jam" value={form.time || '-'} />
                  <InfoRow label="Lokasi" value={form.location || '-'} />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/65 leading-relaxed">
                  Setelah kamu submit, kami akan cek ketersediaan jadwal.
                  Jika slot penuh, kami akan tawarkan jadwal alternatif.
                </div>
              </div>
            </Reveal>

            <Reveal delay={180} y={18}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">Catatan</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• DP diperlukan untuk mengamankan jadwal.</li>
                  <li>• Estimasi hasil foto 7–14 hari kerja.</li>
                  <li>• Luar kota tersedia (biaya transport menyesuaikan).</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Local styles to keep it consistent */}
      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          padding: 12px 14px;
          color: white;
          outline: none;
          transition: background 160ms ease, border 160ms ease;
        }
        .input:focus {
          border-color: rgba(167, 139, 250, 0.6);
          background: rgba(255, 255, 255, 0.08);
        }
        .input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
      `}</style>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-medium text-white/80">{label}</div>
      {children}
    </label>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-white/55">{label}</span>
      <span className="text-right text-white/85">{value}</span>
    </div>
  )
}
