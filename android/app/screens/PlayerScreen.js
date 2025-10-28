import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Video from 'react-native-video';

export default function PlayerScreen({ route, navigation }) {
  const { item } = route.params || {};
  const videoRef = useRef(null);

  return (
    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}>
      <Video
        ref={videoRef}
        source={{ uri: item?.url || 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        controls={true}
        resizeMode="cover"
        onError={(e) => console.log('video error', e)}
      />

      {/* overlay simple header */}
      <View style={{ position: 'absolute', top: 30, left: 18 }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>{item?.title || 'Playing'}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 8, padding: 8, backgroundColor: '#111', borderRadius: 8 }}
        >
          <Text style={{ color: '#fff' }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
