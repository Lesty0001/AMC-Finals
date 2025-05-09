import React, { useState, useEffect } from 'react';
// Import Platform here
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons
import StyledButton from '../components/StyledButton';
import { COLORS } from '../constants/colors';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [findingState, setFindingState] = useState('initial'); // 'initial', 'searching', 'nearby_found', 'booked'
  const [nearbyJeepneys, setNearbyJeepneys] = useState(0); // Number of nearby jeepneys

  // Simulate finding process
  const handleFindNow = () => {
    setFindingState('searching');
    setNearbyJeepneys(0);
    setTimeout(() => {
      setFindingState('nearby_found');
      setNearbyJeepneys(3); // Simulate finding 3 jeepneys
    }, 2000); // 2 seconds searching
  };

   // Simulate booking one
  const handleBookNow = () => {
       setFindingState('booked');
       // Navigate to the detailed booking/trip screen
        setTimeout(() => {
            navigation.navigate('TripDetails'); // Or whatever the next screen name is
        }, 500); // Short delay before navigating
  };

  const renderFindingContent = () => {
    switch (findingState) {
      case 'searching':
        return (
          <View style={styles.findingContainer}>
             <ActivityIndicator size="large" color={COLORS.secondary} />
             <Text style={styles.findingText}>Searching...</Text>
          </View>
        );
      case 'nearby_found':
        return (
           <View style={styles.findingContainer}>
               <Text style={styles.findingTextBold}>{nearbyJeepneys} Jeepneys Nearby</Text>
               {/* Or show list like mockup 12 */}
                <TouchableOpacity style={styles.jeepneyItem} onPress={handleBookNow}>
                    <Text style={styles.jeepneyItemText}>Jeepney 1</Text>
                     {/* Add more details if needed */}
                </TouchableOpacity>
                 {/* Add more jeepneys */}
           </View>
        );
       case 'booked': // State shown on screen 13
           return (
             <View style={styles.findingContainer}>
                <Text style={styles.findingTextBold}>Nearby Jeepney Found</Text>
                {/* Info already shown, maybe just a confirmation */}
             </View>
           );
      case 'initial':
      default:
        // Show the Jeepney graphic initially
        return <Image source={require('../assets/jeep2go.png')} style={styles.jeepneyGraphic} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
            <MaterialCommunityIcons name="account-circle" size={40} color={COLORS.white} />
            <View style={styles.profileTextContainer}>
                <Text style={styles.greeting}>Good Morning!</Text>
                <Text style={styles.userName}>John Doe</Text>
            </View>
        </View>
        <Image source={require('../assets/jeep2go.png')} style={styles.logo} />
      </View>

      {/* Balance and Points */}
       <View style={styles.balancePointsContainer}>
            <View style={styles.balanceBox}>
                <Text style={styles.balanceLabel}>Current Balance</Text>
                <Text style={styles.balanceAmount}>₱3,015</Text>
            </View>
            <View style={styles.pointsBox}>
                <Text style={styles.pointsLabel}>Total Points</Text>
                <Text style={styles.pointsAmount}>10.25pts</Text>
            </View>
       </View>


      <ScrollView contentContainerStyle={styles.scrollContainer}>

         {/* Finding/Jeepney Area */}
          <View style={styles.jeepneyArea}>
              {renderFindingContent()}
          </View>


        {/* Route Selection */}
        <View style={styles.routeContainer}>
          <View style={styles.routeRow}>
            <Text style={styles.routeLabel}>From:</Text>
            <TouchableOpacity style={styles.routeInput}>
              <Text style={styles.routeText}>Robles St. Valenzuela City</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.routeRow}>
            <Text style={styles.routeLabel}>To:</Text>
            <TouchableOpacity style={styles.routeInput}>
              <Text style={styles.routeText}>Wawangpulo, Valenzuela City</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.routeRow}>
             <Text style={styles.routeLabel}>Total Passengers to Board:</Text>
             <TouchableOpacity style={styles.passengerInput}>
               <Text style={styles.passengerText}>3</Text>
             </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

       {/* Find Now / Book Now Button */}
       <View style={styles.buttonContainer}>
           {findingState === 'initial' && <StyledButton title="Find Now" onPress={handleFindNow} />}
           {findingState === 'nearby_found' && <StyledButton title="Book Now" onPress={handleBookNow} />}
           {/* Add Cancel button or other actions as needed */}
           {(findingState === 'searching' || findingState === 'booked') && <View style={{height: 60}}/> /* Placeholder height */}
       </View>

    </View>
  );
};

