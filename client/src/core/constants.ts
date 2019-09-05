export const PAGE_SIZE = 10;

export const ORDER_BY_LABELS: Labels = {
  entryDate: 'Review date',
  travelDate: 'Travel date'
};

export const TRAVELED_WITH_LABELS: Labels = {
  FAMILY: 'with family',
  FRIENDS: 'with friends',
  OTHER: '(other)',
  COUPLE: 'with a partner',
  SINGLE: 'alone'
};

export const FILTER_LABELS: Labels = {
  FAMILY: 'Traveled with family',
  FRIENDS: 'Traveled with friends',
  OTHER: 'Other',
  COUPLE: 'Traveled with a partner',
  SINGLE: 'Traveled alone',
  ALL: 'All reviews'
};

export const ASPECTS_LABELS: Labels = {
  location: 'Location',
  service: 'Service',
  priceQuality: 'Price/Quality',
  food: 'Food',
  room: 'Room',
  childFriendly: 'ChildFriendly',
  interior: 'Interior',
  size: 'Size',
  activities: 'Activities',
  restaurants: 'Restaurants',
  sanitaryState: 'Sanitary state',
  accessibility: 'Accessibility',
  nightlife: 'Nightlife',
  culture: 'Culture',
  surrounding: 'Surrounding',
  atmosphere: 'Atmosphere',
  noviceSkiArea: 'Novice ski area',
  advancedSkiArea: 'Advanced ski area',
  apresSki: 'Apres ski',
  beach: 'Beach',
  entertainment: 'Entertainment',
  environmental: 'Environmental',
  pool: 'Pool',
  terrace: 'Terrace'
};

interface Labels {
  [key: string]: string;
}
