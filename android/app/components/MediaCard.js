import React, { useState } from 'react';
import { Pressable, Image, Text } from 'react-native';

export default function MediaCard({ item, onPress, width = 220, height = 130 }) {
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      onPress={() => onPress(item)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      android_tvFocusable={true}
      hasTVPreferredFocus={false}
      style={[
        { width, marginRight: 12, alignItems: 'center' },
      ]}
      accessible={true}
      accessibilityLabel={item.title}
    >
      <Image
        source={{ uri: item.poster }}
        style={{
          width,
          height,
          borderRadius: 8,
          transform: focused ? [{ scale: 1.06 }] : [{ scale: 1 }],
          borderWidth: focused ? 3 : 0,
          borderColor: focused ? '#e50914' : 'transparent',
        }}
        resizeMode="cover"
      />
      <Text style={{
        color: '#fff',
        marginTop: 8,
        width,
        textAlign: 'left',
      }} numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}
