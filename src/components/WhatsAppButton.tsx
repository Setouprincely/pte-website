import { MessageCircle } from "lucide-react";
import { waLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface Props {
  message?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  children?: React.ReactNode;
  className?: string;
}

export function WhatsAppButton({
  message = DEFAULT_MESSAGE,
  size = "md",
  variant = "solid",
  children = "Chat on WhatsApp",
  className,
}: Props) {
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };
  const variants = {
    solid:
      "bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-card hover:shadow-elegant",
    outline:
      "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" fill="currentColor" />
      {children}
    </a>
  );
}
