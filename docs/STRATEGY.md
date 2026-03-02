# MCR Educational - Full Project Strategy

## 1. Executive Summary

**MCR HQ CIC - Educational Platform** is the dedicated educational arm of MCR HQ CIC ("Dance. Educate. Support."). This platform serves as an alternative education provision for young people in Greater Manchester who are disengaged from mainstream education, at risk of exclusion, or have SEND/SEMH needs.

Inspired by leading UK alternative provision providers (Shinsei Academy, Life Changing Education, Strive Academy, Oxford Creators), this platform combines MCR HQ's unique strengths in dance and performing arts with structured academic support and holistic wellbeing services.

---

## 2. Competitive Analysis Summary

| Feature | Shinsei Academy | Life Changing Education | Strive Academy | Oxford Creators |
|---|---|---|---|---|
| **Focus** | Martial arts + GCSEs | Educational inclusion services | Vocational training | Mentoring & creative arts |
| **Age Range** | Year 9-11 (13-16) | Various | Pre-16 & Post-16 | 11-16 |
| **Unique Hook** | Bushido values | Data-driven urgency stats | Dual campus locations | Student podcast & voice |
| **Audience Segmentation** | Referrers & parents | Schools & LAs (B2B) | Learners & referrers | Parents / Schools / Students |
| **Design Style** | Grid + imagery | Professional purple palette | Teal + purple modern | Heart-led, warm |
| **Key Strength** | Staff profiles & credibility | 30+ team members listed | Employability focus | 3-step reinvention process |
| **CTA Strategy** | Referral download | Contact form | Multiple deep-links | Segmented CTAs |

### Key Takeaways for MCR Educational:
1. **Stakeholder segmentation** (Oxford Creators) - Separate journeys for Parents, Schools, Students
2. **Data-driven messaging** (LCE) - Use statistics to create urgency
3. **Values-driven branding** (Shinsei) - Core values front and center
4. **Clear referral process** (all sites) - Make it dead simple to refer a young person
5. **Dual identity** (Strive) - Academic + vocational/creative offering
6. **Student voice** (Oxford Creators) - Showcase student stories and achievements

---

## 3. Target Audiences

### Primary:
- **Schools & Local Authorities** - Referring young people who need alternative provision
- **Parents / Carers** - Seeking alternative education for their children
- **Young People (11-16)** - Potential learners browsing the site

### Secondary:
- **Funders & Partners** - Looking to support or collaborate
- **Community Members** - Interested in MCR HQ's mission
- **Ofsted / Regulatory Bodies** - Reviewing provision quality

---

## 4. Information Architecture & Sitemap

```
HOME
├── About Us
│   ├── Our Story
│   ├── Mission & Values
│   ├── Meet the Team
│   └── Governance & Policies
├── Our Programmes
│   ├── Academic Pathway (English, Maths, etc.)
│   ├── Creative & Performing Arts (Dance, Music, Drama)
│   ├── Wellbeing & Mentoring
│   ├── Life Skills & Employability
│   └── Enrichment Activities
├── For Schools
│   ├── Why Partner With Us
│   ├── Referral Process
│   ├── Referral Form (Download + Online)
│   ├── Case Studies & Outcomes
│   └── Pricing / Packages
├── For Parents
│   ├── What to Expect
│   ├── A Typical Day
│   ├── Safeguarding
│   ├── FAQs
│   └── Parent Testimonials
├── For Students
│   ├── What We Offer
│   ├── Student Stories / Voices
│   ├── Gallery
│   └── Student Portal (Phase 2)
├── News & Events
│   ├── Blog / News
│   ├── Upcoming Events
│   └── Term Dates
├── Contact
│   ├── Contact Form
│   ├── Location & Map
│   └── Social Links
└── FOOTER
    ├── Quick Links
    ├── Policies (Safeguarding, Privacy, etc.)
    ├── Registration Details (CIC, UKRLP)
    └── Social Media
```

---

## 5. User Flows

### Flow 1: School / LA Referral (Primary Conversion)
```
Landing Page → For Schools → Why Partner → Referral Process → Submit Referral Form → Confirmation Email
                                                          ↗ Download Referral Pack (PDF)
```

### Flow 2: Parent Enquiry
```
Landing Page → For Parents → What to Expect → A Typical Day → FAQs → Contact Form → Confirmation
                          ↘ Safeguarding Page (trust building)
```

### Flow 3: Young Person Browsing
```
Landing Page → For Students → What We Offer → Student Stories → Gallery → (Encouraged to talk to parent/school)
```

### Flow 4: General Visitor / Funder
```
Landing Page → About Us → Mission & Values → Meet the Team → Contact / Partner Enquiry
```

---

## 6. Wireframe Specifications

