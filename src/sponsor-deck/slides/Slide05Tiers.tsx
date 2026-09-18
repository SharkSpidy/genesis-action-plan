import { motion } from 'framer-motion'
import { Check, Handshake } from 'lucide-react'
import { SPONSORSHIP_TIERS } from '../data/sponsorContent'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Slide05Tiers() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.08),transparent_50%)]" />

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-amber-400"
        >
          <Handshake size={13} />
          Partnership tiers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-10 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          Pick your level of ownership
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {SPONSORSHIP_TIERS.map((tier) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.id}
                variants={cardVariants}
                className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-md ${
                  tier.featured
                    ? 'border-amber-400/50 bg-gradient-to-b from-amber-400/10 to-white/[0.03] shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_0_40px_rgba(251,191,36,0.12)]'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950">
                    Most visibility
                  </span>
                )}

                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                    tier.featured ? 'bg-amber-400/20 text-amber-400' : 'bg-white/5 text-zinc-300'
                  }`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="font-display text-xl font-bold text-white">{tier.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{tier.headline}</p>

                <p
                  className={`mt-4 font-mono text-sm font-semibold ${
                    tier.featured ? 'text-amber-400' : 'text-zinc-300'
                  }`}
                >
                  {tier.investmentLabel}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${tier.featured ? 'text-amber-400' : 'text-neon-emerald'}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        <p className="mt-6 text-xs text-zinc-600">
          Investment figures shared per conversation — reach out to discuss a tier that fits your
          brand's goals.
        </p>
      </div>
    </section>
  )
}
