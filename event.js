import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';


const EVENT_PACKAGE = 'com.enonic.xp.lib.event';


export function listener({
  callback,
  localOnly = false,
  type = ''
}) {
  const helper = newBean(`${EVENT_PACKAGE}.EventListenerHelper`, {
    listener: event => callback(toNativeObject(event)),
    localOnly,
    type
  });
  helper.register();
}


export function send({
  data = {},
  distributed = false,
  type = 'test'
} = {}) {
  const helper = newBean(`${EVENT_PACKAGE}.EventSenderHelper`, {
    data: toScriptValue(data),
    distributed,
    type
  });
  helper.send();
}


export const sendEvent = send;


export const Event = {
  listener,
  send
};


export default Event;
