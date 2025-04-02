'use client';

import { useState } from 'react';
import { CertificateGrid } from '@/components/certificate-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Award,
  Search,
  Code,
  Database,
  Calculator,
  Clock,
  CheckCircle,
  Filter,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import certificatesData from '@/data/certificates.json';

export default function Certificates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');

  // Get unique categories
  const categories = [
    'All',
    ...new Set(certificatesData.map((cert) => cert.category)),
  ];

  // Get unique levels
  const levels = [
    'All',
    ...new Set(certificatesData.map((cert) => cert.level)),
  ];

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return <Code className="w-4 h-4" />;
      case 'Data Science':
        return <Database className="w-4 h-4" />;
      case 'Mathematics':
        return <Calculator className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  // Filter certificates by search query and level
  const filteredCertificates = certificatesData.filter(
    (cert) =>
      (cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase()),
        )) &&
      (levelFilter === 'All' || cert.level === levelFilter),
  );

  // Count certificates by category
  const categoryCounts = categories.reduce(
    (acc, category) => {
      if (category === 'All') {
        acc[category] = filteredCertificates.length;
      } else {
        acc[category] = filteredCertificates.filter(
          (cert) => cert.category === category,
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  // Get all unique skills
  const allSkills = new Set<string>();
  certificatesData.forEach((cert) => {
    cert.skills.forEach((skill) => allSkills.add(skill));
  });

  // Calculate total hours
  const totalHours = certificatesData.reduce(
    (sum, cert) => sum + cert.hoursToComplete,
    0,
  );

  // Count certificates by level
  const levelCounts = levels.reduce(
    (acc, level) => {
      if (level !== 'All') {
        acc[level] = certificatesData.filter(
          (cert) => cert.level === level,
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
          <p className="text-muted-foreground">
            Professional certifications and achievements
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search certificates..."
              className="px-4 py-2 pr-10 border rounded-md bg-background w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">
              Total Certificates
            </div>
            <div className="text-2xl font-bold">{certificatesData.length}</div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
            <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Total Hours</div>
            <div className="text-2xl font-bold">
              {totalHours.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
            <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Skills Covered</div>
            <div className="text-2xl font-bold">{allSkills.size}</div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
            <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Verified</div>
            <div className="text-2xl font-bold">
              {certificatesData.filter((cert) => cert.isVerified).length}/
              {certificatesData.length}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Certificates by Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(levelCounts).map(([level, count]) => {
            const getLevelColor = (level: string) => {
              switch (level) {
                case 'Beginner':
                  return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300';
                case 'Intermediate':
                  return 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300';
                case 'Advanced':
                  return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300';
                default:
                  return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300';
              }
            };

            return (
              <div
                key={level}
                className={`p-4 rounded-lg border ${getLevelColor(level)}`}
              >
                <div className="text-lg font-semibold">{level}</div>
                <div className="text-3xl font-bold">{count}</div>
                <div className="text-sm mt-1">
                  {Math.round((count / certificatesData.length) * 100)}% of
                  certificates
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {searchQuery || levelFilter !== 'All' ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Filtered Results ({filteredCertificates.length})
          </h2>
          <CertificateGrid certificates={filteredCertificates} />
        </div>
      ) : (
        <Tabs defaultValue="All" className="space-y-8">
          <TabsList className="flex flex-wrap h-auto p-1 gap-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="flex items-center gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {getCategoryIcon(category)}
                {category}
                <span className="ml-1 text-xs bg-muted text-foreground rounded-full px-1.5 py-0.5">
                  {categoryCounts[category] || 0}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <CertificateGrid
                certificates={filteredCertificates}
                category={category === 'All' ? undefined : category}
              />
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
