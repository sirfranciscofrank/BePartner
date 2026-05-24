import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/logo-primary.png"

type AuthVisualPanelProps = {
  heading: string
  subtext: string
  bullets?: string[]
}

export default function AuthVisualPanel({
  heading,
  subtext,
  bullets,
}: AuthVisualPanelProps) {
  return (
    <div className="flex w-full max-w-xl flex-col items-start text-left space-y-9">

      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <Image
          src={logo}
          alt="BePartner Logo"
          className="h-11 w-11 object-contain"
          priority
        />
        <span className="text-xl font-bold tracking-tight text-white">
          BePartner
        </span>
      </Link>

      <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white xl:text-5xl">
        {heading}
      </h2>

      {bullets ? (
        <ul className="w-full max-w-lg space-y-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-white/75">
              <span className="mt-1 h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-(--color-accent)/20 text-(--color-accent)">
                <svg width="10" height="8" viewBox="0 0 9 7" fill="none" aria-hidden="true">
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

    </div>
  )
}
