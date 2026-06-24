# architecture.md

# Foresight Website Architecture

## 1. Site Objective

The website has one clear objective:

Convert organic traffic into customers for Foresight.

The site should do this by moving visitors through a controlled sequence:

1. Understand what Foresight is.
2. Understand why AI policy matters now.
3. Understand what risk or opportunity this creates for their organization.
4. Understand how Foresight helps.
5. Request a briefing.

The site should be designed for first-time visitors who may have arrived through search, referral, policy news, legislation content, or a shared link. The user should not need prior knowledge of Foresight, AI policy, or the partners to understand the offer.

---

## 2. Recommended Page Count

The site should use three core HTML pages plus one global header system and one global footer system.

The header and footer should not be treated as separate full webpages. They are global systems included across each page. For the current site, founding partner information belongs in the footer and can also be reinforced on the Services page where relevant.

Recommended structure:

```text
1. Landing Page
   index.html

2. Info Page / Why Now
   why-now.html

3. Services Page / Request a Briefing
   services.html

4. Global Header System
   header component included across all pages

5. Global Footer System
   footer component included across all pages
```

This keeps the website concise and digestible while still matching the confirmed content categories:

- Landing Page
- Info Page / Why Now
- Services Page / Request a Briefing
- Header System / Navigation, primary CTA, mobile menu
- Footer System / Founding Partners, navigation, contact route

The site should avoid adding unnecessary pages at this stage. The visitor flow should stay focused on conversion rather than exploration.

---

## 3. Primary User Journey

The ideal visitor journey is:

```text
Organic Entry
↓
Landing Page
↓
Why AI Policy Matters Now
↓
Services / How Foresight Helps
↓
Request a Briefing
```

Alternative entry paths should also work:

```text
Organic search result for AI legislation update
↓
News / legislation feature on Landing or Why Now page
↓
Why Now explanation
↓
Services
↓
Request a Briefing
```

```text
Direct referral from partner / policy network
↓
Landing Page
↓
Credibility and positioning
↓
Services
↓
Request a Briefing
```

```text
Visitor already understands AI policy risk
↓
Services Page
↓
Advisory offer
↓
Request a Briefing
```

Every page should contain a clear route to the Services page and a repeated CTA to Request a Briefing.

---

## 4. Psychological Conversion Strategy

The site should be structured around decision psychology, not just information display.

### 4.1 Reduce Cognitive Load

Visitors should never be forced to decode what the company does. The first screen must answer:

- What is this?
- Who is it for?
- Why does it matter now?
- What should I do next?

This follows usability research around reducing cognitive load: remove clutter, avoid irrelevant visual decoration, make hierarchy obvious, and reduce mental effort.

Practical application:

- Use short section introductions before dense content.
- Use clear headings.
- Group related information into scannable sections and pillars.
- Avoid placing too many CTAs in the same section.
- Use one dominant CTA: Request a Briefing.
- Use progressive disclosure: overview first, detail later.

Source basis:

- Nielsen Norman Group, “Minimize Cognitive Load to Maximize Usability”
- Nielsen Norman Group, “Few Guesses, More Success: 4 Principles to Reduce Cognitive Load in Forms”

### 4.2 Authority

Foresight is selling judgement, interpretation, and strategic guidance. The architecture should therefore create authority before asking for conversion.

Authority should be built through:

- Clear advisory judgement
- Credible policy context
- Partner names in footer
- Specific service language
- References to legislative monitoring, policy strategy, risk assessment, and stakeholder engagement
- A representative engagement section
- Clear explanation of the AI policy landscape

Do not lead with vague AI language. Lead with policy intelligence, regulation, legislative risk, and executive decision-making.

Source basis:

- Robert Cialdini’s principle of authority from the science of persuasion

### 4.3 Urgency

The site should make the visitor feel that AI policy is not a future issue. It is happening now.

Urgency should come from the content itself, not from aggressive sales language.

Use these points early:

