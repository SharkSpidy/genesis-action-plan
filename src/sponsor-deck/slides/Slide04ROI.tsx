import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { ROI_PILLARS } from '../data/sponsorContent'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Slide04ROI() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(52,211,153,0.08),transparent_45%)]" />

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-neon-emerald/30 bg-neon-emerald/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-emerald"
        >
          <TrendingUp size={13} />
          What you get
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-2 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          Your brand, everywhere the crowd is looking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 max-w-2xl text-base text-zinc-400 sm:text-lg"
        >
          Four concrete channels of return — not just logo placement, but reach, presence, and
          direct engagement with a hard-to-reach youth audience.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {ROI_PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-emerald/10 text-neon-emerald">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{pillar.title}</h3>
                </div>

                <ul className="mb-4 space-y-2">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-emerald" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                {pillar.proofPoint && (
                  <div className="mt-auto rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      Backed by real spend
                    </p>
                    <p className="text-sm font-medium text-zinc-200">{pillar.proofPoint}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
