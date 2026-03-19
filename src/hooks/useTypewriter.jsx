import { useEffect, useMemo, useState } from "react"

export function useTypewriterParts(parts) {
  const normalized = useMemo(
    () => (parts ?? []).map((p) => ({ text: p.text ?? "", speed: p.speed ?? 80 })),
    [parts]
  )

  const [partIndex, setPartIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    setPartIndex(0)
    setCharIndex(0)
  }, [normalized])

  useEffect(() => {
    const current = normalized[partIndex]
    if (!current) return

    if (charIndex >= current.text.length) {
      if (partIndex < normalized.length - 1) {
        const id = setTimeout(() => {
          setPartIndex((i) => i + 1)
          setCharIndex(0)
        }, 120)
        return () => clearTimeout(id)
      }
      return
    }

    const id = setTimeout(() => setCharIndex((c) => c + 1), current.speed)
    return () => clearTimeout(id)
  }, [normalized, partIndex, charIndex])

  const partsTyped = normalized.map((p, i) => {
    if (i < partIndex) return p.text
    if (i === partIndex) return p.text.slice(0, charIndex)
    return ""
  })

  const done =
    normalized.length > 0 &&
    partIndex === normalized.length - 1 &&
    charIndex >= normalized[normalized.length - 1].text.length

  return { partsTyped, done }
}
