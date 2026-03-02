# MCR Educational - User Flows

## Flow 1: School / Local Authority Referral (Primary Conversion)

This is the most important user flow - it drives the core business.

```
┌──────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│  Google   │───►│   Landing    │───►│  For Schools   │───►│   Referral   │
│  Search   │    │   Page       │    │   Page         │    │   Process    │
└──────────┘    └──────────────┘    └────────────────┘    └──────┬───────┘
                                                                  │
                                    ┌────────────────┐    ┌──────▼───────┐
                                    │  Confirmation  │◄───│   Submit     │
                                    │  + Follow Up   │    │   Referral   │
                                    └────────────────┘    └──────────────┘
```

### Steps:
1. User arrives via search ("alternative provision Manchester")
2. Hero section communicates value prop + "Make a Referral" CTA
3. "I am a School/LA" card → For Schools page
4. Reviews: why partner, track record, outcomes data
5. Clicks "Start Referral" → referral process page
6. Chooses: online form OR download referral pack
7. Completes and submits form
8. Receives confirmation email with next steps
9. MCR team receives notification and follows up within 24hrs

### Key Metrics:
- Landing → For Schools click rate
- For Schools → Referral form start rate
- Form start → Form completion rate
- Time to first response

---

## Flow 2: Parent / Carer Enquiry

```
┌──────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│  Word of │───►│   Landing    │───►│  For Parents   │───►│  What to     │
│  Mouth   │    │   Page       │    │   Page         │    │  Expect      │
└──────────┘    └──────────────┘    └────────────────┘    └──────┬───────┘
                                                                  │
                ┌──────────────┐    ┌────────────────┐    ┌──────▼───────┐
                │  Contact     │◄───│  Safeguarding  │◄───│  A Typical   │
                │  Form Sent   │    │  Page (trust)  │    │  Day         │
                └──────────────┘    └────────────────┘    └──────────────┘
```

### Steps:
1. Parent hears about MCR Educational (word of mouth, school recommendation)
2. Visits website → "I am a Parent/Carer" card
3. Reads "What to Expect" - reassuring, clear language
4. Views "A Typical Day" - visual timeline of daily schedule
5. Reviews Safeguarding page (critical trust builder)
6. Reads parent testimonials and FAQs
7. Submits contact form / calls directly
8. Receives acknowledgment email

### Design Considerations:
- Use warm, non-institutional language
- Include real photos (with consent)
- FAQs address common parent fears
- Safeguarding policy easily accessible
- Phone number prominent (some parents prefer calling)

---

## Flow 3: Young Person Browsing

```
┌──────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│  Social  │───►│   Landing    │───►│  For Students  │───►│  Student     │
│  Media   │    │   Page       │    │   Page         │    │  Stories     │
└──────────┘    └──────────────┘    └────────────────┘    └──────┬───────┘
                                                                  │
                                    ┌────────────────┐    ┌──────▼───────┐
                                    │  "Talk to your │◄───│   Gallery    │
                                    │   school/parent│    │   / Videos   │
                                    └────────────────┘    └──────────────┘
```

### Design Considerations:
- Visual-heavy, less text
- Video content preferred
- Student voice prominent (quotes, stories)
- Gallery showcasing activities (dance, arts, learning)
- Gentle CTA to involve parent/school (not direct enrollment)
- Age-appropriate language and design

---

## Flow 4: Funder / Partner Discovery

```
┌──────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│  Direct  │───►│   Landing    │───►│   About Us     │───►│  Mission &   │
│  URL     │    │   Page       │    │                │    │  Values      │
└──────────┘    └──────────────┘    └────────────────┘    └──────┬───────┘
                                                                  │
                ┌──────────────┐    ┌────────────────┐    ┌──────▼───────┐
                │  Partner     │◄───│   Contact /    │◄───│  Meet the    │
                │  Enquiry     │    │   Partner CTA  │    │  Team        │
                └──────────────┘    └────────────────┘    └──────────────┘
```

---

## Flow 5: Returning Visitor - Blog / News

```
┌──────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│  Social  │───►│  Blog Post   │───►│  Related       │───►│  Referral /  │
│  Link    │    │  (direct)    │    │  Content       │    │  Contact CTA │
└──────────┘    └──────────────┘    └────────────────┘    └──────────────┘
```

---

## Conversion Funnel Summary

```
                    AWARENESS
                 ┌─────────────┐
                 │  Google /   │
                 │  Social /   │
                 │  Word of    │
                 │  Mouth      │
                 └──────┬──────┘
                        │
                   INTEREST
                 ┌──────▼──────┐
                 │  Homepage   │
                 │  "I am a.." │
                 │  selector   │
                 └──────┬──────┘
                        │
                 CONSIDERATION
                 ┌──────▼──────┐
                 │  Segmented  │
                 │  landing    │
                 │  pages      │
                 └──────┬──────┘
                        │
                    INTENT
                 ┌──────▼──────┐
                 │  Referral / │
                 │  Contact    │
                 │  page       │
                 └──────┬──────┘
                        │
                   CONVERSION
                 ┌──────▼──────┐
                 │  Form       │
                 │  submitted  │
                 └──────┬──────┘
                        │
                   RETENTION
                 ┌──────▼──────┐
                 │  News /     │
                 │  Events /   │
                 │  Portal     │
                 └─────────────┘
```
