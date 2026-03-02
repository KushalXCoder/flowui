import { Link2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TwitterEmbed from "../twitter-embed";

type Platform = "linkedin" | "x";

type Tweet = {
  id: string;
  name: string;
  handle?: string;
  link?: string;
  avatar?: string;
  content: string;
  platform: Platform;
};

const tweetsData: Tweet[] = [
  {
    id: "1",
    name: "OrcDev",
    handle: "@theorcdev",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7432328850279305216?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7432328850279305216%2C7432352706738110465%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287432352706738110465%2Curn%3Ali%3Aactivity%3A7432328850279305216%29",
    content: "awesome project, keep it up!",
    platform: "linkedin",
    avatar: "/orcdev.webp",
  },
  {
    id: "2",
    name: "Yannick Ferire",
    handle: "@yannickferire",
    content: "Nice project, it's on top of shadcn?",
    platform: "x",
    avatar: "/yannick_ferire.jpg",
  }
];

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
  x: ({ className }) => (
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

interface TweetCardProps {
  tweet: Tweet;
  className?: string;
}

const TweetCard = ({ tweet, className }: TweetCardProps) => {
  const PlatformIcon = PLATFORM_ICONS[tweet.platform] ?? PLATFORM_ICONS.x;

  return (
    <Card
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl bg-card p-5 shadow-sm font-poppins",
        "transition-all duration-200 ease-out",
        "hover:border-gray-300 hover:shadow-md",
        "hover:bg-accent/70",
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

        {/* Link icon — top-right */}
        <Link
          href={tweet.link ?? "#"}
          target="_blank"
          className="cursor-pointer z-10"
        >
          <Link2 className="h-5 w-5 opacity-80" />
        </Link>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-0">
        <p className="text-sm leading-relaxed text-foreground/80">
          {tweet.content}
        </p>
        <svg aria-hidden="true" height={78} width={105} className="absolute bottom-3 right-3 opacity-10">
          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
        </svg>
      </CardContent>
    </Card>
  );
};

export const Tweets = () => {
  return (
    <div className="flex items-stretch gap-5">
      <TwitterEmbed />
      <div className="flex flex-1 flex-col gap-3 my-6">
        {tweetsData.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
        <div className="flex flex-1 justify-center items-center rounded-lg relative">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_12px)]" />
          <h1 className="font-mono text-sm text-gray-500 text-center z-10">
            Waiting for more feedbacks :)
          </h1>
        </div>
      </div>
    </div>
  );
};