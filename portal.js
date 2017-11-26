import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';


const PORTAL_PACKAGE = 'com.enonic.xp.lib.portal';
const PORTAL_CURRENT_PACKAGE = `${PORTAL_PACKAGE}.current`;
const PORTAL_MULTIPART_PACKAGE = `${PORTAL_PACKAGE}.multipart`;
const PORTAL_URL_PACKAGE = `${PORTAL_PACKAGE}.url`;


function createUrl(packageName, className, params = {}) {
  return newBean(packageName, className).createUrl(toScriptValue(params));
}


export function assetUrl(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'AssetUrlHandler', params);
}


export const getAssetUrl = assetUrl;


export function attachmentUrl(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'AttachmentUrlHandler', params);
}


export const getAttachmentUrl = attachmentUrl;


export function componentUrl(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'ComponentUrlHandler', params);
}


export const getComponentUrl = componentUrl;


export function getComponent() {
  return toNativeObject(newBean(PORTAL_CURRENT_PACKAGE, 'GetCurrentComponentHandler').execute());
}


export function getCurrentContent() {
  return toNativeObject(newBean(PORTAL_CURRENT_PACKAGE, 'GetCurrentContentHandler').execute());
}


export const getContent = getCurrentContent; // Backwards compatibility


export function getMultipartForm() {
  return toNativeObject(newBean(PORTAL_MULTIPART_PACKAGE, 'MultipartHandler').getForm());
}


export function getMultipartItem(name, index = 0) {
  return toNativeObject(newBean(PORTAL_MULTIPART_PACKAGE, 'MultipartHandler').getItem(name, index));
}


export function getMultipartStream(name, index = 0) {
  return newBean(PORTAL_MULTIPART_PACKAGE, 'MultipartHandler').getBytes(name, index);
}


export function getMultipartText(name, index = 0) {
  return newBean(PORTAL_MULTIPART_PACKAGE, 'MultipartHandler').getText(name, index);
}


export function getCurrentSite() {
  return toNativeObject(newBean(PORTAL_CURRENT_PACKAGE, 'GetCurrentSiteHandler').execute());
}


export const getSite = getCurrentSite; // Backwards compatibility


export function getCurrentSiteConfig() {
  return toNativeObject(newBean(PORTAL_CURRENT_PACKAGE, 'GetCurrentSiteConfigHandler').execute());
}


export const getSiteConfig = getCurrentSiteConfig; // Backwards compatibility


export function getUserStoreKey() {
  return toNativeObject(newBean(PORTAL_CURRENT_PACKAGE, 'GetCurrentUserStoreKeyHandler').execute());
}


export function idProviderUrl(params = {}) {
  return createUrl(PORTAL_URL_PACKAGE, 'IdProviderUrlHandler', params);
}


export const getIdProviderUrl = idProviderUrl;


export function imagePlaceholder({
  height = 0,
  width = 0
} = {}) {
  return newBean(PORTAL_URL_PACKAGE, 'ImagePlaceholderHandler', {
    height,
    width
  }).createImagePlaceholder();
}


export const getImagePlaceholderDataUri = imagePlaceholder;


export function imageUrl(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'ImageUrlHandler', params);
}


export const getImageUrl = imageUrl;


export function loginUrl(params = {}) {
  return createUrl(PORTAL_URL_PACKAGE, 'LoginUrlHandler', params);
}


export const getLoginUrl = loginUrl;


export function logoutUrl(params = {}) {
  return createUrl(PORTAL_URL_PACKAGE, 'LogoutUrlHandler', params);
}


export const getLogoutUrl = logoutUrl;


export function pageUrl(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'PageUrlHandler', params);
}


export const getPageUrl = pageUrl;


export function processHtml(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'ProcessHtmlHandler', params);
}


export function sanitizeHtml(html) {
  return toNativeObject(newBean(PORTAL_PACKAGE, 'SanitizeHtmlHandler').sanitizeHtml(html));
}


export function serviceUrl(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'ServiceUrlHandler', params);
}


export const getServiceUrl = serviceUrl;


export function url(params) {
  return createUrl(PORTAL_URL_PACKAGE, 'UrlHandler', params);
}


export const getUrl = url;


export const Portal = {
  assetUrl,
  attachmentUrl,
  componentUrl,
  getComponent,
  getContent: getCurrentContent,
  // getCurrentContent,
  // getCurrentSite,
  // getCurrentSiteConfig,
  getMultipartForm,
  getMultipartItem,
  getMultipartStream,
  getMultipartText,
  getSite: getCurrentSite,
  getSiteConfig: getCurrentSiteConfig,
  getUserStoreKey,
  idProviderUrl,
  imagePlaceholder,
  imageUrl,
  loginUrl,
  logoutUrl,
  pageUrl,
  processHtml,
  sanitizeHtml,
  serviceUrl,
  url
};


export default Portal;
