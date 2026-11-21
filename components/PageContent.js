import fs from 'node:fs';
import path from 'node:path';

export default function PageContent({ file }) {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'content', file),
    'utf8'
  );

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
