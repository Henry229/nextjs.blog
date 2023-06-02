import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownView({ content }: { content: string }) {
  return (
    <ReactMarkdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
