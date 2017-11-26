import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';
import {
  throwRequiredParam
} from './util';

const AUTH_PACKAGE = 'com.enonic.xp.lib.auth';


export function addMembers(principalKey = null, members = null) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.AddMembersHandler`, {
    members: [].concat(members),
    principalKey
  }).addMembers());
}


export function changePassword({
  password,
  userKey
}) {
  return newBean(`${AUTH_PACKAGE}.ChangePasswordHandler`, {
    password,
    userKey
  }).changePassword();
}


export function createGroup({
  description = null,
  displayName = null,
  name,
  userStore
}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.CreateGroupHandler`, {
    description,
    displayName,
    name,
    userStore
  }).createGroup());
}


export function createUser({
  displayName = null,
  email = null,
  name,
  userStore
}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.CreateUserHandler`, {
    displayName,
    email,
    name,
    userStore
  }).createUser());
}


export function findPrincipals({
  count = null,
  name = null,
  searchText = null,
  start = null,
  type = null,
  userStore = null
} = {}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.FindPrincipalsHandler`, {
    count,
    name,
    searchText,
    start,
    type,
    userStore
  }).findPrincipals());
}


export function findUsers({
  count = null,
  includeProfile = false,
  query = null,
  start = null,
  sort = null
} = {}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.FindUsersHandler`, {
    count,
    includeProfile,
    query,
    start,
    sort
  }).execute());
}


export function generatePassword() {
  return toNativeObject(newBean(AUTH_PACKAGE, 'GeneratePasswordHandler').generatePassword());
}


export function getIdProviderConfig() {
  return toNativeObject(newBean(AUTH_PACKAGE, 'GetIdProviderConfigHandler').execute());
}


export function getMembers(principalKey = null) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.GetMembersHandler`, {
    principalKey
  }).getMembers());
}


export function getMemberships(principalKey = null) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.GetMembershipsHandler`, {
    principalKey
  }).getMemberships());
}


export function getPrincipal(principalKey = null) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.GetPrincipalHandler`, {
    principalKey
  }).getPrincipal());
}


export function getProfile({
  key = null,
  scope = null
} = {}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.GetProfileHandler`, {
    key,
    scope
  }).execute());
}


export function getUser({
  includeProfile = false
} = {}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.GetUserHandler`, {
    includeProfile
  }).getUser());
}


export function hasRole(role = null) {
  return newBean(`${AUTH_PACKAGE}.HasRoleHandler`, {
    role
  }).hasRole();
}


export function login({
  password = null, // optional here, but require check later,
  skipAuth = false,
  user,
  userStore = null // only passed on if truthy
}) {
  const params = {
    user,
    skipAuth
  };
  if (!skipAuth) { // TODO: What about empty string, etc? Hopefully checked in Java.
    params.password = password !== undefined ? password : throwRequiredParam('password');
  }
  if (userStore) {
    params.userStore = [].concat(userStore);
  }
  return toNativeObject(newBean(`${AUTH_PACKAGE}.LoginHandler`, params).login());
}


export function logout() {
  return newBean(AUTH_PACKAGE, 'LogoutHandler').logout();
}


export function modifyGroup({
  principalKey,
  editor = g => g
}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.ModifyGroupHandler`, {
    principalKey,
    editor: toScriptValue(editor)
  }).modifyGroup());
}


export function modifyProfile({
  editor = p => p,
  key = null,
  scope = null
} = {}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.ModifyProfileHandler`, {
    editor: toScriptValue(editor),
    key,
    scope
  }).execute());
}


export function modifyUser({
  editor = u => u,
  principalKey
}) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.ModifyUserHandler`, {
    editor: toScriptValue(editor),
    principalKey
  }).modifyUser());
}


export function removeMembers(principalKey = null, members = null) {
  return toNativeObject(newBean(`${AUTH_PACKAGE}.RemoveMembersHandler`, {
    members: [].concat(members),
    principalKey
  }).removeMembers());
}


export const Auth = {
  addMembers,
  changePassword,
  createGroup,
  createUser,
  findPrincipals,
  findUsers,
  generatePassword,
  getIdProviderConfig,
  getMembers,
  getMemberships,
  getPrincipal,
  getProfile,
  getUser,
  hasRole,
  login,
  logout,
  modifyGroup,
  modifyProfile,
  modifyUser,
  removeMembers
};


export default Auth;
