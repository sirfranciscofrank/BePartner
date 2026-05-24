import Link from "next/link"

type AuthLayoutProps = {
  visualPanel: React.ReactNode
  formCard: React.ReactNode
}

export default function AuthLayout({ visualPanel, formCard }: AuthLayoutProps) {
  return (
    <main className="relative flex h-screen overflow-hidden">

      {/* Back to home — dark text on mobile (light bg), white on desktop (over gradient) */}
      <Link
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-1.5 text-sm font-medium
          text-(--color-body) hover:text-(--color-brand)
          lg:text-white/70 lg:hover:text-white
          transition-colors duration-150
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-(--color-brand-light) lg:focus-visible:ring-white/50
          rounded"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M10 12L6 8l4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to home
      </Link>

      {/* Left panel — desktop only, dark gradient */}
      <div
        className="hidden lg:flex w-1/2 flex-col items-center justify-center px-16 py-20"
        style={{ background: "linear-gradient(160deg, #071A3D 0%, #0B255A 60%, #1E3A8A 100%)" }}
      >
        {visualPanel}
      </div>

      {/* Right panel — full width on mobile, half on desktop */}
      <div className="flex w-full lg:w-1/2 flex-col bg-(--color-surface)">
        {formCard}
      </div>

    </main>
  )
}
