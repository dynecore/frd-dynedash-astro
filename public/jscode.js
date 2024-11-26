export const webcontroller = (funcion, interval, timeout) => {
  console.log({ interval, timeout })
  const thisInterval = setInterval(() => {
    funcion()
  }, interval * 1000)

  funcion()

  setTimeout(() => {
    clearInterval(thisInterval)
    console.log('finishing interval')
    // eslint-disable-next-line no-undef
    location.reload()
  }, timeout)
}

export const expCounter = (funcion, expireIn) => {
  // let expirationCounter = expireIn

  const thisInterval = setInterval(() => {
    funcion()
    // expirationCounter - 1000
  }, 1000)

  funcion()

  setTimeout(() => {
    clearInterval(thisInterval)
    console.log('finishing interval')
  }, expireIn * 1000)
}
