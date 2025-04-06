'use client';

import { useState, useEffect } from 'react';
import { highlightWithShiki } from '@/lib/highlight-with-shiki';
import { cn } from '@/lib/utils';
import {
  AlignJustify,
  WrapText,
  Copy,
  Check,
  Download,
  Code,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { useTheme } from '@/contexts/theme-context.tsx';

type FileContentProps = {
  fileName: string;
  content: string;
  language: string;
  size: string;
  lastCommit: string;
  lastCommitTime: string;
};

export function FileContentViewer({
  fileName,
  content,
  language,
  size,
  lastCommit,
  lastCommitTime,
}: FileContentProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [wrapLines, setWrapLines] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const run = async () => {
      const html = await highlightWithShiki(theme, content, language);
      setHighlightedHtml(html);
    };
    run();
  }, [content, language, theme]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.md')) return <FileText className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  return (
    <div className={cn('border-t')}>
      {/* Header */}
      <div
        className={cn(
          'flex items-center justify-between p-3 border-b border-border bg-secondary text-secondary-foreground',
        )}
      >
        <div className="flex items-center gap-2">
          {getFileIcon(fileName)}
          <h2 className="font-semibold text-sm">{fileName}</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{size}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setWrapLines((prev) => !prev)}
                  aria-label="Toggle wrap"
                >
                  {wrapLines ? (
                    <AlignJustify className="w-4 h-4" />
                  ) : (
                    <WrapText className="w-4 h-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-popover text-popover-foreground">
                <p>{wrapLines ? 'Disable wrap' : 'Enable wrap'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-popover text-popover-foreground">
                <p>{copied ? 'Copied!' : 'Copy code'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button variant="ghost" size="sm">
            <Download className="w-4 h-4 mr-1" />
            Raw
          </Button>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          'shiki', // Keep shiki class for your custom styling
          !wrapLines && 'no-wrap',
          'overflow-x-auto bg-background',
        )}
      >
        <div
          className="max-w-none"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </div>

      {/* Footer */}
      <div
        className={cn(
          'flex items-center justify-between p-3 border-t border-border bg-secondary text-muted-foreground text-xs',
        )}
      >
        <div>{lastCommit}</div>
        <div>{lastCommitTime}</div>
      </div>
    </div>
  );
}
