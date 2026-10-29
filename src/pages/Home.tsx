import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { campaignFormats, services } from '../data'
import { CampaignCTA, Eyebrow, SectionHeading, TextLink } from '../components/Sections'

export default function Home() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } }

  return <div className="page-home">
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <motion.div {...reveal} className="hero-copy">
          <Eyebrow>EXPERIENTIAL MARKETING · SOUTH AFRICA</Eyebrow>
          <h1>Make the<br /><span>brand experience</span><br />matter.</h1>
          <p className="hero-intro">We bring brands closer to people through thoughtful activations, campaign teams and experiences built for the real world.</p>
          <div className="hero-actions"><Link to="/contact" className="button button-primary">Let's build your campaign <ArrowUpRight size={17} /></Link><Link to="/work" className="button button-quiet">Explore our approach <ArrowDownRight size={17} /></Link></div>
          <div className="hero-proof"><span className="proof-line" /><span>From the first idea to the final interaction.</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }}>
          <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1500&q=85" alt="A crowd sharing a live event experience" fetchPriority="high" />
          <div className="hero-image-shade" />
          <div className="hero-visual-label"><span className="live-dot" /> PEOPLE FIRST. ALWAYS.</div>
          <div className="hero-image-note"><span>01 / 03</span><span>Experiences that connect</span></div>
          <div className="hero-stamp" aria-label="Strategy meets real-world energy"><span>STRATEGY</span><b>×</b><span>ENERGY</span></div>
        </motion.div>
      </div>
      <div className="hero-bottom"><span>THINK BIGGER. CONNECT CLOSER.</span><span>SCROLL TO EXPLORE <ArrowDownRight size={15} /></span></div>
    </section>

    <section className="intro-band section-pad">
      <div className="intro-tag"><span>THE RESURGENCE WAY</span><span>01 — 05</span></div>
      <div className="intro-main"><h2>People don't connect<br />with <em>adverts.</em> They connect<br />with what they feel.</h2><div><p>Attention is earned in the real world. We help brands turn a message into a moment — with clear thinking, purposeful engagement and the people to bring it to life.</p><TextLink to="/about">Get to know us</TextLink></div></div>
    </section>

    <section className="services-section section-pad">
      <div className="section-top"><SectionHeading eyebrow="WHAT WE DO" title={<>Built to connect.<br /><span>Made to move.</span></>} text="From a first spark to a fully activated campaign, bring the right pieces together under one roof." /><TextLink to="/services">Explore all services</TextLink></div>
      <div className="service-grid">
        {services.slice(0, 3).map((service) => <motion.article key={service.slug} className="service-card" {...reveal}>
          <Link to={'/services/' + service.slug} className="service-image"><img src={service.image} alt={service.alt} loading="lazy" /><span className="service-num">{service.number}</span><span className="service-arrow"><ArrowUpRight size={20} /></span></Link>
          <div className="service-card-body"><h3><Link to={'/services/' + service.slug}>{service.title}</Link></h3><p>{service.short}</p><Link className="subtle-link" to={'/services/' + service.slug}>Discover service <ArrowRight size={15} /></Link></div>
        </motion.article>)}
      </div>
      <div className="services-bottom"><span>ONE PARTNER. MORE WAYS TO CONNECT.</span><TextLink to="/services">See the full service offering</TextLink></div>
    </section>

    <section className="work-section section-pad">
      <div className="section-top"><SectionHeading eyebrow="WAYS TO SHOW UP" title={<>Every audience is different.<br /><span>Your campaign should be too.</span></>} text="The right format starts with the people you're trying to reach and the action you want to inspire." /><TextLink to="/work">Explore campaign formats</TextLink></div>
      <div className="format-grid">
        {campaignFormats.map((item, index) => <Link to="/work" className={'format-card format-' + index} key={item.label}>
          <img src={item.image} alt={item.alt} loading="lazy" />
          <div className="format-overlay"><span>{item.type}</span><h3>{item.label}</h3><p>{item.description}</p><span className="format-link">Explore the possibilities <ArrowUpRight size={16} /></span></div>
        </Link>)}
      </div>
      <p className="asset-note">Illustrative campaign formats shown. Project photography and verified case studies can be added as approved assets are supplied.</p>
    </section>

    <section className="approach-section section-pad">
      <div className="approach-image"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82" alt="A team planning together around a table" loading="lazy" /><div className="image-caption"><span>GOOD THINKING.</span><span>GREAT EXECUTION.</span></div></div>
      <div className="approach-copy"><Eyebrow>THOUGHT THROUGH. BUILT TO DELIVER.</Eyebrow><h2>Good campaigns<br />don't happen <em>by accident.</em></h2><p>We connect the strategy, people, planning and production that make an activation work on the ground — not just on a presentation slide.</p><div className="approach-steps"><div><span>01</span><p><b>Understand the brief</b><small>Get clear on your audience, goal and context.</small></p></div><div><span>02</span><p><b>Shape the experience</b><small>Build the right idea, team and practical plan.</small></p></div><div><span>03</span><p><b>Bring it to life</b><small>Coordinate the details and activate with purpose.</small></p></div></div><TextLink to="/how-we-work">See how we work</TextLink></div>
    </section>

    <section className="closing-thought section-pad"><span className="closing-mark">“</span><p>Real connection is not a media placement.<br /><em>It's a moment someone remembers.</em></p><Link to="/contact" aria-label="Start planning a campaign"><Play size={16} fill="currentColor" /> MAKE YOUR NEXT MOVE</Link></section>
    <CampaignCTA />
  </div>
}
