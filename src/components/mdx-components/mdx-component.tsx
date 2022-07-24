import * as Chakra from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'
import { LinkedHeading } from './linked-heading'
import { InlineCode } from './inline-code'
import CodeBlock from './codeblock/codeblock'
import { TutorialCodeBlock } from './../tutorial/tutorial-code-block'

const { Alert, AspectRatio, Box, chakra, Kbd, Link } = Chakra

export const MDXComponents = {
  ...Chakra,
  Image: props => (
    <Box my="5">
      <NextImage
        layout="responsive"
        width={700}
        height={400}
        objectFit="contain"
        {...props}
      />
    </Box>
  ),
  LinkedImage: ({ href, ...props }) => (
    <Link display="block" my="10" href={href} isExternal>
      <MDXComponents.Image {...props} />
    </Link>
  ),
  h1: props => <chakra.h1 fontSize={'5xl'} apply="mdx.h1" {...props} />,
  h2: props => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: props => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: props => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: props => <chakra.hr apply="mdx.hr" {...props} />,
  strong: props => <Box as="strong" fontWeight="semibold" {...props} />,
  code: InlineCode,
  pre: props => {
    if (typeof props.children === 'string') return <Pre {...props} />
    if (props.children.props.type === 'tutorial') {
      const className = props.children.props.className || ''
      const code = props.children.props.children.trim() || ''
      const language = className.replace(/language-/, '')
      return (
        <TutorialCodeBlock
          language={language}
          code={code}
          path={props.children.props.path}
          showLineNumbers={props.showLineNumbers}
        />
      )
    }
    return <CodeBlock {...props} />
  },
  kbd: Kbd,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? 'br' : undefined}
      height={reset ? undefined : '24px'}
      {...props}
    />
  ),

  p: props => <chakra.p apply="mdx.p" {...props} />,
  ul: props => <chakra.ul apply="mdx.ul" {...props} />,
  ol: props => <chakra.ol apply="mdx.ul" {...props} />,
  li: props => <chakra.li pb="4px" {...props} />,
  blockquote: props => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  )
}
