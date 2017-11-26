import {
  newBean,
  toScriptValue
} from './double-underscore';


export function render(view, model) {
  return newBean('com.enonic.xp.lib.mustache', 'MustacheService', {
    model: toScriptValue(model),
    view
  }).process();
}


export const renderMustache = render;


export const Mustache = {
  render
};


export default Mustache;
