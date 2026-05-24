import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/logo-primary.png"

type AuthFormCardProps = {
  title: string
  subtitle: string
  children: React.ReactNode
  footerText: string
  footerLinkText: string
  footerLinkHref: string
}

export default function AuthFormCard({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthFormCardProps) {
  return (
    <div
      className="w-full max-w-105 rounded-xl bg-white p-7"
      style={{ boxShadow: "var(--shadow-lg)" }}
    >

      {/* Logo — mobile only, hidden once the visual panel is visible */}
      <div className="lg:hidden mb-8 flex justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand-light) focus-visible:ring-offset-2"
        >
          <Image
            src={logo}
            alt="BePartner Logo"
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-[17px] font-bold tracking-tight text-(--color-brand)">
            BePartner
          </span>
        </Link>
      </div>

      <h1 className="mb-1 text-2xl font-bold text-(--color-heading)">
        {title}
      </h1>
      <p className="mb-6 text-sm text-(--color-muted)">
        {subtitle}
      </p>

      {children}

      <p className="mt-6 text-center text-sm text-(--color-muted)">
        {footerText}{" "}
        <Link
          href={footerLinkHref}
          className="font-semibold text-(--color-brand-light) hover:text-(--color-brand)"
        >
          {footerLinkText}
        </Link>
      </p>

    </div>
  )
}
