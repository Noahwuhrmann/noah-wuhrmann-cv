import type { MouseEvent } from "react"

import { useLanguage } from "@/lib/language-context"
import { REVEAL_INTENT_EVENT } from "@/lib/reveal-events"

export function SubpageScrollCue() {
  const { copy } = useLanguage()

  const scrollToContent = (event: MouseEvent<HTMLButtonElement>) => {
    const cue = event.currentTarget.closest(".subpage-scroll-cue")
    const content = cue?.nextElementSibling ?? cue?.parentElement?.nextElementSibling

    if (content instanceof HTMLElement) {
      window.dispatchEvent(new Event(REVEAL_INTENT_EVENT))

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      content.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="subpage-scroll-cue">
      <button
        className="subpage-scroll-cue__button"
        aria-label={copy.scrollHint}
        onMouseDown={(event) => event.preventDefault()}
        onClick={scrollToContent}
        type="button"
      >
        <span className="subpage-scroll-cue__mouse" aria-hidden="true">
          <span className="subpage-scroll-cue__wheel" />
        </span>
        <span className="subpage-scroll-cue__chevron" aria-hidden="true" />
        <span className="subpage-scroll-cue__hand" aria-hidden="true">
          <svg
            viewBox="0 0 40 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 25 V9 a3.2 3.2 0 0 1 6.4 0 v6 a2.8 2.8 0 0 1 5.6 0 v2 a2.8 2.8 0 0 1 5.6 0 v9 a8 8 0 0 1 -8 8 h-5 a9 9 0 0 1 -9 -9 v-3 a3.4 3.4 0 0 1 4.6 -2.6 Z" />
          </svg>
        </span>
      </button>
    </div>
  )
}
