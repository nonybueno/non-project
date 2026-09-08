import { ref, unref, watch, onMounted, onBeforeUnmount } from 'vue'

/**
 * Cycles through `words`, typing and deleting each one.
 * `words` may be an array, a ref, or a getter — if it changes (e.g. on a
 * language switch) the animation restarts from the first word.
 * Returns a reactive `text` ref for binding in a template.
 */
export function useTypewriter(words, { typeMs = 110, deleteMs = 55, holdMs = 1500, startMs = 400 } = {}) {
  const getWords = typeof words === 'function' ? words : () => unref(words)
  const text = ref('')
  let wordIndex = 0
  let charIndex = 0
  let deleting = false
  let timer = null

  function step() {
    const list = getWords()
    const word = list[wordIndex % list.length] ?? ''

    if (!deleting) {
      charIndex += 1
      text.value = word.slice(0, charIndex)
      if (charIndex === word.length) {
        deleting = true
        timer = setTimeout(step, holdMs)
        return
      }
    } else {
      charIndex -= 1
      text.value = word.slice(0, charIndex)
      if (charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
      }
    }

    timer = setTimeout(step, deleting ? deleteMs : typeMs)
  }

  watch(getWords, () => {
    wordIndex = 0
    charIndex = 0
    deleting = false
    text.value = ''
  })

  onMounted(() => {
    timer = setTimeout(step, startMs)
  })
  onBeforeUnmount(() => clearTimeout(timer))

  return { text }
}
