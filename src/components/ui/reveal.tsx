import {
  createElement,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react"
import { useLocation } from "react-router-dom"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  style?: CSSProperties
  showOnMount?: boolean
}

// Scroll-triggered fade-up, mirroring the Wuhrmann Solutions reveal behaviour.
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  style: styleProp,
  showOnMount = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const location = useLocation()

  useLayoutEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    node.classList.remove("is-visible")

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible")
      return undefined
    }

    const nodeHeight = node.getBoundingClientRect().height
    const threshold = nodeHeight > 0 ? Math.min(0.16, 96 / nodeHeight) : 0.16

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          node.classList.toggle("is-visible", entry.isIntersecting)
        })
      },
      { threshold, rootMargin: "0px 0px -48px 0px" },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [location.key])

  const style: CSSProperties | undefined =
    delay || styleProp
      ? { ...styleProp, ...(delay ? { transitionDelay: `${delay}ms` } : null) }
      : undefined

  return createElement(
    as,
    {
      ref,
      className: `reveal ${showOnMount ? "reveal-on-mount" : ""} ${className}`.trim(),
      style,
    },
    children,
  )
}
