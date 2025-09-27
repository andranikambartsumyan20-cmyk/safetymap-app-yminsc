
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../styles/commonStyles';
import { Route } from '../types/MapTypes';
import Icon from './Icon';

interface DirectionsPanelProps {
  route: Route | null;
  onClose: () => void;
  isVisible: boolean;
}

const DirectionsPanel: React.FC<DirectionsPanelProps> = ({ route, onClose, isVisible }) => {
  if (!isVisible || !route) return null;

  const getManeuverIcon = (maneuver: string) => {
    switch (maneuver) {
      case 'turn-left':
        return 'arrow-back';
      case 'turn-right':
        return 'arrow-forward';
      case 'straight':
        return 'arrow-up';
      default:
        return 'navigate';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.routeInfo}>
          <Text style={styles.routeTitle}>
            {route.origin} → {route.destination}
          </Text>
          <Text style={styles.routeStats}>
            {route.distance} • {route.duration}
          </Text>
        </View>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.stepsList}>
        {route.steps.map((step, index) => (
          <View key={index} style={styles.stepItem}>
            <View style={styles.stepIcon}>
              <Icon 
                name={getManeuverIcon(step.maneuver)} 
                size={20} 
                color={colors.primary} 
              />
            </View>
            <View style={styles.stepInfo}>
              <Text style={styles.stepInstruction}>{step.instruction}</Text>
              <Text style={styles.stepDistance}>
                {step.distance} • {step.duration}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '50%',
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  routeInfo: {
    flex: 1,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  routeStats: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  closeButton: {
    padding: 4,
  },
  stepsList: {
    maxHeight: 300,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  stepIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepInfo: {
    flex: 1,
  },
  stepInstruction: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
  },
  stepDistance: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
});

export default DirectionsPanel;