- Artificial Intelligence is advancing faster than existing regulatory frameworks.
- Governments are now actively developing new approaches to AI oversight.
- The rules are being written now.
- Organizations that engage early will shape outcomes.
- Policy will determine investment flows and innovation outcomes.

This creates a reason to act without sounding promotional.

Source basis:

- Robert Cialdini’s principle of scarcity, applied ethically as time-sensitive strategic relevance rather than artificial pressure

### 4.4 Relevance

A first-time visitor must be able to place themselves inside the problem.

The site should speak to:

- Companies
- Trade associations
- Institutions
- Public-sector leaders
- Executives
- Policy stakeholders
- Organizations affected by AI regulation

The copy should keep returning to organizational risk, policy movement, market change, and strategic positioning.

### 4.5 Commitment Gradient

The CTA should not ask for a large commitment immediately.

“Request a Briefing” is stronger than “Hire Us” because it feels advisory, low-friction, and appropriate for an executive / policy audience.

The CTA sequence should be:

```text
Learn Why Now
↓
Explore Services
↓
Request a Briefing
```

The final conversion point should be a short form or email link. If using a form, it should request only essential information.

Recommended form fields:

- Name
- Organization
- Email
- Area of interest
- Message

Avoid long intake forms at this stage.

Source basis:

- Nielsen Norman Group form usability research: structure, clarity, transparency, and support reduce user effort
- Baymard Institute UX research: evidence-based interface decisions reduce friction and improve conversion performance

---

## 5. Page 1: Landing Page

File:

```text
index.html
```

### Purpose

The Landing Page should establish Foresight’s positioning immediately and direct users toward either the Why Now page or the Services page.

The page must answer:

- What is Foresight?
- What problem does it solve?
- Why should the visitor care now?
- What action should the visitor take?

### Recommended Section Order

```text
1. Global header
2. Hero section
3. Short positioning statement
4. Why Now preview
5. AI legislation / policy intelligence preview
6. Services preview
7. Strategic vision statement
8. Primary CTA section
9. Footer
```

### 1. Global Header

Recommended navigation links:

```text
Foresight
Why Now
Services
Policy Intelligence
Request a Briefing
```

“Request a Briefing” should be treated as the primary action.

If the site does not yet have a full automated intelligence page, “Policy Intelligence” can anchor-scroll to the legislation/news preview section.

### 2. Hero Section

Objective:

Create immediate clarity and authority.

Required content direction:

- Name: Foresight
- Positioning: AI Policy Advisory
- Core message: helps clients anticipate, shape, and navigate AI regulation
- Primary CTA: Request a Briefing
- Secondary CTA: Learn Why Now


### 3. Short Positioning Statement

Use this section to explain the offer in one readable block.

Content should come from the “What is Foresight” material, with naming updated to Foresight.

This section should establish:

- Advisory firm
- AI policy
- Economic and market change
- Regulation
- Strategic guidance
- Public-sector and private-sector relevance

### 4. Why Now Preview

This should summarise the urgency without overwhelming the homepage.

Recommended format:

```text
Three points:
1. AI is outpacing regulation
2. Governments are developing oversight
3. Early engagement shapes outcomes
```

CTA:

```text
Learn Why Now
```

### 5. AI Legislation / Policy Intelligence Preview

This section introduces the future dynamic news feature.

It should contain:

```text
Current Featured Update
- Title
- Date
- Source / jurisdiction
- Short summary
- Relevance to Foresight clients
- Read more link

Below:
Three older articles loaded from JSON
```

This section helps convert organic traffic because it gives the site fresh informational value, creates search relevance, and demonstrates active policy intelligence.

The current static version can use manually written placeholder entries stored in JSON. The future automated version can replace or update the same JSON structure.

### 6. Services Preview

Summarise the four service areas:

```text
1. Policy strategy and risk assessment
2. Monitoring federal and state legislative activity
3. Direct engagement with policymakers and stakeholders
4. Strategic advocacy and policy analysis
```

