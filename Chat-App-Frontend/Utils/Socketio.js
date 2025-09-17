/*import {io} from "socket.io-client";

export const createSocketConnection = () => {
  return io("http://localhost:9000");
}
*/
/*
import { io } from "socket.io-client";

export const createSocketConnection = () => {
  return io("https://chat-app-backend-2-ab1j.onrender.com", {
    transports: ["websocket"], // force websocket (avoid long polling spam)
  });
};
*/

import { io } from "socket.io-client";

export const createSocketConnection = () => {
  return io("https://chat-app-backend-2-ab1j.onrender.com", {
    transports: ["websocket"],
    withCredentials: true, // ✅ optional but recommended
  });
};