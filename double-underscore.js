export function newBean(packageName, className, params = {}) {
  return { ...__.newBean(`${packageName}.${className}`), params };
}


export function toNativeObject(value) {
  return __.toNativeObject(value);
}


export function toScriptValue(value) {
  return __.toScriptValue(value);
}