### 6.1 Homepage Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR: Logo | About | Programmes | Schools | Parents |    │
│          Students | News | Contact        [CTA: Refer Now]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              HERO SECTION                            │    │
│  │  "Empowering Young People Through                   │    │
│  │   Dance, Education & Support"                        │    │
│  │                                                      │    │
│  │  [Make a Referral]  [Learn More]                     │    │
│  │  Background: Full-width video/image of students      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │ IMPACT   │ │ IMPACT   │ │ IMPACT   │  STATS BAR         │
│  │ 150+     │ │ 95%      │ │ 40+      │  (animated          │
│  │ Students │ │ Attend.  │ │ Schools  │   counters)         │
│  └──────────┘ └──────────┘ └──────────┘                    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │         "I AM A..." AUDIENCE SELECTOR                │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐          │    │
│  │  │ 🏫       │  │ 👨‍👩‍👧    │  │ 🎓       │          │    │
│  │  │ School / │  │ Parent / │  │ Young    │          │    │
│  │  │ LA       │  │ Carer    │  │ Person   │          │    │
│  │  │ [Enter]  │  │ [Enter]  │  │ [Enter]  │          │    │
│  │  └──────────┘  └──────────┘  └──────────┘          │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              OUR PROGRAMMES                          │    │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │    │
│  │  │Academic│ │Creative│ │Wellbeing│ │  Life  │       │    │
│  │  │Pathway │ │& Arts  │ │& Mental│ │ Skills │       │    │
│  │  │        │ │        │ │ Health │ │        │       │    │
│  │  └────────┘ └────────┘ └────────┘ └────────┘       │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              OUR VALUES                              │    │
│  │  Respect | Resilience | Creativity | Community      │    │
│  │  (Icon cards with short descriptions)                │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              TESTIMONIALS CAROUSEL                   │    │
│  │  "MCR Educational changed my life..."                │    │
│  │  — Student Name, Age                                 │    │
│  │  ◄  ● ● ○ ○  ►                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │         LATEST NEWS / EVENTS                         │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐            │    │
│  │  │ News 1   │ │ News 2   │ │ Event 1  │            │    │
│  │  │ image    │ │ image    │ │ image    │            │    │
│  │  │ title    │ │ title    │ │ title    │            │    │
│  │  │ excerpt  │ │ excerpt  │ │ date     │            │    │
│  │  └──────────┘ └──────────┘ └──────────┘            │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              CTA BANNER                              │    │
│  │  "Ready to make a referral?"                         │    │
│  │  [Start Referral Process]  [Contact Us]              │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  FOOTER                                              │    │
│  │  Logo | Quick Links | Contact Info | Social Icons    │    │
│  │  Policies | Registration | © MCR HQ CIC 2026        │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Key Page Wireframes

**For Schools Page:**
```
Hero Banner → Why Choose MCR Educational (3 pillars) →
Our Track Record (stats) → How Referrals Work (timeline) →
Referral Form (embedded) → Download Pack CTA → Contact
```

**For Parents Page:**
```
Hero Banner → What to Expect (reassuring tone) →
A Typical Day (timeline visual) → Safeguarding Promise →
Parent Testimonials → FAQs (accordion) → Contact CTA
```

---

## 7. Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **State Management:** Zustand (lightweight, only where needed)

### Backend / CMS
- **CMS:** Payload CMS v3 (self-hosted, TypeScript-native)
  - Manages: Pages, Blog Posts, Team Members, Testimonials, Events, Programmes, Policies
  - Built-in admin panel for non-technical staff
  - Media management for images/videos
- **Database:** PostgreSQL (via Neon or Supabase)
- **File Storage:** Cloudflare R2 or AWS S3

### Infrastructure
- **Hosting:** Vercel (frontend) + Railway/Render (Payload CMS)
- **Domain:** mcr-educational.co.uk (or subdomain of mcrhq)
- **Email:** Resend (transactional emails for referral confirmations)
- **Analytics:** Plausible (privacy-first, GDPR compliant)
- **Monitoring:** Sentry (error tracking)

### DevOps
- **Version Control:** GitHub
- **CI/CD:** GitHub Actions
- **Linting:** ESLint + Prettier
- **Testing:** Vitest + Playwright (E2E)

---

## 8. Design System

### Color Palette
```
Primary:       #1E3A5F  (Deep Navy - trust, education)
Secondary:     #E85D75  (Coral Pink - energy, dance, creativity)
Accent:        #2ECDA7  (Teal Green - growth, wellbeing)
Neutral Dark:  #1A1A2E  (Near Black)
Neutral Light: #F7F8FC  (Off White)
White:         #FFFFFF
Warning:       #F59E0B
Success:       #10B981
```

### Typography
```
Headings:  "Plus Jakarta Sans" (Bold, modern, friendly)
Body:      "Inter" (Clean, highly readable)
Accent:    "Space Grotesk" (For stats/numbers)
```

### Design Principles
1. **Warm & Professional** - Not corporate, not childish
2. **Accessibility First** - WCAG 2.1 AA minimum
3. **Mobile First** - 60%+ traffic expected from mobile
4. **Fast** - Core Web Vitals optimized (LCP < 2.5s)
5. **Trust Signals** - Logos, certifications, stats prominent

---

## 9. Development Phases

### Phase 1: Foundation (Weeks 1-3)
- Project setup, CI/CD, design system
- Homepage, About, Contact pages
- Basic Payload CMS setup
- Responsive navigation & footer

### Phase 2: Core Pages (Weeks 4-6)
- For Schools (+ referral form)
- For Parents
- For Students
- Programmes pages
- Team page

### Phase 3: Content & Features (Weeks 7-9)
- Blog / News system
- Events & Term Dates
- Testimonials system
- Gallery / Media
- Policies pages

### Phase 4: Polish & Launch (Weeks 10-12)
- SEO optimization
- Performance audit
- Accessibility audit
- Analytics setup
- User testing
- Content population
- Launch

### Phase 5: Post-Launch (Ongoing)
- Student portal (authentication)
- Online referral tracking dashboard
- Parent communication portal
- Integration with school MIS systems

---

## 10. SEO Strategy

### Target Keywords
- "alternative provision Manchester"
- "alternative education Greater Manchester"
- "SEMH provision Manchester"
- "dance education programme Manchester"
- "creative alternative provision UK"
- "MCR HQ educational"

### Technical SEO
- Server-side rendering (Next.js)
- Structured data (Schema.org: EducationalOrganization)
- XML sitemap auto-generation
- Open Graph + Twitter cards
- Canonical URLs
- robots.txt

---

## 11. Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation throughout
- Screen reader optimized (ARIA labels)
- Color contrast ratios (4.5:1 minimum)
- Alt text for all images
- Focus indicators visible
- Reduced motion preferences respected
- Form error handling accessible
