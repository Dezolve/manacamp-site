export const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I download ManaCamp for Windows?",
        a: "Visit our homepage and click the 'Download for Windows' button, or go directly to /download. The installer will guide you through the setup process. ManaCamp requires Windows 10 or 11 (64-bit).",
      },
      {
        q: "Is ManaCamp free to use?",
        a: "ManaCamp has a free core experience. Premium plans include advanced features like Bots, Groups, and 1080p screen share, with additional premium tools over time.",
      },
      {
        q: "Is ManaCamp available on iOS?",
        a: "Yes. ManaCamp is available on the App Store for iPhone and iPad: https://apps.apple.com/us/app/manacamp/id6761014896",
      },
    ],
  },
  {
    category: "Account & Sync",
    questions: [
      {
        q: "How do I create an account?",
        a: "Open ManaCamp and click 'Create Account'. You can sign up with your email address or use Google/Apple sign-in for faster access.",
      },
      {
        q: "How does cloud sync work?",
        a: "When you're signed in, ManaCamp keeps your account state, settings, and supported activity in sync so you can pick up where you left off on available platforms.",
      },
      {
        q: "Can I use ManaCamp on multiple devices?",
        a: "Yes. Your account syncs across your devices so you can seamlessly switch between Windows and iOS.",
      },
    ],
  },
  {
    category: "Communities & Chats",
    questions: [
      {
        q: "How do channels and DMs work?",
        a: "Channels keep shared conversations organized by topic, while DMs let you move into one-on-one or small-group chats without leaving the app.",
      },
      {
        q: "Can I use bots in my space?",
        a: "Yes. Bots are available as a Premium feature, alongside other advanced tools like Groups and 1080p screen share.",
      },
      {
        q: "How do I know who's online or active?",
        a: "Presence and activity indicators help you see who's around, who's active, and when a session is already happening so it's easy to jump in.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "The app won't start on Windows. What should I do?",
        a: "First, make sure you're running Windows 10 or 11 (64-bit). Try right-clicking the installer and selecting 'Run as administrator'. If the issue persists, contact our support team.",
      },
      {
        q: "My messages or activity aren't updating. How do I fix this?",
        a: "Check your connection, make sure you're still signed in, and restart the app. If the issue continues, contact support with your Windows version and what you were doing when it happened.",
      },
      {
        q: "How do I reset my password?",
        a: "On the login screen, click 'Forgot Password' and enter your email address. You'll receive a password reset link within a few minutes.",
      },
    ],
  },
] as const;
