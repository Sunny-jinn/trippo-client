import CustomButton from '@/components/common/CustomButton';
import CustomHeader from '@/components/common/CustomHeader';
import CustomInputField from '@/components/common/CustomInputField';
import {colors} from '@/constants';
import React, {useRef} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SearchScreenProps {}

const SearchScreen = ({}: SearchScreenProps) => {
  const inputRef = useRef<TextInput | null>(null);

  const pressHandler = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      <StatusBar backgroundColor={colors.WHITE} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <CustomHeader title="Search" />
        <Pressable onPress={pressHandler}>
          <View style={styles.searchInputContainer}>
            <Ionicons
              style={styles.searchIcon}
              name="search-outline"
              size={25}
              color={colors.GRAY_700}
            />
            <TextInput
              ref={inputRef}
              style={styles.searchInputBox}
              placeholder="Search Places"
            />
          </View>
        </Pressable>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Recent searches</Text>
          <Pressable style={styles.bottomClearButton}>
            <Text style={styles.bottomClearText}>Clear all</Text>
          </Pressable>
        </View>
        <ScrollView>
          <View style={styles.itemListContainer}>
            <View style={styles.itemBox}>
              <View style={styles.thumbnailContainer}>
                <Image
                  source={require('@/assets/search_thumbnail.png')}
                  style={styles.itemThumbnail}
                />
              </View>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemNameText}>Niladri Reservoir</Text>
                <View style={styles.itemLocationBox}>
                  <Ionicons
                    name="location-outline"
                    size={14}
                    color={colors.GRAY_700}
                  />
                  <Text style={styles.itemLocationText}>
                    Tekergat, Sunamgnj
                  </Text>
                </View>
                <Text style={styles.itemLocationText}>2024.03.04</Text>
              </View>
            </View>
            <View style={styles.itemBox}>
              <View style={styles.thumbnailContainer}>
                <Image
                  source={require('@/assets/search_thumbnail.png')}
                  style={styles.itemThumbnail}
                />
              </View>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemNameText}>Niladri Reservoir</Text>
                <View style={styles.itemLocationBox}>
                  <Ionicons
                    name="location-outline"
                    size={14}
                    color={colors.GRAY_700}
                  />
                  <Text style={styles.itemLocationText}>
                    Tekergat, Sunamgnj
                  </Text>
                </View>
                <Text style={styles.itemLocationText}>2024.03.04</Text>
              </View>
            </View>
          </View>
          <View style={styles.searchPlaceContainer}>
            <View style={{width: '35%', height: '100%', marginRight: 14}}>
              <Image
                source={require('@/assets/search_thumbnail.png')}
                style={styles.searchPlaceThumbnail}
              />
            </View>
            <View style={styles.searchPlaceBox}>
              <View style={styles.searchPlaceNameBox}>
                <Text style={styles.searchPlaceName}>Jeju Osung</Text>
                <Ionicons
                  style={{marginLeft: 'auto'}}
                  name="chevron-forward-outline"
                  size={20}
                  color={colors.GRAY_700}
                />
              </View>
              <View style={styles.searchPlaceLocationBox}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color={colors.GRAY_700}
                />
                <Text style={styles.searchPlaceLocationText}>
                  Tekergat, Sunamgnj
                </Text>
              </View>
              <View style={styles.addScheduleContainer}>
                <Pressable style={styles.addScheduleButton}>
                  <Text style={styles.addScheduleButtonText}>Add schedule</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.searchPlaceContainer}>
            <View style={{width: '35%', height: '100%', marginRight: 14}}>
              <Image
                source={require('@/assets/search_thumbnail.png')}
                style={styles.searchPlaceThumbnail}
              />
            </View>
            <View style={styles.searchPlaceBox}>
              <View style={styles.searchPlaceNameBox}>
                <Text style={styles.searchPlaceName}>Jeju Osung</Text>
                <Ionicons
                  style={{marginLeft: 'auto'}}
                  name="chevron-forward-outline"
                  size={20}
                  color={colors.GRAY_700}
                />
              </View>
              <View style={styles.searchPlaceLocationBox}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color={colors.GRAY_700}
                />
                <Text style={styles.searchPlaceLocationText}>
                  Tekergat, Sunamgnj
                </Text>
              </View>
              <View style={styles.addScheduleContainer}>
                <Pressable style={styles.addScheduleButton}>
                  <Text style={styles.addScheduleButtonText}>Add schedule</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchInputContainer: {
    marginTop: 30,
    backgroundColor: colors.GRAY_500,
    borderRadius: 16,
    paddingVertical: 5,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginLeft: 2,
    marginRight: 16,
  },
  searchInputBox: {
    color: colors.GRAY_700,
    fontSize: 16,
    fontWeight: '400',
  },
  bottomContainer: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
  },
  bottomClearButton: {
    marginLeft: 'auto',
  },
  bottomClearText: {
    color: colors.ORANGE,
    fontSize: 16,
    fontWeight: '600',
  },
  itemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemBox: {
    width: '48%',
    aspectRatio: 0.74,
    marginBottom: 16,
    padding: 12,
    borderRadius: 16,
    backgroundColor: colors.WHITE,

    shadowColor: 'rgba(180, 188, 201, 0.92)',
    elevation: 10,
  },
  thumbnailContainer: {
    width: '100%',
    aspectRatio: 1.05,
  },
  itemTextContainer: {
    gap: 6,
    marginTop: 8,
  },
  itemThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  itemNameText: {
    fontSize: 14,
    color: colors.BLACK,
    fontWeight: '600',
  },
  itemLocationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4.75,
  },
  itemLocationText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.GRAY_700,
  },
  searchPlaceBox: {
    flex: 1,
    justifyContent: 'center',
  },
  searchPlaceContainer: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    borderRadius: 16,
    backgroundColor: colors.WHITE,

    shadowColor: 'rgba(180, 188, 201, 0.92)',
    elevation: 10,
  },
  searchPlaceThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  searchPlaceNameBox: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchPlaceName: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
  },
  searchPlaceLocationBox: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  searchPlaceLocationText: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.GRAY_700,
  },
  addScheduleContainer: {
    marginTop: 'auto',
    height: 26,
  },
  addScheduleButton: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.ORANGE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addScheduleButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.WHITE,
  },
});

export default SearchScreen;
