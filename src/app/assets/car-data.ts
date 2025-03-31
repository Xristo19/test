export const CARS_DATA = [
  ["Ford", "Fiesta", "Manual", "US$ 12,000", 0, "FF002501"],
  ["Ford", "Fiesta", "Manual", "US$ 13,400", 1, "FF002502"],
  ["Ford", "Fiesta", "Automatic", "US$ 14,000", -1, "FF002503"],
  ["Ford", "Fiesta", "Automatic", "US$ 15,000", 0, "FF002504"],
  ["Ford", "Focus", "Manual", "US$ 33,000", 0, "FC002501"],
  ["Ford", "Focus", "Manual", "US$ 33,500", 1, "FC002502"],
  ["Ford", "Focus", "Manual", "US$ 35,000", 0, "FC002503"],
  ["Ford", "Focus", "Automatic", "US$ 36,000", 0, "FC002504"],
  ["VW", "Golf", "Manual", "US$ 35,000", -1, "VG002501"],
  ["VW", "Golf", "Automatic", "US$ 37,000", 1, "VG002502"]
];

export enum CarIndex {
  Brand,
  Model,
  Transmission,
  Price,
  PriceFlag,
  RegistryCode
}
