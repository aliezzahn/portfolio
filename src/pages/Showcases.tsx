import { Link, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

import aliezzahnData from '@/data/aliezzahn.json';

function LinkedinPageCard() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs h-fit rounded-b-lg">
      <div className="border-[1px] border-b-0 rounded-t-lg p-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={aliezzahnData.avatar_url}
            className="size-12 rounded-full bg-secondary object-contain"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h6 className="text-sm leading-none font-bold">linkedin-profile</h6>
            <Link to={aliezzahnData.github} className="text-xs" target="_blank">
              @aliezzahn
            </Link>
          </div>
        </div>
      </div>
      <div className="p-0 border-[1px] border-t-0">
        <div>
          <img src="/linkedin-profile-demo.png" alt="Linkedin Profile Demo" />
        </div>
        <div className="pt-3 pb-4 px-6">
          <h2 className="font-semibold">Linkedin Profile</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This project is a responsive LinkedIn profile page clone built with
            Next.js and Tailwind CSS.{' '}
            <span className="text-blue-500">#nextjs</span>{' '}
            <span className="text-blue-500">#tailwindcss</span>
          </p>
        </div>
      </div>
      <Button
        onClick={() => navigate(`/showcases/linkedin-profile`)}
        className="w-full rounded-t-none h-12 bg-muted text-foreground hover:bg-muted"
      >
        Display
      </Button>
    </div>
  );
}

function LinkedinProfileCard() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs h-fit rounded-b-lg">
      <div className="border-[1px] border-b-0 rounded-t-lg p-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={aliezzahnData.avatar_url}
            className="size-12 rounded-full bg-secondary object-contain"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h6 className="text-sm leading-none font-bold">linkedin-page</h6>
            <Link to={aliezzahnData.github} className="text-xs" target="_blank">
              @aliezzahn
            </Link>
          </div>
        </div>
      </div>
      <div className="p-0 border-[1px] border-t-0">
        <div>
          <img src="/linkedin-page-demo.png" alt="Linkedin Page Demo" />
        </div>
        <div className="pt-3 pb-4 px-6">
          <h2 className="font-semibold">Linkedin Page</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This project is a responsive LinkedIn profile page clone built with
            Next.js and Tailwind CSS.{' '}
            <span className="text-blue-500">#nextjs</span>{' '}
            <span className="text-blue-500">#shadcn</span>
          </p>
        </div>
      </div>
      <Button
        onClick={() => navigate(`/showcases/linkedin-page`)}
        className="w-full rounded-t-none h-12 bg-muted text-foreground hover:bg-muted"
      >
        Display
      </Button>
    </div>
  );
}

export default function Showcases() {
  return (
    <div className="">
      <section className="container mx-auto my-10">
        <div className="flex flex-row flex-wrap w-full gap-8">
          <LinkedinPageCard />
          <LinkedinProfileCard />
        </div>
      </section>
    </div>
  );
}
