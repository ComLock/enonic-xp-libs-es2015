import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';
import {
  // required,
  throwRequiredParam
} from './util';

const REPO_PACKAGE = 'com.enonic.xp.lib.repo';


export function createRepo({
  id,
  /* branch = null,
  search = null,
  version = null,
  definitions = {
    branch,
    search,
    version
  }, */
  rootChildOrder = null,
  rootPermissions = null,
  settings = {
    // definitions
  }
}) {
  return toNativeObject(newBean(`${REPO_PACKAGE}.CreateRepositoryHandler`, {
    id,
    indexDefinitions: settings.definitions ? toScriptValue(settings.definitions) : null,
    rootChildOrder,
    rootPermissions: rootPermissions ? toScriptValue(rootPermissions) : null
  }).execute());
} // export function create


export const create = createRepo; // Backwards compatibility


export function createBranch({
  branchId,
  repoId
}) {
  return toNativeObject(newBean(`${REPO_PACKAGE}.CreateBranchHandler`, {
    branchId,
    repoId
  }).execute());
}


export function deleteRepo(id) {
  return newBean(`${REPO_PACKAGE}.DeleteRepositoryHandler`, {
    repositoryId: id || throwRequiredParam('id')
  }).execute();
}


exports.delete = deleteRepo; // Backwards compatibility


export function deleteBranch({
  branchId,
  repoId
}) {
  return toNativeObject(newBean(`${REPO_PACKAGE}.DeleteBranchHandler`, {
    branchId,
    repoId
  }).execute());
}


export function getRepo(id) {
  return toNativeObject(newBean(`${REPO_PACKAGE}.GetRepositoryHandler`, {
    repositoryId: id || throwRequiredParam('id')
  }).execute());
}


export const get = getRepo; // Backwards compatibility


export function listRepos() {
  return toNativeObject(newBean(REPO_PACKAGE, 'ListRepositoriesHandler').execute());
}


export const list = listRepos; // Backwards compatibility


export function refresh({
  branch = null,
  mode = null,
  repoId = null
} = {}) {
  newBean('com.enonic.xp.lib.repo.RefreshHandler', {
    branch,
    mode,
    repoId
  }).refresh();
}


export const Repo = {
  create: createRepo,
  createBranch,
  // createRepo,
  delete: deleteRepo, // import Repo from './repo'; Repo.delete();
  deleteBranch,
  // deleteRepo,
  get: getRepo,
  // getRepo,
  list: listRepos,
  // listRepos,
  refresh
};


export default Repo;
