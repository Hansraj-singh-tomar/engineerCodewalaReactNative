// npm install --save react-native-responsive-dimensions

import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  // SectionList,
  TouchableOpacity,
  Linking,
  Alert
} from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Resume = () => {
  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              height: responsiveHeight(20), // 50% of window height
            }}
          >
            <Image
              source={require("../../assets/Images/resume_background2.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <View
            style={{
              width: responsiveWidth(20),
              height: responsiveHeight(10),
              borderRadius: responsiveWidth(10),
              backgroundColor: "#1c1b1a",
              marginTop: -responsiveHeight(4),
              marginLeft: responsiveWidth(4),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/Images/profilePic.jpg")}
              style={{
                width: responsiveWidth(18),
                height: responsiveHeight(9),
                borderRadius: responsiveWidth(10),
              }}
            />
          </View>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight: "700",
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(1),
            }}
          >
            Hansraj Singh Tomar
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(0.6),
            }}
          >
            React and React-Native Developer
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.6),
              fontWeight: "690",
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(3),
            }}
          >
            Bio
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.8),
              // marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(0.6),
              width: "90%",
              alignSelf: "center",
              textAlign: "justify",
            }}
          >
            Hey guys, i am Hansraj Singh Tomar and i am React and React-Native
            developer. I am a fresher and looking for job in same domain. i've
            completed my master in Computer Application last year.
          </Text>

          <Text
            style={{
              fontSize: responsiveFontSize(2.6),
              fontWeight: "690",
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(3),
              marginBottom: responsiveHeight(2),
            }}
          >
            Education
          </Text>
          <View>
            <FlatList
              data={[
                {
                  collage: "APJ university, Indore(MP)",
                  date: "2022",
                  marks: "75%",
                  course: "MCA",
                  type: "PG",
                },
                {
                  collage: "Gujrati college, Indore(MP)",
                  date: "2020",
                  marks: "60%",
                  course: "BSC",
                  type: "UG",
                },
                {
                  collage: "Govt. school of Excellence, Barwani(MP)",
                  date: "2017",
                  marks: "75%",
                  course: "12th",
                  type: "12th",
                },
              ]}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      width: "100%",
                      height: responsiveHeight(10),
                      flexDirection: "row",
                      // justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          width: "20%",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          marginLeft: responsiveWidth(4),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: responsiveFontSize(4),
                            color: "#8e8e8e",
                          }}
                        >
                          {item.type}
                        </Text>
                      </View>
                      <View style={{ width: "80%" }}>
                        <Text
                          style={{
                            fontSize: responsiveFontSize(2.5),
                            fontWeight: "600",
                          }}
                        >
                          {item.collage}
                        </Text>
                        <Text style={{ marginTop: responsiveWidth(1) }}>
                          {`${item.course}, ${item.marks} ,${item.date}`}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: responsiveFontSize(2.6),
              fontWeight: "690",
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(3),
              marginBottom: responsiveHeight(2),
            }}
          >
            Skills
          </Text>

          <View style={{ alignItems: "center" }}>
            <FlatList
              numColumns={2}
              data={["HTML/CSS", "JavaScript", "React/Redux", "React-Native", "Node", "MongoDB"]}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      width: responsiveWidth(42),
                      height: responsiveHeight(5),
                      borderWidth: 0.2,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#8e8e8e",
                      margin: responsiveWidth(2),
                      borderRadius: responsiveWidth(2),
                    }}
                  >
                    <Text>{item}</Text>
                  </View>
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: responsiveFontSize(2.6),
              fontWeight: "690",
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(3),
              marginBottom: responsiveHeight(2),
            }}
          >
            Experience
          </Text>
          <View>
            <FlatList
              data={[
                {
                  company: "Flipkart Pvt. Ltd, Indore(MP)",
                  startDate: "2020",
                  endDate: "2021",
                  logo: require("../../assets/Images/flipkart.png"),
                  profile: "software Eng.",
                },
                {
                  company: "PAYTM Pvt. Ltd, Indore(MP)",
                  startDate: "2020",
                  endDate: "2021",
                  logo: require("../../assets/Images/paytm.png"),
                  profile: "software Eng.",
                },
                {
                  company: "NIKE Pvt. Ltd, Indore(MP)",
                  startDate: "2020",
                  endDate: "2021",
                  logo: require("../../assets/Images/nike.png"),
                  profile: "software Eng.",
                },
              ]}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      width: "100%",
                      height: responsiveHeight(10),
                      flexDirection: "row",
                      // justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          width: "20%",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          marginLeft: responsiveWidth(4),
                        }}
                      >
                        <Image
                          source={item.logo}
                          style={{
                            width: responsiveWidth(18),
                            height: responsiveHeight(9),
                            borderRadius: responsiveWidth(10),
                          }}
                        />
                      </View>
                      <View style={{ width: "80%" }}>
                        <Text
                          style={{
                            fontSize: responsiveFontSize(2.5),
                            fontWeight: "600",
                          }}
                        >
                          {item.company}
                        </Text>
                        <Text style={{ marginTop: responsiveWidth(1) }}>
                          {`from ${item.startDate} to ${item.endDate}`}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: responsiveHeight(40),
          right: responsiveWidth(1),
        }}
      >
        <TouchableOpacity
          style={{
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            borderRadius: responsiveWidth(6),
            backgroundColor: "#fff",
            marginTop: responsiveHeight(2),
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => Alert.alert("hansrajput033@gmail.com")}
        >
          <Image
            source={require("../../assets/Images/email.png")}
            style={{ 
              width: responsiveWidth(6), 
              height: responsiveWidth(6) 
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            borderRadius: responsiveWidth(6),
            backgroundColor: "#fff",
            marginTop: responsiveHeight(2),
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => Linking.openURL("https://github.com/Hansraj-singh-tomar")}
        >
          <Image
            source={require("../../assets/Images/github.png")}
            style={{ 
              width: responsiveWidth(6), 
              height: responsiveWidth(6) 
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            borderRadius: responsiveWidth(6),
            backgroundColor: "#fff",
            marginTop: responsiveHeight(2),
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => Alert.alert("+918085649497")}
        >
          <Image
            source={require("../../assets/Images/phone.png")}
            style={{ 
              width: responsiveWidth(6), 
              height: responsiveWidth(6) 
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Resume;
