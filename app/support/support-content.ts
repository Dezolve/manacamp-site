export type SupportCategory = {
  slug: string;
  title: string;
  description: string;
  icon: "compass" | "user" | "messages" | "headphones" | "shield" | "wrench";
};

export type SupportArticleSection = {
  heading?: string;
  paragraphs?: readonly string[];
  steps?: readonly string[];
  bullets?: readonly string[];
  note?: string;
};

export type SupportArticle = {
  slug: string;
  title: string;
  description: string;
  category: SupportCategory["slug"];
  keywords: readonly string[];
  popular?: boolean;
  updated: string;
  sections: readonly SupportArticleSection[];
};

export const supportCategories: readonly SupportCategory[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Install ManaCamp, create your account, and find your way around.",
    icon: "compass",
  },
  {
    slug: "account-profile",
    title: "Account & Profile",
    description: "Manage sign-in, your profile, notifications, and connected devices.",
    icon: "user",
  },
  {
    slug: "communities-messaging",
    title: "Communities & Messaging",
    description: "Learn about spaces, channels, direct messages, and presence.",
    icon: "messages",
  },
  {
    slug: "voice-video-sessions",
    title: "Voice, Video & Sessions",
    description: "Get together live with voice, video, screen sharing, and sessions.",
    icon: "headphones",
  },
  {
    slug: "safety-privacy",
    title: "Safety & Privacy",
    description: "Control your experience, report problems, and keep your account safe.",
    icon: "shield",
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description: "Quick fixes for connection, audio, sync, and installation issues.",
    icon: "wrench",
  },
] as const;

