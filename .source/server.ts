// @ts-nocheck
import * as __fd_glob_8 from "../content/docs/layouts/page-layout.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/button.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/alert.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/theming.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/mdx-presets.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/introduction.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/component-library.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/components/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "components/meta.json": __fd_glob_1, }, {"component-library.mdx": __fd_glob_2, "introduction.mdx": __fd_glob_3, "mdx-presets.mdx": __fd_glob_4, "theming.mdx": __fd_glob_5, "components/alert.mdx": __fd_glob_6, "components/button.mdx": __fd_glob_7, "layouts/page-layout.mdx": __fd_glob_8, });