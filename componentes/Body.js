import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import stylesFonte from '../styles.js';

const Body = () => {
  return (
    <View>
      <View
        style={styles.view}
      >
        <Image
          style={{ width: 90, height: 90 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien
          lacus, elementum vel lacus at, molestie mollis mauris. Pellentesque
          suscipit tincidunt quam quis gravida. Praesent id leo odio. Mauris sed
          nunc ligula. Donec id pulvinar mauris. Integer consectetur aliquet
          ante et finibus. Suspendisse at purus sit amet augue sodales congue et
          egestas diam. Nullam vitae leo efficitur, luctus quam ut, volutpat
          leo. Donec at nunc in ex maximus rhoncus ac porta orci. Pellentesque
          pulvinar, ligula vel vestibulum lacinia, tortor felis auctor dui, at
          aliquam metus sapien in neque. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu
          tortor rhoncus, non fringilla leo aliquet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed sapien lacus, elementum vel lacus at,
          molestie mollis mauris. Pellentesque suscipit tincidunt quam quis
          gravida. Praesent id leo odio. Mauris sed nunc ligula. Donec id
          pulvinar mauris. Integer consectetur aliquet ante et finibus.
          Suspendisse at purus sit amet augue sodales congue et egestas diam.
          Nullam vitae leo efficitur, luctus quam ut, volutpat leo. Donec at
          nunc in ex maximus rhoncus ac porta orci. Pellentesque pulvinar,
          ligula vel vestibulum lacinia, tortor felis auctor dui, at aliquam
          metus sapien in neque. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu
          tortor rhoncus, non fringilla leo aliquet
        </Text>
      </View>
      <View
        style={styles.view}
      >
        <Image
          style={{ width: 90, height: 90 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={stylesFonte.fontStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien
          lacus, elementum vel lacus at, molestie mollis mauris. Pellentesque
          suscipit tincidunt quam quis gravida. Praesent id leo odio. Mauris sed
          nunc ligula. Donec id pulvinar mauris. Integer consectetur aliquet
          ante et finibus. Suspendisse at purus sit amet augue sodales congue et
          egestas diam. Nullam vitae leo efficitur, luctus quam ut, volutpat
          leo. Donec at nunc in ex maximus rhoncus ac porta orci. Pellentesque
          pulvinar, ligula vel vestibulum lacinia, tortor felis auctor dui, at
          aliquam metus sapien in neque. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu
          tortor rhoncus, non fringilla leo aliquet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed sapien lacus, elementum vel lacus at,
          molestie mollis mauris. Pellentesque suscipit tincidunt quam quis
          gravida. Praesent id leo odio. Mauris sed nunc ligula. Donec id
          pulvinar mauris. Integer consectetur aliquet ante et finibus.
          Suspendisse at purus sit amet augue sodales congue et egestas diam.
          Nullam vitae leo efficitur, luctus quam ut, volutpat leo. Donec at
          nunc in ex maximus rhoncus ac porta orci. Pellentesque pulvinar,
          ligula vel vestibulum lacinia, tortor felis auctor dui, at aliquam
          metus sapien in neque. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu
          tortor rhoncus, non fringilla leo aliquet
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view:{ flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 30 },
  text:{ width: "70%", paddingLeft: 20, paddingRight: 20 }
});

export default Body;
