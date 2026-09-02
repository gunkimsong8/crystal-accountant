const HEX_PATTERN = /^#([0-9a-f]{6})$/i;
const SRGB_THRESHOLD = 0.03928;
const LUMINANCE_OFFSET = 0.05;

export const BRAND_TOKENS = {
  violet: "#5E17EB",
  violetStrong: "#4A11BC",
  violetFill: "#6022DB",
  navy: "#001F3D",
  navyDeep: "#00152B",
  muted: "#4A5B6E",
  onDarkMuted: "#B9C4D1",
  lavender: "#EBE3FA",
  lilac: "#C6B1F2",
  soft: "#F6F3FC",
  line: "#DCD3EE",
  white: "#FFFFFF",
  error: "#852828",
  errorBg: "#FFF0F0",
} as const;

const channelToLinear = (channel: number): number => {
  const scaled = channel / 255;
  return scaled <= SRGB_THRESHOLD ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
};

const relativeLuminance = (hex: string): number => {
  const match = HEX_PATTERN.exec(hex);
  if (!match) throw new Error(`Expected a 6-digit hex color like #5E17EB, received "${hex}"`);
  const value = parseInt(match[1], 16);
  const red = channelToLinear((value >> 16) & 0xff);
  const green = channelToLinear((value >> 8) & 0xff);
  const blue = channelToLinear(value & 0xff);
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

export const contrastRatio = (hexA: string, hexB: string): number => {
  const [lighter, darker] = [relativeLuminance(hexA), relativeLuminance(hexB)].sort((a, b) => b - a);
  return (lighter + LUMINANCE_OFFSET) / (darker + LUMINANCE_OFFSET);
};
