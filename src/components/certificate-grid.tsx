import { CertificateCard } from './certificate-card';

interface Certificate {
  name: string;
  issuer: string;
  startDate: string;
  completionDate: string;
  url: string;
  category: string;
  skills: string[];
  hoursToComplete: number;
  level: string;
  certificateId: string;
  isVerified: boolean;
}

interface CertificateGridProps {
  certificates: Certificate[];
  category?: string;
}

export function CertificateGrid({
  certificates,
  category,
}: CertificateGridProps) {
  // Filter certificates by category if provided
  const filteredCertificates =
    category && category !== 'All'
      ? certificates.filter((cert) => cert.category === category)
      : certificates;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCertificates.map((certificate) => (
        <CertificateCard key={certificate.name} certificate={certificate} />
      ))}
    </div>
  );
}
