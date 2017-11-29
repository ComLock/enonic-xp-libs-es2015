// Functions ordered aplhabetically and to avoid no-use-before-define


function isDefined(value) {
  return typeof value !== 'undefined';
}


function isFunction(value) {
  return typeof value === 'function';
}


function ifFunctionCallOrValue(value) {
  return isFunction(value) ? value() : value;
}


function definedOr(value, or) {
  return isDefined(value) ? value : ifFunctionCallOrValue(or);
}


export function throwRequiredParam(name) {
  throw new Error(`Parameter '${name}' is required`);
}


export function required(params, name) {
  return definedOr(params[name], () => throwRequiredParam(name));
}


export const Util = {
  required,
  throwRequiredParam
};


export default Util;
