import { blockBaseSchema } from "@typebot.io/blocks-base/schemas";
import { z } from "zod";
import { BubbleBlockType } from "../constants";
import { imageBubbleContentSchema } from "../image/schema";

export const stickerBubbleBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([BubbleBlockType.STICKER]),
    content: imageBubbleContentSchema.optional(),
  }),
);

export type StickerBubbleBlock = z.infer<typeof stickerBubbleBlockSchema>;
