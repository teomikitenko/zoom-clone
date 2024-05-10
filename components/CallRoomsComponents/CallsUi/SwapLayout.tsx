import { PaginatedGridLayout,SpeakerLayout } from '@stream-io/video-react-sdk'
import type { Layout } from '@/types/types'

const SwapLayout = ({layout}:{layout:Layout}) => {
  return(
    layout.l === 'GridLayout'? <PaginatedGridLayout /> : <SpeakerLayout participantsBarPosition={layout.prop}/>
  )
}

export default SwapLayout