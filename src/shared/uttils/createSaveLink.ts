export const createSaveLink = (url: string, filename: string, ext: string) => {
  const link = document.createElement('a')
  link.href = url
  link.download = `${filename}.${ext}`
  link.click()
}
