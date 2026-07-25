import React from "react"
import { cleaningProcess } from "../../data/cleaningData"

const DeepCleaningProcess: React.FC = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray font-sans">
            Our Deep Cleaning Process
          </h2>
          <p className="mt-4 text-lg font-serif text-charcoal-gray">
            A proven, four-step process that delivers a genuinely deep clean —
            not just a surface wipe-down.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cleaningProcess.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-forest-green text-white flex items-center justify-center text-2xl font-bold font-sans">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-charcoal-gray mb-2 font-sans">
                {step.title}
              </h3>
              <p className="text-charcoal-gray font-serif">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeepCleaningProcess
