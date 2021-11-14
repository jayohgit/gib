export const craftLinkHref = (href) => {
  const link = href?.toString().replace(/\s+/g, '-')
  return `${link?.toLowerCase() || '#'}`
}