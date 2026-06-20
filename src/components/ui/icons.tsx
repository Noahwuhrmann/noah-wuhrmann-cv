import { useId } from "react"

// 3D gradient icon set in the Wuhrmann Solutions visual language: a primary
// cyan->blue shape, a deep-blue duplicate offset for depth, plus light accents.
// The glyphs themselves are an own set tailored to the personal site.

type GradientIds = {
  main: string
  deep: string
  accent: string
}

const DEPTH_OFFSET = "translate(2 2.4)"

function useGradientIds(): GradientIds {
  const raw = useId().replace(/[^a-zA-Z0-9_-]/g, "")
  return { main: `${raw}m`, deep: `${raw}d`, accent: `${raw}a` }
}

function IconDefs({ ids }: { ids: GradientIds }) {
  return (
    <defs>
      <linearGradient id={ids.main} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#46e6c6" />
        <stop offset="1" stopColor="#2f7bff" />
      </linearGradient>
      <linearGradient id={ids.deep} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0d4258" />
        <stop offset="1" stopColor="#123a7a" />
      </linearGradient>
      <linearGradient id={ids.accent} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f6d488" />
        <stop offset="1" stopColor="#ef9d4b" />
      </linearGradient>
    </defs>
  )
}

function star(cx: number, cy: number, r: number) {
  const inner = r * 0.32
  return [
    `M${cx} ${cy - r}`,
    `L${cx + inner} ${cy - inner}`,
    `L${cx + r} ${cy}`,
    `L${cx + inner} ${cy + inner}`,
    `L${cx} ${cy + r}`,
    `L${cx - inner} ${cy + inner}`,
    `L${cx - r} ${cy}`,
    `L${cx - inner} ${cy - inner}`,
    "Z",
  ].join(" ")
}

type GlyphProps = { ids: GradientIds }

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

function GlyphUser({ ids }: GlyphProps) {
  const body = "M11 39 C11 31 17 27 24 27 C31 27 37 31 37 39 Z"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <circle cx="24" cy="16" r="8" transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={body} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <circle cx="24" cy="16" r="8" fill={`url(#${ids.main})`} />
      <path d={body} fill={`url(#${ids.main})`} />
      <circle cx="24" cy="14.5" r="2.6" fill="#eafcff" opacity=".55" />
    </Svg>
  )
}

function GlyphGears({ ids }: GlyphProps) {
  const teeth = (cx: number, cy: number, R: number, t: number) => {
    let d = ""
    for (let i = 0; i < 8; i += 1) {
      const a = (i / 8) * Math.PI * 2
      const x1 = cx + Math.cos(a) * R
      const y1 = cy + Math.sin(a) * R
      const x2 = cx + Math.cos(a) * (R + t)
      const y2 = cy + Math.sin(a) * (R + t)
      d += `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} `
    }
    return d
  }
  return (
    <Svg>
      <IconDefs ids={ids} />
      <circle cx="20" cy="21" r="11" transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={teeth(20, 21, 11, 3)} transform={DEPTH_OFFSET} stroke={`url(#${ids.deep})`} strokeWidth="4.4" strokeLinecap="round" />
      <path d={teeth(20, 21, 11, 3)} stroke={`url(#${ids.main})`} strokeWidth="4.4" strokeLinecap="round" />
      <circle cx="20" cy="21" r="11" fill={`url(#${ids.main})`} />
      <circle cx="20" cy="21" r="4.6" fill="#0a1622" opacity=".82" />
      <circle cx="35" cy="35" r="5.5" fill={`url(#${ids.accent})`} />
      <circle cx="35" cy="35" r="2.2" fill="#0a1622" opacity=".7" />
    </Svg>
  )
}

function GlyphSpark({ ids }: GlyphProps) {
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d={star(22, 24, 13)} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={star(22, 24, 13)} fill={`url(#${ids.main})`} />
      <path d={star(38, 11, 5)} fill={`url(#${ids.accent})`} />
      <path d={star(39, 33, 3.2)} fill="#eafcff" opacity=".85" />
    </Svg>
  )
}

function GlyphHeart({ ids }: GlyphProps) {
  const heart =
    "M24 39 C9 29 8 19 14 14 C18.5 10.3 23 12.5 24 16 C25 12.5 29.5 10.3 34 14 C40 19 39 29 24 39 Z"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d={heart} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={heart} fill={`url(#${ids.main})`} />
      <path d="M17 18 C19 16 21 16.4 22.4 18" stroke="#eafcff" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity=".7" />
    </Svg>
  )
}

