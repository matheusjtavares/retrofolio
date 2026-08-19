export type Theme = "default" | "snes" | "ps2" | "ps1" | "n64" | "gcb";

export const themes: Record<
  Theme,
  { label: string; subtitle: string; logo: string; colors: string[] }
> = {
  default: {
    label: "RETROUI",
    subtitle: "DEFAULT",
    logo: "MJ",
    colors: ["#e7c85a", "#456a99", "#315b4a"],
  },
  snes: {
    label: "SUPER NINTENDO",
    subtitle: "64-BIT MODE",
    logo: "MJ",
    colors: ["#c8b7d9", "#76528e", "#456a99"],
  },
  n64: {
    label: "NINTENDO 64",
    subtitle: "3D ERA",
    logo: "N64",
  colors: ["#E53232", "#3B82C4", "#25272B"],
  
  },
  gcb: {
    label: "NINTENDO GAMECUBE",
    subtitle: "THE PURPLE CUBE",
    logo: "GC",
  colors: ["#5146A5", "#37317A", "#17172A"],
  },
  ps1: {
    label: "PLAYSTATION 1",
    subtitle: "EARLY 2000s",
    logo: "MJ",
    colors: ["#ADADAD", "#222222", "#FFFFFF"],
  },
  ps2: {
    label: "PLAYSTATION 2",
    subtitle: "EARLY 2000s",
    logo: "MJ",
    colors: ["#9fb8ff", "#4668b5", "#242d48"],
  },
};