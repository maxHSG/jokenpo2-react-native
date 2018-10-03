export default (player, computer) => {
	if (player == "pedra") {
		if (computer == "pedra") {
			return { android: false, player: false };
		} else if (computer == "papel") {
			return { android: true, player: false };
		} else if (computer == "tesoura") {
			return { android: false, player: true };
		} else if (computer == "largato") {
			return { android: false, player: true };
		} else {
			return { android: true, player: false };
		}
	}
	if (player == "papel") {
		if (computer == "pedra") {
			return { android: false, player: true };
		} else if (computer == "papel") {
			return { android: false, player: false };
		} else if (computer == "tesoura") {
			return { android: true, player: false };
		} else if (computer == "largato") {
			return { android: true, player: false };
		} else {
			return { android: false, player: true };
		}
	}
	if (player == "tesoura") {
		if (computer == "pedra") {
			return { android: true, player: false };
		} else if (computer == "papel") {
			return { android: false, player: true };
		} else if (computer == "tesoura") {
			return { android: false, player: false };
		} else if (computer == "largato") {
			return { android: false, player: true };
		} else {
			return { android: true, player: false };
		}
	}
	if (player == "largato") {
		if (computer == "pedra") {
			return { android: true, player: false };
		} else if (computer == "papel") {
			return { android: false, player: true };
		} else if (computer == "tesoura") {
			return { android: true, player: false };
		} else if (computer == "largato") {
			return { android: false, player: false };
		} else {
			return { android: false, player: true };
		}
	}
	if (player == "spock")
		if (computer == "pedra") {
			return { android: false, player: true };
		} else if (computer == "papel") {
			return { android: true, player: false };
		} else if (computer == "tesoura") {
			return { android: false, player: true };
		} else if (computer == "largato") {
			return { android: true, player: false };
		} else {
			return { android: false, player: false };
		}
};
