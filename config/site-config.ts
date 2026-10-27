/**
 * PeakForm Site Configuration & Data Layer
 * Source of truth: docs/code.html & docs/PeakForm 02 · Design System.pdf
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  tag?: string;
  width?: number;
  height?: number;
}

export interface BrandConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  skipLink: {
    text: string;
    href: string;
  };
  nav: NavLink[];
  cta: {
    label: string;
    href: string;
  };
}

export interface HeroConfig {
  eyebrow: string;
  headline: {
    start: string;
    highlight: string;
    end: string;
  };
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  note: string;
  image: ImageAsset;
}

export interface StatItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface StatsConfig {
  items: StatItem[];
}

export interface ProgramItem {
  number: string;
  title: string;
  targetAudience: string;
  description: string;
  duration: string;
  href: string;
}

export interface ProgramsConfig {
  sectionNumber: string;
  sectionTitle: string;
  heading: string;
  description: string;
  items: ProgramItem[];
}

export interface CoachPrinciple {
  number: string;
  text: string;
}

export interface AboutConfig {
  sectionNumber: string;
  sectionTitle: string;
  heading: string;
  paragraphs: string[];
  principles: CoachPrinciple[];
  credentials: string;
  coachImage: ImageAsset;
  photoBandImage: ImageAsset;
}

export interface MetricEntry {
  label: string;
  before: string;
  after: string;
}

export interface ResultEntry {
  client: string;
  roleDuration: string;
  goal: string;
  metrics: MetricEntry[];
}

export interface ResultsConfig {
  sectionNumber: string;
  sectionTitle: string;
  heading: string;
  description: string;
  entries: ResultEntry[];
  disclaimer: string;
}

export interface PricingTier {
  tierNumber: string;
  subtag: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  highlighted: boolean;
  topTag?: string;
}

export interface PricingConfig {
  sectionNumber: string;
  sectionTitle: string;
  heading: string;
  description: string;
  billingNote: string;
  guaranteeNote: string;
  tiers: PricingTier[];
}

export interface TestimonialItem {
  tag: string;
  quote: string;
  author: {
    initials: string;
    name: string;
    role: string;
  };
}

export interface TestimonialsConfig {
  sectionNumber: string;
  sectionTitle: string;
  featured: TestimonialItem;
  secondary: TestimonialItem[];
  disclaimer: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface FaqConfig {
  sectionNumber: string;
  sectionTitle: string;
  heading: string;
  description: string;
  items: FaqItem[];
}

export interface FinalCtaConfig {
  heading: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface ContactStep {
  step: number;
  title: string;
  description: string;
}

export interface GoalOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  sectionNumber: string;
  sectionTitle: string;
  heading: string;
  description: string;
  web3formsAccessKey: string | undefined;
  stepsHeading: string;
  steps: ContactStep[];
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    goalLabel: string;
    goalOptions: GoalOption[];
    messageLabel: string;
    messagePlaceholder: string;
    messageMaxLength: number;
    submitButtonText: string;
    privacyNote: string;
    successBanner: {
      title: string;
      message: string;
    };
  };
}

export interface FooterChannel {
  label: string;
  href: string;
  isExternal?: boolean;
  isEmail?: boolean;
  ariaLabel?: string;
}

export interface FooterConfig {
  wordmark: string;
  bio: string;
  programsTitle: string;
  programLinks: NavLink[];
  navigationTitle: string;
  navLinks: NavLink[];
  channelsTitle: string;
  channels: FooterChannel[];
  copyright: string;
  disclaimer: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  hero: HeroConfig;
  stats: StatsConfig;
  programs: ProgramsConfig;
  about: AboutConfig;
  results: ResultsConfig;
  pricing: PricingConfig;
  testimonials: TestimonialsConfig;
  faq: FaqConfig;
  finalCta: FinalCtaConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "PEAKFORM",
    title: "PeakForm — High-Performance Athletic Coaching",
    tagline: "High-performance athletic coaching and performance diagnostics built on Swiss precision.",
    description: "Online strength coaching built for longevity, durability, and real-life schedules.",
    skipLink: {
      text: "Skip to main content ↗",
      href: "#content-start",
    },
    nav: [
      { label: "Programs", href: "#programs" },
      { label: "Coach", href: "#coach" },
      { label: "Results", href: "#results" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: {
      label: "Book intro call",
      href: "#contact",
    },
  },

  hero: {
    eyebrow: "ONLINE STRENGTH COACHING · OVER 30",
    headline: {
      start: "Stronger in ",
      highlight: "3",
      end: " sessions a week.",
    },
    description:
      "Personalized strength training built around careers, kids, and old injuries. Direct 1:1 programming, video analysis, and clear weekly accountability.",
    primaryCta: {
      text: "Book a free intro call ↗",
      href: "#contact",
    },
    secondaryCta: {
      text: "See the programs ↓",
      href: "#programs",
    },
    note: "No card. No sales script. 20 minutes direct with head coach.",
    image: {
      src: "/images/hero-lifter.jpg",
      alt: "Monochromatic black and white editorial photography of an athletic lifter gripping a heavy steel barbell with chalked hands inside a stark, minimalist training studio. Raw contrast, deep industrial shadows, crisp muscular focus, and architectural Swiss light precision.",
      tag: "[■ WEEK 08 — SQUAT · 82.5 KG × 5]",
      width: 800,
      height: 1000,
    },
  },

  stats: {
    items: [
      {
        value: "100%",
        label: "1:1 COACH-WRITTEN PLANS",
      },
      {
        value: "3×",
        label: "WEEKLY SESSIONS AVERAGE",
      },
      {
        value: "48 HR",
        label: "FORM CHECK TURNAROUND",
      },
      {
        value: "0",
        label: "NONSENSE OR DIET DOGMA",
        highlight: true,
      },
    ],
  },

  programs: {
    sectionNumber: "02",
    sectionTitle: "PROGRAMS",
    heading: "Four ways to start.",
    description:
      "Every track is delivered through our private portal with custom load-velocity targets, video-linked cues, and proactive load management.",
    items: [
      {
        number: "01",
        title: "Strength Foundations",
        targetAudience: "For: first-timers, restarters",
        description:
          "Learn the barbell lifts safely with deliberate progressive overload and joint-friendly assistance volume.",
        duration: "12 wks",
        href: "#pricing",
      },
      {
        number: "02",
        title: "Fat Loss, Minus the Misery",
        targetAudience: "For: busy professionals",
        description:
          "Preserve lean muscle while dropping body fat without extreme calorie cuts, endless cardio, or dining restrictions.",
        duration: "16 wks",
        href: "#pricing",
      },
      {
        number: "03",
        title: "Longevity & Pain-Free Movement",
        targetAudience: "For: masters athletes, desk workers",
        description:
          "Fix nagging joint tweaks and restore hip, shoulder, and spinal durability through full-range loaded mobility.",
        duration: "Ongoing",
        href: "#pricing",
      },
      {
        number: "04",
        title: "Custom 1:1 Coaching",
        targetAudience: "For: specific athletic or physique goals",
        description:
          "Full individualized programming, daily communication, and weekly video call with complete lifestyle tailoring.",
        duration: "Monthly",
        href: "#pricing",
      },
    ],
  },

  about: {
    sectionNumber: "03",
    sectionTitle: "THE COACH",
    heading: "Coaching that respects your calendar and your joints.",
    paragraphs: [
      "Most online fitness advice is created by 22-year-olds who sleep nine hours a night and have never worked a 50-hour week. At PeakForm, programming is rooted in exercise mechanics, load autocalibration, and real-world sustainability.",
      "We eliminate training junk. Every set in your logbook serves a purpose: elevating lean force production, protecting connective tissue, and keeping you resilient outside the gym.",
    ],
    principles: [
      {
        number: "01",
        text: "Weekly adjustments based on recovery logs and video form submissions.",
      },
      {
        number: "02",
        text: "Zero cookie-cutter templates; load and volume autoregulated for fatigue.",
      },
      {
        number: "03",
        text: "Practical nutrition targets that don't isolate you from family dinners.",
      },
    ],
    credentials: "CSCS · USAW LVL 2 · 12 YEARS EXPERIENCE · 400+ ATHLETES COACHED",
    coachImage: {
      src: "/images/coach-portrait.jpg",
      alt: "Monochrome studio portrait of a serious head strength coach in a dark athletic tee, standing against a clean concrete wall. Direct confident gaze, sharp directional studio lighting, zero decorative softness, high contrast Swiss visual aesthetic.",
      width: 800,
      height: 1000,
    },
    photoBandImage: {
      src: "/images/weight-plates.jpg",
      alt: "Wide panoramic horizontal shot of calibrated cast iron Olympic weight plates racked along a heavy steel barbell stand in an empty, quiet strength training warehouse. Stark overhead lighting, deep shadows, crisp industrial floor texture, monochrome black and white palette.",
      width: 1440,
      height: 617,
    },
  },

  results: {
    sectionNumber: "04",
    sectionTitle: "CLIENT RESULTS",
    heading: "Numbers, not before-and-after photos.",
    description:
      "Lighting tricks and dehydrated selfies don't measure capability. Here is audited performance data from busy clients with demanding careers.",
    entries: [
      {
        client: "Priya S., 38",
        roleDuration: "Product Manager · 16 Weeks",
        goal: "Goal: Carry toddler without back strain",
        metrics: [
          {
            label: "TRAP-BAR DEADLIFT",
            before: "40 KG",
            after: "85 KG",
          },
          {
            label: "SESSIONS PER WEEK",
            before: "1",
            after: "3 DEDICATED",
          },
          {
            label: "RESTING HEART RATE",
            before: "76",
            after: "64 BPM",
          },
        ],
      },
      {
        client: "Marcus T., 44",
        roleDuration: "Architecture Director · 24 Weeks",
        goal: "Goal: Desk career posture & athletic baseline",
        metrics: [
          {
            label: "BACK SQUAT",
            before: "60 KG",
            after: "115 KG",
          },
          {
            label: "BODY WEIGHT COMP",
            before: "94 KG",
            after: "86 KG",
          },
          {
            label: "OVERHEAD PRESS",
            before: "35 KG",
            after: "52.5 KG",
          },
        ],
      },
      {
        client: "Elena R., 31",
        roleDuration: "Software Engineer · 12 Weeks",
        goal: "Goal: Complete first unassisted pull-up",
        metrics: [
          {
            label: "STRICT PULL-UPS",
            before: "0",
            after: "5 REPS",
          },
          {
            label: "BARBELL HIP THRUST",
            before: "65 KG",
            after: "130 KG",
          },
          {
            label: "ANKLE MOBILITY ROM",
            before: "LIMITED",
            after: "FULL DEPTH",
          },
        ],
      },
    ],
    disclaimer: "Sample content for portfolio demonstration. Individual results vary.",
  },

  pricing: {
    sectionNumber: "05",
    sectionTitle: "PRICING",
    heading: "Clear monthly rates. No contracts.",
    description: "No initiation fees. Change tracks or pause whenever life demands it.",
    billingNote: "Billed monthly via Stripe. Cancel anytime with 7 days notice.",
    guaranteeNote:
      "14-day full satisfaction guarantee. All cancellations processed instantly without friction.",
    tiers: [
      {
        tierNumber: "TIER 01",
        subtag: "SELF-PACED",
        name: "The Blueprint",
        price: "$149",
        period: "/ mo",
        description: "Self-guided structured program with weekly asynchronous check-in.",
        features: [
          "3-day structured mesocycle",
          "PeakForm logging mobile app",
          "Weekly form-check submission",
          "Monthly load recalibration",
        ],
        cta: {
          text: "Get the Blueprint",
          href: "#contact",
        },
        highlighted: false,
      },
      {
        tierNumber: "TIER 02",
        subtag: "FULL 1:1 COACHING",
        name: "Dedicated 1:1",
        price: "$289",
        period: "/ mo",
        description:
          "Full personal programming, asynchronous video review, bi-weekly check-ins.",
        features: [
          "100% custom calendarized schedule",
          "48-hr video critique turnaround",
          "Bi-weekly live video consults",
          "Daily WhatsApp coach access",
          "Custom travel workout swaps",
        ],
        cta: {
          text: "Start coaching",
          href: "#contact",
        },
        highlighted: true,
        topTag: "[MOST CHOSEN]",
      },
      {
        tierNumber: "TIER 03",
        subtag: "HIGH TOUCH",
        name: "Elite Mentorship",
        price: "$449",
        period: "/ mo",
        description:
          "Comprehensive high-touch training, daily messaging, nutrition protocol.",
        features: [
          "Everything in Dedicated 1:1",
          "Precision macronutrient blueprints",
          "Weekly 30-min strategy calls",
          "Direct voice-note coach access",
        ],
        cta: {
          text: "Apply for 1:1",
          href: "#contact",
        },
        highlighted: false,
      },
    ],
  },

  testimonials: {
    sectionNumber: "06",
    sectionTitle: "ATHLETE VOICES",
    featured: {
      tag: "CHECK-IN · WEEK 18",
      quote:
        "“PeakForm gave me back the physical confidence I lost sitting behind two monitors for ten years. No fluff, just heavy compound lifts that work.”",
      author: {
        initials: "DM",
        name: "David Miller",
        role: "VP of Engineering",
      },
    },
    secondary: [
      {
        tag: "CHECK-IN · WEEK 06",
        quote:
          "“The video form critiques alone are worth triple the subscription. Fixed my knee cave in two weeks.”",
        author: {
          initials: "SL",
          name: "Sarah Lin",
          role: "Startup Founder",
        },
      },
      {
        tag: "CHECK-IN · WEEK 12",
        quote:
          "“First coach who didn't try to put me on chicken and broccoli. Strength up 40% while traveling weekly.”",
        author: {
          initials: "JK",
          name: "James Kwon",
          role: "Product Designer",
        },
      },
    ],
    disclaimer: "Sample content for portfolio demonstration.",
  },

  faq: {
    sectionNumber: "07",
    sectionTitle: "FAQ",
    heading: "Common questions before starting.",
    description:
      "Direct answers regarding gym requirements, time commitments, and injury management.",
    items: [
      {
        question: "Do I need access to a commercial gym?",
        answer:
          "A basic commercial gym or home gym with a barbell, rack, plates, adjustable bench, and pull-up station is ideal. If you only have kettlebells or dumbbells, we can build custom programming for your equipment inventory during the initial onboarding assessment.",
        defaultOpen: true,
      },
      {
        question: "How do the weekly video check-ins work?",
        answer:
          "You record your top working sets on your phone and upload them to our secure client portal. Within 48 hours, I return an annotated video with voiceover feedback highlighting bar path, joint angles, tempo, and cues for the following week.",
      },
      {
        question: "What if I have an old shoulder or lumbar disc issue?",
        answer:
          "Over 70% of our clients enter with prior joint irritations. We adjust exercise variations (e.g., trap-bar deadlifts instead of conventional, safety squat bars, or floor presses) to load the target musculature without flaring joint inflammation.",
      },
      {
        question: "How much time do workouts take each week?",
        answer:
          "Workouts are designed around three 45-to-60-minute sessions per week. We program precise warm-ups and supersets to maximize efficiency so you aren't lingering in the weight room.",
      },
      {
        question: "Can I pause my coaching if I travel for work?",
        answer:
          "Yes. You can freeze your account for up to 30 continuous days per year. If traveling for short stints, we simply push hotel-gym or travel deload workouts to your app.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "All memberships are billed on a flexible 30-day recurring basis with zero lock-in contracts. You can cancel directly from your profile settings with 7 days' advance notice before renewal.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to stop guessing in the weight room?",
    description:
      "Grab a 20-minute intro call. We'll map your goals, current baseline, and the exact roadmap.",
    cta: {
      text: "Book your intro call ↗",
      href: "#contact",
    },
  },

  contact: {
    sectionNumber: "09",
    sectionTitle: "BOOK A CALL",
    heading: "Tell me where you are.",
    description:
      "No automated emails, no junior intake coordinators. Your message goes directly to my screen.",
    web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    stepsHeading: "WHAT HAPPENS NEXT",
    steps: [
      {
        step: 1,
        title: "I read your message",
        description:
          "Reviewing your athletic history, past injuries, and current schedule.",
      },
      {
        step: 2,
        title: "I reply in 24 hours",
        description: "Direct email response with available intro call slots.",
      },
      {
        step: 3,
        title: "We talk for 20 minutes",
        description: "A focused discussion to see if we're an authentic fit.",
      },
    ],
    form: {
      nameLabel: "Full Name *",
      namePlaceholder: "e.g. Alex Morgan",
      emailLabel: "Email Address *",
      emailPlaceholder: "alex@company.com",
      goalLabel: "Primary Goal *",
      goalOptions: [
        {
          value: "stronger",
          label: "Get stronger (barbell compounds)",
        },
        {
          value: "fat-loss",
          label: "Lose fat & maintain lean muscle",
        },
        {
          value: "mobility",
          label: "Move without nagging joint pain",
        },
        {
          value: "not-sure",
          label: "Not sure yet / Need guidance",
        },
      ],
      messageLabel: "Current Situation & Obstacles (Optional)",
      messagePlaceholder:
        "Share your current training, injuries, or what has held you back recently...",
      messageMaxLength: 600,
      submitButtonText: "Send message ↗",
      privacyNote: "Your email is never shared or added to marketing blasts.",
      successBanner: {
        title: "INQUIRY RECEIVED",
        message:
          "Thank you. I will review your notes and reply within 24 hours with schedule options.",
      },
    },
  },

  footer: {
    wordmark: "PEAKFORM",
    bio: "Online strength coaching built for longevity, durability, and real-life schedules.",
    programsTitle: "Programs",
    programLinks: [
      { label: "Foundations (12 Wks)", href: "#programs" },
      { label: "Fat Loss Protocol (16 Wks)", href: "#programs" },
      { label: "Pain-Free Durability", href: "#programs" },
      { label: "1:1 Dedicated Coaching", href: "#programs" },
    ],
    navigationTitle: "Navigation",
    navLinks: [
      { label: "Coach Philosophy", href: "#coach" },
      { label: "Audited Results", href: "#results" },
      { label: "Pricing Matrix", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Direct Contact", href: "#contact" },
    ],
    channelsTitle: "Channels",
    channels: [
      {
        label: "Instagram ↗",
        href: "https://www.instagram.com/rajan_yadav_211/",
        isExternal: true,
        ariaLabel: "PeakForm on Instagram",
      },
      {
        label: "YouTube ↗",
        href: "https://www.youtube.com/channel/UCTk2HC8LRIhBBlBml49bBng/",
        isExternal: true,
        ariaLabel: "PeakForm on YouTube",
      },
      ...(process.env.NEXT_PUBLIC_CONTACT_EMAIL
        ? [
            {
              label: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
              href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
              isEmail: true,
              ariaLabel: `Email PeakForm at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
            },
          ]
        : []),
    ],
    copyright: "© 2025 PeakForm Coaching. All rights reserved.",
    disclaimer: "Sample content for portfolio demonstration.",
  },
};

export default siteConfig;
