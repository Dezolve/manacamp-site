export const legalLastUpdated = "March 1, 2025";

export const privacySections = [
  {
    id: "privacy-collect",
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as:
• Account information (name, email address, password)
  • Messages, uploads, profile details, and other content you choose to add
  • Payment information for paid services, when applicable, handled by our payment providers
• Communications with our support team

We also collect automatically:
• Device information (OS, app version)
• Usage analytics (features used, session duration)
• Crash reports and performance data`,
  },
  {
    id: "privacy-use",
    title: "How We Use Your Information",
    content: `We use your information to:
• Provide, maintain, and improve the App
• Process transactions and send related information
  • Sync supported account data across devices
• Send you technical notices and support messages
• Respond to your comments and questions
• Analyze usage to improve features

We do not sell your personal information to third parties.`,
  },
  {
    id: "privacy-sharing",
    title: "Information Sharing",
    content: `We may share your information with:
• Service providers who assist in our operations (cloud hosting, analytics)
• Law enforcement when required by law

All third-party service providers are bound by confidentiality agreements and may only process your data as directed by us.`,
  },
  {
    id: "privacy-security",
    title: "Data Security",
    content: `We use administrative, technical, and organizational measures designed to protect your information.

No system is completely secure. We encourage you to use a strong, unique password for your account and to protect access to your devices.`,
  },
  {
    id: "privacy-rights",
    title: "Your Rights",
    content: `Depending on your location, you may have rights to:
• Access the personal information we hold about you
• Correct inaccurate information
• Request deletion of your account and data
• Object to or restrict processing of your information
• Portability of your data

To exercise these rights, contact us at privacy@manacamp.app.`,
  },
] as const;

export const guidelineSections = [
  {
    id: "intro",
    title: "1. Our Goal",
    content: `ManaCamp is built for real-time communities, channels, direct messages, voice, video, and shared spaces. We want it to feel social, expressive, and alive — without becoming hostile, unsafe, abusive, or exploitative.

These Community Guidelines explain what is expected on ManaCamp and what is not allowed. They apply across public spaces, private spaces, profiles, room and channel names, messages, and other user-generated content.`,
  },
  {
    id: "be-respectful",
    title: "2. Be Respectful",
    content: `Treat other people like people.

You can disagree, joke around, compete, and speak casually. But you may not use ManaCamp to harass, intimidate, target, or degrade others. Repeated abuse, dogpiling, humiliation, or severe personal attacks are not allowed.`,
  },
  {
    id: "not-allowed",
    title: "3. What Is Not Allowed",
    content: `The following content and behavior are not allowed on ManaCamp:
• Harassment, bullying, or severe targeted abuse
• Hate speech, slurs, or dehumanizing content targeting protected groups
• Threats of violence or encouragement of serious harm
• Sexual exploitation, sexual abuse, coercive sexual threats, or exploitative sexual content
• Any sexual content involving minors
• Impersonation, phishing, scams, spam, or fraud
• Attempts to evade moderation, blocking, bans, or other safety systems
• Illegal activity or content that violates the rights of others

This list is not exhaustive. If conduct creates a meaningful safety risk or makes ManaCamp unsafe for others, we may act on it.`,
  },
  {
    id: "public-vs-private",
    title: "4. Public Spaces vs. Private Spaces",
    content: `ManaCamp does not try to police ordinary adult language or casual swearing. But public and discoverable spaces may be held to a stricter standard than private conversations.

That means some content that crosses into harassment, hate, threats, exploitative sexual content, or obvious scam behavior may be filtered or removed more aggressively in public spaces.`,
  },
  {
    id: "names-profiles",
    title: "5. Usernames, Profiles, and Community Naming",
    content: `The rules apply to more than messages.

Usernames, display names, bios, statuses, room names, channel names, and group names must not include:
• Slurs or hateful content
• Threatening language
• Exploitative sexual language
• Severe targeted abuse
• Scam, phishing, or impersonation signals`,
  },
  {
    id: "reporting",
    title: "6. Reporting and Blocking",
    content: `If you see content or behavior that seems abusive, unsafe, exploitative, or otherwise inappropriate, use the in-app reporting tools where available.

If another user is bothering you, use blocking and related safety controls where available. Blocking does not excuse abusive behavior by the blocked user; we may still review and act on reported conduct.`,
  },
  {
    id: "enforcement",
    title: "7. How Enforcement Works",
    content: `ManaCamp may use automated safety systems, human moderation, or both to review content and conduct.

Depending on the situation, we may:
• Remove content
• Restrict visibility or access
• Limit features
• Suspend accounts
• Permanently ban accounts

We may act on reports, clear policy violations, repeated abuse, safety risks, or attempts to evade enforcement.`,
  },
  {
    id: "good-faith",
    title: "8. Use ManaCamp in Good Faith",
    content: `Do not weaponize reporting tools, impersonate others, manipulate safety systems, or create alternate accounts to avoid enforcement.

Use ManaCamp in good faith, respect boundaries, and help keep shared spaces usable for everyone.`,
  },
  {
    id: "contact",
    title: "9. Questions",
    content: `If you have questions about these Community Guidelines, contact:

legal@manacamp.app`,
  },
] as const;