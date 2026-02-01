import Logo from '@/components/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex flex-col gap-2">
          <Logo />
        </div>
      ),
    },
  };
}