function GlyphSearch({ ids }: GlyphProps) {
  return (
    <Svg>
      <IconDefs ids={ids} />
      <g fill="none" strokeLinecap="round">
        <circle cx="21" cy="21" r="11" transform={DEPTH_OFFSET} stroke={`url(#${ids.deep})`} strokeWidth="4.4" />
        <path d="M29 29 L38.5 38.5" transform={DEPTH_OFFSET} stroke={`url(#${ids.deep})`} strokeWidth="5" />
        <circle cx="21" cy="21" r="11" stroke={`url(#${ids.main})`} strokeWidth="4.4" fill="rgba(70, 230, 198, 0.08)" />
        <path d="M29 29 L38.5 38.5" stroke={`url(#${ids.main})`} strokeWidth="5" />
      </g>
      <path d="M16 21.5 L19.6 25 L26.5 17.8" stroke="#eafcff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  )
}

function GlyphLayers({ ids }: GlyphProps) {
  const sheet = "M24 16 L40 23 L24 30 L8 23 Z"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d={sheet} transform="translate(2.5 12)" fill={`url(#${ids.deep})`} opacity=".55" />
      <path d={sheet} transform="translate(-1 6)" fill={`url(#${ids.deep})`} opacity=".85" />
      <path d="M24 9 L40 16 L24 23 L8 16 Z" fill={`url(#${ids.main})`} />
      <path d="M24 9 L40 16 L24 23 L8 16 Z" fill="#eafcff" opacity=".14" />
    </Svg>
  )
}

function GlyphFlowchart({ ids }: GlyphProps) {
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path
        d="M24 16 V24 H13.5 V32 M24 24 H34.5 V32"
        transform={DEPTH_OFFSET}
        fill="none"
        stroke={`url(#${ids.deep})`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 16 V24 H13.5 V32 M24 24 H34.5 V32"
        fill="none"
        stroke={`url(#${ids.main})`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`}>
        <rect x="17" y="6" width="14" height="10" rx="3" />
        <rect x="6" y="32" width="15" height="10" rx="3" />
        <rect x="27" y="32" width="15" height="10" rx="3" />
      </g>
      <g fill={`url(#${ids.main})`}>
        <rect x="17" y="6" width="14" height="10" rx="3" />
        <rect x="6" y="32" width="15" height="10" rx="3" />
        <rect x="27" y="32" width="15" height="10" rx="3" />
      </g>
      <path d="M21 11 H27" stroke="#eafcff" strokeWidth="2" strokeLinecap="round" opacity=".78" />
    </Svg>
  )
}

function GlyphBolt({ ids }: GlyphProps) {
  const bolt = "M27 6 L13 27 H22 L19 42 L35 19 H25 Z"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d={bolt} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={bolt} fill={`url(#${ids.main})`} />
      <path d="M25 12 L18.5 23 H24" stroke="#eafcff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".7" />
    </Svg>
  )
}

function GlyphRocket({ ids }: GlyphProps) {
  const body =
    "M24 5.5 C29.5 9.5 32 16.5 32 23 C32 29.5 28.5 35 24 37.5 C19.5 35 16 29.5 16 23 C16 16.5 18.5 9.5 24 5.5 Z"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d="M16 26 C12 28.5 10.5 33 10.5 37 L16.5 33.5 Z" fill={`url(#${ids.deep})`} />
      <path d="M32 26 C36 28.5 37.5 33 37.5 37 L31.5 33.5 Z" fill={`url(#${ids.deep})`} />
      <path d={body} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={body} fill={`url(#${ids.main})`} />
      <circle cx="24" cy="19" r="4.2" fill="#eafcff" />
      <circle cx="24" cy="19" r="2.5" fill="#0a1622" opacity=".85" />
      <path d="M24 39 C26.6 41 26.6 43.8 24 46.5 C21.4 43.8 21.4 41 24 39 Z" fill={`url(#${ids.accent})`} />
    </Svg>
  )
}

function GlyphChart({ ids }: GlyphProps) {
  return (
    <Svg>
      <IconDefs ids={ids} />
      <rect x="9" y="27" width="6.5" height="13" rx="2" transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <rect x="20" y="20" width="6.5" height="20" rx="2" transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <rect x="31" y="12" width="6.5" height="28" rx="2" transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <rect x="9" y="27" width="6.5" height="13" rx="2" fill={`url(#${ids.main})`} opacity=".62" />
      <rect x="20" y="20" width="6.5" height="20" rx="2" fill={`url(#${ids.main})`} opacity=".82" />
      <rect x="31" y="12" width="6.5" height="28" rx="2" fill={`url(#${ids.main})`} />
      <path d="M10 21.5 C18 15.5 26 11.5 35 8.5" stroke={`url(#${ids.accent})`} strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M39.5 7 L33.6 5.9 L35.7 11.5 Z" fill={`url(#${ids.accent})`} />
    </Svg>
  )
}

