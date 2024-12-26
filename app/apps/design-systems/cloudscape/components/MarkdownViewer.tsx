import { FC } from 'react';
import gfm from 'remark-gfm';
import frontmatter from 'remark-frontmatter';
import ReactMarkdown from 'react-markdown';
import TextContent from '@cloudscape-design/components/text-content';
import Link from '@cloudscape-design/components/link';

export interface MarkdownViewerProps {
  /** The markdown content to be displayed */
  children: string;
}

const components = {
  a: (props: any) => (
    <Link href={props.href as string} target="_black" external>
      {props.children}
    </Link>
  ),
};

/**
 * MarkdownViewer renders content with Markdown format.
 */
const MarkdownViewer: FC<MarkdownViewerProps> = ({ children, ...props }) => {
  return (
    <TextContent {...props}>
      <ReactMarkdown remarkPlugins={[gfm, frontmatter]} components={components} children={children} />
    </TextContent>
  );
};

export default MarkdownViewer;
