import { PageLayout } from '@/layouts/PageLayout'
import Media from '@/components/media/Media'

function MediaPage() {
  return (
    <PageLayout>
      <h1 id="main-heading" className="sr-only">
        Media
      </h1>
      <Media />
    </PageLayout>
  )
}

export default MediaPage
