import { Text, View } from "react-native";
import React from "react";

const data = [
	{
		id: "123",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		image: "https://links.papareact.com/20v",
		screen: "EatsScreen",
	},
];

const NavOptions = () => {
	return (
		<View>
			<Text>NavOptions</Text>
		</View>
	);
};

export default NavOptions;
