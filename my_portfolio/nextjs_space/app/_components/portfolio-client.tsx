'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  MapPin, Mail, Phone, Briefcase, Code2, Award,
  GraduationCap, ChevronRight, Terminal, ExternalLink,
  Calendar, Building2, ArrowUp, Send, User, MessageSquare,
  Shield, Database, Cloud, Layers, GitBranch, Menu, X
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { FadeIn, SlideIn, Stagger, StaggerItem } from '@/components/ui/animate'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const EXPERIENCE = [
  {
    period: 'May 2013 – Aug 2023',
    role: 'System Analyst',
    company: 'Tavant Technologies Inc',
    location: 'Plano, TX',
    highlights: [
      'Lead Developer with 10+ years in web and windows applications using Microsoft .NET Technologies',
      '5+ years experience on Microsoft Azure DevOps, Azure Service Bus, Azure Functions and CI/CD pipelines',
      'Developed UI, Business Logic and Data Access components using OOP concepts—Interface, Inheritance, Polymorphism',
      'Expertise with OOAD and SOLID principles; designed relational databases with Stored Procedures, Triggers, Views',
      'Built applications using Dapper and Entity Framework ORM tools',
      'Developed and consumed ASP.NET Web Services using WSDL, SOAP, RESTful APIs and WCF',
    ],
    tech: ['C#', '.NET Core', 'ASP.NET MVC', 'Azure', 'SQL Server', 'Angular', 'React', 'Entity Framework'],
  },
  {
    period: 'Feb 2021 – Jul 2023',
    role: 'Project Lead',
    company: 'Flagstar Bank, FSB',
    location: 'Dallas, TX',
    highlights: ['Development and support for My Home Portal'],
    tech: ['C#', 'ASP.NET', 'Azure', 'SQL Server'],
  },
  {
    period: 'Dec 2019 – Jan 2021',
    role: 'Lead Developer',
    company: 'Fairway Independent Mortgage',
    location: 'Dallas, TX',
    highlights: ['Development and support for Driver/Express Portal'],
    tech: ['.NET Core', 'Angular', 'Azure DevOps', 'SQL Server'],
  },
  {
    period: 'Jan 2018 – Nov 2019',
    role: 'Technical Lead',
    company: 'PennyMac Loan Services',
    location: 'Westlake Village, CA',
    highlights: ['Loan Officer Portal development and platform architecture'],
    tech: ['C#', 'ASP.NET MVC', 'Azure Functions', 'SQL Server'],
  },
  {
    period: 'Feb 2017 – Dec 2018',
    role: 'Lead Developer',
    company: 'Home Point Financial',
    location: 'Indianapolis, IN',
    highlights: ['Homepoint Portal and Encompass Integration'],
    tech: ['C#', 'Encompass SDK', '.NET', 'SQL Server'],
  },
  {
    period: 'Jan 2015 – Dec 2016',
    role: 'Technical Lead',
    company: 'Ellie Mae',
    location: 'Pleasanton, CA',
    highlights: ['Database Migration Support for Ellie Mae (ICE)'],
    tech: ['C#', 'SQL Server', 'SSIS', 'Database Migration'],
  },
  {
    period: 'Feb 2014 – Dec 2014',
    role: 'Technical Lead',
    company: 'Stonegate Bank',
    location: 'Indianapolis, IN',
    highlights: ['OLIE (Online Information Exchange) for Stonegate'],
    tech: ['ASP.NET', 'C#', 'SQL Server', 'WCF'],
  },
  {
    period: 'May 2013 – Jan 2014',
    role: 'Technical Lead',
    company: 'VectorVest, Inc.',
    location: 'Cornelius, NC',
    highlights: ['Watchdog Development for VectorVest App'],
    tech: ['C#', '.NET', 'SQL Server'],
  },
  {
    period: 'Jul 2010 – May 2013',
    role: 'System Analyst',
    company: 'Accenture Services',
    location: 'Bangalore, India',
    highlights: ['Development of Intel Software Partner Program for Intel (R&D)'],
    tech: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript'],
  },
  {
    period: 'May 2008 – Jul 2010',
    role: 'Senior Software Engineer',
    company: 'Mindtree Ltd.',
    location: 'Bangalore, India',
    highlights: ['REALOGY EDG — Office Expense Application, CCH-FAM Development, LMS (SumTotal 8.1)'],
    tech: ['C#', 'ASP.NET', 'JavaScript', 'SQL Server'],
  },
  {
    period: 'Jan 2006 – May 2008',
    role: 'Software Engineer',
    company: 'Aivea Software Pvt. Ltd.',
    location: 'Bangalore, India',
    highlights: ['ACS (Aivea® Commerce Server) and Tangled Web (Aivea® eShop™ Customization)'],
    tech: ['C#', 'ASP.NET', 'E-Commerce', 'SQL Server'],
  },
]

