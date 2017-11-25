import {
  newBean,
  toScriptValue
} from './double-underscore';


const SERVICE = newBean('com.enonic.xp.lib.thymeleaf', 'ThymeleafService');


export function render(view, model, options = {}) {
  return {
    ...SERVICE.newProcessor(),
    view,
    model: toScriptValue(model),
    mode: options.mode || 'HTML'
  }.process();
}


export const Thymeleaf = {
  render
};


export default Thymeleaf;