CTA:

```text
Explore Services
```

### 7. Strategic Vision Statement

Use the strategic vision content near the end of the landing page:

```text
AI policy is being shaped now at the federal and state levels.

Foresight helps clients lead, rather than react, in the evolving AI regulatory landscape.
```

### 8. Primary CTA Section

Final prompt:

```text
Request a Briefing
```

This should be direct and avoid exaggerated sales wording.

---

## 6. Page 2: Info Page / Why Now

File:

```text
why-now.html
```

### Purpose

The Why Now page should explain the urgency of AI policy and create the need for Foresight’s services.

The page should not feel like a blog post. It should feel like an executive briefing.

### Recommended Section Order

```text
1. Global header
2. Page hero
3. AI Policy Tsunami
4. The AI Policy Landscape
5. Why This Matters
6. Signals From AI Leadership
7. The AI Economy
8. Policy Intelligence / legislation news row
9. CTA to Services / Request a Briefing
10. Footer
```

### 1. Page Hero

Objective:

Frame AI policy as a present strategic issue.

Suggested content basis:

```text
Artificial Intelligence is advancing faster than existing regulatory frameworks.
```

### 2. AI Policy Tsunami

Use this as the main urgency section.

Content:

```text
• Artificial Intelligence is advancing faster than existing regulatory frameworks
• Governments are now actively developing new approaches to AI oversight
• The coming years will determine
  • Who leads the AI economy
  • How industries adapt
  • How governments regulate innovation
• Organizations that engage early will shape the rules
```

Present the points as short readable blocks.

### 3. The AI Policy Landscape

Use a three-point structure:

```text
1. AI development is outpacing existing regulatory frameworks.
2. Governments are developing new approaches to AI oversight.
3. Organizations that engage early will help shape the rules.
```

This section should function as a cognitive reset after the longer AI Policy Tsunami section.

### 4. Why This Matters

Use three sequential blocks:

```text
1. AI will transform major sectors.
2. Policy debates include algorithmic accountability, data governance, and liability.
3. Organizations need advisors who understand AI and policy.
```

Present this as a clear cause-and-effect sequence.

### 5. Signals From AI Leadership

Use this section as authority and broader context.

Content:

```text
“We are entering a rite of passage . . . Which will test who we are as a species.” – Dario Amodei

“Humanity is about to be handed almost unimaginable power . . .” – Dario Amodei

Reflecting growing concern around the risks and governance of advanced AI systems
```

Keep the emphasis on the quotations and the governance context they support.

### 6. The AI Economy

Content:

```text
• AI is projected to add trillions to the global economy.
• Policy will determine investment flows and innovation outcomes.
```

This section links policy risk to economic consequence.

### 7. Policy Intelligence / Legislation News Row

The Why Now page should include a dynamic news component because visitors arriving through organic traffic may be looking for timely AI legislation information.

The component should:

- Load from JSON
- Display one featured current item
- Display three older items below
- Link each item to a source or full article page if available
- Include a “Why it matters” field for advisory relevance

Recommended fields are defined in the JSON architecture section.

### 8. CTA

CTA should move the user to Services:

```text
Understand How Foresight Helps
```

Secondary CTA:

```text
Request a Briefing
```

---

## 7. Page 3: Services Page / Request a Briefing

File:

```text
services.html
```

### Purpose

The Services page should convert interest into enquiry.

It should explain what Foresight does, how it helps, and what the visitor should do next.

### Recommended Section Order

```text
1. Global header
2. Services hero
3. What Is Foresight
4. Foresight Objectives
5. Foresight Pillars
6. What Foresight Does
7. Representative Engagement
8. Competitive Advantage
9. Request a Briefing
10. Footer
```

### 1. Services Hero

Objective:

State the advisory offer clearly.

Content should focus on:

- Policy advisory
- Strategic advocacy
- AI and emerging technologies
- Regulatory risk
- Policymaker engagement

