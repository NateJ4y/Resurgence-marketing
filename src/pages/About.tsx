import { ArrowUpRight, Compass, Handshake, Lightbulb, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CampaignCTA, Eyebrow, SectionHeading } from '../components/Sections'

const principles = [
  { icon: Compass, title: 'Purpose before noise', text: 'Start with the objective and the audience. Let the idea earn its place.' },
  { icon: Users, title: 'People make the difference', text: 'Experiences work when the interaction feels human, relevant and considered.' },
  { icon: Handshake, title: 'One team, shared outcome', text: 'Keep the brief, planning and execution connected from start to finish.' },
  { icon: Lightbulb, title: 'Creative with its feet on the ground', text: 'Big thinking matters. So does knowing how to deliver it in the real world.' },
]

export default function About() {
  return <div className="inner-page">
    <section className="page-hero about-page-hero"><div className="page-hero-copy"><Eyebrow>WHO WE ARE</Eyebrow><h1>Connection is<br /><em>the whole point.</em></h1><p>Resurgence Marketing exists to help brands move beyond being seen — and towards being experienced, remembered and understood.</p><Link to="/contact" className="button button-primary">Meet us around a brief <ArrowUpRight size={17} /></Link></div><div className="page-hero-image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=84" alt="A creative team collaborating on a project" fetchPriority="high" /><span>PEOPLE FIRST. ALWAYS.</span></div></section>
    <section className="about-statement section-pad"><div className="statement-index">OUR POINT OF VIEW <span>01 / 04</span></div><h2>A brand is not just what people see.<br />It's what happens <em>when they meet it.</em></h2><div className="statement-bottom"><span className="statement-line" /><p>That belief shapes how we think about campaigns: the context, the people delivering them, the quality of the interaction and the details that make an experience feel intentional.</p></div></section>
    <section className="principles-section section-pad"><SectionHeading eyebrow="WHAT GUIDES US" title={<>The way we work<br /><span>is part of the work.</span></>} text="Our principles keep creativity connected to what a campaign needs to achieve." /><div className="principle-grid">{principles.map(({ icon: Icon, title, text }, i) => <article className="principle-card" key={title}><span className="principle-num">0{i + 1}</span><Icon size={24} strokeWidth={1.6} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-image-band"><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=84" alt="Event attendees connecting in a shared space" loading="lazy" /><div><span>STRATEGY MEETS HUMAN ENERGY</span><p>Built for the moment<br />that makes the difference.</p></div></section>
    <section className="about-bottom section-pad"><Eyebrow>LET'S MAKE IT MEAN SOMETHING</Eyebrow><h2>Bring us the challenge.<br /><em>Let's shape the response.</em></h2><Link to="/how-we-work" className="button button-primary">See how we work <ArrowUpRight size={17} /></Link></section>
    <CampaignCTA />
  </div>
}
