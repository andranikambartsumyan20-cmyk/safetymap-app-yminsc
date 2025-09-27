
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/commonStyles';
import { MapLocation } from '../types/MapTypes';
import Icon from './Icon';

interface MapPlaceholderProps {
  locations: MapLocation[];
  filters: {
    traffic: boolean;
    police: boolean;
    crashes: boolean;
    crime: boolean;
  };
  showRoute: boolean;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ locations, filters, showRoute }) => {
  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'traffic':
        return 'car';
      case 'police':
        return 'shield';
      case 'crash':
        return 'warning';
      case 'crime':
        return 'alert-circle';
      default:
        return 'location';
    }
  };

  const getLocationColor = (type: string) => {
    switch (type) {
      case 'traffic':
        return colors.traffic;
      case 'police':
        return colors.police;
      case 'crash':
        return colors.crash;
      case 'crime':
        return colors.crime;
      default:
        return colors.primary;
    }
  };

  const filteredLocations = locations.filter(location => {
    switch (location.type) {
      case 'traffic':
        return filters.traffic;
      case 'police':
        return filters.police;
      case 'crash':
        return filters.crashes;
      case 'crime':
        return filters.crime;
      default:
        return true;
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.noticeText}>
        🗺️ Map View Placeholder
      </Text>
      <Text style={styles.subText}>
        react-native-maps is not supported in Natively
      </Text>
      
      {showRoute && (
        <View style={styles.routeIndicator}>
          <Icon name="navigate" size={20} color={colors.primary} />
          <Text style={styles.routeText}>Route Active</Text>
        </View>
      )}

      <View style={styles.locationsContainer}>
        {filteredLocations.map((location) => (
          <View key={location.id} style={styles.locationItem}>
            <Icon 
              name={getLocationIcon(location.type)} 
              size={16} 
              color={getLocationColor(location.type)} 
            />
            <View style={styles.locationInfo}>
              <Text style={styles.locationTitle}>{location.title}</Text>
              <Text style={styles.locationDesc}>{location.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noticeText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  routeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 20,
  },
  routeText: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  locationsContainer: {
    width: '100%',
    maxHeight: 200,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  locationInfo: {
    marginLeft: 12,
    flex: 1,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  locationDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
});

export default MapPlaceholder;
