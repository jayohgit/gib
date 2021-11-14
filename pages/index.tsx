import { GetStaticProps } from 'next'

import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import GlobalNav from '../components/GlobalNav'
import SecondaryNav from '../components/SecondaryNav'
import { getAllPostsForHome, getGlobalNavItems } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

// Make secondary nav items in contentful
const Index: React.FC = ({ preview, allPosts, globalNavItems }) =>  {
  const heroPost = allPosts[0] 
  const morePosts = allPosts.slice(1)
  const navItems = globalNavItems[0]

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Galactic Imperial Bank - {CMS_NAME}</title>
        </Head>
        <GlobalNav globalNavItems={navItems} />
        <SecondaryNav />
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const globalNavItems = (await getGlobalNavItems(preview)) ?? []

  return {
    props: { preview, allPosts, globalNavItems },
  }
}

