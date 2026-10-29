import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import Home from './pages/Home'
import { ServiceDetailPage, ServicesPage } from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Process from './pages/Process'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function RouteAnnouncer() {
  const location = useLocation()
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Resurgence Marketing | Experiences That Move People',
      '/services': 'Services | Resurgence Marketing',
      '/work': 'Our Work | Resurgence Marketing',
      '/about': 'About | Resurgence Marketing',
      '/how-we-work': 'How We Work | Resurgence Marketing',
      '/contact': 'Plan a Campaign | Resurgence Marketing',
    }
    const base = titles[location.pathname] || (location.pathname.startsWith('/services/') ? 'Service | Resurgence Marketing' : 'Resurgence Marketing')
    document.title = base
  }, [location.pathname])
  return null
}

function NotFound() {
  return <section className="not-found section-pad"><span className="eyebrow">404 / WRONG TURN</span><h1>This page isn't part of the journey.</h1><p>Let's get you back to where things happen.</p><a className="button button-primary" href="/">Back home</a></section>
}

export default function App() {
  return <>
    <RouteAnnouncer />
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="how-we-work" element={<Process />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
}
