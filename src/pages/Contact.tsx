import { FormEvent, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { CampaignCTA, Eyebrow } from '../components/Sections'

const initial = { name: '', email: '', company: '', service: '', location: '', timing: '', budget: '', brief: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')
  const update = (field: keyof typeof initial, value: string) => setForm((current) => ({ ...current, [field]: value }))

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.brief.trim()) {
      setError('Please complete your name, email and a short campaign brief.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    const subject = encodeURIComponent('Campaign enquiry — ' + form.name)
    const body = encodeURIComponent([
      'New campaign enquiry',
      '',
      'Name: ' + form.name,
      'Email: ' + form.email,
      'Company: ' + (form.company || 'Not supplied'),
      'Service: ' + (form.service || 'Not sure yet'),
      'Location: ' + (form.location || 'Not supplied'),
      'Timing: ' + (form.timing || 'Not supplied'),
      'Budget range: ' + (form.budget || 'Not supplied'),
      '',
      'Brief:',
      form.brief,
    ].join('\n'))
    window.location.href = 'mailto:admin@resurgencemarketing.co.za?subject=' + subject + '&body=' + body
  }

  return <div className="inner-page">
    <section className="contact-hero section-pad"><div className="contact-heading"><Eyebrow>LET'S TALK ABOUT THE BRIEF</Eyebrow><h1>Let's make<br />something <em>happen.</em></h1><p>Tell us what you're trying to achieve. You don't need a perfect brief — just a starting point.</p><div className="contact-direct"><a href="mailto:admin@resurgencemarketing.co.za"><span><Mail size={18} /></span><div><small>EMAIL US</small><b>admin@resurgencemarketing.co.za</b></div><ArrowUpRight size={16} /></a><a href="tel:+27682363608"><span><Phone size={18} /></span><div><small>CALL US</small><b>+27 68 236 3608</b></div><ArrowUpRight size={16} /></a><div className="contact-location"><span><MapPin size={18} /></span><div><small>WORKING ACROSS</small><b>South Africa</b></div></div></div></div>
      <div className="contact-form-wrap"><div className="form-heading"><span>CAMPAIGN ENQUIRY</span><span>01 / START HERE</span></div><h2>Give us the outline.</h2><p>We'll take it from there.</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row"><label>YOUR NAME *<input value={form.name} onChange={(e) => update('name', e.target.value)} name="name" autoComplete="name" required placeholder="Name and surname" /></label><label>WORK EMAIL *<input value={form.email} onChange={(e) => update('email', e.target.value)} name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
          <label>COMPANY / BRAND<input value={form.company} onChange={(e) => update('company', e.target.value)} name="company" autoComplete="organization" placeholder="Who are we working with?" /></label>
          <div className="form-row"><label>WHAT DO YOU NEED?<select value={form.service} onChange={(e) => update('service', e.target.value)} name="service"><option value="">Select a service</option><option>Brand activations</option><option>Campus & youth marketing</option><option>Promotional staffing</option><option>Events & sponsorships</option><option>Branding & production</option><option>Not sure yet</option></select></label><label>CAMPAIGN LOCATION<input value={form.location} onChange={(e) => update('location', e.target.value)} name="location" placeholder="City, province or nationwide" /></label></div>
          <div className="form-row"><label>WHEN ARE YOU LOOKING AT?<select value={form.timing} onChange={(e) => update('timing', e.target.value)} name="timing"><option value="">Choose a timeframe</option><option>As soon as possible</option><option>Within 1 month</option><option>Within 1–3 months</option><option>3+ months away</option><option>Just exploring</option></select></label><label>INDICATIVE BUDGET<select value={form.budget} onChange={(e) => update('budget', e.target.value)} name="budget"><option value="">Choose a range (optional)</option><option>Under R25,000</option><option>R25,000–R75,000</option><option>R75,000–R150,000</option><option>R150,000+</option><option>To be determined</option></select></label></div>
          <label>WHAT SHOULD WE KNOW? *<textarea value={form.brief} onChange={(e) => update('brief', e.target.value)} name="brief" rows={4} required placeholder="The audience, the goal, the challenge — anything that helps us understand the opportunity." /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-primary form-submit" type="submit">Prepare enquiry email <Send size={16} /></button>
          <p className="form-privacy">This opens your email app with your enquiry details ready to send. Nothing is submitted or stored on this website.</p>
        </form>
      </div>
    </section>
    <section className="contact-bottom section-pad"><CheckCircle2 size={22} /><p><b>A useful first conversation starts with clarity.</b><br />Share what you know now. Scope, timing and next steps can be worked through together.</p></section>
    <CampaignCTA />
  </div>
}
