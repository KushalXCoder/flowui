import { cn } from "@/lib/utils";

type DashedBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export const DashedBox = ({
    children,
    className
}: DashedBoxProps) => {
  return (
    <div
      className={cn(
        "relative w-fit font-secondary text-muted border px-4 py-2 border-dashed hover:text-primary transition-all",
        className,
      )}
    >
      {children}
    </div>
  );
};
