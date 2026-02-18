// @ts-nocheck
import * as __fd_glob_14 from "../content/docs/components/text-divider.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/components/speaker.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/components/lift-button.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/components/debounced-input.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/copy-button.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/auth-buttons.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/blocks/file-select.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/animated-components/scrollbar.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/animated-components/changing-text.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/introduction.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/installation.mdx?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/components/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/blocks/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/animated-components/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "animated-components/meta.json": __fd_glob_1, "blocks/meta.json": __fd_glob_2, "components/meta.json": __fd_glob_3, }, {"installation.mdx": __fd_glob_4, "introduction.mdx": __fd_glob_5, "animated-components/changing-text.mdx": __fd_glob_6, "animated-components/scrollbar.mdx": __fd_glob_7, "blocks/file-select.mdx": __fd_glob_8, "components/auth-buttons.mdx": __fd_glob_9, "components/copy-button.mdx": __fd_glob_10, "components/debounced-input.mdx": __fd_glob_11, "components/lift-button.mdx": __fd_glob_12, "components/speaker.mdx": __fd_glob_13, "components/text-divider.mdx": __fd_glob_14, });