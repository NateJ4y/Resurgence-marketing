import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CampaignCTA, Eyebrow, SectionHeading } from '../components/Sections'

const steps = [
  { num: '01', title: 'Get aligned', label: 'The brief', text: 'We start with the outcome. Who are you trying to reach? What should they think, feel or do? Where does the campaign need to happen?', outputs: ['Audience and objective alignment', 'Context, timing and constraints', 'A shared definition of success'] },
  { num: '02', title: 'Shape the plan', label: 'Strategy & concept', text: 'We translate the brief into an approach that connects the audience, the activation format and the practical requirements.', outputs: ['Recommended activation approach', 'Scope and resource planning', 'Clear next steps and responsibilities'] },
  { num: '03', title: 'Prepare to deliver', label: 'People & production', text: 'The details get organised: teams, materials, locations, timings and the coordination needed to make the plan work on the ground.', outputs: ['Team and activity briefings', 'Production and logistics coordination', 'Readiness checks before launch'] },
  { num: '04', title: 'Bring it to life', label: 'Activation', text: 'The campaign meets the real world. We coordinate the moving pieces and keep the experience focused on the audience and objective.', outputs: ['On-site execution support', 'Activity coordination', 'Practical issue escalation'] },
  { num: '05', title: 'Close the loop', label: 'Wrap-up', text: 'After the activity, bring the work back to the brief. Reporting and evaluation are scoped to the campaign and the information captured.', outputs: ['Campaign wrap-up', 'Available activity reporting', 'Learnings to inform the next move'] },
]

export default function Process() {
  return <div className="inner-page">
    <section className="page-hero process-page-hero"><div className="page-hero-copy"><Eyebrow>FROM BRIEF TO REAL WORLD</Eyebrow><h1>Good execution<br />starts <em>before</em><br />the event.</h1><p>A clear, collaborative process helps keep the idea, people and logistics moving in the same direction.</p><Link to="/contact" className="button button-primary">Start with a brief <ArrowUpRight size={17} /></Link></div><div className="page-hero-image"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=84" alt="A team working through a campaign plan" fetchPriority="high" /><span>PLAN WITH PURPOSE</span></div></section>
    <section className="process-intro section-pad"><SectionHeading eyebrow="THE DELIVERY JOURNEY" title={<>Clear steps. Shared direction.<br /><span>One connected campaign.</span></>} text="The exact scope depends on the brief. This is the working rhythm we use to keep decisions and delivery connected." /><div className="process-timeline">{steps.map((step, index) => <article className="process-step" key={step.num}><div className="process-marker"><span>{step.num}</span>{index < steps.length - 1 && <ArrowDown size={16} />}</div><div className="process-step-copy"><span className="eyebrow">{step.label}</span><h2>{step.title}</h2><p>{step.text}</p><ul>{step.outputs.map((output) => <li key={output}><Check size={15} />{output}</li>)}</ul></div><span className="process-watermark">{step.num}</span></article>)}</div></section>
    <section className="process-promise section-pad"><div><Eyebrow>NO SURPRISES BY DESIGN</Eyebrow><h2>Clear expectations<br /><em>make better work.</em></h2></div><p>We'll be upfront about scope, timelines, dependencies and what can realistically be delivered. Campaign-specific reporting, staffing and production details are confirmed as part of the agreed brief.</p></section>
    <CampaignCTA />
  </div>
}
