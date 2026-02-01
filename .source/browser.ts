// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"component-library.mdx": () => import("../content/docs/component-library.mdx?collection=docs"), "introduction.mdx": () => import("../content/docs/introduction.mdx?collection=docs"), "mdx-presets.mdx": () => import("../content/docs/mdx-presets.mdx?collection=docs"), "theming.mdx": () => import("../content/docs/theming.mdx?collection=docs"), "components/alert.mdx": () => import("../content/docs/components/alert.mdx?collection=docs"), "components/button.mdx": () => import("../content/docs/components/button.mdx?collection=docs"), "layouts/page-layout.mdx": () => import("../content/docs/layouts/page-layout.mdx?collection=docs"), }),
};
export default browserCollections;