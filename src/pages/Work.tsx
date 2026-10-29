import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { campaignFormats } from '../data'
import { CampaignCTA, Eyebrow, SectionHeading } from '../components/Sections'

export default function Work() {
  return <div className="inner-page">
    <section className="page-hero work-page-hero"><div className="page-hero-copy"><Eyebrow>THE WORK IS THE EXPERIENCE</Eyebrow><h1>Show up with<br /><em>something to say.</em></h1><p>Every campaign has a job to do. The format, place and interaction should all serve the people you're trying to reach.</p><Link to="/contact" className="button button-primary">Talk about your campaign <ArrowUpRight size={17} /></Link></div><div className="page-hero-image"><img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=84" alt="People gathered at a live outdoor event" fetchPriority="high" /><span>MAKE THE MOMENT COUNT</span></div></section>
    <section className="work-intro section-pad"><SectionHeading eyebrow="CAMPAIGN FORMATS" title={<>Different audiences.<br /><span>Different ways to connect.</span></>} text="Explore examples of activation formats we can plan around your objectives. These are illustrative formats, not client case studies." /><div className="work-note"><span className="note-symbol">↗</span><p>Real campaign case studies, approved client names and outcome data will be added here once verified project assets are supplied.</p></div></section>
    <section className="work-gallery section-pad">{campaignFormats.map((item, index) => <article className={'work-feature work-feature-' + index} key={item.label}><div className="work-feature-image"><img src={item.image} alt={item.alt} loading="lazy" /><span>FORMAT / 0{index + 1}</span></div><div className="work-feature-copy"><Eyebrow>{item.type}</Eyebrow><h2>{item.label}</h2><p>{item.description}</p><Link to="/contact" className="text-link">Build something like this <ArrowUpRight size={16} /></Link></div></article>)}</section>
    <section className="work-principle section-pad"><Eyebrow>NO COPY-PASTE CAMPAIGNS</Eyebrow><h2>Start with the people.<br /><em>Then build the experience.</em></h2><p>We believe the best activation is the one that fits the audience, the environment and the objective — not the one that looks like everyone else's.</p></section>
    <CampaignCTA />
  </div>
}
