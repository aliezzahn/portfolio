import { useState } from 'react';
import { Book, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Highlight, themes } from 'prism-react-renderer';

export function ReadmeDisplay({ sampleReadme }: { sampleReadme: string }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className="mt-6 overflow-hidden rounded-[var(--radius-md)] border-[1px]"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--background)',
      }}
    >
      {/* README header */}
      <div
        className="flex items-center justify-between border-b px-4 py-3"
        style={{
          backgroundColor: 'var(--secondary)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex items-center gap-2">
          <Book
            className="h-4 w-4"
            style={{ color: 'var(--muted-foreground)' }}
          />
          <h2
            className="text-sm font-semibold"
            style={{ color: 'var(--foreground)' }}
          >
            README.md
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs"
            style={{
              color: 'var(--muted-foreground)',
              backgroundColor: 'transparent',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--accent)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = 'transparent')
            }
          >
            <Edit className="mr-1.5 h-3.5 w-3.5" />
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs"
            style={{
              color: 'var(--muted-foreground)',
              backgroundColor: 'transparent',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--accent)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = 'transparent')
            }
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Hide' : 'Show'}
          </Button>
        </div>
      </div>

      {/* README content */}
      {isExpanded && (
        <div className="p-6">
          <MarkdownRenderer content={sampleReadme} />
        </div>
      )}
    </div>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split('\n');

  const renderContent = () => {
    const elements: JSX.Element[] = [];
    let codeBlock: string[] = [];
    let inCodeBlock = false;
    let language = '';
    let listItems: JSX.Element[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.match(/^```/)) {
        if (inCodeBlock) {
          // Trim whitespace from code block
          const trimmedCode = codeBlock
            .map((line) => line.trimEnd())
            .join('\n')
            .trim();

          elements.push(
            <div key={index} className="my-4">
              <div
                className="rounded-t-[var(--radius-sm)] border-b-0 px-3 py-2 text-xs font-mono"
                style={{
                  backgroundColor: 'var(--secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--muted-foreground)',
                }}
              >
                {language || 'plaintext'}
              </div>
              <Highlight
                theme={themes.github}
                code={trimmedCode}
                language={language || 'text'}
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre
                    className={`${className} rounded-b-[var(--radius-sm)] border border-t-0 p-4 text-sm leading-6`}
                    style={{
                      ...style,
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--muted)',
                    }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>,
          );
          codeBlock = [];
          inCodeBlock = false;
        } else {
          language = line.substring(3).trim();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlock.push(line);
        return;
      }

      // Headers
      if (line.match(/^#{1,3}\s/)) {
        const level = line.match(/^#+/)![0].length;
        const text = line.replace(/^#+\s/, '');
        const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
        const headerStyles = {
          1: 'mb-4 mt-8 border-b pb-2 text-2xl font-bold',
          2: 'mb-3 mt-6 text-xl font-semibold',
          3: 'mb-2 mt-5 text-lg font-semibold',
        };
        elements.push(
          <HeaderTag
            key={index}
            className={headerStyles[level as 1 | 2 | 3]}
            style={{
              color: 'var(--foreground)',
              borderColor: 'var(--border)',
            }}
          >
            {renderInlineMarkdown(text)}
          </HeaderTag>,
        );
        return;
      }

      // Lists
      if (line.match(/^\s*[-*+]\s/)) {
        if (!inList) inList = true;
        listItems.push(
          <li
            key={index}
            className="ml-4"
            style={{ color: 'var(--foreground)' }}
          >
            {renderInlineMarkdown(line.replace(/^\s*[-*+]\s/, ''))}
          </li>,
        );
        return;
      } else if (inList && line.trim() !== '') {
        elements.push(
          <ul key={`ul-${index}`} className="my-2 ml-6 list-disc">
            {listItems}
          </ul>,
        );
        listItems = [];
        inList = false;
      }

      // Images
      const imageMatch = line.match(/!$$ (.*?) $$$$ (.*?) $$/);
      if (imageMatch) {
        elements.push(
          <div key={index} className="my-4">
            <img
              src={imageMatch[2] || '/placeholder.svg'}
              alt={imageMatch[1]}
              className="h-auto max-w-full rounded-[var(--radius-sm)] border"
              style={{ borderColor: 'var(--border)' }}
            />
          </div>,
        );
        return;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        elements.push(
          <blockquote
            key={index}
            className="my-4 border-l-4 pl-4 italic"
            style={{
              borderColor: 'var(--muted)',
              color: 'var(--muted-foreground)',
            }}
          >
            {renderInlineMarkdown(line.substring(2))}
          </blockquote>,
        );
        return;
      }

      // Paragraphs and empty lines
      if (line.trim() === '') {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className="my-2 ml-6 list-disc">
              {listItems}
            </ul>,
          );
          listItems = [];
          inList = false;
        }
        elements.push(<div key={index} className="h-3" />);
      } else if (!inList) {
        elements.push(
          <p
            key={index}
            className="my-3 leading-6"
            style={{ color: 'var(--foreground)' }}
          >
            {renderInlineMarkdown(line)}
          </p>,
        );
      }
    });

    // Handle any remaining list items
    if (inList) {
      elements.push(<ul className="my-2 ml-6 list-disc">{listItems}</ul>);
    }

    return elements;
  };

  const renderInlineMarkdown = (text: string) => {
    const parts = text.split(
      /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|$$ [^ $$]+\]$$ [^)]+ $$)/,
    );
    return parts.map((part, i) => {
      // Inline code
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={i}
            className="rounded px-1 py-0.5 text-sm font-mono"
            style={{
              backgroundColor: 'var(--muted)',
              color: 'var(--foreground)',
            }}
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      // Bold
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={i}
            className="font-semibold"
            style={{ color: 'var(--foreground)' }}
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Italic
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="italic" style={{ color: 'var(--foreground)' }}>
            {part.slice(1, -1)}
          </em>
        );
      }
      // Links
      const linkMatch = part.match(/$$ (.*?) $$$$ (.*?) $$/);
      if (linkMatch) {
        return (
          <a
            key={i}
            href={linkMatch[2]}
            className="hover:underline"
            style={{ color: 'var(--primary)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div
      className="markdown-body leading-6"
      style={{ color: 'var(--foreground)' }}
    >
      {renderContent()}
    </div>
  );
}
