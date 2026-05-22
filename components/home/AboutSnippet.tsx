import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

// cta-band-coral equivalent — coral callout section per DESIGN.md
// "full-bleed coral card carrying a major call-to-action"

export function AboutSnippet() {
  return (
    <section className="bg-surface-soft dark:bg-surface-dark-soft section-padding">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* callout-card-coral: bg-primary, text-white, rounded-xl, p-12 */}
        <AnimatedSection>
          <div className="bg-primary rounded-2xl px-10 py-14 md:px-16 md:py-16 text-center max-w-3xl mx-auto">
            <p className="text-caption-xs font-[500] uppercase tracking-[0.1em] text-white/70 mb-4">
              About me
            </p>
            {/* display-sm serif on coral */}
            <h2 className="font-display text-display-sm font-[500] text-white mb-5 leading-snug">
              I love building things<br className="hidden sm:block" /> that live on the internet
            </h2>
            <p className="text-body-md text-white/80 leading-relaxed mb-8 max-w-lg mx-auto">
              Developer and designer with a passion for crafting elegant,
              user-centred digital products. I care about the details — from
              pixel-perfect UIs to clean, maintainable code.
            </p>
            {/* Inverted button on coral: button-secondary-on-dark */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/15 hover:bg-white/25 text-white text-body-sm font-[500] transition-colors"
            >
              More about me
              <ArrowRight size={15} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
