import ReactResource from 'react-resource';

// base url
export const baseUrl = 'http://localhost:8081';

// base resource
export const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});