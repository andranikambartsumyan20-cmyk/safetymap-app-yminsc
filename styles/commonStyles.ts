
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  primary: '#007AFF',      // iOS Blue
  secondary: '#5856D6',    // Purple
  accent: '#FF9500',       // Orange
  background: '#FFFFFF',   // White background for light theme
  backgroundAlt: '#F2F2F7', // Light gray
  text: '#000000',         // Black text for light theme
  textSecondary: '#8E8E93', // Gray text
  grey: '#C7C7CC',         // Light gray
  card: '#FFFFFF',         // White cards
  danger: '#FF3B30',       // Red for alerts
  warning: '#FF9500',      // Orange for warnings
  success: '#34C759',      // Green for success
  traffic: '#FF6B6B',      // Red for traffic
  police: '#4ECDC4',       // Teal for police
  crime: '#FF8E53',        // Orange for crime
  crash: '#FFE66D',        // Yellow for crashes
};

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.backgroundAlt,
    alignSelf: 'center',
    width: '100%',
  },
  toggleButton: {
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  toggleButtonActive: {
    backgroundColor: colors.primary,
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.text,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    margin: 16,
    overflow: 'hidden',
  },
  searchContainer: {
    backgroundColor: colors.card,
    margin: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  searchInput: {
    fontSize: 16,
    color: colors.text,
    paddingVertical: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
  },
});