const SKILL_CATEGORIES = [
  {
    name: 'Languages & Frameworks',
    icon: Code2,
    skills: ['C#', '.NET Core', 'ASP.NET MVC', 'ASP.NET Web API', 'C++', 'Angular', 'React', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'LINQ', 'WCF'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Azure DevOps', 'Azure Functions', 'Azure Service Bus', 'Azure Key Vault', 'Azure Blob Storage', 'CI/CD Pipelines', 'APIM'],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['Azure SQL Server', 'MS SQL Server', 'Stored Procedures', 'Triggers', 'Views', 'SSIS', 'SSRS', 'Normalization'],
  },
  {
    name: 'ORM & Tools',
    icon: Layers,
    skills: ['Entity Framework', 'Dapper', 'NServiceBus', 'Dynamics 365', 'Power Apps', 'Power BI', 'Encompass', 'Velocify'],
  },
  {
    name: 'Practices & Methodology',
    icon: GitBranch,
    skills: ['OOAD', 'SOLID', 'Design Patterns', 'Agile/Scrum', 'GIT', 'TFS', 'JIRA', 'SDLC'],
  },
  {
    name: 'Monitoring & Testing',
    icon: Shield,
    skills: ['Kibana', 'Dynatrace', 'Postman', 'GitHub'],
  },
]

const CERTIFICATIONS = [
  'Professional Scrum Master (PSM)',
  'Certified Encompass360 Administrator/Developer',
  'Microsoft Certified Technology Specialist (MCTS) — Web Applications',
]

const EDUCATION = [
  { year: '2005', degree: 'Master of Computer Applications', field: 'Information Technology', school: 'MBM Govt. Engineering College (JNVU)' },
  { year: '2001', degree: 'Bachelor of Science', field: 'Electronics & Communications', school: 'Lachoo Memorial College of Science & Technology' },
]

export function PortfolioClient() {
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS?.map((item: any) => item?.id) ?? []
      for (let i = (sections?.length ?? 0) - 1; i >= 0; i--) {
        const el = document?.getElementById?.(sections?.[i] ?? '')
        if (el) {
          const rect = el?.getBoundingClientRect?.()
          if ((rect?.top ?? 0) <= 120) {
            setActiveSection(sections?.[i] ?? 'about')
            break
          }
        }
      }
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    const el = document?.getElementById?.(id)
    if (el) {
      const y = (el?.getBoundingClientRect?.()?.top ?? 0) + (window?.scrollY ?? 0) - 80
      window?.scrollTo?.({ top: y, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }, [])

  const yearCount = mounted ? new Date().getFullYear() - 2006 : 17

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[800px] items-center justify-between px-4 py-3 sm:px-6">
          <button
            onClick={() => scrollTo('about')}
            className="flex items-center gap-2 text-primary font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <Terminal className="h-5 w-5" />
            <span className="hidden sm:inline">vikas.sharma</span>
            <span className="sm:hidden">VS</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {(NAV_ITEMS ?? [])?.map?.((item: any) => (
              <button
                key={item?.id}
                onClick={() => scrollTo(item?.id ?? '')}
                className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                  activeSection === item?.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item?.label ?? ''}
              </button>
            )) ?? []}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background px-4 py-2"
          >
            {(NAV_ITEMS ?? [])?.map?.((item: any) => (
              <button
                key={item?.id}
                onClick={() => scrollTo(item?.id ?? '')}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-all ${
                  activeSection === item?.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item?.label ?? ''}
              </button>
            )) ?? []}
          </motion.div>
        )}
      </header>

      <main className="mx-auto max-w-[800px] px-4 sm:px-6 py-12 space-y-20">
        {/* ===== ABOUT ===== */}
        <section id="about" className="pt-8">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-500">Available for opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display">
                Vikas <span className="text-primary">Sharma</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                Senior .NET Developer &amp; System Analyst
              </p>

              <p className="text-base leading-relaxed text-muted-foreground max-w-[650px]">
                Knowledgeable and experienced software developer with {yearCount}+ years of expertise in
                Microsoft .NET technologies, well-versed in OOP concepts and design patterns.
                Excellent API design, implementation, and integration abilities paired with
                significant project leadership background. Exceptional success delivering
                complex software projects on time and within budget.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" /> Plano, TX 75024
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-primary" /> vikasb302sh@outlook.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-primary" /> 567-328-6161
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:vikasb302sh@outlook.com"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="h-4 w-4" /> Get In Touch
                </a>
                <button
                  onClick={() => scrollTo('experience')}
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  <Briefcase className="h-4 w-4" /> View Experience
                </button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section id="experience">
          <FadeIn>
            <SectionHeading icon={Briefcase} title="Experience" subtitle={`${yearCount}+ years of professional software development`} />
          </FadeIn>

          <div className="mt-8 space-y-4">
            <Stagger staggerDelay={0.06}>
              {(EXPERIENCE ?? [])?.map?.((exp: any, i: number) => (
                <StaggerItem key={i}>
                  <ExperienceCard exp={exp} />
                </StaggerItem>
              )) ?? []}
            </Stagger>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="skills">
          <FadeIn>
            <SectionHeading icon={Code2} title="Skills" subtitle="Technologies and tools I work with" />
          </FadeIn>

          <div className="mt-8 space-y-6">
            <Stagger staggerDelay={0.08}>
              {(SKILL_CATEGORIES ?? [])?.map?.((cat: any, i: number) => (
                <StaggerItem key={i}>
                  <div className="rounded-xl bg-card p-5 transition-all hover:shadow-md" style={{ boxShadow: 'var(--shadow-sm)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      {cat?.icon && <cat.icon className="h-4 w-4 text-primary" />}
                      <h3 className="text-sm font-semibold text-foreground">{cat?.name ?? ''}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(cat?.skills ?? [])?.map?.((skill: string, j: number) => (
                        <Badge key={j} variant="secondary" className="font-mono text-xs px-2.5 py-1">
                          {skill ?? ''}
                        </Badge>
                      )) ?? []}
                    </div>
                  </div>
                </StaggerItem>
              )) ?? []}
            </Stagger>
          </div>

          {/* Certifications */}
          <FadeIn delay={0.3}>
            <div className="mt-8 rounded-xl bg-card p-5" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {(CERTIFICATIONS ?? [])?.map?.((cert: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {cert ?? ''}
                  </li>
                )) ?? []}
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* ===== EDUCATION ===== */}
        <section id="education">
          <FadeIn>
            <SectionHeading icon={GraduationCap} title="Education" subtitle="Academic background" />
          </FadeIn>

          <div className="mt-8 space-y-4">
            <Stagger staggerDelay={0.1}>
              {(EDUCATION ?? [])?.map?.((edu: any, i: number) => (
                <StaggerItem key={i}>
                  <div className="rounded-xl bg-card p-5 transition-all hover:shadow-md" style={{ boxShadow: 'var(--shadow-sm)' }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{edu?.degree ?? ''}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{edu?.field ?? ''}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                          <Building2 className="h-3.5 w-3.5" /> {edu?.school ?? ''}
                        </p>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs shrink-0">
                        {edu?.year ?? ''}
                      </Badge>
                    </div>
                  </div>
                </StaggerItem>
              )) ?? []}
            </Stagger>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact">
          <FadeIn>
            <SectionHeading icon={Send} title="Contact" subtitle="Get in touch for opportunities or collaborations" />
          </FadeIn>

          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono">vikas.sharma</span>
          </div>
          <div className="flex items-center gap-4">
            <LiveClock />
          </div>
          <div className="text-xs text-muted-foreground">
            Built with precision
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  )
}