### 2. What Is Foresight

Use the long explanatory content here because this is where motivated visitors will tolerate more detail.

Content basis:

```text
Foresight AI Strategies is an advisory firm focused on helping leaders understand, anticipate, and respond to the fast-moving policy, economic, and market changes being driven by artificial intelligence. As AI reshapes industries, labor markets, regulation, and competitive dynamics, organizations face growing pressure to make informed decisions in an environment defined by uncertainty and rapid change. Foresight AI Strategies works with companies, trade associations, institutions, and public-sector leaders to help them navigate that change with clarity, foresight, and practical strategy.

The firm provides strategic guidance at the intersection of AI, public policy, economic development, and organizational positioning. Its work is designed to help clients evaluate emerging risks, identify opportunities, shape policy discussions, and prepare for the broader transformation AI is bringing to business and society. Whether advising on regulatory trends, market implications, stakeholder strategy, or long-term positioning, Foresight AI Strategies helps leaders move beyond reacting to disruption and instead engage the AI era with purpose, confidence, and direction.
```

### 3. Foresight Objectives

Content basis:

```text
Policy advisory and strategic advocacy focused on artificial intelligence and emerging technologies.

Helps clients anticipate regulatory developments, assess risk, and engage effectively with policymakers.
```


### 4. Foresight Pillars

Content:

```text
Anticipate emerging policy developments

Navigate complex regulatory environments

Shape policy outcomes

Respond to regulatory risk
```

Present these as the four core action pillars.

### 5. What Foresight Does

Content:

```text
Policy strategy and risk assessment

Monitoring federal and state legislative activity

Direct engagement with policymakers and stakeholders

Strategic advocacy and policy analysis
```

Each item can include a short supporting paragraph if additional content is provided later. Current content can remain concise.

### 6. Representative Engagement

Content:

```text
Client Situation:

• Client faced a rapidly developing policy and reputational issue requiring immediate engagement with decision-makers

Foresight Approach:

• Monitored legislative and regulatory developments in real time
• Conducted rapid policy analysis and risk assessment
• Engaged directly with policymakers and stakeholders
• Developed coordinated strategy and messaging

Outcome:

• Issue addressed within a compressed timeframe
• Regulatory and reputational risk mitigated
• Client effectively positioned with decision-makers
```

This section supports trust through specificity.

Use a Situation / Approach / Outcome format and avoid excessive storytelling.

### 7. Competitive Advantage

Content:

```text
Legal, policy, and government relations expertise

Ability to translate AI issues for policymakers
```

Use this directly before the conversion form because it reinforces why the visitor should enquire.

### 8. Request a Briefing

This is the main conversion section.

Recommended form fields:

```text
Name
Organization
Email
Area of interest
Message
```

Recommended CTA button:

```text
Request a Briefing
```

Form UX requirements:

- Keep the form short
- Make required fields obvious
- Use clear labels
- Avoid placeholder-only labels
- Include confirmation state
- Include error states
- Include privacy reassurance if collecting data

---

## 8. Global Header System

The header appears on every page.

### Purpose

The header should provide persistent orientation, primary navigation, and a clear route to request a briefing.

### Recommended Header Content

```text
Foresight

Navigation:
Landing
Why Now
Services
Policy Intelligence
Request a Briefing
```

### Header UX

The header should make the current site section clear, support mobile navigation, and keep “Request a Briefing” available without crowding the page content.

---

## 9. Global Footer System

The footer appears on every page.

### Purpose

The footer should provide credibility, navigation, and a final conversion route.

### Recommended Footer Content

```text
Foresight

Preparing Clients to Navigate the AI Policy Landscape

Foresight helps clients anticipate, shape, and navigate AI regulation.

Partners: Kimberly Contino, Esq.; Louis Crocco, Esq.

Navigation:
Landing
Why Now
Services
Policy Intelligence
Request a Briefing

Copyright
Contact route
```