export const supportArticles: readonly SupportArticle[] = [
  {
    slug: "welcome-to-manacamp",
    title: "Welcome to ManaCamp",
    description: "A quick tour of the places, conversations, and live activity that make up ManaCamp.",
    category: "getting-started",
    keywords: ["beginner", "tour", "home", "channels", "presence"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        paragraphs: [
          "ManaCamp is a place for communities to stay connected without losing the feeling that people are actually there. Channels keep conversation organized, direct messages make side conversations easy, and presence helps you see where activity is happening now.",
        ],
      },
      {
        heading: "The main parts of ManaCamp",
        bullets: [
          "Spaces bring a community and its channels together.",
          "Channels organize ongoing conversations by topic.",
          "Direct messages are for one-to-one and small-group conversations.",
          "Voice, video, screen sharing, and sessions help people gather live.",
          "Presence indicators show who is around and where activity is happening.",
        ],
      },
      {
        heading: "A good first five minutes",
        steps: [
          "Finish your profile so people can recognize you.",
          "Open a space and browse its channels.",
          "Send a message or reaction in a channel.",
          "Check the presence indicators to see who is active.",
          "Join a live conversation when you are ready.",
        ],
      },
    ],
  },
  {
    slug: "download-and-install-manacamp",
    title: "Download and install ManaCamp",
    description: "Install the Windows app or get ManaCamp for iPhone and iPad.",
    category: "getting-started",
    keywords: ["download", "install", "windows", "ios", "iphone", "ipad"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        heading: "Windows",
        steps: [
          "Open the ManaCamp download page and choose Download for Windows.",
          "Open the downloaded installer.",
          "Follow the prompts, then launch ManaCamp and sign in.",
        ],
        note: "ManaCamp supports 64-bit Windows 10 and Windows 11.",
      },
      {
        heading: "iPhone and iPad",
        steps: [
          "Open ManaCamp in the App Store.",
          "Tap Get, then complete the App Store confirmation.",
          "Open the app and sign in with your ManaCamp account.",
        ],
      },
      {
        heading: "Updates",
        paragraphs: [
          "Keep ManaCamp current for the latest fixes and compatibility improvements. On iOS, updates are managed through the App Store. The Windows app will guide you when a newer supported version is available.",
        ],
      },
    ],
  },
  {
    slug: "create-your-account",
    title: "Create your ManaCamp account",
    description: "Choose a sign-in method and set up the profile people will see.",
    category: "getting-started",
    keywords: ["sign up", "register", "google", "apple", "email", "profile"],
    updated: "2026-08-14",
    sections: [
      {
        steps: [
          "Open ManaCamp and choose Create Account.",
          "Continue with email or an available Google or Apple sign-in option.",
          "Follow the verification prompts for the method you selected.",
          "Add a display name and profile image so your community can recognize you.",
        ],
      },
      {
        heading: "Choose a sign-in method you can keep using",
        paragraphs: [
          "Use an email address or connected account you expect to retain. If you return on another device, use the same sign-in method to reach the same ManaCamp account.",
        ],
      },
    ],
  },
  {
    slug: "manage-your-profile",
    title: "Manage your profile",
    description: "Update how your name, image, and status appear to other people.",
    category: "account-profile",
    keywords: ["avatar", "display name", "profile picture", "status", "bio"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        paragraphs: [
          "Your profile helps people recognize you across spaces, channels, and direct messages. Open your account menu, choose your profile or account settings, and select the field you want to change.",
        ],
      },
      {
        heading: "Profile tips",
        bullets: [
          "Use a display name that people in your communities will recognize.",
          "Choose a clear profile image that still reads well at a small size.",
          "Use your status to set expectations when you are busy or stepping away.",
        ],
      },
    ],
  },
  {
    slug: "reset-your-password",
    title: "Reset your password",
    description: "Recover access when you cannot sign in with email and password.",
    category: "account-profile",
    keywords: ["forgot", "password", "login", "sign in", "reset", "email"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        steps: [
          "From the sign-in screen, choose Forgot Password.",
          "Enter the email address attached to your ManaCamp account.",
          "Open the reset email and follow its link.",
          "Create a new, unique password and sign in again.",
        ],
      },
      {
        heading: "If the email does not arrive",
        bullets: [
          "Check your spam, junk, and filtered mail folders.",
          "Confirm that the address is spelled correctly.",
          "Wait a few minutes before requesting another message.",
          "If you normally use Google or Apple, return and use that same sign-in option.",
        ],
      },
    ],
  },
  {
    slug: "use-manacamp-on-multiple-devices",
    title: "Use ManaCamp on multiple devices",
    description: "Move between Windows and iOS while keeping your account connected.",
    category: "account-profile",
    keywords: ["sync", "devices", "windows", "ios", "iphone", "account"],
    updated: "2026-08-14",
    sections: [
      {
        paragraphs: [
          "Sign in with the same ManaCamp account on each supported device. Your account and supported activity remain connected so you can move between Windows and iOS without creating a second identity.",
        ],
      },
      {
        heading: "If a device looks out of date",
        steps: [
          "Confirm both devices are online.",
          "Make sure both are signed in to the same account.",
          "Fully close and reopen ManaCamp on the device that is behind.",
          "Install any available ManaCamp update.",
        ],
      },
    ],
  },
  {
    slug: "channels-and-direct-messages",
    title: "Channels and direct messages",
    description: "Know when to use a shared channel and when to move into a DM.",
    category: "communities-messaging",
    keywords: ["channel", "dm", "message", "chat", "conversation", "space"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        heading: "Channels",
        paragraphs: [
          "Channels keep shared conversations organized around a topic, activity, or group. Use them when the conversation should remain discoverable to the people who share that space.",
        ],
      },
      {
        heading: "Direct messages",
        paragraphs: [
          "Direct messages are better for one-to-one conversations or a smaller side discussion. A DM does not replace a channel when the answer would help the wider community.",
        ],
      },
      {
        heading: "Keep conversations easy to follow",
        bullets: [
          "Choose the channel that best matches the topic.",
          "Keep related replies together when the interface offers a focused reply flow.",
          "Move personal or sensitive details out of a shared channel.",
          "Follow the rules of each community you join.",
        ],
      },
    ],
  },
  {
    slug: "understand-presence",
    title: "Understand presence and activity",
    description: "See who is around and find active conversations without hunting for them.",
    category: "communities-messaging",
    keywords: ["presence", "online", "active", "status", "activity"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        paragraphs: [
          "Presence is ManaCamp's way of making a digital community feel inhabited. It gives you lightweight signals about who is around and where live activity is happening, so joining in takes less coordination.",
        ],
      },
      {
        heading: "Use presence as an invitation, not a demand",
        bullets: [
          "An active indicator means someone may be available; it does not guarantee an immediate reply.",
          "A live activity indicator can help you discover a conversation already in progress.",
          "Set or update your own status when you want to clarify your availability.",
        ],
      },
    ],
  },
  {
    slug: "join-a-voice-or-video-conversation",
    title: "Join a voice or video conversation",
    description: "Connect live and check the essential controls before you jump in.",
    category: "voice-video-sessions",
    keywords: ["voice", "video", "camera", "microphone", "join", "call"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        steps: [
          "Open the space, channel, or session where the live conversation is happening.",
          "Choose Join and allow microphone or camera access if your device asks.",
          "Check your mute and camera state before speaking.",
          "Choose Leave when you are finished.",
        ],
      },
      {
        heading: "Before an important conversation",
        bullets: [
          "Use headphones when speakers could create an echo.",
          "Confirm the correct microphone and output device are selected.",
          "Close other apps that are heavily using your camera, microphone, or connection.",
        ],
      },
    ],
  },
  {
    slug: "share-your-screen",
    title: "Share your screen",
    description: "Show an app or your display while keeping private information out of view.",
    category: "voice-video-sessions",
    keywords: ["screen share", "stream", "window", "display", "present"],
    updated: "2026-08-14",
    sections: [
      {
        steps: [
          "Join a supported live conversation.",
          "Choose the screen-sharing control.",
          "Select the screen or app window you intend to share.",
          "Confirm the preview, then start sharing.",
          "Use Stop Sharing before opening anything private.",
        ],
      },
      {
        heading: "Share safely",
        bullets: [
          "Close password managers, private messages, and confidential documents first.",
          "Disable notification previews if they could expose personal information.",
          "Share a single application window when the rest of your desktop should stay private.",
        ],
      },
    ],
  },
  {
    slug: "sessions-overview",
    title: "Sessions overview",
    description: "Use sessions to give a live gathering a clearer purpose and place.",
    category: "voice-video-sessions",
    keywords: ["session", "event", "gather", "live", "activity"],
    updated: "2026-08-14",
    sections: [
      {
        paragraphs: [
          "Sessions help a community gather around a specific activity instead of treating every live conversation like an open-ended call. They make the purpose of the gathering easier to understand before someone joins.",
        ],
      },
      {
        heading: "Good uses for a session",
        bullets: [
          "A scheduled community discussion or watch party.",
          "A focused gaming, study, or coworking block.",
          "A support, onboarding, or question-and-answer gathering.",
          "A recurring activity that people should be able to recognize quickly.",
        ],
      },
    ],
  },
  {
    slug: "report-content-or-behavior",
    title: "Report content or behavior",
    description: "Flag something that may violate community rules or ManaCamp policies.",
    category: "safety-privacy",
    keywords: ["report", "flag", "abuse", "harassment", "moderation", "safety"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        paragraphs: [
          "If content or behavior appears to break a community's rules or ManaCamp's policies, use the reporting or moderation options available near that content. Include enough context for the report to be understood without adding unrelated personal information.",
        ],
      },
      {
        heading: "What helps a report",
        bullets: [
          "Identify the specific message, account, or behavior involved.",
          "Explain what happened in clear, factual language.",
          "Include the relevant time and community when possible.",
          "Avoid confronting someone if doing so could make the situation less safe.",
        ],
        note: "If someone is in immediate danger, contact local emergency services. ManaCamp support is not an emergency response service.",
      },
    ],
  },
  {
    slug: "protect-your-account",
    title: "Protect your ManaCamp account",
    description: "Use a few practical habits to reduce the risk of losing account access.",
    category: "safety-privacy",
    keywords: ["security", "password", "phishing", "account", "safe", "login"],
    updated: "2026-08-14",
    sections: [
      {
        bullets: [
          "Use a unique password that you do not reuse on other services.",
          "Do not share sign-in links, verification codes, or account credentials.",
          "Be suspicious of urgent messages asking you to download a file or sign in elsewhere.",
          "Keep your operating system and ManaCamp app up to date.",
          "Sign out of devices you no longer control.",
        ],
      },
      {
        heading: "If you think your account was compromised",
        steps: [
          "Reset your password from a device you trust.",
          "Secure the email or connected account you use to sign in.",
          "Review recent activity for changes you did not make.",
          "Contact ManaCamp support and describe what you observed.",
        ],
      },
    ],
  },
  {
    slug: "fix-microphone-or-audio-problems",
    title: "Fix microphone or audio problems",
    description: "Work through the most common causes of missing, quiet, or echoing audio.",
    category: "troubleshooting",
    keywords: ["microphone", "audio", "speaker", "echo", "quiet", "voice"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        heading: "Check the basics first",
        steps: [
          "Make sure you are not muted in ManaCamp or on the physical device.",
          "Confirm that ManaCamp is using the intended microphone and speakers.",
          "Check your operating system's microphone permission for ManaCamp.",
          "Disconnect and reconnect a headset or Bluetooth device.",
          "Leave and rejoin the conversation, then restart ManaCamp if needed.",
        ],
      },
      {
        heading: "If other people hear an echo",
        bullets: [
          "Use headphones instead of open speakers.",
          "Lower speaker volume and move the microphone farther from the speakers.",
          "Ask each person to check whether their microphone is capturing speaker output.",
        ],
      },
    ],
  },
  {
    slug: "fix-messages-or-presence-not-updating",
    title: "Fix messages or presence not updating",
    description: "Reconnect when conversations or activity indicators appear stuck.",
    category: "troubleshooting",
    keywords: ["sync", "messages", "presence", "offline", "connection", "stuck"],
    popular: true,
    updated: "2026-08-14",
    sections: [
      {
        steps: [
          "Confirm that your device has a stable internet connection.",
          "Move to another channel or screen, then return to the affected conversation.",
          "Fully close and reopen ManaCamp.",
          "Sign out and back in if the problem continues.",
          "Install any available ManaCamp update.",
        ],
      },
      {
        heading: "When contacting support",
        paragraphs: [
          "Include your platform, ManaCamp version if visible, the approximate time the issue began, and whether it affects every conversation or only one. Do not send your password or verification codes.",
        ],
      },
    ],
  },
  {
    slug: "windows-app-wont-open",
    title: "Windows app won't open",
    description: "Recover from an installation or launch problem on Windows 10 or 11.",
    category: "troubleshooting",
    keywords: ["windows", "install", "launch", "open", "crash", "installer"],
    updated: "2026-08-14",
    sections: [
      {
        steps: [
          "Restart Windows and try ManaCamp again.",
          "Confirm that you are using 64-bit Windows 10 or Windows 11.",
          "Download a fresh installer from the official ManaCamp download page.",
          "Run the installer again and allow Windows to complete the update or repair.",
          "If the app still does not open, contact support with your Windows version and any error message you see.",
        ],
      },
      {
        note: "Only download ManaCamp from manacamp.app or an official app-store listing.",
      },
    ],
  },
] as const;

export function getSupportCategory(slug: string) {
  return supportCategories.find((category) => category.slug === slug);
}

export function getSupportArticle(slug: string) {
  return supportArticles.find((article) => article.slug === slug);
}

export function getArticlesForCategory(categorySlug: string) {
  return supportArticles.filter((article) => article.category === categorySlug);
}

export function getRelatedArticles(article: SupportArticle, limit = 3) {
  return supportArticles
    .filter((candidate) => candidate.category === article.category && candidate.slug !== article.slug)
    .slice(0, limit);
}
