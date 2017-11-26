import {
  newBean
} from './double-underscore';
import { i18nGetPhrases } from './i18n';
import { getAssetUrl } from './portal';


const HELPER = newBean('com.enonic.xp.lib.admin.AdminLibHelper');


function getMainAppUrl(path) {
  return getAssetUrl({
    path,
    application: 'com.enonic.xp.app.main'
  });
}


export function getAssetsUri() {
  return HELPER.getAssetsUri();
}


export function getBaseUri() {
  return HELPER.getBaseUri();
}


export function getLauncherUrl() {
  return getMainAppUrl('/js/launcher/bundle.js');
}


export function getLocale() {
  return HELPER.getLocale();
}


export function getPhrases() {
  return JSON.stringify(i18nGetPhrases(HELPER.getLocale(), [
    'admin/i18n/common', 'admin/i18n/phrases'
  ]));
}


export const adminGetPhrases = getPhrases;


export const Admin = {
  getAssetsUri,
  getBaseUri,
  getLauncherUrl,
  getLocale,
  getPhrases
};


export default Admin;
