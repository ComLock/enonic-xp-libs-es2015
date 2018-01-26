/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */

// __ is an external
/*const __ = {
  newBean: () => {
    return { generatePassword: () => 'password' };
  },
  toNativeObject: a => a
};*/


export function disposer(func) {
  return __.disposer(func);
}


/* export function newBean(className) {
  return __.newBean(className);
} */
// NOTE API extended, might break future addition
export function newBean(className, params = {}) {
  return { ...__.newBean(className), params };
}


export function nullOrValue(value) {
  return __.nullOrValue(value);
}


export function registerMock(name, value) {
  return __.registerMock(name, value);
}


export function toNativeObject(value) {
  return __.toNativeObject(value);
}


export function toScriptValue(value) {
  return __.toScriptValue(value);
}
