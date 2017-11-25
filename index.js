const CONTENT_PACKAGE = 'com.enonic.xp.lib.content';


export function contentGet({
  key,
  branch = null
}) {
  return __.toNativeObject({ ...__.newBean(`${CONTENT_PACKAGE}.GetContentHandler`), branch, key }.execute());
  /*
    return __.toNativeObject(Object.assign(__.newBean(`${CONTENT_PACKAGE}.GetContentHandler`), {
      branch,
      key
    }).execute());
  *//*
    const bean = __.newBean(`${CONTENT_PACKAGE}.GetContentHandler`);
    bean.key = key;
    bean.branch = branch;
    return __.toNativeObject(bean.execute());
  */
}


export function getAttachments({
  key = null
} = {}) {
  const bean = __.newBean(`${CONTENT_PACKAGE}.GetAttachmentsHandler`);
  bean.key = key;
  return __.toNativeObject(bean.execute());
}
