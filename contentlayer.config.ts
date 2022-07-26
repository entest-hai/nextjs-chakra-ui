import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import { rehypeMdxCodeMeta } from './src/utils/rehype-code-meta'
import { getTableOfContents } from './src/utils/get-table-of-contents'
import siteConfig from './configs/site-config.json'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'amplify/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string' },
    publishedDate: { type: 'string' },
    description: { type: 'string' }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/${post._raw.flattenedPath}`
    },
    frontMatter: {
      type: 'json',
      resolve: post => ({
        title: post.title,
        description: post.description,
        slug: `/${post._raw.flattenedPath}`,
        editUrl: `${siteConfig.repo.editUrl}/${post._id}`,
        headings: getTableOfContents(post.body.raw)
      })
    }
  }
}))

const Cdk = defineDocumentType(() => ({
  name: 'Cdk',
  filePathPattern: 'cdk/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string' },
    publishedDate: { type: 'string' },
    description: { type: 'string' }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: cdk => `/${cdk._raw.flattenedPath}`
    },
    frontMatter: {
      type: 'json',
      resolve: cdk => ({
        title: cdk.title,
        description: cdk.description,
        slug: `/${cdk._raw.flattenedPath}`,
        editUrl: `${siteConfig.repo.editUrl}/${cdk._id}`,
        headings: getTableOfContents(cdk.body.raw)
      })
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Cdk],
  mdx: {
    rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji]
  }
})
