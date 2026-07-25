import React from "react"
import DeepCleanBeforeAfter from "./DeepCleanBeforeAfter"

const DeepCleaningIntro: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <DeepCleanBeforeAfter />
          <p className="mt-3 text-center text-sm font-serif text-charcoal-gray/70">
            Drag the slider to see the difference — the same floor, before and
            after our deep clean.
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray font-sans">
            Bring Your Floors Back to Life
          </h2>
          <p className="mt-4 text-lg leading-relaxed font-serif text-charcoal-gray">
            Over time, dirt, grime, and residue build up in the tiny pores and
            grout lines of your hard floors. A regular mop only reaches the
            surface — it can't remove what's ground in below. That hidden
            buildup dulls your floor's finish, traps allergens, and makes even a
            clean-looking room less healthy than it should be.
          </p>
          <p className="mt-4 text-lg leading-relaxed font-serif text-charcoal-gray">
            Our professional deep cleaning process removes that buildup and
            restores the natural beauty of your floors. Just as importantly, it{" "}
            <span className="font-semibold">
              protects your investment and extends the lifespan of your floors
            </span>
            . Trapped grit acts like sandpaper underfoot, slowly scratching and
            wearing down your finish — removing it helps your hardwood, vinyl,
            laminate, and tile look better and last years longer.
          </p>
          <div className="mt-8 p-5 bg-warm-taupe rounded-lg border-l-4 border-forest-green">
            <p className="font-serif text-charcoal-gray text-lg">
              <span className="font-semibold">
                Let us show you how dirty your floors really are.
              </span>{" "}
              Book your first deep cleaning at{" "}
              <span className="font-semibold text-forest-green">20% off</span>{" "}
              and see the difference for yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeepCleaningIntro
