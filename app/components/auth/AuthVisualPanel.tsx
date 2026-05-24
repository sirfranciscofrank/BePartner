import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/logo-primary.png"
import AuthPreviewCard from "./AuthPreviewCard"

type AuthVisualPanelProps = {
  heading: string
  subtext: string
  bullets?: string[]
  showPreviewCard: boolean
}

export default function AuthVisualPanel({
  heading,
  subtext,
  bullets,
  showPreviewCard,
}: AuthVisualPanelProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm w-full space-y-5">

      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <Image
          src={logo}
          alt="BePartner Logo"
          className="h-9 w-9 object-contain"
          priority
        />
        <span className="text-[17px] font-bold tracking-tight text-white">
          BePartner
        </span>
      </Link>

      <h2 className="text-3xl font-semibold leading-snug tracking-tight text-white">
        {heading}
      </h2>

      {bullets ? (
        <ul className="space-y-2 text-left w-full">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
              <span className="mt-0.5 h-4 w-4 shrink-0 flex items-center justify-center rounded-full bg-(--color-accent)/20 text-(--color-accent)">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                  <path d="M1 3.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm leading-relaxed text-white/70">{subtext}</p>
      )}

      {showPreviewCard && (
        <div className="w-full">
          <AuthPreviewCard />
        </div>
      )}

    </div>
  )
}
