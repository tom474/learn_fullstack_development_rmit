const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

// Assume there are two chat rooms
const room1 = new Set();
const room2 = new Set();

wss.on("connection", function connection(ws) {
	ws.on("error", console.error);

	ws.on("message", function message(data) {
		// Convert to string
		data = `${data}`;
		// Special command
		if (data.startsWith("COMMAND: ")) {
			if (data.endsWith("JOIN 1")) {
				room1.add(ws);
				room2.delete(ws);
			} else if (data.endsWith("JOIN 2")) {
				room1.delete(ws);
				room2.add(ws);
			}
			return;
		}
		const rooms = [room1, room2];
		rooms.forEach((room) => {
			if (room.has(ws)) {
				room.forEach((user) => {
					user.send(`${data}`);
				});
			}
		});
	});
});
