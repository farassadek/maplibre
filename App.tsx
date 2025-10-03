import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MapLibreGL from '@maplibre/maplibre-react-native';

export default function App() {
  // Log keys once on mount
  useEffect(() => {
    console.log('MapLibreGL keys:', MapLibreGL && Object.keys(MapLibreGL));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
        <MapLibreGL.MapView style={styles.map}>
          <MapLibreGL.Camera zoomLevel={12} centerCoordinate={[-74.006, 40.7128]} />
          <MapLibreGL.RasterSource
            id="osm"
            tileSize={256}
            urlTemplates={['https://tile.openstreetmap.org/{z}/{x}/{y}.png']}
          >
            <MapLibreGL.RasterLayer id="osmLayer" sourceID="osm" />
          </MapLibreGL.RasterSource>
        </MapLibreGL.MapView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

