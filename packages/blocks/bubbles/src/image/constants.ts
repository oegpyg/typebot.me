import type { ImageBubbleBlock } from "./schema";

export const defaultImageBubbleContent = {
  mediaType: "image",
  clickLink: {
    alt: "Bubble image",
  },
} as const satisfies ImageBubbleBlock["content"];
