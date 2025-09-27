
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles, colors } from '../styles/commonStyles';
import { useMapData } from '../hooks/useMapData';
import MapPlaceholder from '../components/MapPlaceholder';
import SearchBar from '../components/SearchBar';
import FilterToggle from '../components/FilterToggle';
import DirectionsPanel from '../components/DirectionsPanel';
import SimpleBottomSheet from '../components/BottomSheet';
import Icon from '../components/Icon';

export default function MapApp() {
  const {
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
  } = useMapData();

  const [showDirections, setShowDirections] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleSelectDestination = (destination: any) => {
    console.log('Selected destination:', destination.name);
    getDirections(destination);
    setShowDirections(true);
  };

  const handleCloseDirections = () => {
    setShowDirections(false);
    clearRoute();
  };

  const handleRefresh = () => {
    refreshData();
    Alert.alert('Refreshed', 'Map data has been updated');
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Traffic & Safety Map</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={handleRefresh} style={styles.headerButton}>
            <Icon name="refresh" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setShowSettings(true)} 
            style={styles.headerButton}
          >
            <Icon name="settings" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <SearchBar
        onSearch={searchDestinations}
        onSelectResult={handleSelectDestination}
        searchResults={searchResults}
        placeholder="Where do you want to go?"
      />

      {/* Map Container */}
      <View style={commonStyles.mapContainer}>
        <MapPlaceholder
          locations={locations}
          filters={filters}
          showRoute={currentRoute !== null}
        />
      </View>

      {/* Filter Toggles */}
      <FilterToggle
        filters={filters}
        onToggleFilter={toggleFilter}
      />

      {/* Directions Panel */}
      <DirectionsPanel
        route={currentRoute}
        onClose={handleCloseDirections}
        isVisible={showDirections}
      />

      {/* Settings Bottom Sheet */}
      <SimpleBottomSheet
        isVisible={showSettings}
        onClose={() => setShowSettings(false)}
      >
        <View style={styles.settingsContent}>
          <Text style={styles.settingsTitle}>Map Settings</Text>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Auto-refresh data</Text>
            <TouchableOpacity style={styles.settingToggle}>
              <Text style={styles.settingValue}>On</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Show notifications</Text>
            <TouchableOpacity style={styles.settingToggle}>
              <Text style={styles.settingValue}>On</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Voice guidance</Text>
            <TouchableOpacity style={styles.settingToggle}>
              <Text style={styles.settingValue}>Off</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.aboutButton}
            onPress={() => Alert.alert('About', 'Traffic & Safety Map v1.0\n\nThis app shows real-time traffic conditions, police locations, accidents, and crime alerts to help you navigate safely.')}
          >
            <Text style={styles.aboutButtonText}>About</Text>
          </TouchableOpacity>
        </View>
      </SimpleBottomSheet>

      {/* Loading Indicator */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 16,
    padding: 4,
  },
  settingsContent: {
    padding: 20,
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  settingLabel: {
    fontSize: 16,
    color: colors.text,
  },
  settingToggle: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  settingValue: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '600',
  },
  aboutButton: {
    backgroundColor: colors.backgroundAlt,
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
    alignItems: 'center',
  },
  aboutButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 12,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
  },
  loadingText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
});
