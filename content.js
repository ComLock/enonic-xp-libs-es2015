import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';


const CONTENT_PACKAGE = 'com.enonic.xp.lib.content';


export function createContent({
  branch = null,
  contentType = null,
  data = {},
  displayName = null,
  idGenerator = null,
  language = null,
  name = null,
  parentPath = null,
  requireValid = null,
  refresh = null,
  x = {}
} = {}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'CreateContentHandler', {
    branch,
    contentType,
    data: toScriptValue(data),
    displayName,
    idGenerator,
    language,
    name,
    parentPath,
    requireValid,
    refresh,
    x: toScriptValue(x)
  }).execute());
} // export function createContent


export const create = createContent; // Backwards compatibility


export function createMedia({
  branch = null,
  data = null,
  focalX = null,
  focalY = null,
  idGenerator = null,
  mimeType = null,
  name,
  parentPath = null
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'CreateMediaHandler', {
    branch,
    data,
    focalX,
    focalY,
    idGenerator,
    mimeType,
    name,
    parentPath
  }).execute());
}


export function deleteContent({
  key,
  branch = null
}) {
  return newBean(CONTENT_PACKAGE, 'DeleteContentHandler', {
    branch,
    key
  }).execute();
}


exports.delete = deleteContent; // Backwards compatibility


export function getContentByKey({
  key,
  branch = null
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'GetContentHandler', {
    branch,
    key
  }).execute());
}

export const get = getContentByKey; // Backwards compatibility


export function getAttachments({
  key = null
} = {}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'GetAttachmentsHandler', {
    key
  }).execute());
}


export function getAttachmentStream({
  key,
  name
}) {
  return newBean(CONTENT_PACKAGE, 'GetAttachmentStreamHandler', {
    key,
    name
  }).getStream();
}


export function getChildren({
  branch = null,
  count,
  key,
  sort = null,
  start
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'GetChildContentHandler', {
    branch,
    count,
    key,
    sort,
    start
  }).execute());
}


export function getPermissions({
  key
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'GetPermissionsHandler', {
    key
  }).execute());
}


export function getSiteByKey({
  key
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'GetSiteHandler', {
    key
  }).execute());
}


export const getSite = getSiteByKey; // Backwards compatibility


export function getSiteConfigByKey({
  applicationKey = null,
  key = null
} = {}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'GetSiteConfigHandler', {
    applicationKey,
    key
  }).execute());
}


export const getSiteConfig = getSiteConfigByKey; // Backwards compatibility


export function getType({
  name = null
} = {}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'ContentTypeHandler', {
    name
  }).getContentType());
}


export function getTypes() {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'ContentTypeHandler').getAllContentTypes());
}


export function modify({
  key,
  branch = null,
  editor = c => c,
  requireValid = null
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'ModifyContentHandler', {
    branch,
    key,
    editor: toScriptValue(editor),
    requireValid
  }).execute());
}


export function move({
  branch = null,
  source,
  target
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'MoveContentHandler', {
    branch,
    source,
    target
  }).execute());
}


export function publish({
  keys,
  excludeChildrenIds = [],
  includeDependencies = true,
  targetBranch,
  sourceBranch,
  schedule = {}
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'PublishContentHandler', {
    contentPublishInfo: toScriptValue(schedule),
    excludeChildrenIds,
    includeDependencies,
    keys,
    sourceBranch,
    targetBranch
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
  start = null
} = {}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'QueryContentHandler', {
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


export function setPermissions({
  branch = null,
  inheritPermissions = false,
  key = null,
  overwriteChildPermissions = false,
  permissions = []
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'SetPermissionsHandler', {
    branch,
    inheritPermissions,
    key,
    overwriteChildPermissions,
    permissions: toScriptValue(permissions)
  }).execute());
}


export function unpublish({
  keys
}) {
  return toNativeObject(newBean(CONTENT_PACKAGE, 'UnpublishContentHandler', {
    keys
  }).execute());
}


export const Content = {
  create: createContent,
  // createContent,
  createMedia,
  delete: deleteContent, // import Content from './content'; Content.delete();
  // deleteContent,
  get: getContentByKey,
  getAttachments,
  getAttachmentStream,
  getChildren,
  // getContentByKey,
  getPermissions,
  getSite: getSiteByKey,
  // getSiteByKey,
  getSiteConfig: getSiteConfigByKey,
  // getSiteConfigByKey,
  getType,
  getTypes,
  modify,
  move,
  publish,
  query,
  setPermissions,
  unpublish
};


export default Content;
