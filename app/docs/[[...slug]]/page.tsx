import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle, EditOnGitHub, PageBreadcrumb, PageLastUpdate } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import Link from 'next/link';
import { baseOptions } from '@/lib/layout.shared';
import EditButton from '@/components/app-components/edit-button';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} className='font-sans technical-docs-page'>
      <div className="flex flex-col justify-start gap-3 mb-10">
        <div>
          <h1 className='text-3xl font-bold'>{page.data.title}</h1>
          <p className='mt-2 text-gray-500 font-mono'>{page.data.description}</p>
        </div>
        <EditButton link={page.path} />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}