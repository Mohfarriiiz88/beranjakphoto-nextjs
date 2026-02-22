export default function Header() {
  return (
    <header className="h-16 border-b border-white/5 bg-[#0B0B0C]/80 backdrop-blur flex items-center justify-between px-6">
      <div>
        <div className="text-sm text-white/50">Dashboard</div>
        <div className="text-lg font-semibold">Overview</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-white/70">Admin</div>
        <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-sm">
          A
        </div>
      </div>
    </header>
  )
}