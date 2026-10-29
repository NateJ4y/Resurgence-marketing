import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow"><span className="eyebrow-dot" />{children}</span>
}

export function SectionHeading({ eyebrow, title, text, dark = false }: { eyebrow: string; title: ReactNode; text?: string; dark?: boolean }) {
  return <div className={dark ? 'section-heading on-dark' : 'section-heading'}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

export function CampaignCTA({ dark = false }: { dark?: boolean }) {
  return <section className={dark ? 'campaign-cta dark' : 'campaign-cta'}>
    <div className="cta-orbit orbit-one" aria-hidden="true" /><div className="cta-orbit orbit-two" aria-hidden="true" />
    <div className="cta-copy">
      <Eyebrow>YOUR NEXT MOVE</Eyebrow>
      <h2>Got a brand to move?<br /><span>Let's make it happen.</span></h2>
      <p>Tell us what you're trying to achieve. We'll help you shape the experience.</p>
    </div>
    <Link to="/contact" className="button button-light">Plan a campaign <ArrowUpRight size={17} /></Link>
  </section>
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link to={to} className="text-link">{children}<ArrowRight size={16} /></Link>
}
