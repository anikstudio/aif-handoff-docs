import { Link } from 'react-router-dom'

export default function NavCard({ icon, title, description, path, tag, cta = 'Open guide' }) {
  return (
    <Link
      to={path}
      className="group relative flex flex-col gap-4 rounded-md border border-[#2a2a2a] bg-[#101010] p-6 transition hover:border-[#10b981]/60 hover:bg-[#141414]"
    >
      {/* Top row: icon + tag */}
      <div className="flex items-start justify-between">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#2a2a2a] bg-[#0a0a0a] text-xl">
          {icon}
        </div>
        {tag && (
          <span className="text-[10px] uppercase tracking-[0.14em] text-[#6b7280] font-mono border border-[#2a2a2a] rounded px-1.5 py-0.5">
            {tag}
          </span>
        )}
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold tracking-tight text-[#fafafa]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#6b7280]">{description}</p>
      </div>

      {/* Footer action */}
      <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-[#10b981]">
        <span>{cta}</span>
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  )
}
