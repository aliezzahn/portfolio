import PublicationCard from './publication-card';

export default function PublicationSection({ title, publications, type }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {publications.map((publication, index) => (
          <PublicationCard key={index} publication={publication} type={type} />
        ))}
      </div>
    </section>
  );
}
