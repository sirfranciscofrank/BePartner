import AuthLayout from "../components/auth/AuthLayout"
import AuthVisualPanel from "../components/auth/AuthVisualPanel"
import AuthFormCard from "../components/auth/AuthFormCard"

export default function LoginPage() {
  return (
    <AuthLayout
      visualPanel={
        <AuthVisualPanel
          heading="Continue your business matching."
          subtext="Manage your business profile, review matches, and respond to connection requests."
          showPreviewCard={false}
        />
      }
      formCard={
        <AuthFormCard
          title="Welcome back"
          subtitle="Sign in to continue to BePartner."
          footerText="New to BePartner?"
          footerLinkText="Create a business profile"
          footerLinkHref="/register"
        >
          <form className="space-y-4">

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-(--color-body) mb-1"
              >
                Email
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
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
              <div className="mt-1.5 flex justify-end">
                <a
                  href="#"
                  className="text-xs font-medium text-(--color-brand-light) hover:text-(--color-brand)"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-(--color-accent) py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgb(253_109_7/0.22)] transition-colors duration-150 hover:bg-(--color-accent-hover) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
            >
              Sign in
            </button>

          </form>
        </AuthFormCard>
      }
    />
  )
}
