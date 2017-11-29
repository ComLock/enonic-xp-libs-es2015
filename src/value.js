const GeoPointType = Java.type('com.enonic.xp.util.GeoPoint');
const InstantType = Java.type('java.time.Instant');
const LocalDateType = Java.type('java.time.LocalDate');
const LocalDateTimeType = Java.type('java.time.LocalDateTime');
const LocalTimeType = Java.type('java.time.LocalTime');
const ReferenceType = Java.type('com.enonic.xp.util.Reference');
const BinaryReferenceType = Java.type('com.enonic.xp.util.BinaryReference');
const BinaryAttachmentType = Java.type('com.enonic.xp.node.BinaryAttachment');


function pad(number) {
  return (number < 10) ? `0${number}` : number;
}


function toLocalDateString(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}


function toLocalTimeString(date) {
  return date.toTimeString().substring(0, 8);
}


function toLocalDateTimeString(date) {
  return `${toLocalDateString(date)}T${toLocalTimeString(date)}`;
}


export function binary(name, stream) {
  return new BinaryAttachmentType(BinaryReferenceType.from(name), stream);
}


export function geoPoint(lat, lon) {
  return new GeoPointType(lat, lon);
}


export function geoPointString(value) {
  return GeoPointType.from(value);
}


export function instant(value) {
  if (typeof value === 'string') {
    return InstantType.parse(value);
  } else if (value.toISOString) {
    return InstantType.parse(value.toISOString());
  }
  return InstantType.parse(value.toString());
}


export function localDate(value) {
  if (typeof value === 'string') {
    return LocalDateType.parse(value);
  } else if (value.toISOString) {
    return LocalDateType.parse(toLocalDateString(value));
  }
  return LocalDateType.parse(value.toString());
}


export function localDateTime(value) {
  if (typeof value === 'string') {
    return LocalDateTimeType.parse(value);
  } else if (value.toISOString) {
    return LocalDateTimeType.parse(toLocalDateTimeString(value));
  }
  return LocalDateTimeType.parse(value.toString());
}


export function localTime(value) {
  if (typeof value === 'string') {
    return LocalTimeType.parse(value);
  } else if (value.toISOString) {
    return LocalTimeType.parse(toLocalTimeString(value));
  }
  return LocalTimeType.parse(value.toString());
}


export function reference(value) {
  return ReferenceType.from(value);
}


export const Value = {
  binary,
  geoPoint,
  geoPointString,
  instant,
  localDate,
  localDateTime,
  localTime,
  reference
};


export default Value;
