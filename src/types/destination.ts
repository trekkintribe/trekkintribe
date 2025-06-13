export interface TemperatureRange {
  day?: string;
  night?: string;
}

export interface TrekOverview {
  bestTime?: string;
  temperature?: TemperatureRange;
  distance?: string;
  altitude?: string;
  duration?: string;
  suitableFor?: string;
  pickupPoint?: string;
  difficultyLevel?: string;
  baseCamp?: string;
  nearestRailwayStation?: string;
  nearestAirport?: string;
}

export interface ItineraryItem {
  day?: number;
  activity?: string;
  description?: string;
}

export interface ImageInterface {
  card?: string | null;
}

export interface DestinationDataInterface {
  id?: number;
  name?: string;
  type?: string;
  trekFee?: number;
  location?: string;
  url?: string;
  images?: ImageInterface;
  trekOverview?: TrekOverview;
  quickItinerary?: string[];
  detailedItinerary?: ItineraryItem[];
  inclusions?: string[];
  exclusions?: string[];
}
