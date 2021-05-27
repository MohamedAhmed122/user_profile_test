import { CircularProgress, Backdrop } from '@material-ui/core'


export default function Loading() {
  return (
    <Backdrop style={{ zIndex: 50}} open={true}>
      <CircularProgress size={50} />
    </Backdrop>
  )
}