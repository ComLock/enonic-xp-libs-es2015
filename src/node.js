import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';
import {
  required,
  throwRequiredParam
} from './util';

const NODE_PACKAGE = 'com.enonic.xp.lib.node';
const factory = newBean(NODE_PACKAGE, 'NodeHandleFactory');
const multiRepoConnectfactory = newBean(NODE_PACKAGE, 'MultiRepoNodeHandleFactory');


class RepoConnection {
  constructor(repoConnection) {
    this.repoConnection = repoConnection;
  }


  create(params) {
    return toNativeObject(this.repoConnection.create(toScriptValue(params)));
  }


  delete(keys) {
    // return toNativeObject(this.repoConnection.delete(argsToStringArray(arguments)));
    return toNativeObject(this.repoConnection.delete(...keys)); // TODO This should be tested
  }


  diff({
    key,
    target,
    // optional
    includeChildren = false
  }) {
    return toNativeObject(this.repoConnection.diff(newBean(`${NODE_PACKAGE}.DiffBranchesHandlerParams`, {
      key,
      target,
      includeChildren
    })));
  }


  get(keys) {
    // return toNativeObject(this.repoConnection.get(argsToStringArray(arguments)));
    return toNativeObject(this.repoConnection.get(...keys)); // TODO This should be tested
  }


  getBinary({
    binaryReference,
    key
  }) {
    return this.repoConnection.getBinary(key, binaryReference);
  }


  findChildren({
    parentKey,
    // Optional
    childOrder = null,
    count = 10,
    countOnly = false,
    recursive = false,
    start = 0
  }) {
    return toNativeObject(this.repoConnection.findChildren(newBean(
      NODE_PACKAGE,
      'FindChildrenHandlerParams', {
        parentKey,
        childOrder,
        count,
        countOnly,
        recursive,
        start
      }
    )));
  }


  modify({
    editor = c => c,
    key
  }) {
    return toNativeObject(this.repoConnection.modify(toScriptValue(editor), key));
  }


  move({
    source,
    target
  }) {
    return toNativeObject(this.repoConnection.move(source, target));
  }


  push({
    key = null,
    keys = key ? [key] : throwRequiredParam("key' or 'keys"),
    target,
    // Optional
    includeChildren = false,
    exclude = null,
    resolve = true
  }) {
    return toNativeObject(this.repoConnection.push(newBean(`${NODE_PACKAGE}.PushNodeHandlerParams`, {
      keys,
      targetBranch: target,
      includeChildren,
      exclude,
      resolve
    })));
  } // method push


  query({
    aggregations = {},
    count = 10,
    explain = false,
    filters = {},
    query = '',
    sort = '_score DESC',
    start = 0
  } = {}) {
    return toNativeObject(this.repoConnection.query(newBean(
      NODE_PACKAGE,
      'QueryNodeHandlerParams', {
        aggregations: toScriptValue(aggregations),
        count,
        explain,
        filters: toScriptValue(filters),
        query,
        sort,
        start
      }
    )));
  } // method query


  refresh(mode = 'ALL') {
    this.repoConnection.refresh(mode);
  }


  setRootPermissions({
    _permissions,
    _inheritsPermissions = null
  }) {
    return toNativeObject(this.repoConnection.setRootPermissions({
      _permissions,
      _inheritsPermissions
    }));
  }
} // class RepoConnection


class MultiRepoConnection {
  constructor(multiRepoConnection) {
    this.multiRepoConnection = multiRepoConnection;
  }


  query({
    aggregations = {},
    count = 10,
    explain = false,
    filters = {},
    query = '',
    sort = '_score DESC',
    start = 0
  } = {}) {
    return toNativeObject(this.multiRepoConnection.query(newBean(
      NODE_PACKAGE,
      'QueryNodeHandlerParams', {
        aggregations: toScriptValue(aggregations),
        count,
        explain,
        filters: toScriptValue(filters),
        query,
        sort,
        start
      }
    )));
  } // method query
} // class MultiRepoConnection


export function connect({
  branch,
  repoId,
  // Optional
  principals = [],
  user = null
}) {
  const params = {
    branch,
    repoId,
    principals
  };
  if (user) {
    if (user.login) {
      params.username = user.login;
    }
    if (user.userStore) {
      params.userStore = user.userStore;
    }
  }
  const nodeHandleContext = newBean(`${NODE_PACKAGE}.NodeHandleContext`, params);
  return new RepoConnection(factory.create(nodeHandleContext));
}


export function multiRepoConnect({
  sources
}) {
  const multiRepoNodeHandleContext = newBean(NODE_PACKAGE, 'MultiRepoNodeHandleContext');
  sources.forEach(source => {
    multiRepoNodeHandleContext.addSource(
      required(source, 'repoId'),
      required(source, 'branch'),
      required(source, 'principals')
    );
  });

  return new MultiRepoConnection(multiRepoConnectfactory.create(multiRepoNodeHandleContext));
}


export const Node = {
  connect,
  multiRepoConnect
};


export default Node;