function GlyphBriefcase({ ids }: GlyphProps) {
  const body = "M8 17 H40 V35 A3 3 0 0 1 37 38 H11 A3 3 0 0 1 8 35 Z"
  const handle = "M19 16 V13 A3 3 0 0 1 22 10 H26 A3 3 0 0 1 29 13 V16"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d={body} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={handle} transform={DEPTH_OFFSET} stroke={`url(#${ids.deep})`} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d={handle} stroke={`url(#${ids.main})`} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d={body} fill={`url(#${ids.main})`} />
      <rect x="20.5" y="24" width="7" height="5" rx="1.6" fill="#0a1622" opacity=".7" />
      <rect x="8" y="21" width="32" height="3" fill="#eafcff" opacity=".16" />
    </Svg>
  )
}

function GlyphPalette({ ids }: GlyphProps) {
  const body =
    "M24 8 C33 8 40 14 40 22 C40 28 35 29 31 29 C28 29 27 31 28 33 C29 35.5 27 40 22 40 C14 39.5 8 32 8 23.5 C8 14.5 15.5 8 24 8 Z"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d={body} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d={body} fill={`url(#${ids.main})`} />
      <circle cx="16.5" cy="20" r="2.6" fill="#eafcff" />
      <circle cx="23" cy="15.5" r="2.6" fill={`url(#${ids.accent})`} />
      <circle cx="30.5" cy="18.5" r="2.6" fill="#0a1622" opacity=".6" />
    </Svg>
  )
}

function GlyphImage({ ids }: GlyphProps) {
  const frame = "M9 11 H39 V37 H9 Z"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d={frame} transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} opacity=".85" />
      <path d={frame} fill={`url(#${ids.main})`} />
      <rect x="13" y="15" width="22" height="18" rx="2" fill="#0a1622" opacity=".84" />
      <path d="M14.5 31 L20 25 L24 29 L28 25.5 L33.5 32" stroke="#eafcff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".82" />
      <circle cx="30" cy="20.5" r="2.4" fill="#46e6c6" />
    </Svg>
  )
}

function GlyphCart({ ids }: GlyphProps) {
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d="M8 11 H13 L17 30 H34" transform={DEPTH_OFFSET} stroke={`url(#${ids.deep})`} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 16 H39 L36 27 A3 3 0 0 1 33 29 H18" transform={DEPTH_OFFSET} fill={`url(#${ids.deep})`} />
      <path d="M8 11 H13 L17 30 H34" stroke={`url(#${ids.main})`} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 16 H39 L36 27 A3 3 0 0 1 33 29 H18 Z" fill={`url(#${ids.main})`} />
      <circle cx="20" cy="37" r="3.2" fill={`url(#${ids.accent})`} />
      <circle cx="32" cy="37" r="3.2" fill={`url(#${ids.accent})`} />
    </Svg>
  )
}

function GlyphWave({ ids }: GlyphProps) {
  const wave = "M7 24 C12 12 16 12 21 24 C26 36 30 36 35 24 C37.5 18 39.5 16.5 41 17.5"
  return (
    <Svg>
      <IconDefs ids={ids} />
      <path d="M8 9 V38 H40" transform={DEPTH_OFFSET} stroke={`url(#${ids.deep})`} strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9 V38 H40" stroke={`url(#${ids.main})`} strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
      <path d={wave} transform={DEPTH_OFFSET} stroke={`url(#${ids.deep})`} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d={wave} stroke={`url(#${ids.main})`} strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="21" cy="24" r="2.6" fill={`url(#${ids.accent})`} />
    </Svg>
  )
}

const glyphs = {
  user: GlyphUser,
  gears: GlyphGears,
  spark: GlyphSpark,
  heart: GlyphHeart,
  search: GlyphSearch,
  layers: GlyphLayers,
  flowchart: GlyphFlowchart,
  bolt: GlyphBolt,
  rocket: GlyphRocket,
  chart: GlyphChart,
  briefcase: GlyphBriefcase,
  palette: GlyphPalette,
  image: GlyphImage,
  cart: GlyphCart,
  wave: GlyphWave,
} as const

export type IconName = keyof typeof glyphs

type IconProps = {
  name: IconName
  size?: "md" | "sm"
}

export function Icon({ name, size = "md" }: IconProps) {
  const ids = useGradientIds()
  const Glyph = glyphs[name]

  return (
    <span className={`icon-3d${size === "sm" ? " icon-3d--sm" : ""}`} aria-hidden="true">
      <Glyph ids={ids} />
    </span>
  )
}