### Footer UX

The footer should act as the site’s final credibility layer.

The footer system should consistently include brand context, navigation, founding partner information, and a contact or briefing route.

---

## 10. Dynamic Content and JSON Architecture

The site should be built with HTML, CSS, and JavaScript. Content that may change should be loaded from JSON files.

This allows the static site to remain simple while preparing for future automation.

Recommended structure:

```text
foresight-website/
├── index.html
├── why-now.html
├── services.html
├── assets/
│   ├── images/
│   ├── icons/
│   └── graphics/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── content-loader.js
│   └── news-loader.js
├── data/
│   ├── site-content.json
│   ├── services.json
│   ├── policy-news.json
│   └── partners.json
└── README.md
```

---

## 11. JSON File Responsibilities

### 11.1 site-content.json

Stores general content that may change.

Example structure:

```json
{
  "siteName": "Foresight",
  "tagline": "Preparing Clients to Navigate the AI Policy Landscape",
  "positioning": "Foresight helps clients anticipate, shape, and navigate AI regulation.",
  "primaryCta": "Request a Briefing",
  "secondaryCta": "Learn Why Now"
}
```

### 11.2 services.json

Stores service and pillar content.

Example structure:

```json
{
  "pillars": [
    {
      "title": "Anticipate",
      "text": "Anticipate emerging policy developments"
    },
    {
      "title": "Navigate",
      "text": "Navigate complex regulatory environments"
    },
    {
      "title": "Shape",
      "text": "Shape policy outcomes"
    },
    {
      "title": "Respond",
      "text": "Respond to regulatory risk"
    }
  ],
  "services": [
    {
      "title": "Policy strategy and risk assessment"
    },
    {
      "title": "Monitoring federal and state legislative activity"
    },
    {
      "title": "Direct engagement with policymakers and stakeholders"
    },
    {
      "title": "Strategic advocacy and policy analysis"
    }
  ]
}
```

### 11.3 policy-news.json

Stores current and archived AI legislation / policy intelligence articles.

This file should support the immediate static version and the future automated version.

Example structure:

```json
{
  "featured": {
    "title": "Featured AI Policy Update Title",
    "date": "2026-05-08",
    "jurisdiction": "Federal",
    "source": "Source Name",
    "summary": "Short summary of the current policy or legislation update.",
    "whyItMatters": "Short explanation of why this matters to Foresight clients.",
    "url": "#",
    "tags": ["AI Policy", "Regulation", "Legislation"]
  },
  "archive": [
    {
      "title": "Archived AI Policy Update Title",
      "date": "2026-05-07",
      "jurisdiction": "State",
      "source": "Source Name",
      "summary": "Short summary of the archived article.",
      "whyItMatters": "Short explanation of client relevance.",
      "url": "#",
      "tags": ["AI Governance"]
    },
    {
      "title": "Archived AI Policy Update Title",
      "date": "2026-05-06",
      "jurisdiction": "Federal",
      "source": "Source Name",
      "summary": "Short summary of the archived article.",
      "whyItMatters": "Short explanation of client relevance.",
      "url": "#",
      "tags": ["AI Legislation"]
    },
    {
      "title": "Archived AI Policy Update Title",
      "date": "2026-05-05",
      "jurisdiction": "State",
      "source": "Source Name",
      "summary": "Short summary of the archived article.",
      "whyItMatters": "Short explanation of client relevance.",
      "url": "#",
      "tags": ["Policy Intelligence"]
    }
  ]
}
```

Front-end display logic:

```text
1. Load policy-news.json
2. Render the featured object as the main current article
3. Render the first three archive objects as supporting items
4. Sort archive items by date if necessary
```

### 11.4 partners.json

Stores founding partner information.

Example structure:

```json
{
  "partners": [
    {
      "name": "Kimberly Contino",
      "credentials": "Esq."
    },
    {
      "name": "Louis Crocco",
      "credentials": "Esq."
    }
  ]
}
```

