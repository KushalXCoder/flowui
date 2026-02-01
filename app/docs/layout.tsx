import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        className: 'w-[270px] max-w-[390px] shrink-0 overflow-hidden font-poppins',
      }}
    >
      {children}
    </DocsLayout>
  );
}