import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MediaCard from './MediaCard';

export default function HorizontalCarousel({ title, data = [], onItemPress }) {
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={{ color: '#fff', fontSize: 18, marginLeft: 6, marginBottom: 8 }}>
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 6, paddingRight: 12 }}
      >
        {data.map(item => (
          <MediaCard key={item.id} item={item} onPress={onItemPress} />
        ))}
      </ScrollView>
    </View>
  );
}