This prevents partner information from being hard-coded across multiple files.

---

## 12. Information Digestibility Rules

The site must be readable for a first-time visitor.

### Content Rules

- One idea per section.
- One primary CTA per screen.
- Short paragraphs.
- Dense content only after the visitor understands the premise.
- Use grouped modules for parallel concepts.
- Use sequential ordering for cause-and-effect arguments.
- Use case study formatting for proof.
- Use repeated CTA placement without making the page feel aggressive.

### Recommended Hierarchy

```text
Headline
↓
One-sentence explanation
↓
Three or four supporting points
↓
CTA or route to next page
```

### Avoid

- Large uninterrupted blocks of text on the landing page
- Multiple competing CTA labels
- Generic AI statements
- Overly technical implementation detail in the front-end user experience
- Making the visitor read the full company description before understanding the problem
- Treating policy news as a blog dump rather than a lead-generation tool

---

## 13. CTA Placement

Recommended CTA placement across the site:

### Landing Page

```text
Hero:
Request a Briefing
Learn Why Now

Middle:
Explore Services

Policy Intelligence Preview:
View Policy Intelligence

Final:
Request a Briefing
```

### Why Now Page

```text
Hero:
Explore Services

After policy landscape:
Request a Briefing

Final:
Understand How Foresight Helps
Request a Briefing
```

### Services Page

```text
Hero:
Request a Briefing

After Four Pillars:
Discuss Your Policy Priorities

Final:
Request a Briefing
```

The CTA language should stay consistent. “Request a Briefing” should remain the dominant CTA.

---

## 14. Technical Architecture

The site should be built as a static front-end with dynamic JSON-loaded content.

### Core Technologies

```text
HTML
CSS
JavaScript
JSON
```

### Deployment

Preferred deployment:

```text
Vercel
```

Alternative:

```text
Netlify
```

### Why Static + JSON

This approach is appropriate because:

- The accepted scope is static website development.
- The site remains fast and simple.
- Content can still be updated without rewriting HTML.
- Future automation can write into JSON or a database-backed endpoint.
- The front-end can later be connected to n8n, Airtable, Supabase, or an API.

### JavaScript Responsibilities

```text
main.js:
- Navigation interactions
- Mobile menu
- Scroll states
- General UI behavior

content-loader.js:
- Load reusable site content
- Load services
- Load partners

news-loader.js:
- Load policy-news.json
- Render featured article
- Render three archived articles
- Handle missing data
- Sort by date if required
```

### CSS Responsibilities

```text
style.css:
- Implement the visual rules defined in styleguide.md
- Support shared components
- Support responsive presentation
- Support forms and interaction states
```

---

## 15. Future Automation Compatibility

The AI legislation / news section should be built so that future automation can update it without rebuilding the front end.

Future automation workflow:

```text
Selected AI policy / legislation sources
↓
n8n scheduled workflow
↓
AI model summarises 1–2 high-quality updates per day
↓
Human review if required
↓
JSON / Airtable / Supabase update
↓
Website loads latest entry
```

The current static build should not include the full automation unless separately agreed.

The front-end should only prepare the structure:

```text
Featured current article
Three archived articles
Tags
Jurisdiction
Date
Source
Summary
Why it matters
External URL
```

This turns the future automation into a content pipeline rather than a full redesign.

---

## 16. Organic Traffic Conversion Logic

The site should treat policy intelligence content as both SEO surface area and conversion material.

A visitor may arrive because they searched for:

```text
AI legislation
AI policy advisory
AI regulation
state AI regulation
federal AI oversight
AI governance risk
AI accountability legislation
AI policy intelligence
```

The page must then quickly connect the search intent to Foresight’s services.

Recommended flow for an organic visitor:

```text
Search query
↓
Relevant policy intelligence headline
↓
Short summary
↓
Why this matters to organizations
↓
Foresight advisory positioning
↓
Request a Briefing
```

