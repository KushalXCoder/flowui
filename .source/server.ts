// @ts-nocheck
import * as __fd_glob_15 from "../content/docs/shadcn/components/debounced-input.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/shadcn/components/copy-button.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/shadcn/components/auth-buttons.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/core/components/text-divider.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/core/components/speaker.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/core/components/navbar.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/core/components/lift-button.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/core/components/file-select.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/core/animated-components/scrollbar.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/core/animated-components/changing-text.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/introduction.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/installation.mdx?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/shadcn/components/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/core/components/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/core/animated-components/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "core/animated-components/meta.json": __fd_glob_1, "core/components/meta.json": __fd_glob_2, "shadcn/components/meta.json": __fd_glob_3, }, {"installation.mdx": __fd_glob_4, "introduction.mdx": __fd_glob_5, "core/animated-components/changing-text.mdx": __fd_glob_6, "core/animated-components/scrollbar.mdx": __fd_glob_7, "core/components/file-select.mdx": __fd_glob_8, "core/components/lift-button.mdx": __fd_glob_9, "core/components/navbar.mdx": __fd_glob_10, "core/components/speaker.mdx": __fd_glob_11, "core/components/text-divider.mdx": __fd_glob_12, "shadcn/components/auth-buttons.mdx": __fd_glob_13, "shadcn/components/copy-button.mdx": __fd_glob_14, "shadcn/components/debounced-input.mdx": __fd_glob_15, });