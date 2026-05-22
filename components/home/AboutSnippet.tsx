import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function AboutSnippet() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-4">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
              I love building things that live on the internet
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              I&apos;m a developer and designer with a passion for crafting elegant, user-centred
              digital products. I care deeply about the details — from pixel-perfect UIs to clean,
              maintainable code.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              When I&apos;m not coding, I&apos;m sketching interface ideas, exploring new
              technologies, or collaborating with fellow creators.
            </p>
            <Button href="/about" variant="secondary" size="lg">
              More about me
              <ArrowRight size={16} />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
