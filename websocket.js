import {
  newBean
} from './double-underscore';


function newWebSocketManagerBean() {
  return newBean('com.enonic.xp.lib.websocket', 'WebSocketManagerBean');
}


export function addToGroup(group, id) {
  newWebSocketManagerBean.addToGroup(group, id);
}


export function removeFromGroup(group, id) {
  newWebSocketManagerBean.removeFromGroup(group, id);
}


export function sendToSocket(id, message) {
  newWebSocketManagerBean.send(id, message);
}


export const send = sendToSocket; // Backwards compatibility


export function sendToGroup(group, message) {
  newWebSocketManagerBean.sendToGroup(group, message);
}


export const WebSocket = {
  addToGroup,
  removeFromGroup,
  send: sendToSocket,
  sendToGroup
  // sendToSocket
};


export default WebSocket;
