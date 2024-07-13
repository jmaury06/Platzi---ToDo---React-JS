import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const TodoSkeleton = () => {
  return (
    <Skeleton
      containerClassName="styleSkeleton"
      height={'48px'}
      count={3}
      baseColor={'gray'}
      highlightColor={'#dddddd'}
    />
  )
}

export default TodoSkeleton