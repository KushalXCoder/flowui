import { Link2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Platform = "linkedin" | "twitter";

type Tweet = {
  id: string;
  name: string;
  handle?: string;
  avatar?: string;
  content: string;
  platform: Platform;
  date?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const tweetsData: Tweet[] = [
  {
    id: "1",
    name: "Yannick Ferire",
    handle: "@yannickferire",
    content: "Nice project, it's on top of shadcn?",
    platform: "linkedin",
    date: "2d ago",
  },
  {
    id: "2",
    name: "Yannick Ferire",
    handle: "@yannickferire",
    content: "Nice project, it's on top of shadcn?",
    platform: "linkedin",
    date: "3d ago",
  },
  {
    id: "3",
    name: "Yannick Ferire",
    handle: "@yannickferire",
    content: "Nice project, it's on top of shadcn?",
    platform: "linkedin",
    date: "5d ago",
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    aria-label="LinkedIn"
    role="img"
    className={cn("shrink-0", className)}
  >
    <path
      fill="#0A66C2"
      d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
    />
    <path
      fill="#fff"
      d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
    />
  </svg>
);

const PLATFORM_ICONS: Record<Platform, React.FC<{ className?: string }>> = {
  linkedin: LinkedInIcon,
  twitter: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-label="Twitter / X"
      role="img"
      className={cn("shrink-0", className)}
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
};

// ─── Avatar Fallback ──────────────────────────────────────────────────────────

const AvatarFallback = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-300 text-xs font-semibold text-slate-600"
    >
      {initials}
    </span>
  );
};

// ─── Single Card ──────────────────────────────────────────────────────────────

interface TweetCardProps {
  tweet: Tweet;
  className?: string;
}

const TweetCard = ({ tweet, className }: TweetCardProps) => {
  const PlatformIcon = PLATFORM_ICONS[tweet.platform] ?? PLATFORM_ICONS.twitter;

  return (
    <Card
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl border border-gray-400 border-dashed bg-card p-5 shadow-sm font-poppins",
        "transition-all duration-200 ease-out",
        "hover:border-gray-500 hover:shadow-md",
        className,
      )}
    >
      {/* Header row */}
      <CardHeader className="flex flex-row items-center gap-3 p-0">
        {/* Avatar */}
        {tweet.avatar ? (
          <img
            src={tweet.avatar}
            alt={tweet.name}
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
        ) : (
          <AvatarFallback name={tweet.name} />
        )}

        {/* Name + handle */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold leading-tight text-foreground">
            {tweet.name}
          </p>
          {tweet.handle && (
            <p className="truncate text-xs text-muted-foreground">
              {tweet.handle}
            </p>
          )}
        </div>

        {/* Platform icon — top-right */}
        <Link2 className="h-5 w-5 opacity-80" />
      </CardHeader>

      {/* Content */}
      <CardContent className="p-0">
        <p className="text-sm leading-relaxed text-foreground/80">
          {tweet.content}
        </p>
      </CardContent>
    </Card>
  );
};

// ─── Grid ─────────────────────────────────────────────────────────────────────

export const Tweets = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tweetsData.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};