/* ---- Sub-components ---- */

function SectionHeading({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight font-display">{title ?? ''}</h2>
      </div>
      <p className="text-sm text-muted-foreground">{subtitle ?? ''}</p>
    </div>
  )
}

function ExperienceCard({ exp }: { exp: any }) {
  const [expanded, setExpanded] = useState(false)
  const hasDetails = (exp?.highlights?.length ?? 0) > 1

  return (
    <div
      className="rounded-xl bg-card p-5 transition-all hover:shadow-md cursor-pointer group"
      style={{ boxShadow: 'var(--shadow-sm)' }}
      onClick={() => hasDetails && setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-foreground">{exp?.role ?? ''}</h3>
            <span className="text-primary">@</span>
            <span className="text-primary font-medium">{exp?.company ?? ''}</span>
          </div>
          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {exp?.period ?? ''}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {exp?.location ?? ''}
            </span>
          </div>
        </div>
        {hasDetails && (
          <ChevronRight
            className={`h-4 w-4 text-muted-foreground transition-transform flex-shrink-0 mt-1 ${
              expanded ? 'rotate-90' : ''
            }`}
          />
        )}
      </div>

      {/* First highlight always shown */}
      <p className="mt-2 text-sm text-muted-foreground">
        {exp?.highlights?.[0] ?? ''}
      </p>

      {/* Expanded highlights */}
      {expanded && hasDetails && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-2 space-y-1.5"
        >
          {(exp?.highlights ?? [])?.slice?.(1)?.map?.((h: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
              {h ?? ''}
            </li>
          )) ?? []}
        </motion.ul>
      )}

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {(exp?.tech ?? [])?.map?.((t: string, i: number) => (
          <span
            key={i}
            className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary"
          >
            {t ?? ''}
          </span>
        )) ?? []}
      </div>
    </div>
  )
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!(formState?.name ?? '')?.trim?.() || !(formState?.email ?? '')?.trim?.() || !(formState?.message ?? '')?.trim?.()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res?.ok) {
        setStatus('sent')
        setFormState({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }, [formState])

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="rounded-xl bg-card p-6" style={{ boxShadow: 'var(--shadow-sm)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={formState?.name ?? ''}
                onChange={(e: any) => setFormState((p: any) => ({ ...(p ?? {}), name: e?.target?.value ?? '' }))}
                className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                value={formState?.email ?? ''}
                onChange={(e: any) => setFormState((p: any) => ({ ...(p ?? {}), email: e?.target?.value ?? '' }))}
                className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <textarea
              value={formState?.message ?? ''}
              onChange={(e: any) => setFormState((p: any) => ({ ...(p ?? {}), message: e?.target?.value ?? '' }))}
              className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Messages are stored securely.</p>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
          </button>
        </div>
        {status === 'sent' && (
          <p className="mt-3 text-sm text-green-500">Thank you! Your message has been sent successfully.</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-destructive">Something went wrong. Please try again or email directly.</p>
        )}
      </div>
    </form>
  )
}

function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      try {
        setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      } catch {
        setTime('')
      }
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) return null

  return (
    <span className="text-xs text-muted-foreground font-mono tabular-nums">
      {time}
    </span>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible((window?.scrollY ?? 0) > 400)
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => window?.scrollTo?.({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  )
}
