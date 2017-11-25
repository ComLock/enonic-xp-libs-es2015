import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';


const LOCALE_BEAN = newBean('com.enonic.xp.lib.i18n', 'LocaleScriptBean');


export function getPhrases(locale = null, bundles) {
  return toNativeObject(LOCALE_BEAN.getPhrases(locale, bundles));
}


export function localize({
  bundles = null,
  key,
  locale = null,
  values = []
}) {
  return LOCALE_BEAN.localize(
    key,
    locale,
    toScriptValue(values),
    bundles
  );
}


export const I18n = {
  getPhrases,
  localize
};


export default I18n;
