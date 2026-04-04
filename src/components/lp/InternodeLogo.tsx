import { cn } from "@/lib/utils";

interface InternodeLogoProps {
  className?: string;
  iconOnly?: boolean;
  color?: string;
  /** "sm" = original, "md" = 2x (default for Hero), "lg" = 3x */
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: { icon: "h-5 w-5", text: "text-sm" },
  md: { icon: "h-8 w-8", text: "text-lg" },
  lg: { icon: "h-10 w-10", text: "text-xl" },
} as const;

function LogoIcon({
  color = "currentColor",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.572949 1.23664C0 2.02524 0 3.15016 0 5.4V14.6C0 16.8498 0 17.9748 0.572949 18.7634C0.757988 19.018 0.98196 19.242 1.23664 19.4271C2.02524 20 3.15016 20 5.4 20H14.6C16.8498 20 17.9748 20 18.7634 19.4271C19.018 19.242 19.242 19.018 19.4271 18.7634C20 17.9748 20 16.8498 20 14.6V5.4C20 3.15016 20 2.02524 19.4271 1.23664C19.242 0.98196 19.018 0.757988 18.7634 0.572949C17.9748 0 16.8498 0 14.6 0H5.4C3.15016 0 2.02524 0 1.23664 0.572949C0.98196 0.757988 0.757988 0.98196 0.572949 1.23664ZM10.2952 2.14875C10 2.52319 10 3.07171 10 4.16875V6.26751C10 6.74427 9.81668 7.20278 9.48798 7.54812C9.13737 7.91649 8.65106 8.125 8.1425 8.125H4.16875C3.07171 8.125 2.52319 8.125 2.14875 8.42019C2.06384 8.48712 1.98712 8.56384 1.92019 8.64875C1.625 9.02319 1.625 9.57171 1.625 10.6687V15.8313C1.625 16.9283 1.625 17.4768 1.92019 17.8513C1.98712 17.9362 2.06384 18.0129 2.14875 18.0798C2.52319 18.375 3.07171 18.375 4.16875 18.375H9.33125C10.4283 18.375 10.9768 18.375 11.3513 18.0798C11.4362 18.0129 11.5129 17.9362 11.5798 17.8513C11.875 17.4768 11.875 16.9283 11.875 15.8313V11.7021C11.875 11.2652 12.043 10.8451 12.3442 10.5286C12.6655 10.1911 13.1111 10 13.5771 10H15.8313C16.9283 10 17.4768 10 17.8513 9.70481C17.9362 9.63788 18.0129 9.56116 18.0798 9.47625C18.375 9.10181 18.375 8.55329 18.375 7.45625V4.16875C18.375 3.07171 18.375 2.52319 18.0798 2.14875C18.0129 2.06384 17.9362 1.98712 17.8513 1.92019C17.4768 1.625 16.9283 1.625 15.8313 1.625H12.5437C11.4467 1.625 10.8982 1.625 10.5237 1.92019C10.4388 1.98712 10.3621 2.06384 10.2952 2.14875Z"
        fill={color}
      />
    </svg>
  );
}

export function InternodeLogo({
  className,
  iconOnly = false,
  color,
  size = "md",
}: InternodeLogoProps) {
  const s = sizeClasses[size];
  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Internode"
    >
      <LogoIcon color={color} className={s.icon} />
      {!iconOnly && (
        <span className={cn(s.text, "font-semibold tracking-wide")}>
          Internode
        </span>
      )}
    </span>
  );
}
