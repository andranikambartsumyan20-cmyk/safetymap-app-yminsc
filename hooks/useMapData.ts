
import { useState, useEffect } from 'react';
import { MapLocation, Route, SearchResult, MapFilters } from '../types/MapTypes';
import { mockLocations, mockRoute, mockSearchResults } from '../data/mockMapData';

export const useMapData = () => {
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [currentRoute, setCurrentRoute] = useState<Route | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<MapFilters>({
    traffic: true,
    police: true,
    crashes: true,
    crime: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading map data
    setIsLoading(true);
    setTimeout(() => {
      setLocations(mockLocations);
      setIsLoading(false);
    }, 1000);
  }, []);

  const searchDestinations = (query: string) => {
    console.log('Searching for:', query);
    if (query.length === 0) {
      setSearchResults([]);
      return;
    }

    const filtered = mockSearchResults.filter(result =>
      result.name.toLowerCase().includes(query.toLowerCase()) ||
      result.address.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const getDirections = (destination: SearchResult) => {
    console.log('Getting directions to:', destination.name);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const route: Route = {
        ...mockRoute,
        destination: destination.name,
      };
      setCurrentRoute(route);
      setIsLoading(false);
    }, 1500);
  };

  const clearRoute = () => {
    setCurrentRoute(null);
    console.log('Route cleared');
  };

  const toggleFilter = (filterType: keyof MapFilters) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType],
    }));
    console.log('Filter toggled:', filterType);
  };

  const refreshData = () => {
    setIsLoading(true);
    console.log('Refreshing map data...');
    
    setTimeout(() => {
      // Simulate getting fresh data
      setLocations([...mockLocations]);
      setIsLoading(false);
    }, 1000);
  };

  return {
    locations,
    currentRoute,
    searchResults,
    filters,
    isLoading,
    searchDestinations,
    getDirections,
    clearRoute,
    toggleFilter,
    refreshData,
  };
};
