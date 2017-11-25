const CONTENT_PACKAGE = 'com.enonic.xp.lib.content';


function newBean(packageName, className, params) {
  return { ...__.newBean(`${packageName}.${className}`), params };
}


export function contentGet({
  key,
  branch = null
}) {
  return __.toNativeObject(newBean(CONTENT_PACKAGE, 'GetContentHandler', {
    branch,
    key
  }).execute());
  /*
    return __.toNativeObject({
      ...__.newBean(`${CONTENT_PACKAGE}.GetContentHandler`), branch, key
    }.execute());
  */
}


export function getAttachments({
  key = null
} = {}) {
  return __.toNativeObject({
    ...__.newBean(`${CONTENT_PACKAGE}.GetAttachmentsHandler`), key
  }.execute());
}


export function getAttachmentStream({
  key,
  name
}) {
  const bean = __.newBean(`${CONTENT_PACKAGE}.GetAttachmentStreamHandler`);
  bean.key = key;
  bean.name = name;
  return bean.getStream();
}
