import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { AUDIENCE_SEGMENTS, GUARANTEED_FOOTFALL } from '../data/sponsorContent'
import { useCountUp } from '../hooks/useCountUp'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Slide02Audience() {
  const footfall = useCountUp(GUARANTEED_FOOTFALL)

  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.07),transparent_45%)]" />

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-cyan"
        >
          <Users size={13} />
          Audience Architecture
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          One festival, five tribes, one crowd worth reaching
        </motion.h2>

        {/* Footfall counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="my-8 flex flex-col items-start gap-1 rounded-2xl border border-amber-400/30 bg-amber-400/5 px-6 py-5 backdrop-blur-md sm:w-fit"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400/80">
            Guaranteed footfall
          </span>
          <span className="font-display text-5xl font-bold text-amber-400 tabular-nums sm:text-6xl">
            {footfall.toLocaleString('en-IN')}+
          </span>
        </motion.div>

        {/* Bento grid of audience segments */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {AUDIENCE_SEGMENTS.map((segment, i) => {
            const Icon = segment.icon
            // First card spans two columns on large screens for visual rhythm — classic bento asymmetry.
            const spanClass = i === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
            return (
              <motion.div
                key={segment.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors hover:border-neon-cyan/40 ${spanClass}`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{segment.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{segment.descriptor}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <p className="mt-6 text-xs text-zinc-600">
          Segment mix shown reflects the festival's five core verticals. Detailed demographic
          percentages available on request once post-registration survey data is in.
        </p>
      </div>
    </section>
  )
}
