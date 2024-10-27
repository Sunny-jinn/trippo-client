import CustomBottomTap from '@/components/common/CustomBottomTap';
import CustomHeader from '@/components/common/CustomHeader';
import CustomSearchField from '@/components/common/CustomSearchField';
import CustomText from '@/components/common/CustomText';
import {colors, communityNavigations} from '@/constants';
import {CommunityStackParamList} from '@/navigations/stack/CommunityStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useRef, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface CommunityHomeScreenProps {}

const CommunityHomeScreen = ({}: CommunityHomeScreenProps) => {
  const inputRef = useRef(null);
  const [isSearching, setIsSearching] = useState<Boolean>(false);

  const navigation =
    useNavigation<StackNavigationProp<CommunityStackParamList>>();

  const searchPressHandler = () => {
    setIsSearching(true);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <CustomHeader title="Community" hide />
          <View style={styles.communityContainer}>
            <CustomSearchField
              placeholder="Search"
              ref={inputRef}
              setVisible={searchPressHandler}
              returnKeyType="search"
            />
            <View style={styles.trippoPickContainer}>
              <CustomText weight="semibold" style={styles.subTitleText}>
                {!isSearching ? "Trippo's Pick" : 'Recent Search'}
              </CustomText>

              <Pressable
                style={styles.trippoPickBox}
                onPress={() =>
                  navigation.navigate(communityNavigations.POST_DETAILS)
                }>
                <CustomText weight="semibold">Niladri Reservoir</CustomText>
                <View style={styles.trippoPickBoxContents}>
                  <Text style={styles.trippoPickContentsText} numberOfLines={3}>
                    You will get a complete travel package on the beaches.
                    Packages in the form of airline tickets, recommended Hotel
                    rooms, Transport. You will get a complete travel package on
                    the beaches. Packages in the form of airline tickets,
                    recommended Hotel rooms, Transport...
                  </Text>
                </View>
                <View style={styles.trippoPickDate}>
                  <Text>2024.03.04</Text>
                  <Text>Views 3,456</Text>
                  <Text>Cmt 1,201</Text>
                </View>
                <View style={styles.trippoPickIconBox}>
                  <Image
                    source={require('@/assets/trippo_pick_icon.png')}
                    style={styles.trippoPickIcon}
                  />
                </View>
              </Pressable>

              <View style={styles.trippoPickBox}>
                <CustomText weight="semibold">Niladri Reservoir</CustomText>
                <View style={styles.trippoPickBoxContents}>
                  <Text style={styles.trippoPickContentsText} numberOfLines={3}>
                    You will get a complete travel package on the beaches.
                    Packages in the form of airline tickets, recommended Hotel
                    rooms, Transport. You will get a complete travel package on
                    the beaches. Packages in the form of airline tickets,
                    recommended Hotel rooms, Transport...
                  </Text>
                </View>
                <View style={styles.trippoPickDate}>
                  <Text>2024.03.04</Text>
                  <Text>Views 3,456</Text>
                  <Text>Cmt 1,201</Text>
                </View>
                <View style={styles.trippoPickIconBox}>
                  <Image
                    source={require('@/assets/trippo_pick_icon.png')}
                    style={styles.trippoPickIcon}
                  />
                </View>
              </View>

              <View style={styles.trippoPickBox}>
                <CustomText weight="semibold">Niladri Reservoir</CustomText>
                <View style={styles.trippoPickBoxContents}>
                  <Text style={styles.trippoPickContentsText} numberOfLines={3}>
                    You will get a complete travel package on the beaches.
                    Packages in the form of airline tickets, recommended Hotel
                    rooms, Transport. You will get a complete travel package on
                    the beaches. Packages in the form of airline tickets,
                    recommended Hotel rooms, Transport...
                  </Text>
                </View>
                <View style={styles.trippoPickDate}>
                  <Text>2024.03.04</Text>
                  <Text>Views 3,456</Text>
                  <Text>Cmt 1,201</Text>
                </View>
                <View style={styles.trippoPickIconBox}>
                  <Image
                    source={require('@/assets/trippo_pick_icon.png')}
                    style={styles.trippoPickIcon}
                  />
                </View>
              </View>

              <View>
                <CustomText weight="semibold" style={styles.communitySortText}>
                  Latest
                </CustomText>

                <View style={[styles.trippoPickBox, styles.communityBox]}>
                  <CustomText weight="semibold">Niladri Reservoir</CustomText>
                  <View style={styles.trippoPickBoxContents}>
                    <Text
                      style={styles.trippoPickContentsText}
                      numberOfLines={3}>
                      You will get a complete travel package on the beaches.
                      Packages in the form of airline tickets, recommended Hotel
                      rooms, Transport. You will get a complete travel package
                      on the beaches. Packages in the form of airline tickets,
                      recommended Hotel rooms, Transport...
                    </Text>
                  </View>
                  <View style={styles.trippoPickDate}>
                    <Text>2024.03.04</Text>
                    <Text>Views 3,456</Text>
                    <Text>Cmt 1,201</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <CustomBottomTap screen="Community" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  communityContainer: {
    marginTop: 15,
  },
  trippoPickContainer: {
    marginTop: 30,
    gap: 14,
  },
  subTitleText: {
    fontSize: 20,
    lineHeight: 28,
  },
  trippoPickBox: {
    width: '100%',
    position: 'relative',
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 17,
    borderWidth: 1,
    borderColor: colors.ORANGE,
    backgroundColor: colors.ORANGE_100,
    borderRadius: 16,

    shadowColor: colors.GRAY_700,
    elevation: 10,
  },
  trippoPickBoxContents: {
    marginTop: 6,
  },
  trippoPickContentsText: {
    color: colors.GRAY_700,
    lineHeight: 22,
    fontSize: 13,
  },
  trippoPickDate: {
    flexDirection: 'row',
    marginTop: 14,
    justifyContent: 'space-between',
  },
  trippoPickIconBox: {
    position: 'absolute',
    right: 15,
    top: 12,
    width: 20,
    height: 20,
  },
  trippoPickIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
  },
  communitySortText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 14,
    marginLeft: 'auto',
    lineHeight: 20,
    color: colors.ORANGE,
  },
  communityBox: {
    backgroundColor: colors.WHITE,
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
});

export default CommunityHomeScreen;
