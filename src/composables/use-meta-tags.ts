import { useRouter } from 'vue-router'
import { watch } from 'vue'

export function useMetaTags() {
  const router = useRouter()

  const pageMetaData: Record<string, { title: string; description: string; keywords: string }> = {
    home: {
      title: 'DET GROR! - LAD DET GRO',
      description: 'Velkommen til LAD DET GRO - Et projekt om at få grønt til at gro i Kolding',
      keywords: 'grønt, have, havedyrkning, kolding, bæredygtighed, lokalsamfund'
    },
    more: {
      title: 'LAD DET GRO - Mere Information',
      description: 'Læs mere om LAD DET GRO projektet og vores mission om grøn udvikling',
      keywords: 'grønt, kolding, bæredygtighed, miljø, nabofællesskab'
    },
    fgu: {
      title: 'Haven på FGU - LAD DET GRO',
      description: 'FGU haven er en central del af LAD DET GRO projektet',
      keywords: 'fgu, haven, uddannelse, kolding, grønt, dyrkning, grønsag, grøntsagsdyrkning'
    },
    spisgroentdage: {
      title: 'Spis Grønt Dage - LAD DET GRO',
      description: 'Spis Grønt Dage - Grøn madlavning og fællesspisning i Kolding',
      keywords: 'spis grønt, beredskab, bæredygtighed, kolding, fællesspisning, maddannelse, madkultur, fødevarer'
    },
    kontakt: {
      title: 'Kontakt os - LAD DET GRO',
      description: 'Kontakt LAD DET GRO for spørgsmål eller samarbejde',
      keywords: 'kontakt, kokketjans, kok, kolding, samarbejde, projekt'
    },
    links: {
      title: 'Links - LAD DET GRO',
      description: 'Brugbare links til projekter og organisationer inden for grønt og bæredygtighed',
      keywords: 'links, ressourcer, grønt, bæredygtighed, netværk, nabofællesskab'
    }
  }

  const updateMetaTags = (routeName: string | symbol | undefined | null) => {
    const routeKey = typeof routeName === 'string' ? routeName : ''
    const meta = pageMetaData[routeKey] || pageMetaData['home']

    // Update title
    document.title = meta.title

    // Update or create meta tags
    updateMetaTag('name', 'description', meta.description)
    updateMetaTag('name', 'keywords', meta.keywords)
    updateMetaTag('property', 'og:title', meta.title)
    updateMetaTag('property', 'og:description', meta.description)
  }

  const updateMetaTag = (attrName: string, attrValue: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attrName, attrValue)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  // Watch route changes and update meta tags
  watch(
    () => router.currentRoute.value.name,
    (newRouteName) => {
      updateMetaTags(newRouteName)
    },
    { immediate: true }
  )
}
