import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import { rehypeMdxCodeMeta } from './src/utils/rehype-code-meta'
import { getTableOfContents } from './src/utils/get-table-of-contents'
import siteConfig from './configs/site-config.json'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
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
      resolve: post => `/posts/${post._raw.flattenedPath}`
    },
    frontMatter: {
      type: 'json',
      resolve: post => ({
        title: post.title,
        // package: post.package,
        // description: post.description,
        // version: post.version,
        slug: `/${post._raw.flattenedPath}`,
        editUrl: `${siteConfig.repo.editUrl}/${post._id}`,
        headings: getTableOfContents(post.body.raw)
      })
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji]
  }
})
