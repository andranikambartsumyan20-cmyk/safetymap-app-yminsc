
import { MapLocation, Route, SearchResult } from '../types/MapTypes';

export const mockLocations: MapLocation[] = [
  {
    id: '1',
    latitude: 37.7749,
    longitude: -122.4194,
    title: 'Heavy Traffic',
    description: 'Congestion on Highway 101',
    type: 'traffic',
    severity: 'high',
    timestamp: new Date(),
  },
  {
    id: '2',
    latitude: 37.7849,
    longitude: -122.4094,
    title: 'Police Checkpoint',
    description: 'DUI checkpoint active',
    type: 'police',
    severity: 'medium',
    timestamp: new Date(),
  },
  {
    id: '3',
    latitude: 37.7649,
    longitude: -122.4294,
    title: 'Vehicle Accident',
    description: 'Minor fender bender, right lane blocked',
    type: 'crash',
    severity: 'medium',
    timestamp: new Date(),
  },
  {
    id: '4',
    latitude: 37.7549,
    longitude: -122.4394,
    title: 'Crime Alert',
    description: 'Break-in reported in area',
    type: 'crime',
    severity: 'high',
    timestamp: new Date(),
  },
  {
    id: '5',
    latitude: 37.7949,
    longitude: -122.3994,
    title: 'Speed Trap',
    description: 'Police monitoring speed',
    type: 'police',
    severity: 'low',
    timestamp: new Date(),
  },
];

export const mockRoute: Route = {
  id: 'route1',
  origin: 'Current Location',
  destination: 'Golden Gate Bridge',
  distance: '8.2 miles',
  duration: '22 minutes',
  steps: [
    {
      instruction: 'Head north on Market St',
      distance: '0.5 mi',
      duration: '2 min',
      maneuver: 'straight',
    },
    {
      instruction: 'Turn right onto Van Ness Ave',
      distance: '1.2 mi',
      duration: '4 min',
      maneuver: 'turn-right',
    },
    {
      instruction: 'Continue onto Lombard St',
      distance: '2.1 mi',
      duration: '6 min',
      maneuver: 'straight',
    },
    {
      instruction: 'Turn left onto Richardson Ave',
      distance: '0.8 mi',
      duration: '3 min',
      maneuver: 'turn-left',
    },
    {
      instruction: 'Continue to Golden Gate Bridge',
      distance: '3.6 mi',
      duration: '7 min',
      maneuver: 'straight',
    },
  ],
};

export const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    name: 'Golden Gate Bridge',
    address: 'Golden Gate Bridge, San Francisco, CA',
    latitude: 37.8199,
    longitude: -122.4783,
  },
  {
    id: '2',
    name: 'Fisherman\'s Wharf',
    address: 'Pier 39, San Francisco, CA 94133',
    latitude: 37.8087,
    longitude: -122.4098,
  },
  {
    id: '3',
    name: 'Union Square',
    address: 'Union Square, San Francisco, CA 94108',
    latitude: 37.7880,
    longitude: -122.4075,
  },
  {
    id: '4',
    name: 'Lombard Street',
    address: 'Lombard St, San Francisco, CA 94133',
    latitude: 37.8021,
    longitude: -122.4187,
  },
];
