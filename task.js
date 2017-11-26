import {
  newBean,
  toNativeObject,
  toScriptValue
} from './double-underscore';


const TASK_PACKAGE = 'com.enonic.xp.lib.task';


export function getTask(taskId) {
  return toNativeObject(newBean(`${TASK_PACKAGE}.GetTaskHandler`, {
    taskId
  }).getTask());
}


export const get = getTask; // Backwards compatibility


export function isRunning(task) {
  return toNativeObject(newBean(TASK_PACKAGE, 'IsRunningHandler').isRunning(task));
}


export function listTasks({
  name = null,
  state = null
} = {}) {
  return toNativeObject(newBean(`${TASK_PACKAGE}.ListTasksHandler`, {
    name,
    state
  }).list());
}


export const list = listTasks; // Backwards compatibility


export function progress({
  current = null,
  info = null,
  total = null
} = {}) {
  newBean(`${TASK_PACKAGE}.TaskProgressHandler`, {
    current,
    info,
    total
  }).reportProgress();
}


export function sleep(timeMillis = 0) {
  newBean(`${TASK_PACKAGE}.SleepHandler`, {
    timeMillis
  }).sleep();
}


export function submit({
  description,
  task
}) {
  return newBean(`${TASK_PACKAGE}.SubmitTaskHandler`, {
    description,
    task
  }).submit();
}


export function submitNamed({
  name,
  config = {}
}) {
  return newBean(`${TASK_PACKAGE}.SubmitNamedTaskHandler`, {
    config: toScriptValue(config),
    name
  }).submit();
}


export const Task = {
  get: getTask,
  // getTask,
  isRunning,
  list: listTasks,
  // listTasks,
  progress,
  sleep,
  submit,
  submitNamed
};


export default Task;
