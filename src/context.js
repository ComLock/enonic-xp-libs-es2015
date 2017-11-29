import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';


const CONTEXT_BEAN = newBean('com.enonic.xp.lib.context', 'ContextHandlerBean');


export function get() {
  return toNativeObject(CONTEXT_BEAN.get());
}


export const getContext = get;


export function run(context, callback) {
  const params = CONTEXT_BEAN.newRunParams();
  params.callback = callback;

  if (context.repository) {
    params.repository = context.repository;
  }

  if (context.branch) {
    params.branch = context.branch;
  }

  if (context.user) {
    if (context.user.login) {
      params.username = context.user.login;
    }
    if (context.user.userStore) {
      params.userStore = context.user.userStore;
    }
  }

  if (context.principals) {
    params.principals = context.principals;
  }
  if (context.attributes) {
    params.attributes = toScriptValue(context.attributes);
  }

  return toNativeObject(CONTEXT_BEAN.run(params));
}


export const Context = {
  get,
  run
};


export default Context;
