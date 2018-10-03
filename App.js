/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from "react-native";
import compare from "./core";
export default class App extends Component {
	optionsAndroid = {
		1: "pedra",
		2: "papel",
		3: "tesoura",
		4: "largato",
		5: "spock"
	};

	options = [
		{ id: 1, value: "pedra", img: require("./img/pedra_vs.png") },
		{ id: 2, value: "papel", img: require("./img/papel_vs.png") },
		{ id: 3, value: "tesoura", img: require("./img/tesoura_vs.png") },
		{ id: 4, value: "largato", img: require("./img/lagarto_vs.png") },
		{ id: 5, value: "spock", img: require("./img/spock_vs.png") }
	];

	rules = [require("./img/header_p.png"), require("./img/regra.png")];

	constructor(props) {
		super(props);

		this.state = {
			currentRule: 0,
			android: { score: 0, selected: "" },
			player: { score: 0, selected: "" }
		};

		this.reset = this.reset.bind(this);
		this.changeRules = this.changeRules.bind(this);
	}
	reset() {
		this.setState({
			android: {
				score: 0,
				selected: ""
			},
			player: {
				score: 0,
				selected: ""
			}
		});
	}
	findSelected(value) {
		if (!value) return this.options[0];
		return this.options.find(option => option.value === value);
	}

	changeRules() {
		this.setState({ currentRule: this.state.currentRule === 0 ? 1 : 0 });
	}
	chosen(option) {
		const id_rand = Math.floor(
			Math.random() * Object.keys(this.optionsAndroid).length + 1
		);
		const computer = this.optionsAndroid[id_rand];

		const { android = false, player = false } = compare(option, computer) || {};

		let scorePlayer = this.state.player.score;
		let scoreAndroid = this.state.android.score;

		let selectedPlayer = option;
		let selectedAndroid = computer;

		if (android) {
			scoreAndroid = +scoreAndroid + 1;
		} else if (player) {
			scorePlayer = +scorePlayer + 1;
		}

		this.setState({
			...this.state,
			player: {
				score: scorePlayer,
				selected: selectedPlayer
			},
			android: {
				score: scoreAndroid,
				selected: selectedAndroid
			}
		});
	}
	renderOptions() {
		return this.options.map((option, index) => {
			return (
				<TouchableOpacity key={index} onPress={() => this.chosen(option.value)}>
					<Image
						style={{ width: 60, height: 60, marginHorizontal: 5 }}
						source={option.img}
					/>
				</TouchableOpacity>
			);
		});
	}
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={this.changeRules}>
						<Text style={styles.headerTitle}>GAME </Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.reset}>
						<Image source={require("./img/reset.png")} />
					</TouchableOpacity>
				</View>
				<View />

				<View style={styles.body}>
					<View style={styles.box}>
						<Image
							style={{ width: "100%", height: 200, resizeMode: "stretch" }}
							source={this.rules[this.state.currentRule]}
						/>
					</View>
					<View style={styles.options}>{this.renderOptions()}</View>
					<View style={styles.containerVs}>
						<Image
							style={{ width: "100%", height: 75, resizeMode: "contain" }}
							source={require("./img/bar_versus2.png")}
						/>
						<View style={styles.vs}>
							<Image
								style={styles.buttonIcon}
								source={this.findSelected(this.state.player.selected).img}
							/>
							<Image
								style={{ width: 100, height: 50, resizeMode: "contain" }}
								source={require("./img/versus.png")}
							/>
							<Image
								style={styles.buttonIcon}
								source={this.findSelected(this.state.android.selected).img}
							/>
						</View>
						<View style={styles.containerScore}>
							<View style={styles.score}>
								<Text style={styles.scoreText}>
									{this.state.player.score || 0}
								</Text>
							</View>
							<View style={styles.score}>
								<Text style={styles.scoreText}>
									{this.state.android.score || 0}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		elevation: 4,
		margin: 10
	},
	buttonIcon: {
		height: 80,
		resizeMode: "contain"
	},
	vs: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	slider: {},
	options: {
		marginVertical: 5,
		flex: 0.2,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	scoreText: {
		fontSize: 30,
		color: "white",
		textAlign: "center"
	},
	containerScore: {
		flex: 1,
		marginTop: 5,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row"
	},
	score: {
		marginHorizontal: 45,
		backgroundColor: "#423680",
		width: 100,
		height: 40,
		borderRadius: 30
	},
	containerVs: {
		elevation: 4,
		flex: 1,
		// padding: 5,
		margin: 10,
		paddingBottom: 15,
		backgroundColor: "white",
		// justifyContent: "space-between",
		alignItems: "center"
	},

	body: {
		flex: 0.9
	},
	headerTitle: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold"
	},
	header: {
		flex: 1,
		padding: 10,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#1d154e"
	},
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#42367f"
	}
});
