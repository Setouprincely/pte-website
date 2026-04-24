export const WHATSAPP_NUMBER = "1234567890"; // Replace with real number
export const DEFAULT_MESSAGE = "Hello, I'm interested in your PTE preparation services";

export function waLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
