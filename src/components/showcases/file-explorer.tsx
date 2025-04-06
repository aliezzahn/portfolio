import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronRight,
  File,
  FileCode,
  FileJson,
  FileText,
  Folder,
  GitBranch,
  History,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { FileContentViewer } from './file-content-viewer';
import { ReadmeDisplay } from '@/components/showcases/readme-display.tsx';

type FileItem = {
  name: string;
  type: 'file' | 'directory';
  size?: string;
  lastCommit: string;
  lastCommitTime: string;
  children?: FileItem[];
};

type FileExplorerProps = {
  selectedProject: string; // Accept selected project as a prop
};

export function FileExplorer({ selectedProject }: FileExplorerProps) {
  const [repoData, setRepoData] = useState<{
    name: string;
    branch: string;
    lastCommit: string;
    lastCommitTime: string;
    files: FileItem[];
  } | null>(null);
  const [expandedDirs, setExpandedDirs] = useState<Record<string, boolean>>({});
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [readme, setReadme] = useState<string | null>(null);

  const toggleDir = (path: string) => {
    setExpandedDirs((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const selectFile = (fullPath: string) => {
    setSelectedFile(fullPath);
  };

  const fetchFileContent = async (filePath: string) => {
    try {
      const response = await fetch(`/projects/${selectedProject}/${filePath}`);
      if (response.ok) {
        const content = await response.text();
        setFileContent(content);
      } else {
        console.error('Failed to fetch file content:', response.status);
      }
    } catch (error) {
      console.error('Error fetching file content:', error);
    }
  };

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          `/projects/${selectedProject}/fileList.json`,
        );
        if (response.ok) {
          const data = await response.json();
          setRepoData({
            name: selectedProject,
            branch: 'main',
            lastCommit: data[0]?.lastCommit || 'No commit',
            lastCommitTime: data[0]?.lastCommitTime || 'Unknown',
            files: data,
          });

          // Set expandedDirs state to true for all directories
          const expandAllDirs = (
            files: FileItem[],
            parentPath: string = '',
          ): Record<string, boolean> => {
            let expanded: Record<string, boolean> = {};
            files.forEach((file) => {
              const fullPath = parentPath
                ? `${parentPath}/${file.name}`
                : file.name;
              if (file.type === 'directory') {
                expanded[fullPath] = true; // Expand all directories by default
                if (file.children) {
                  expanded = {
                    ...expanded,
                    ...expandAllDirs(file.children, fullPath),
                  };
                }
              }
            });
            return expanded;
          };

          const expandedDirs = expandAllDirs(data);
          setExpandedDirs(expandedDirs); // Set expandedDirs to expand all directories

          // Automatically select the first file and fetch its content
          const findFirstFile = (
            files: FileItem[],
            parentPath: string = '',
          ): string | null => {
            for (const file of files) {
              const fullPath = parentPath
                ? `${parentPath}/${file.name}`
                : file.name;
              if (file.type === 'file') {
                return fullPath;
              }
              if (file.children) {
                const firstFileInChildren = findFirstFile(
                  file.children,
                  fullPath,
                );
                if (firstFileInChildren) return firstFileInChildren;
              }
            }
            return null;
          };

          const firstFile = findFirstFile(data);
          if (firstFile) {
            setSelectedFile(firstFile);
            fetchFileContent(firstFile);
          }
        } else {
          console.error('Failed to fetch file list:', response.status);
        }
      } catch (error) {
        console.error('Error fetching repo data:', error);
      }
    };

    fetchRepoData();
  }, [selectedProject]); // Fetch repo data whenever selectedProject changes

  useEffect(() => {
    if (selectedFile) {
      fetchFileContent(selectedFile);
    }
  }, [selectedFile]);

  useEffect(() => {
    fetch('/projects/linkedin-profile/README.md')
      .then((response: Response) => response.text())
      .then((data) => setReadme(data));
  }, []);

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.md'))
      return <FileText className="w-4 h-4 text-blue-500" />;

    if (fileName.endsWith('.json'))
      return <FileJson className="w-4 h-4 text-blue-500" />;

    if (
      fileName.endsWith('.tsx') ||
      fileName.endsWith('.ts') ||
      fileName.endsWith('.js') ||
      fileName.endsWith('.jsx')
    ) {
      return <FileCode className="w-4 h-4 text-yellow-600" />;
    }
    return <File className="w-4 h-4 text-muted-foreground" />;
  };

  const renderFileItem = (item: FileItem, path = '', level = 0) => {
    const fullPath = path ? `${path}/${item.name}` : item.name;
    const isExpanded = expandedDirs[fullPath];
    const isSelected = selectedFile === fullPath;

    return (
      <div key={fullPath}>
        <div
          className={cn(
            'flex items-center py-2 px-3 hover:bg-accent border-b border-border cursor-pointer',
            level > 0 && 'pl-8',
            isSelected && 'bg-primary/10',
          )}
          onClick={() => {
            if (item.type === 'directory') {
              toggleDir(fullPath);
            } else {
              selectFile(fullPath);
            }
          }}
        >
          <div className="flex items-center flex-1 min-w-0">
            <div className="flex items-center mr-2">
              {item.type === 'directory' ? (
                <>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground mr-1" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-muted-foreground mr-1" />
                  )}
                  <Folder className="w-4 h-4 text-blue-400" />
                </>
              ) : (
                <div className="ms-2">{getFileIcon(item.name)}</div>
              )}
            </div>
            <span className="truncate font-medium text-sm">{item.name}</span>
          </div>
          <div className="hidden md:flex items-center text-xs text-muted-foreground flex-1 min-w-0">
            <span className="truncate">{item.lastCommit}</span>
          </div>
          <div className="text-xs text-muted-foreground w-24 text-right">
            {item.type === 'file' ? item.size : ''}
          </div>
          <div className="hidden sm:block text-xs text-muted-foreground w-24 text-right">
            {item.lastCommitTime}
          </div>
        </div>

        {item.type === 'directory' && isExpanded && item.children && (
          <div>
            {item.children.map((child) =>
              renderFileItem(child, fullPath, level + 1),
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="bg-background border-[1px] rounded-md overflow-hidden">
        {/* Repository header */}
        <div className="bg-secondary border-b border-border p-3 flex items-center justify-between text-secondary-foreground">
          <div className="flex items-center">
            <GitBranch className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm font-medium">{repoData?.branch}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <History className="w-4 h-4 mr-1" />
            <span>{repoData?.lastCommit}</span>
            <span className="ml-2">{repoData?.lastCommitTime}</span>
          </div>
        </div>

        {/* File header */}
        <div className="flex items-center py-2 px-3 bg-secondary border-b border-border text-xs font-medium text-muted-foreground">
          <div className="flex-1">Name</div>
          <div className="hidden md:block flex-1">Last commit</div>
          <div className="w-24 text-right">Size</div>
          <div className="hidden sm:block w-24 text-right">Last update</div>
        </div>

        {/* File list */}
        {repoData ? (
          <div>{repoData.files.map((file) => renderFileItem(file))}</div>
        ) : (
          <div>Loading...</div>
        )}

        {/* File content viewer */}
        {selectedFile && fileContent && (
          <FileContentViewer
            fileName={selectedFile.split('/').pop() || ''}
            content={fileContent}
            language={selectedFile.split('.').pop() || ''}
            size={''}
            lastCommit={''}
            lastCommitTime={''}
          />
        )}
      </div>
      {readme && (
        <div className="mt-5">
          <ReadmeDisplay sampleReadme={readme} />
        </div>
      )}
    </div>
  );
}
