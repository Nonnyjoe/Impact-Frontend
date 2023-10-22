import fs from 'fs';
import path from 'path';

const verifyHTML = fs.readFileSync(path.join(__dirname, './verify.html'), {
  encoding: 'utf-8',
});

export const verify = (data: any) => {
  return verifyHTML.replace('{{username}}', `${data.username}`).replace('{{LINK}}', data.link);
};
