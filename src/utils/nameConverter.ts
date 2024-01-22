export function nameConverter(name: string) {
  return name.charAt(0).toLocaleUpperCase() + name.slice(1).replaceAll("-", " ")
}
