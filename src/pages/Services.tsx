import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { services } from '../data'
import { CampaignCTA, Eyebrow, SectionHeading, TextLink } from '../components/Sections'

export function ServicesPage() {
  return <div className="inner-page">
    <section className="page-hero service-page-hero"><div className="page-hero-copy"><Eyebrow>WHAT WE BRING TO THE TABLE</Eyebrow><h1>Make the idea<br /><em>real.</em></h1><p>Creative thinking is only the start. We bring the people, planning and practical execution that turn campaign intent into real-world interaction.</p><Link to="/contact" className="button button-primary">Talk through your brief <ArrowUpRight size={17} /></Link></div><div className="page-hero-image"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=84" alt="A large-scale event installation" fetchPriority="high" /><span>STRATEGY INTO EXPERIENCE</span></div></section>
    <section className="service-list-section section-pad"><SectionHeading eyebrow="OUR CAPABILITIES" title={<>One connected offering.<br /><span>Built around your brief.</span></>} text="Choose a service to explore what it can include. Campaigns can combine capabilities depending on the objective." /><div className="service-list">{services.map((service) => <Link key={service.slug} to={'/services/' + service.slug} className="service-row"><span className="service-row-num">{service.number}</span><div className="service-row-image"><img src={service.image} alt={service.alt} loading="lazy" /></div><div className="service-row-copy"><h2>{service.title}</h2><p>{service.short}</p></div><span className="service-row-arrow"><ArrowUpRight /></span></Link>)}</div></section>
    <section className="service-note section-pad"><div><Eyebrow>NOT SURE WHERE TO START?</Eyebrow><h2>Start with the outcome.<br /><em>We'll work backwards.</em></h2></div><p>Tell us who you want to reach, what you want them to do and where the campaign needs to happen. We'll help map the right mix of services.</p><Link to="/contact" className="button button-primary">Build a campaign brief <ArrowRight size={17} /></Link></section>
    <CampaignCTA />
  </div>
}

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <section className="not-found section-pad"><Eyebrow>SERVICE NOT FOUND</Eyebrow><h1>Let's get you back on track.</h1><Link to="/services" className="button button-primary"><ArrowLeft size={17} /> All services</Link></section>
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 2)
  return <div className="inner-page">
    <section className="detail-hero"><div className="detail-copy"><Link to="/services" className="back-link"><ArrowLeft size={15} /> All services</Link><Eyebrow>SERVICE {service.number}</Eyebrow><h1>{service.title.split(' & ').length > 1 ? <>{service.title.split(' & ')[0]} <em>&amp; {service.title.split(' & ')[1]}</em></> : <>{service.title}</>}</h1><p>{service.description}</p><Link to="/contact" className="button button-primary">Discuss this service <ArrowUpRight size={17} /></Link></div><div className="detail-image"><img src={service.image} alt={service.alt} fetchPriority="high" /><span>{service.number} / 05</span></div></section>
    <section className="detail-deliverables section-pad"><div><Eyebrow>WHAT IT CAN INCLUDE</Eyebrow><h2>Built around<br /><em>your objective.</em></h2><p>Every brief is different. These are the building blocks we can shape around your audience, context and goals.</p></div><ul>{service.deliverables.map((item) => <li key={item}><CheckCircle2 size={19} />{item}</li>)}</ul></section>
    <section className="related-services section-pad"><SectionHeading eyebrow="MAKE IT WORK TOGETHER" title={<>A bigger idea can need<br /><span>more than one capability.</span></>} /><div className="related-grid">{related.map((item) => <Link key={item.slug} to={'/services/' + item.slug} className="related-card"><span>{item.number}</span><h3>{item.title}</h3><p>{item.short}</p><ArrowUpRight size={18} /></Link>)}</div><TextLink to="/services">Explore all services</TextLink></section>
    <CampaignCTA />
  </div>
}
