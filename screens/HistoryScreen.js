import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

// Dummy Data
const historyData = [
  { id: '1', type: 'topup', amount: 2334.00, transactionId: 'a809as0988d0c9' },
  { id: '2', type: 'ride', from: 'Kanto Sais', to: 'Kanto Syete', amount: 34.00, driverId: '3424-234-234' },
  { id: '3', type: 'ride', from: 'Kanto Sais', to: 'Kanto Syete', amount: 34.00, driverId: '3424-234-234' },
  { id: '4', type: 'ride', from: 'Kanto Sais', to: 'Kanto Syete', amount: 34.00, driverId: '3424-234-234' },
  { id: '5', type: 'ride', from: 'Kanto Sais', to: 'Kanto Syete', amount: 34.00, driverId: '3424-234-234' },
  { id: '6', type: 'ride', from: 'Kanto Sais', to: 'Kanto Syete', amount: 34.00, driverId: '3424-234-234' },
  // Add more history items
];


const HistoryScreen = () => {

  const renderHistoryItem = ({ item }) => {
    if (item.type === 'topup') {
      return (
        <View style={styles.historyItem}>
           <View style={styles.iconContainer}>
               <MaterialCommunityIcons name="arrow-up-bold-circle" size={24} color={COLORS.green} />
           </View>
           <View style={styles.detailsContainer}>
               <Text style={styles.itemTitle}>Top-up</Text>
               <Text style={styles.itemSubtitle}>Transaction ID: {item.transactionId}</Text>
           </View>
           <Text style={[styles.amountText, styles.topupAmount]}>+P{item.amount.toFixed(2)}</Text>
        </View>
      );
    } else if (item.type === 'ride') {
      return (
        <View style={styles.historyItem}>
             <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="jeepney" size={24} color={COLORS.primary} />
             </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.itemTitle}>{item.from} > {item.to}</Text>
                <Text style={styles.itemSubtitle}>Driver's ID: {item.driverId}</Text>
            </View>
           <Text style={[styles.amountText, styles.rideAmount]}>-P{item.amount.toFixed(2)}</Text>
        </View>
      );
    }
    return null; // Should not happen
  };

  return (
    <View style={styles.container}>
       {/* Simple Header */}
        <View style={styles.header}>
            <MaterialCommunityIcons name="history" size={28} color={COLORS.white} style={{marginRight: 10}} />
            <Text style={styles.headerTitle}>Your History</Text>
        </View>

        <FlatList
            data={historyData}
            renderItem={renderHistoryItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={<Text style={styles.emptyText}>No history yet.</Text>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
   header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? 25 : 50,
      paddingBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: COLORS.primary,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.darkGray,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    flex: 1,
  },
  listContainer: {
      padding: 15,
  },
  historyItem: {
    backgroundColor: COLORS.lightGray, // Lighter background for items
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
   iconContainer: {
       marginRight: 15,
       width: 30, // Fixed width for alignment
       alignItems: 'center',
   },
  detailsContainer: {
      flex: 1, // Take remaining space
  },
  itemTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: COLORS.primary,
      marginBottom: 3,
  },
  itemSubtitle: {
      fontSize: 12,
      color: COLORS.darkGray,
  },
  amountText: {
      fontSize: 16,
      fontWeight: 'bold',
  },
  topupAmount: {
      color: COLORS.green,
  },
  rideAmount: {
       color: COLORS.red,
  },
  emptyText: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 16,
      color: COLORS.lightGray,
  }
});


export default HistoryScreen;