// Styles remain the same, Platform.OS check will now work
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 35 : 60,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  profileTextContainer: {
      marginLeft: 10,
  },
  greeting: {
      color: COLORS.lightGray,
      fontSize: 14,
  },
  userName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 100, // Smaller logo in header
    height: 40,
    resizeMode: 'contain',
  },
   balancePointsContainer: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       paddingHorizontal: 15,
       marginVertical: 15,
   },
   balanceBox: {
       backgroundColor: COLORS.secondary,
       paddingVertical: 10,
       paddingHorizontal: 20,
       borderRadius: 15,
       alignItems: 'center',
       flex: 1, // Take half width
       marginRight: 5,
   },
   pointsBox: {
       backgroundColor: COLORS.secondary,
       paddingVertical: 10,
       paddingHorizontal: 20,
       borderRadius: 15,
       alignItems: 'center',
        flex: 1, // Take half width
        marginLeft: 5,
   },
   balanceLabel: {
       color: COLORS.primary,
       fontSize: 12,
   },
   balanceAmount: {
       color: COLORS.primary,
       fontSize: 18,
       fontWeight: 'bold',
   },
    pointsLabel: {
       color: COLORS.primary,
       fontSize: 12,
   },
   pointsAmount: {
       color: COLORS.primary,
       fontSize: 18,
       fontWeight: 'bold',
   },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Space before button
  },
   jeepneyArea: {
       alignItems: 'center',
       justifyContent: 'center',
       minHeight: 180, // Ensure space for graphic or text
       marginBottom: 20,
   },
  jeepneyGraphic: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
  },
   findingContainer: {
       alignItems: 'center',
       justifyContent: 'center',
       padding: 20,
       backgroundColor: COLORS.primary, // Can be slightly different bg if needed
       borderRadius: 10,
       width: '90%',
   },
   findingText: {
       marginTop: 10,
       color: COLORS.white,
       fontSize: 16,
   },
    findingTextBold: {
       color: COLORS.white,
       fontSize: 18,
       fontWeight: 'bold',
       marginBottom: 15,
   },
   jeepneyItem: {
       backgroundColor: COLORS.secondary,
       padding: 15,
       borderRadius: 10,
       width: '100%',
       marginBottom: 10,
       alignItems: 'center',
   },
   jeepneyItemText: {
       color: COLORS.primary,
       fontSize: 16,
       fontWeight: 'bold',
   },
  routeContainer: {
    backgroundColor: COLORS.primary, // Same background
    padding: 5, // Minimal padding
    borderRadius: 10,
     marginBottom: 20,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  routeLabel: {
    color: COLORS.lightGray,
    fontSize: 14,
    width: 60, // Fixed width for labels like "From:", "To:"
  },
   passengerLabel: {
        color: COLORS.lightGray,
        fontSize: 14,
        marginRight: 10,
   },
  routeInput: {
    flex: 1, // Take remaining space
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
   passengerInput: {
      backgroundColor: COLORS.secondary,
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderRadius: 10,
      minWidth: 50, // Ensure minimum width for number
      alignItems: 'center',
   },
  routeText: {
    color: COLORS.primary,
    fontSize: 15,
  },
  passengerText: {
       color: COLORS.primary,
       fontSize: 15,
       fontWeight: 'bold',
   },
    buttonContainer: {
        paddingHorizontal: 30,
        paddingBottom: Platform.OS === 'ios' ? 30 : 20, // Adjust for potential safe area issues / tab bar overlap
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: COLORS.darkGray,
        backgroundColor: COLORS.primary, // Match background
    }
});

export default HomeScreen;