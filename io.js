import {
  newBean,
  toNativeObject
} from './double-underscore';


const IO_BEAN = newBean('com.enonic.xp.lib.io', 'IOHandlerBean');


class Resource {
  constructor(native) {
    this.res = native;
  }

  exists() {
    return this.res.exists();
  }

  getSize() {
    return this.res.getSize();
  }

  getStream() {
    return this.res.getBytes();
  }
} // class Resource


export function getMimeType(name) {
  return IO_BEAN.getMimeType(name);
}


export function getResource(key) {
  return new Resource(IO_BEAN.getResource(key));
}


export function getSize(stream) {
  return IO_BEAN.getSize(stream);
}


export function newStream(text) {
  return IO_BEAN.newStream(text);
}


export function processLines(stream, func) {
  return IO_BEAN.processLines(stream, func);
}


export function readLines(stream) {
  return toNativeObject(IO_BEAN.readLines(stream));
}


export function readText(stream) {
  return IO_BEAN.readText(stream);
}


export const Io = {
  getMimeType,
  getResource,
  getSize,
  newStream,
  processLines,
  readLines,
  readText
};


export default Io;
