const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

// The sockets of two players
const players = [];

// The chosen value of two players
const player_chosen = [false, false];

// The number of player
let count = 0;

// The round index
let round = 1;

wss.on("connection", function connection(ws) {
	ws.on("error", console.error);

	players[count++] = ws;

	if (count == 2) {
		players[0].send(`Round ${round}`);
		players[1].send(`Round ${round}`);
	}

	ws.on("message", function message(data) {
		// Only process message event if there are enough players
		if (count < 2) {
			return;
		}

		// Convert to string
		data = `${data}`;

		for (let i = 0; i < 2; i++) {
			// Determine the sender
			if (ws == players[i]) {
				// The sender has not sent before?
				if (player_chosen[i] == false) {
					player_chosen[i] = data;
				}
			}
			// If two players have chosen
			// Announce result and start next round
			if (player_chosen[0] != false && player_chosen[1] != false) {
				if (player_chosen[0] == player_chosen[1]) {
					player_chosen[0] = player_chosen[1] = false;
					players[0].send(`Round ${round}: Draw. Round ${round + 1}`);
					players[1].send(`Round ${round}: Draw. Round ${round + 1}`);
				} else if (
					(player_chosen[0] == "R" && player_chosen[1] == "S") ||
					(player_chosen[0] == "S" && player_chosen[1] == "P") ||
					(player_chosen[0] == "P" && player_chosen[1] == "R")
				) {
					player_chosen[0] = player_chosen[1] = false;
					players[0].send(`Round ${round}: Player 1 wins. Round ${round + 1}`);
					players[1].send(`Round ${round}: Player 1 wins. Round ${round + 1}`);
				} else {
					player_chosen[0] = player_chosen[1] = false;
					players[0].send(`Round ${round}: Player 2 wins. Round ${round + 1}`);
					players[1].send(`Round ${round}: Player 2 wins. Round ${round + 1}`);
				}
				round++;
			}
		}
	});
});
