const CONTENT_PACKAGE = 'com.enonic.xp.lib.content';


export function getContentByKey({
  key,
  branch = null,
  toNativeObject,
  newBean
}) {
  return toNativeObject(newBean(`${CONTENT_PACKAGE}.GetContentHandler`, {
    branch,
    key
  }).execute());
}


export function query({
  aggregations = {},
  branch = null,
  contentTypes = [],
  count = null,
  filters = {},
  query = null, // eslint-disable-line no-shadow
  sort = null,
  start = null,
  toNativeObject,
  toScriptValue,
  newBean
} = {}) {
  return toNativeObject(newBean(`${CONTENT_PACKAGE}.QueryContentHandler`, {
    aggregations: toScriptValue(aggregations),
    branch,
    contentTypes: toScriptValue(contentTypes),
    count,
    filters: toScriptValue(filters),
    query,
    sort,
    start
  }).execute());
}
