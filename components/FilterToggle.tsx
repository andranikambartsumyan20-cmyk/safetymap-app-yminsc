
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, buttonStyles } from '../styles/commonStyles';
import { MapFilters } from '../types/MapTypes';
import Icon from './Icon';

interface FilterToggleProps {
  filters: MapFilters;
  onToggleFilter: (filterType: keyof MapFilters) => void;
}

const FilterToggle: React.FC<FilterToggleProps> = ({ filters, onToggleFilter }) => {
  const filterConfig = [
    {
      key: 'traffic' as keyof MapFilters,
      label: 'Traffic',
      icon: 'car',
      color: colors.traffic,
    },
    {
      key: 'police' as keyof MapFilters,
      label: 'Police',
      icon: 'shield',
      color: colors.police,
    },
    {
      key: 'crashes' as keyof MapFilters,
      label: 'Crashes',
      icon: 'warning',
      color: colors.crash,
    },
    {
      key: 'crime' as keyof MapFilters,
      label: 'Crime',
      icon: 'alert-circle',
      color: colors.crime,
    },
  ];

  return (
    <View style={styles.container}>
      {filterConfig.map((filter) => (
        <TouchableOpacity
          key={filter.key}
          style={[
            styles.toggleButton,
            filters[filter.key] && styles.toggleButtonActive,
          ]}
          onPress={() => onToggleFilter(filter.key)}
        >
          <Icon 
            name={filter.icon} 
            size={16} 
            color={filters[filter.key] ? colors.background : filter.color} 
          />
          <Text 
            style={[
              styles.toggleText,
              filters[filter.key] && styles.toggleTextActive,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 70,
    justifyContent: 'center',
  },
  toggleButtonActive: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 4,
  },
  toggleTextActive: {
    color: colors.background,
  },
});

export default FilterToggle;
