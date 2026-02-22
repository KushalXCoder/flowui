// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "introduction.mdx": () => import("../content/docs/introduction.mdx?collection=docs"), "shadcn/components/auth-buttons.mdx": () => import("../content/docs/shadcn/components/auth-buttons.mdx?collection=docs"), "shadcn/components/copy-button.mdx": () => import("../content/docs/shadcn/components/copy-button.mdx?collection=docs"), "shadcn/components/debounced-input.mdx": () => import("../content/docs/shadcn/components/debounced-input.mdx?collection=docs"), "core/animated-components/changing-text.mdx": () => import("../content/docs/core/animated-components/changing-text.mdx?collection=docs"), "core/animated-components/scrollbar.mdx": () => import("../content/docs/core/animated-components/scrollbar.mdx?collection=docs"), "core/components/file-select.mdx": () => import("../content/docs/core/components/file-select.mdx?collection=docs"), "core/components/lift-button.mdx": () => import("../content/docs/core/components/lift-button.mdx?collection=docs"), "core/components/navbar.mdx": () => import("../content/docs/core/components/navbar.mdx?collection=docs"), "core/components/speaker.mdx": () => import("../content/docs/core/components/speaker.mdx?collection=docs"), "core/components/text-divider.mdx": () => import("../content/docs/core/components/text-divider.mdx?collection=docs"), }),
};
export default browserCollections;