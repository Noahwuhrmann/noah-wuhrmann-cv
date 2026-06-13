import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  style?: CSSProperties
}

// Scroll-triggered fade-up, mirroring the Wuhrmann Solutions reveal behaviour.
export function Reveal({ children, className = "", delay = 0, as = "div", style: styleProp }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible")
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible")
            observer.disconnect()
          }
        })
      },
      { threshold: 0.16, rootMargin: "0px 0px -48px 0px" },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const style: CSSProperties | undefined =
    delay || styleProp
      ? { ...styleProp, ...(delay ? { transitionDelay: `${delay}ms` } : null) }
      : undefined

  return createElement(
    as,
    { ref, className: `reveal ${className}`.trim(), style },
    children,
  )
}
