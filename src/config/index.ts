import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Zoárd Manó Csoltai | TechOps, Identity & Automation",
  author: "Zoárd Manó Csoltai",
  description:
    "Senior TechOps Engineer in Copenhagen leading identity, access, fleet, and internal automation at scale.",
  lang: "en",
  siteLogo: "/favicon.svg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Work", href: "#projects" },
    { text: "Skills", href: "#about" },
    { text: "Writing", href: "/writing" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:hello@zmcsoltai.com" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/zmcsoltai/" },
    { text: "Website", href: "https://zmcsoltai.com" },
  ],
  socialImage: "/favicon.svg",
  canonicalURL: "https://zmcsoltai.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Zoárd Manó Csoltai",
    specialty: "Internal Tech and Identity Engineering at Scale",
    summary:
      "Self-taught TechOps engineer leading identity and internal technology automation at a regulated fintech. I design and maintain compliant systems that reduce user friction across SSO, role-based access control, fleet management, and identity-driven automations.",
    email: "hello@zmcsoltai.com",
  },
  experience: [
    {
      company: "Pleo",
      position: "Senior TechOps Engineer",
      startDate: "Aug 2021",
      endDate: "Present",
      summary: [
        "Own identity, access, fleet, and automation for 1,000+ users in a product-led fintech, partnering closely with People, SRE, DevX, and People Tech.",
        "Led company-wide authentication and SSO rollout, using convention-based Okta group minting to push access into Slack, Google, and GitHub automatically.",
        "Migrated a 1,000+ macOS fleet from Jamf to Kandji, reducing manual upkeep by roughly 40% while aligning device posture with zero-trust and ISO 27001 requirements.",
        "Built zero-touch onboarding automations that provision accounts and devices so new joiners are productive on day one with minimal IT intervention.",
        "Represented TechOps during ISO 27001 audit work, walking auditors through lifecycle controls and evidence that supported Pleo's first certification.",
      ],
    },
    {
      company: "The Olive Kitchen & Bar",
      position: "Restaurant Manager",
      startDate: "2017",
      endDate: "2021",
      summary: [
        "Managed a 20-person team and ran daily operations with a strong focus on service quality, coordination, and accountability.",
        "Built the operational judgment and people skills that still shape how I lead cross-functional technical work today.",
      ],
    },
  ],
  projects: [
    {
      name: "Role-Based Access Control at Pleo",
      summary:
        "Built a convention-driven RBAC model in Okta so access follows organization structure instead of manual ticket work.",
      details: [
        "Designed group minting patterns that automatically fan out access to Slack, Google Workspace, and GitHub.",
        "Reduced access friction for employees while improving consistency and auditability for security stakeholders.",
      ],
      linkSource: "/writing/pleo-rbac",
      linkLabel: "Read Article",
    },
    {
      name: "GitHub Governance Through Identity Automation",
      summary:
        "Synced directory groups into GitHub teams, reviewer pools, and CODEOWNERS so permissions stay aligned with the actual org.",
      details: [
        "Removed recurring manual administration around team membership and repository ownership.",
        "Made engineering access governance more reliable by tying it directly to the source of truth for identity.",
      ],
      linkSource: "/writing/okta-github-teams",
      linkLabel: "Read Article",
    },
    {
      name: "Zero-Touch Onboarding and Fleet Migration",
      summary:
        "Connected onboarding automation, device provisioning, and policy design into a tighter internal platform experience.",
      details: [
        "Created a day-one-ready onboarding flow where automations handle account provisioning and most device setup steps.",
        "Paired a large Jamf-to-Kandji migration with safer defaults and staged OS update policies tied to zero-trust controls.",
      ],
    },
  ],
  about: {
    description:
      "I work at the intersection of internal tooling, identity, and practical operations. The through-line in my work is reducing friction without losing control: building systems that are easier for employees to use, easier for auditors to understand, and easier for teams to maintain.",
    principles: [
      {
        title: "Identity and Access",
        items: [
          "Okta",
          "SSO (OIDC/SAML)",
          "SCIM",
          "RBAC",
          "Okta Workflows",
        ],
      },
      {
        title: "Automation and IaC",
        items: [
          "Python",
          "Webhooks",
          "REST APIs",
          "Terraform (HCL)",
          "OpenTofu",
        ],
      },
      {
        title: "SaaS and Tooling",
        items: [
          "Slack Enterprise Grid",
          "Google Workspace",
          "GitHub Enterprise",
          "Greenhouse",
          "NetSuite",
          "Notion",
          "Airtable",
        ],
      },
      {
        title: "Operations and Practice",
        items: [
          "macOS fleet management",
          "Jamf Pro",
          "Kandji",
          "OS update policy design",
          "Zero-touch people journey automations",
          "Plain-English documentation",
          "ISO 27001 audit readiness",
        ],
      },
    ],
  },
};
