// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "introduction.mdx": () => import("../content/docs/introduction.mdx?collection=docs"), "components/auth-buttons.mdx": () => import("../content/docs/components/auth-buttons.mdx?collection=docs"), "components/copy-button.mdx": () => import("../content/docs/components/copy-button.mdx?collection=docs"), "components/debounced-input.mdx": () => import("../content/docs/components/debounced-input.mdx?collection=docs"), "components/text-divider.mdx": () => import("../content/docs/components/text-divider.mdx?collection=docs"), }),
};
export default browserCollections;