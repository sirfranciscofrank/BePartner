// Static decorative preview — echoes MatchesMock/MatchCard from HowItWork.tsx visually.
// No props, no state, no handlers. Safe as a server component.

const MATCHES = [
  { initials: "SP", name: "Siam Packaging Co.",      subtitle: "Packaging · Bangkok",     score: 92 },
  { initials: "TF", name: "ThaiFresh Export",         subtitle: "Food & Bev · Chiang Mai", score: 87 },
  { initials: "BC", name: "Bangkok Components Ltd.",  subtitle: "Electronics · Bangkok",   score: 79 },
]

export default function AuthPreviewCard() {
  return (
    <div className="w-full rounded-xl bg-white border border-(--color-border) p-4 opacity-95">

      {/* Header row */}
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-(--color-muted)">
          Match Results
        </p>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-(--color-success) animate-pulse" aria-hidden="true" />
          <span className="text-[10px] font-medium text-(--color-success)">Live</span>
        </div>
      </div>

      <p className="text-sm font-bold text-(--color-heading) mb-2">
        3 strong matches found
      </p>

      {/* Match rows */}
      <div className="space-y-1.5">
        {MATCHES.map((match, i) => {
          const highlighted = i === 0
          const scoreColor =
            match.score >= 90 ? "text-(--color-success)" :
            match.score >= 85 ? "text-(--color-brand-light)" :
                                "text-(--color-secondary)"
          const scoreBg = match.score >= 90 ? "bg-[#ECFDF5]" : "bg-(--color-surface)"

          return (
            <div
              key={match.name}
              className={`flex items-center gap-2.5 py-2 px-3 rounded-xl border ${
                highlighted
                  ? "bg-(--color-surface) border-(--color-brand-light)"
                  : "bg-white border-(--color-border)"
              }`}
            >
              {/* Avatar */}
              <div className="w-8 h-8 shrink-0 rounded-lg bg-(--color-brand) flex items-center justify-center text-white text-[10px] font-bold">
                {match.initials}
              </div>

              {/* Name + subtitle */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-(--color-heading) truncate">{match.name}</p>
                <p className="text-[10px] text-(--color-muted) truncate">{match.subtitle}</p>
              </div>

              {/* Score badge */}
              <div className={`shrink-0 px-2 py-1 rounded-lg text-center ${scoreBg}`}>
                <p className={`text-xs font-bold leading-none ${scoreColor}`}>{match.score}%</p>
                <p className="text-[9px] text-(--color-muted) mt-0.5">match</p>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