The “Why it matters” field is critical. It converts news from passive content into advisory relevance.

---

## 17. Mobile Architecture

Mobile users should receive the same argument in a simplified sequence.

### Mobile Rules

- Keep hero copy concise.
- Show CTA above the fold.
- Collapse navigation into a clean menu.
- Avoid horizontal scrolling.
- Place the “Request a Briefing” CTA prominently.
- Keep policy news summaries short.
- Use tap targets large enough for comfortable use.

### Mobile Page Flow

```text
Hero
↓
Problem
↓
Why now
↓
Services
↓
Proof
↓
Request a Briefing
↓
Footer
```

---

## 18. Accessibility and Trust

The site should meet basic accessibility expectations.

Requirements:

- Semantic HTML
- Correct heading order
- Sufficient color contrast
- Keyboard-accessible navigation
- Visible focus states
- Alt text for meaningful imagery
- Labels for all form fields
- Error text for form validation
- No text embedded only in images
- Reduced motion support if using animation

Trust details:

- Partner names visible in footer
- Clear contact route
- No exaggerated claims
- Clear distinction between commentary, advisory positioning, and legislation/news summaries
- Source links for policy news items
- Dates on news items

---

## 19. Page-by-Page Conversion Role

```text
Landing Page:
Create clarity and first trust. Route visitors to Why Now or Services.

Why Now Page:
Create urgency and relevance. Show that AI policy movement is active, material, and consequential.

Services Page:
Convert interest into action. Explain how Foresight helps and ask the visitor to request a briefing.

Footer:
Reinforce credibility, navigation, partner information, and contact access.
```

---

## 20. Build Order

Recommended build sequence:

```text
1. Create project file structure
2. Build global header and footer systems
3. Build index.html
4. Build why-now.html
5. Build services.html
6. Create JSON files
7. Write content loading scripts
8. Add policy-news rendering component
9. Apply styleguide to desktop presentation
10. Apply styleguide to mobile presentation
11. Add form states
12. Test navigation
13. Test JSON loading
14. Test responsive behavior
15. Prepare handover notes
```

---

## 21. Success Criteria

The architecture is successful if:

- A first-time visitor understands the firm within the first screen.
- The site clearly explains why AI policy matters now.
- Services are easy to understand.
- The CTA is obvious but not aggressive.
- The site feels serious, credible, and authoritative.
- The user can move from organic news content to enquiry.
- Founding partner information is visible.
- The structure is ready for future AI legislation automation.
- Content that may change is stored in JSON.
- The site works cleanly on desktop and mobile.

---

## 22. Research Sources Referenced

The architecture applies principles from the following research and UX sources:

```text
Nielsen Norman Group
Minimize Cognitive Load to Maximize Usability
https://www.nngroup.com/articles/minimize-cognitive-load/

Nielsen Norman Group
Few Guesses, More Success: 4 Principles to Reduce Cognitive Load in Forms
https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/

Nielsen Norman Group
Conversion Rate: Definition as Used in UX and Web Analytics
https://www.nngroup.com/articles/conversion-rates/

Baymard Institute
Ecommerce UX Research & Best Practice Guidelines
https://baymard.com/

Dr. Robert Cialdini
Seven Principles of Persuasion
https://www.influenceatwork.com/7-principles-of-persuasion/
```

---

## 23. Final Architecture Summary

The Foresight website should use three core pages, one global header system, and one global footer system:

```text
index.html
why-now.html
services.html
global header
global footer
```

The information flow should move from clarity, to urgency, to service explanation, to conversion.

The site should be psychologically structured around cognitive ease, authority, urgency, relevance, and low-friction commitment. It should feel like a serious policy advisory firm, not a generic AI SaaS website.

The technical structure should use HTML, CSS, JavaScript, and JSON. JSON should hold content that may change, especially AI legislation and policy intelligence updates. The policy news section should display one current article and three archived articles below it, preparing the site for future automation without exceeding the current static website scope.
