/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MapLibreGL from '@maplibre/maplibre-react-native';
import { MapView, Camera, RasterSource, RasterLayer, RasterLayerStyle } from "@maplibre/maplibre-react-native";

export default function App() {
  // Log keys once on mount
  useEffect(() => {
    console.log('MapLibreGL keys:', MapLibreGL && Object.keys(MapLibreGL));
  }, []);

  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
      <MapView style={styles.map}>
        <Camera zoomLevel={12} centerCoordinate={[-74.006, 40.7128]} />
        <RasterSource
          id="osm"
          tileSize={256}
          tileUrlTemplates={['https://tile.openstreetmap.org/{z}/{x}/{y}.png']}
        >
          <RasterLayer id="osmLayer" sourceID="osm" />
        </RasterSource>
      </MapView>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});


// import { MapView, Camera, RasterSource, RasterLayer, RasterLayerStyle } from "@maplibre/maplibre-react-native";
// export function ExampleMap() {
//   return <MapView style={{ flex: 1 }} />;
// }

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       {/* <AppContent /> */}
//       <ExampleMap />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
