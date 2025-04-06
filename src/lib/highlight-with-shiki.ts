import { createHighlighter } from 'shiki';

export async function highlightWithShiki(
  theme: string = 'dark',
  code: string,
  lang: string = 'plaintext',
) {
  const highlighter = await createHighlighter({
    langs: ['tsx', 'js', 'json', 'md', 'css', 'html'],
    themes: ['github-dark', 'github-light'],
  });
  const html = highlighter.codeToHtml(code, {
    lang,
    theme: theme === 'dark' ? 'github-dark' : 'github-light',
  });
  return html;
}
