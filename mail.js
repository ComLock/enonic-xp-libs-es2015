import {
  newBean
} from './double-underscore';


export function send({
  // Required
  from,
  to,
  // Optional
  attachments = null,
  body = null,
  bcc = [],
  cc = [],
  contentType = null,
  headers = null,
  replyTo = [],
  subject = null
}) {
  return newBean('com.enonic.xp.lib.mail', 'SendMailHandler', {
    from: [].concat(from),
    to: [].concat(to),
    attachments,
    body,
    bcc: [].concat(bcc),
    cc: [].concat(cc),
    contentType,
    headers,
    replyTo: [].concat(replyTo),
    subject
  }).send();
}


export const sendMail = send;


export const Mail = {
  send
};


export default Mail;
