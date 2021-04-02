export const getCurrentPosition = () => {
  return new Promise(
    (
      resolve: (value?: Position) => void,
      reject: (reason?: PositionError) => void
    ) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    }
  )
}
