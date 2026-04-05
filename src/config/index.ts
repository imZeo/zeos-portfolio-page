import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Zoard Mano Csoltai (Zeo) | TechOps, Identity & Automation",
  author: "Zoard Mano Csoltai",
  description:
    "Senior TechOps Engineer in Copenhagen leading identity, access, fleet, and internal automation at scale.",
  lang: "en",
  siteLogo: "/favicon.svg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Work", href: "#projects" },
    { text: "Skills", href: "#about" },
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
    name: "Zoard Mano Csoltai (Zeo)",
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
      linkSource:
        "https://www.notion.so/How-Pleo-approaches-role-based-access-control-258988e2bb628024a879f044ddad773f?pvs=21",
    },
    {
      name: "GitHub Governance Through Identity Automation",
      summary:
        "Synced directory groups into GitHub teams, reviewer pools, and CODEOWNERS so permissions stay aligned with the actual org.",
      details: [
        "Removed recurring manual administration around team membership and repository ownership.",
        "Made engineering access governance more reliable by tying it directly to the source of truth for identity.",
      ],
      linkSource:
        "https://www.notion.so/Using-Okta-to-Automate-GitHub-Teams-925fef5ecb00444b85fc20827c12acc7?pvs=21",
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
      "Identity and Access: Okta, SSO (OIDC/SAML), SCIM, RBAC, Okta Workflows",
      "Automation and IaC: Python, webhooks, REST APIs, Terraform (HCL), OpenTofu",
      "SaaS and Tooling: Slack Enterprise Grid, Google Workspace, GitHub Enterprise, Greenhouse, NetSuite, Notion, Airtable",
      "Operations and Practice: macOS fleet management, Jamf Pro, Kandji, OS update policy design, zero-touch people journey automations, plain-English documentation, ISO 27001 audit readiness",
    ],
  },
};
