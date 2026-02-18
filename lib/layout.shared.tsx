import Logo from '@/components/app-components/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';

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