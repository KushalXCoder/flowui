import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        className: "w-[270px] shrink-0 bg-background border-r font-poppins text-[15px]",
      }}
      githubUrl='https://github.com/kushalxcoder/flowui'
    >
      {children}
    </DocsLayout>
  );
}