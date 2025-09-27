
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import { SearchResult } from '../types/MapTypes';
import Icon from './Icon';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSelectResult: (result: SearchResult) => void;
  searchResults: SearchResult[];
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  onSelectResult, 
  searchResults, 
  placeholder = "Search for a destination..." 
}) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (text: string) => {
    setQuery(text);
    setShowResults(text.length > 0);
    onSearch(text);
  };

  const handleSelectResult = (result: SearchResult) => {
    setQuery(result.name);
    setShowResults(false);
    onSelectResult(result);
  };

  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
    onSearch('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={handleSearch}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          onFocus={() => setShowResults(query.length > 0)}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>

      {showResults && searchResults.length > 0 && (
        <View style={styles.resultsContainer}>
          <ScrollView style={styles.resultsList} keyboardShouldPersistTaps="handled">
            {searchResults.map((result) => (
              <TouchableOpacity
                key={result.id}
                style={styles.resultItem}
                onPress={() => handleSelectResult(result)}
              >
                <Icon name="location" size={16} color={colors.primary} />
                <View style={styles.resultInfo}>
                  <Text style={styles.resultName}>{result.name}</Text>
                  <Text style={styles.resultAddress}>{result.address}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  clearButton: {
    marginLeft: 8,
  },
  resultsContainer: {
    position: 'absolute',
    top: 80,
    left: 16,
    right: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    maxHeight: 200,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
  },
  resultsList: {
    maxHeight: 200,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  resultInfo: {
    marginLeft: 12,
    flex: 1,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  resultAddress: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
});

export default SearchBar;
