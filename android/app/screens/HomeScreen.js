import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import HorizontalCarousel from '../components/HorizontalCarousel';

const DUMMY = [
  { id: '1', title: 'Red Horizon', poster: 'https://i.imgur.com/8Km9tLL.jpg', url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
  { id: '2', title: 'City of Ghosts', poster: 'https://i.imgur.com/7s3D2fM.jpg', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
  { id: '3', title: 'Late Night Show', poster: 'https://i.imgur.com/6Iej2c3.jpg', url: 'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8' },
  { id: '4', title: 'Ocean Deep', poster: 'https://i.imgur.com/2nCt3Sbl.jpg', url: 'https://moorthy-cdn.s3.amazonaws.com/sample.m3u8' },
];

export default function HomeScreen({ navigation }) {
  const isTV = Platform.isTV;

  function handleItemPress(item) {
    navigation.navigate('Player', { item });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#0b0b0b', paddingTop: StatusBar.currentHeight || 24 }}>
      <View style={{ padding: 18 }}>
        <Text style={{ color: '#e50914', fontSize: 28, fontWeight: '700' }}>KingFlix</Text>
        <Text style={{ color: '#fff', fontSize: 16, marginTop: 6 }}>
          {isTV ? 'Top picks for your TV' : 'Top picks for you'}
        </Text>
      </View>

      <View style={{ flex: 1, paddingLeft: 6 }}>
        <HorizontalCarousel title="Trending Now" data={DUMMY} onItemPress={handleItemPress} />
        <HorizontalCarousel title="New Releases" data={DUMMY} onItemPress={handleItemPress} />
        <HorizontalCarousel title="Watch Again" data={DUMMY} onItemPress={handleItemPress} />
      </View>
    </View>
  );
}
