import type { MDXComponents } from "mdx/types";

import {
  Figure,
  KeyTakeaways,
  PullQuote,
  Scheme,
  SectionLabel,
  VideoResourceList,
  VideoResourceRow,
  YouTube,
} from "@/components/mdx/mdx-article";

export const mdxMapping: MDXComponents = {
  Figure,
  YouTube,
  KeyTakeaways,
  Scheme,
  SectionLabel,
  PullQuote,
  VideoResourceList,
  VideoResourceRow,
  h2: ({ children, ...props }) => (
    <h2
      className="font-heading mt-12 mb-4 scroll-mt-28 text-2xl font-semibold tracking-tight text-foreground first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-heading mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-muted-foreground" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  a: ({ children, ...props }) => (
    <a
      className="font-medium text-primary underline-offset-4 hover:underline"
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-2 border-primary pl-4 text-muted-foreground italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  hr: (props) => <hr className="my-10 border-border" {...props} />,
};
