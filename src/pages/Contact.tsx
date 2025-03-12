import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';

export default function Contact() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ContactInfo />
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
