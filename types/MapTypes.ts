
export interface MapLocation {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  description?: string;
  type: 'traffic' | 'police' | 'crash' | 'crime';
  severity?: 'low' | 'medium' | 'high';
  timestamp: Date;
}

export interface DirectionStep {
  instruction: string;
  distance: string;
  duration: string;
  maneuver: string;
}

export interface Route {
  id: string;
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  steps: DirectionStep[];
}

export interface MapFilters {
  traffic: boolean;
  police: boolean;
  crashes: boolean;
  crime: boolean;
}

export interface SearchResult {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}
