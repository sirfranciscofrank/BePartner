import AuthLayout from "../components/auth/AuthLayout"
import AuthVisualPanel from "../components/auth/AuthVisualPanel"
import AuthFormCard from "../components/auth/AuthFormCard"

export default function RegisterPage() {
  return (
    <AuthLayout
      visualPanel={
        <AuthVisualPanel
          heading="Find relevant Thai business partners faster."
          subtext=""
          bullets={[
            "Build your business profile",
            "Get matched by industry, location, and tags",
            "Connect only when both sides accept",
          ]}
        />
      }
      formCard={
        <AuthFormCard
          title="Create your account"
          subtitle="Start building your BePartner business profile."
          footerText="Already have an account?"
          footerLinkText="Sign in"
          footerLinkHref="/login"
        >
          <form className="space-y-4">

            <div>
              <label
                htmlFor="businessName"
                className="block text-xs font-medium text-(--color-body) mb-1"
              >
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                autoComplete="organization"
                placeholder="Your company name"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-(--color-body) mb-1"
              >
                Business Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-(--color-body) mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-medium text-(--color-body) mb-1"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-(--color-accent) py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgb(253_109_7/0.22)] transition-colors duration-150 hover:bg-(--color-accent-hover) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
            >
              Create account
            </button>

          </form>
        </AuthFormCard>
      }
    />
  )
}
