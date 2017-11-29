import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';
import {
  throwRequiredParam
} from './util';


function newAuthBean(className, params = {}) {
  return newBean(`com.enonic.xp.lib.auth.${className}`, params);
}


export function addMembers(principalKey = null, members = null) {
  return toNativeObject(newAuthBean('AddMembersHandler', {
    members: [].concat(members),
    principalKey
  }).addMembers());
}


export function changePassword({
  password,
  userKey
}) {
  return newAuthBean('ChangePasswordHandler', {
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
  return toNativeObject(newAuthBean('CreateGroupHandler', {
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
  return toNativeObject(newAuthBean('CreateUserHandler', {
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
  return toNativeObject(newAuthBean('FindPrincipalsHandler', {
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
  return toNativeObject(newAuthBean('FindUsersHandler', {
    count,
    includeProfile,
    query,
    start,
    sort
  }).execute());
}


export function generatePassword() {
  return toNativeObject(newAuthBean('GeneratePasswordHandler').generatePassword());
}


export function getIdProviderConfig() {
  return toNativeObject(newAuthBean('GetIdProviderConfigHandler').execute());
}


export function getMembers(principalKey = null) {
  return toNativeObject(newAuthBean('GetMembersHandler', {
    principalKey
  }).getMembers());
}


export function getMemberships(principalKey = null) {
  return toNativeObject(newAuthBean('GetMembershipsHandler', {
    principalKey
  }).getMemberships());
}


export function getPrincipal(principalKey = null) {
  return toNativeObject(newAuthBean('GetPrincipalHandler', {
    principalKey
  }).getPrincipal());
}


export function getProfile({
  key = null,
  scope = null
} = {}) {
  return toNativeObject(newAuthBean('GetProfileHandler', {
    key,
    scope
  }).execute());
}


export function getUser({
  includeProfile = false
} = {}) {
  return toNativeObject(newAuthBean('GetUserHandler', {
    includeProfile
  }).getUser());
}


export function hasRole(role = null) {
  return newAuthBean('HasRoleHandler', {
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
  return toNativeObject(newAuthBean('LoginHandler', params).login());
}


export function logout() {
  return newAuthBean('LogoutHandler').logout();
}


export function modifyGroup({
  principalKey,
  editor = g => g
}) {
  return toNativeObject(newAuthBean('ModifyGroupHandler', {
    principalKey,
    editor: toScriptValue(editor)
  }).modifyGroup());
}


export function modifyProfile({
  editor = p => p,
  key = null,
  scope = null
} = {}) {
  return toNativeObject(newAuthBean('ModifyProfileHandler', {
    editor: toScriptValue(editor),
    key,
    scope
  }).execute());
}


export function modifyUser({
  editor = u => u,
  principalKey
}) {
  return toNativeObject(newAuthBean('ModifyUserHandler', {
    editor: toScriptValue(editor),
    principalKey
  }).modifyUser());
}


export function removeMembers(principalKey = null, members = null) {
  return toNativeObject(newAuthBean('RemoveMembersHandler', {
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
