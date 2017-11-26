export function disposer(func) {
  return __.disposer(func);
}


// TODO I broke the API here, I probably shouldn't do that.
export function newBean(packageName, className, params = {}) {
  return { ...__.newBean(`${packageName}.${className}`), params };
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
