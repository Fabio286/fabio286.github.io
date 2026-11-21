<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div class="aquarium" :class="{ 'is-lit': lit }">
    <Head>
      <Title>{{ bio?.title }}</Title>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
    </Head>

    <button
      class="light-switch"
      type="button"
      :aria-pressed="lit"
      :aria-label="switchLabel"
      :title="switchLabel"
      @click="lit = !lit"
    >
      <span class="light-switch__plate">
        <span class="light-switch__rocker" />
      </span>
      <span class="light-switch__led" />
    </button>

    <div class="scene" aria-hidden="true">
      <div class="scene__water" />
      <div class="scene__light" />
      <div class="scene__lamp" />
      <div class="ray" style="left: 30%; width: clamp(22px, 6.25vw, 90px); --ray-rot: 14deg" />
      <div class="ray" style="left: 48%; width: clamp(34px, 9.7vw, 140px); --ray-rot: 8deg; animation-delay: -5s" />
      <div class="ray" style="left: 64%; width: clamp(18px, 4.9vw, 70px); --ray-rot: -4deg; animation-delay: -9s" />

      <!-- Background plants (blurred) -->
      <svg
        class="scene__back"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <path id="lf" d="M0 0 C5 -5 15 -5 22 0 C15 5 5 5 0 0Z" />
          <path id="sw" d="M0 0 C-22 -70 -14 -190 0 -270 C14 -190 22 -70 0 0Z" />
          <path id="lfn" d="M0 0 C4 -3.5 12 -3.5 19 0 C12 3.5 4 3.5 0 0Z" />
          <path id="lotus" d="M0 0 C-30 0 -38 -30 -16 -40 C-7 -43 -1 -38 0 -31 C1 -38 7 -43 16 -40 C38 -30 30 0 0 0Z" />
          <path id="crypt" d="M0 0 C-3 -14 -14 -30 -12 -52 C-10 -68 -2 -76 0 -80 C2 -76 10 -68 12 -52 C14 -30 3 -14 0 0Z" />
          <path id="fern" d="M0 0 C-6 -40 -10 -100 -3 -150 C-1 -158 1 -158 2 -150 C8 -100 7 -40 0 0Z" />
          <path id="anub" d="M0 0 L-1 -12 C-20 -18 -22 -48 0 -60 C22 -48 20 -18 1 -12Z" />
          <filter id="far" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>
        <!-- Easter egg: tiger lotus, far behind the other plants, visible only with the light on -->
        <g transform="translate(115 25)">
          <g class="lotus reveal sway sB" filter="url(#far)">
            <g fill="none" stroke="#3e2c24" stroke-width="2">
              <path v-for="leaf in lotusLeaves" :key="`ls-${leaf.x}`" :d="`M805 560 Q${(805 + leaf.x) / 2} ${leaf.y + 60} ${leaf.x} ${leaf.y}`" />
            </g>
            <g v-for="leaf in lotusLeaves" :key="`ll-${leaf.x}`" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`">
              <use href="#lotus" :fill="leaf.fill" />
              <g fill="#3a1a20" opacity=".5">
                <circle cx="-14" cy="-22" r="3" /><circle cx="10" cy="-26" r="2.4" />
                <circle cx="-4" cy="-12" r="2" /><circle cx="16" cy="-14" r="2.6" />
              </g>
            </g>
          </g>
        </g>
        <!-- Stem plants: dark in the dark, coloured with the light on -->
        <g v-for="(stem, si) in backStems" :key="`bst-${si}`" :class="['back-stem', 'sway', stem.sway]">
          <path class="back-stem__stem" :d="stem.d" stroke-width="2.5" fill="none" />
          <g v-for="leaf in stem.leaves" :key="`bsl-${si}-${leaf.y}`">
            <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`" :style="{ '--lit': leaf.fill }" />
            <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${180 - leaf.r})`" :style="{ '--lit': leaf.fill }" />
          </g>
        </g>
        <g fill="#0a1f16">
          <ellipse cx="260" cy="566" rx="200" ry="56" />
          <ellipse cx="640" cy="570" rx="280" ry="72" />
          <ellipse cx="1120" cy="566" rx="220" ry="58" />
        </g>
        <!-- Distant rocks: barely visible in the dark -->
        <path class="rock" d="M500 560 L518 522 L556 500 L606 506 L636 534 L652 560Z" />
        <path class="rock-top" d="M518 522 L556 500 L606 506 L588 520 L540 528Z" />
        <path class="rock" d="M1150 560 L1164 532 L1198 518 L1234 530 L1252 560Z" />
        <path class="rock-top" d="M1164 532 L1198 518 L1234 530 L1210 536 L1180 540Z" />
        <!-- Composition: dense and tall at the sides (left fuller than right), open centre -->
        <g class="sway sA" fill="#0e271c">
          <path d="M40 560 C36 430 70 320 56 150 L62 152 C80 320 46 430 49 560Z" />
          <path d="M80 560 C75 420 110 300 95 120 L101 122 C118 300 84 420 88 560Z" />
          <path d="M130 560 C128 430 100 330 120 180 L126 183 C108 330 136 430 138 560Z" />
          <path d="M170 560 C168 450 190 360 176 240 L182 242 C198 360 176 450 178 560Z" />
        </g>
        <g transform="translate(-60 0)">
          <g class="sway sB" fill="#0e271c">
            <path d="M400 560 C396 430 430 320 412 180 L418 182 C440 320 404 430 408 560Z" />
            <path d="M440 560 C440 440 412 350 430 250 L436 253 C420 350 448 440 448 560Z" />
          </g>
        </g>
        <g transform="translate(-205 80)">
          <g class="sway sD" fill="#102a1e">
            <path d="M690 560 C688 470 694 380 690 250" stroke="#12301f" stroke-width="3" fill="none" />
            <g v-for="leaf in backStemLeaves" :key="`bs-${leaf.y}`">
              <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`" />
              <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${180 - leaf.r})`" />
            </g>
          </g>
        </g>
        <g transform="translate(70 40)">
          <g class="sway sC" fill="#0e271c">
            <path d="M930 560 C926 440 960 330 944 200 L950 202 C970 330 934 440 938 560Z" />
            <path d="M975 560 C972 440 948 330 966 220 L972 223 C956 330 982 440 983 560Z" />
            <path d="M1010 560 C1008 460 1030 370 1018 260 L1024 262 C1040 370 1016 460 1018 560Z" />
          </g>
        </g>
        <g class="sway sB" fill="#0e271c">
          <path d="M1260 560 C1256 420 1290 310 1272 140 L1278 142 C1298 310 1264 420 1268 560Z" />
          <path d="M1300 560 C1298 440 1272 340 1290 210 L1296 213 C1280 340 1308 440 1308 560Z" />
          <path d="M1345 560 C1342 430 1374 320 1358 170 L1364 172 C1384 320 1352 430 1354 560Z" />
        </g>
      </svg>

      <!-- Easter egg: zebra danio school -->
      <svg width="0" height="0" class="defs-only">
        <symbol id="danio" viewBox="0 0 48 12">
          <path d="M9 6 L1 1.2 L4 6 L1 10.8Z" fill="#cfc596" opacity=".55" />
          <path d="M8 6 C14 2 30 1.6 42 4.6 Q46.5 6 42 7.4 C30 10.4 14 10 8 6Z" fill="#d8cd9a" opacity=".85" />
          <g fill="none" stroke="#2d4f9a" stroke-linecap="round">
            <path d="M11 4.7 C20 3.5 31 3.4 40 5" stroke-width="1" />
            <path d="M10 6 C20 5.7 31 5.7 41.5 6" stroke-width="1.2" />
            <path d="M11 7.3 C20 8.5 31 8.6 40 7" stroke-width="1" />
            <path d="M2 3.4 L9 5.4 M2.5 8.6 L9 6.6" stroke-width=".9" opacity=".8" />
          </g>
          <circle cx="42" cy="5.6" r=".9" fill="#0b1210" />
        </symbol>
      </svg>
      <div class="school reveal">
        <svg
          v-for="(f, i) in school"
          :key="`fish-${i}`"
          class="fish"
          viewBox="0 0 48 12"
          :style="{ left: `${f.x}px`, top: `${f.y}px`, width: `${f.w}px`, animationDelay: f.delay }"
        >
          <use href="#danio" />
        </svg>
      </div>

      <span
        v-for="(b, i) in bubbles"
        :key="`bubble-${i}`"
        class="bubble"
        :style="{ left: b.left, width: `${b.size}px`, height: `${b.size}px`, animationDelay: b.delay, animationDuration: b.duration }"
      />

      <!-- Mid-ground: shorter, wider plants and a carpet, slightly blurred -->
      <svg
        class="scene__mid"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
      >
        <path class="tint" style="--lit: #3a3227" d="M0 400 L0 352 C220 352 440 366 720 378 C980 374 1220 360 1440 348 L1440 400Z" />
        <g v-for="(p, pi) in midPlants" :key="`mp-${pi}`" :class="['sway', p.sway]">
          <use
            v-for="(l, li) in p.leaves"
            :key="`mpl-${pi}-${li}`"
            class="tint"
            :href="`#${p.shape}`"
            :transform="`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`"
            :style="{ '--lit': l.lit }"
          />
        </g>
        <circle
          v-for="(c, ci) in carpet"
          :key="`cp-${ci}`"
          class="tint"
          :cx="c.x"
          :cy="c.y"
          :r="c.r"
          :style="{ '--lit': c.lit }"
        />
      </svg>

      <!-- Left foreground plants -->
      <svg
        class="scene__left"
        viewBox="0 0 340 720"
        preserveAspectRatio="xMinYMax meet"
      >
        <g class="sway sA" fill="#143723">
          <path d="M90 720 C88 560 94 380 92 150" stroke="#163a26" stroke-width="3.5" fill="none" />
          <g v-for="leaf in stemA" :key="`a-${leaf.y}`">
            <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`" :fill="leaf.fill" />
            <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${180 - leaf.r})`" :fill="leaf.fill" />
          </g>
        </g>
        <g class="sway sC" fill="#11301f">
          <path d="M150 720 C152 600 146 450 150 260" stroke="#143423" stroke-width="3.5" fill="none" />
          <g v-for="leaf in stemB" :key="`b-${leaf.y}`">
            <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`" :fill="leaf.fill" />
            <use href="#lf" :transform="`translate(${leaf.x} ${leaf.y}) rotate(${180 - leaf.r})`" :fill="leaf.fill" />
          </g>
        </g>
        <g class="sway sB" fill="#0f2a1c">
          <path d="M30 720 C26 560 60 420 44 200 L51 202 C72 420 36 560 39 720Z" />
          <path d="M210 720 C208 600 236 470 222 330 L229 332 C246 470 218 600 219 720Z" />
          <path d="M250 720 C250 620 228 530 240 420 L246 422 C238 530 258 620 258 720Z" />
        </g>
        <!-- Rocks: barely visible in the dark -->
        <path class="rock" d="M150 720 L162 668 L196 628 L238 618 L270 640 L292 690 L300 720Z" />
        <path class="rock-top" d="M162 668 L196 628 L238 618 L226 642 L190 660Z" />
        <!-- Small Anubias attached to the rock -->
        <g class="sway sC">
          <use
            v-for="(l, li) in rockAnubias"
            :key="`ra-${li}`"
            class="tint"
            href="#anub"
            :transform="`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`"
            :style="{ '--lit': l.lit }"
          />
        </g>
        <path class="rock-crack" d="M196 628 L206 664 L198 700 M238 618 L248 668" />
        <path class="rock" d="M262 720 L272 694 L300 684 L326 700 L336 720Z" />
        <path class="rock-top" d="M272 694 L300 684 L314 692 L286 700Z" />
        <ellipse cx="120" cy="728" rx="170" ry="40" fill="#0a1d14" />
      </svg>

      <!-- Right foreground plants -->
      <svg
        class="scene__right"
        viewBox="0 0 380 640"
        preserveAspectRatio="xMaxYMax meet"
      >
        <!-- Driftwood: barely visible in the dark -->
        <g class="wood" fill="none" stroke-linecap="round">
          <path d="M330 640 C300 580 250 540 210 470 C185 425 170 380 150 320" stroke-width="16" />
          <path d="M215 478 C240 430 262 400 300 370" stroke-width="8" />
          <path d="M300 370 C312 352 318 340 330 318" stroke-width="4" />
          <path d="M165 365 C140 340 118 330 96 300" stroke-width="6" />
          <path d="M152 325 C150 290 160 262 176 236" stroke-width="5" />
          <path class="wood-hi" d="M324 626 C296 574 250 534 214 470 C192 430 178 390 160 334" stroke-width="3" />
        </g>
        <!-- Moss tufts on the driftwood -->
        <circle
          v-for="(m, mi) in moss"
          :key="`ms-${mi}`"
          class="tint"
          :cx="m.x"
          :cy="m.y"
          :r="m.r"
          :style="{ '--lit': m.lit, '--dark': '#0e1914' }"
        />
        <g class="sway sD" fill="#123320">
          <use href="#sw" transform="translate(200 620) rotate(-38) scale(1.05)" />
          <use href="#sw" transform="translate(200 620) rotate(-16) scale(1.25)" />
          <use href="#sw" transform="translate(200 620) rotate(4) scale(1.4)" />
          <use href="#sw" transform="translate(200 620) rotate(24) scale(1.2)" />
          <use href="#sw" transform="translate(200 620) rotate(46) scale(0.95)" />
        </g>
        <g fill="none" stroke="#0c2418" stroke-width="1.2" opacity=".8">
          <path d="M200 620 L150 410" /><path d="M200 620 L190 248" /><path d="M200 620 L246 360" />
        </g>
        <!-- Easter egg: red Rotala, its colour shows only with the light on -->
        <g v-for="(stem, si) in redStems" :key="`rs-${si}`" :class="['red-plant', 'sway', stem.sway]">
          <path class="red-plant__stem" :d="stem.d" stroke-width="2.5" fill="none" />
          <g v-for="leaf in stem.leaves" :key="`rl-${si}-${leaf.y}`">
            <use
              href="#lfn"
              :transform="`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`"
              :style="{ '--lit': leaf.fill }"
            />
            <use
              href="#lfn"
              :transform="`translate(${leaf.x} ${leaf.y}) rotate(${180 - leaf.r})`"
              :style="{ '--lit': leaf.fill }"
            />
          </g>
        </g>
        <g class="sway sA" fill="#0f2a1c">
          <path d="M310 640 C306 500 340 360 322 100 L329 102 C350 360 316 500 319 640Z" />
          <path d="M345 640 C343 520 318 410 336 230 L343 232 C328 410 354 520 354 640Z" />
          <path d="M60 640 C58 560 74 480 64 380 L70 382 C82 480 66 560 68 640Z" />
        </g>
        <ellipse cx="220" cy="650" rx="190" ry="42" fill="#0a1d14" />
      </svg>

      <div class="scene__floor" />
    </div>

    <main class="content">
      <header class="intro">
        <div class="intro__id">
          <img class="intro__photo" src="/images/picture.png" alt="Fabio Di Stasio" width="120" height="120">
          <div class="intro__name">
            <h1>Fabio Di Stasio</h1>
            <p>{{ bio?.subtitle }}</p>
          </div>
        </div>
        <ContentRenderer v-if="bio" class="intro__bio" :value="bio" />
      </header>

      <section v-if="bio?.projects?.length" aria-labelledby="projects-h" class="section">
        <h2 id="projects-h" class="section__title">
          {{ bio.projectsLabel }}
        </h2>
        <article v-for="project in bio.projects" :key="project.name" class="project">
          <div class="project__body">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <div class="project__links">
              <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener"
              >{{ link.label }}</a>
              <a
                v-if="project.repo && stars?.[project.repo] != null"
                class="stars"
                :href="`https://github.com/${project.repo}/stargazers`"
                :title="`${bio.starsLabel}: ${stars[project.repo]}`"
                :aria-label="`${bio.starsLabel}: ${stars[project.repo]}`"
                target="_blank"
                rel="noopener"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                >
                  <path d="M12 17.75l-6.17 3.24 1.18-6.87-5-4.86 6.9-1 3.09-6.26 3.09 6.26 6.9 1-5 4.86 1.18 6.87z" />
                </svg>
                <span>{{ formatStars(stars[project.repo]) }}</span>
              </a>
            </div>
          </div>
          <img
            v-if="project.icon"
            class="project__icon"
            :src="project.icon"
            alt=""
            width="64"
            height="64"
            loading="lazy"
          >
        </article>
      </section>

      <section aria-labelledby="contact-h" class="section section--tight">
        <h2 id="contact-h" class="section__title">
          {{ bio?.contactLabel }}
        </h2>
        <nav class="contacts" aria-label="Social profiles">
          <a rel="me noopener" target="_blank" href="https://github.com/Fabio286">GitHub</a>
          <a rel="me noopener" target="_blank" href="https://mastodon.uno/@akela86">Mastodon</a>
          <a rel="me noopener" target="_blank" href="https://www.linkedin.com/in/distasiofabio/">LinkedIn</a>
        </nav>
      </section>

      <footer class="footer">
        © {{ year }} Fabio Di Stasio
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { localeProperties, localeCodes } = useI18n()

const { data: bio } = await useAsyncData<ParsedContent | null>('home', () => {
  return queryContent()
    .where({
      _path: `/${(localeProperties.value.iso || localeCodes.value[0]).toLowerCase()}/_home`
    })
    .findOne()
})

const year = new Date().getFullYear()

// GitHub stars: fetched at build time (so they are in the static HTML),
// then refreshed in the browser; a failed request keeps the previous value.
type StarMap = Record<string, number | null>

const repos = (bio.value?.projects || [])
  .map((p: { repo?: string }) => p.repo)
  .filter((r?: string): r is string => !!r)

const fetchStars = async (): Promise<StarMap> => {
  const entries = await Promise.all(repos.map(async (repo: string) => {
    try {
      const res = await $fetch<{ stargazers_count: number }>(`https://api.github.com/repos/${repo}`)
      return [repo, res.stargazers_count] as const
    } catch {
      return [repo, null] as const
    }
  }))
  return Object.fromEntries(entries)
}

const { data: stars } = await useAsyncData<StarMap>('gh-stars', fetchStars)

onMounted(async () => {
  const fresh = await fetchStars()
  const merged: StarMap = { ...(stars.value || {}) }
  for (const [repo, count] of Object.entries(fresh)) {
    if (count != null) { merged[repo] = count }
  }
  stars.value = merged
})

const formatStars = (n: number | null) => {
  if (n == null) { return '' }
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n)
}

interface Leaf { x: number, y: number, r: number, fill?: string }

const backStemLeaves: Leaf[] = [
  { x: 690, y: 520, r: -30 },
  { x: 691, y: 470, r: -30 },
  { x: 692, y: 420, r: -30 },
  { x: 692, y: 370, r: -30 },
  { x: 691, y: 320, r: -30 },
  { x: 690, y: 275, r: -40 }
]

const stemA: Leaf[] = [
  { x: 89, y: 680, r: -28 },
  { x: 89, y: 630, r: -28 },
  { x: 90, y: 580, r: -28 },
  { x: 91, y: 530, r: -28 },
  { x: 92, y: 480, r: -30 },
  { x: 93, y: 430, r: -30 },
  { x: 93, y: 380, r: -32 },
  { x: 93, y: 330, r: -34 },
  { x: 93, y: 280, r: -36 },
  { x: 93, y: 230, r: -40, fill: '#3a2a1f' },
  { x: 92, y: 185, r: -50, fill: '#46301f' }
]

const stemB: Leaf[] = [
  { x: 151, y: 670, r: -26 },
  { x: 150, y: 620, r: -26 },
  { x: 149, y: 570, r: -28 },
  { x: 148, y: 520, r: -28 },
  { x: 148, y: 470, r: -30 },
  { x: 148, y: 420, r: -32 },
  { x: 149, y: 370, r: -34 },
  { x: 150, y: 320, r: -40, fill: '#3a2a1f' },
  { x: 150, y: 275, r: -50, fill: '#46301f' }
]

// ---------- Easter egg: aquarium light ----------
const lit = ref(false)

const switchLabel = computed(() => {
  const it = localeProperties.value.iso?.startsWith('it')
  if (lit.value) { return it ? 'Spegni la luce dell\'acquario' : 'Turn off the aquarium light' }
  return it ? 'Accendi la luce dell\'acquario' : 'Turn on the aquarium light'
})

const mixColor = (a: string, b: string, t: number) => {
  const toRgb = (hex: string) => [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16))
  const pa = toRgb(a)
  const pb = toRgb(b)
  return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join('')
}

// Red Rotala stems (right foreground SVG, viewBox 380x640): green at the base, red at the tip.
const makeRedStem = (x: number, top: number, sway: string, lean: number) => {
  const base = 640
  const leaves: Leaf[] = []
  for (let y = base - 30; y >= top; y -= 20) {
    const t = (base - y) / (base - top)
    leaves.push({
      x: x + lean * t,
      y,
      r: -30 - t * 22,
      fill: mixColor('3f6b2c', t > 0.5 ? 'e04a2f' : 'b8542c', Math.min(1, t * 1.3))
    })
  }
  return { sway, leaves, d: `M${x} ${base} Q${x + lean * 0.3} ${(base + top) / 2} ${x + lean} ${top}` }
}

// Background stem plants (background SVG, viewBox 1440x560): dark in the dark, coloured with the light on
const makeBackStem = (x: number, top: number, sway: string, lean: number, tip: string) => {
  const base = 560
  const leaves: Leaf[] = []
  for (let y = base - 24; y >= top; y -= 26) {
    const t = (base - y) / (base - top)
    leaves.push({
      x: x + lean * t,
      y,
      r: -28 - t * 24,
      fill: mixColor('2c5a2e', tip, Math.min(1, t * 1.15))
    })
  }
  return { sway, leaves, d: `M${x} ${base} Q${x + lean * 0.3} ${(base + top) / 2} ${x + lean} ${top}` }
}

const backStems = [
  // left: dense and tall, getting shorter towards the centre
  makeBackStem(206, 250, 'sC', -8, 'c98a3c'),
  makeBackStem(228, 200, 'sA', 4, 'd07a38'),
  makeBackStem(254, 230, 'sD', 10, 'b9903f'),
  makeBackStem(282, 270, 'sB', -4, 'c98a3c'),
  makeBackStem(306, 300, 'sC', 8, 'b9903f'),
  makeBackStem(392, 360, 'sA', -6, '8fbf4a'),
  makeBackStem(418, 330, 'sD', 6, 'a6cc55'),
  makeBackStem(446, 400, 'sB', 10, '8fbf4a'),
  // right: a bit sparser, rising again towards the edge
  makeBackStem(958, 430, 'sC', -8, '7fb84c'),
  makeBackStem(1120, 330, 'sA', -10, '7fb84c'),
  makeBackStem(1146, 270, 'sD', 2, '9cc957'),
  makeBackStem(1176, 350, 'sB', 12, '86b94e'),
  makeBackStem(1388, 240, 'sC', -6, 'c9555a'),
  makeBackStem(1412, 290, 'sA', 8, 'd0646a'),
  makeBackStem(1432, 330, 'sD', 4, 'c9555a')
]

// Rosette plants: leaves fanned out from one base, the central ones bigger
interface RosetteLeaf { x: number, y: number, r: number, s: number, lit: string }

const rosette = (x: number, y: number, count: number, spread: number, sMin: number, sMax: number, colors: string[]): RosetteLeaf[] =>
  Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1)
    return {
      x: x + (t - 0.5) * count * 2,
      y,
      r: -spread + 2 * spread * t,
      s: +(sMin + (sMax - sMin) * (1 - Math.abs(t - 0.5) * 2)).toFixed(2),
      lit: colors[i % colors.length]
    }
  })

// Mid-ground SVG, viewBox 1440x400 (the substrate mound tops out around y=364)
const midPlants = [
  // left: crowded, sizes shrinking towards the centre
  { shape: 'fern', sway: 'sA', leaves: rosette(70, 354, 7, 34, 0.8, 1.2, ['#3f7343', '#4a7d45', '#43784a']) },
  { shape: 'crypt', sway: 'sB', leaves: rosette(170, 355, 7, 55, 0.8, 1.15, ['#557d3c', '#7d5c3a', '#68703a']) },
  { shape: 'anub', sway: 'sD', leaves: rosette(262, 358, 6, 62, 0.8, 1.1, ['#2f6136', '#376a3b']) },
  { shape: 'crypt', sway: 'sC', leaves: rosette(345, 362, 6, 50, 0.6, 0.9, ['#68703a', '#557d3c', '#7d5c3a']) },
  { shape: 'anub', sway: 'sB', leaves: rosette(440, 367, 4, 55, 0.5, 0.65, ['#376a3b', '#2f6136']) },
  // right: fewer, more spaced out
  { shape: 'crypt', sway: 'sD', leaves: rosette(935, 375, 4, 45, 0.45, 0.6, ['#6a5a36', '#557d3c']) },
  { shape: 'fern', sway: 'sC', leaves: rosette(1065, 369, 5, 30, 0.6, 0.9, ['#4a7d45', '#3f7343']) },
  { shape: 'anub', sway: 'sA', leaves: rosette(1200, 362, 5, 60, 0.75, 1, ['#2f6136', '#376a3b']) },
  { shape: 'crypt', sway: 'sB', leaves: rosette(1330, 354, 6, 52, 0.75, 1.05, ['#80603c', '#557d3c', '#6a5a36']) },
  { shape: 'fern', sway: 'sD', leaves: rosette(1415, 350, 5, 30, 0.75, 1.1, ['#3f7343', '#4a7d45']) }
]

// Approximate top of the substrate mound (lowest in the centre)
const moundY = (x: number) => Math.round(x < 720 ? 352 + 26 * x / 720 : 378 - 30 * (x - 720) / 720)

// Low carpet patches on the mound
const carpet = [
  // the open centre is a low lawn
  { x0: 470, n: 34 }, { x0: 760, n: 30 }, { x0: 1010, n: 14 }
].flatMap(({ x0, n }) => Array.from({ length: n }, (_, i) => ({
  x: x0 + i * 8 + (i * 7) % 5,
  y: moundY(x0 + i * 8) + 4 - (i * 5) % 9 - Math.round(Math.sin(i / n * Math.PI) * 6),
  r: 4 + (i * 3) % 3,
  lit: ['#6aa84a', '#7cba52', '#5c9a42'][i % 3]
})))

// Foreground details
const rockAnubias = rosette(214, 634, 4, 48, 0.45, 0.6, ['#2f6638', '#3a7040'])

const moss = [[232, 500], [204, 452], [172, 384], [300, 372], [156, 330]].flatMap(([cx, cy]) =>
  [[0, 0, 8], [-8, 3, 6], [8, 2, 6], [-4, -6, 5], [5, -5, 5], [0, 6, 5]].map(([dx, dy, r], i) => ({
    x: cx + dx, y: cy + dy, r, lit: ['#4f7d36', '#5c8a3c', '#46722f'][i % 3]
  })))

const redStems = [
  makeRedStem(84, 450, 'sC', -6),
  makeRedStem(104, 380, 'sA', 4),
  makeRedStem(124, 410, 'sB', 10),
  makeRedStem(140, 470, 'sD', 14)
]

// Tiger lotus leaves (background SVG, viewBox 1440x560)
const lotusLeaves = [
  { x: 762, y: 470, r: -18, s: 0.75, fill: '#5a2a32' },
  { x: 798, y: 400, r: -4, s: 0.9, fill: '#66303a' },
  { x: 844, y: 436, r: 14, s: 0.82, fill: '#5f2c35' },
  { x: 824, y: 500, r: 8, s: 0.62, fill: '#6c3439' },
  { x: 780, y: 515, r: -10, s: 0.55, fill: '#663239' }
]

// Zebra danio school (layout grid scaled by SCHOOL_SCALE, group about 530x200)
const SCHOOL_SCALE = 1.6
const school = [
  [0, 52, 24], [22, 30, 26], [30, 74, 23], [52, 10, 25], [58, 50, 28], [66, 92, 24],
  [88, 32, 26], [96, 70, 25], [112, 0, 23], [120, 104, 22], [128, 46, 29], [150, 20, 25],
  [156, 84, 26], [176, 58, 24], [190, 4, 22], [200, 34, 27], [214, 96, 23], [232, 66, 25],
  [248, 22, 24], [270, 48, 26], [286, 80, 22], [304, 30, 23]
].map(([x, y, w], i) => ({
  x: Math.round(x * SCHOOL_SCALE),
  y: Math.round(y * SCHOOL_SCALE),
  w: Math.round(w * SCHOOL_SCALE * 1.05),
  delay: `${(-(i * 0.37) % 1.4).toFixed(2)}s`
}))

const bubbles = [
  { left: '21%', size: 6, delay: '0s', duration: '18s' },
  { left: '21.6%', size: 4, delay: '-2.5s', duration: '15s' },
  { left: '20.7%', size: 8, delay: '-7s', duration: '20s' },
  { left: '22%', size: 5, delay: '-11s', duration: '18s' },
  { left: '58%', size: 7, delay: '-4s', duration: '22s' },
  { left: '77%', size: 5, delay: '-9s', duration: '19s' },
  { left: '86%', size: 9, delay: '-14s', duration: '24s' },
  { left: '40%', size: 4, delay: '-16s', duration: '17s' }
]
</script>

<style lang="scss" scoped>
.aquarium {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #06100d;
  color: #d3dfd9;
  font-family: Inter, system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.65;

  a {
    color: #9fd3b4;
    text-decoration: none;

    &:hover {
      color: #cdeedb;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

/* ---------- Scene ---------- */
.scene {
  position: fixed;
  z-index: 0;
  overflow: hidden;
  inset: 0;
  pointer-events: none;
}

.scene__water {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 40% at 50% -6%, rgba(126, 176, 138, 0.2), rgba(126, 176, 138, 0) 70%),
    linear-gradient(180deg, #0b1c16 0%, #08140f 50%, #050b09 100%);
}

.scene__back {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* Grows with the viewport width (viewBox ratio 1440:560), so on wide screens the
     "slice" scaling never crops the top of the plants */
  height: max(560px, calc(100vw * 560 / 1440));
  filter: blur(2.5px);
  opacity: 0.7;
}

.scene__left {
  position: absolute;
  bottom: 0;
  left: -30px;
  width: clamp(170px, 24vw, 340px);
  height: auto;
}

.scene__right {
  position: absolute;
  right: -30px;
  bottom: 0;
  width: clamp(190px, 27vw, 380px);
  height: auto;
}

.scene__mid {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: max(400px, calc(100vw * 400 / 1440));
  filter: blur(1.2px);
  opacity: 0.9;
}

.scene__floor {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 110px;
  background: linear-gradient(180deg, rgba(4, 9, 7, 0), #040907 75%);
  transition: opacity 400ms ease;

  .is-lit & {
    opacity: 0.55;
    transition: opacity 1400ms ease 350ms;
  }
}

.sway {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: sway 9s ease-in-out infinite alternate;
}

.sA { animation-duration: 8s; }
.sB { animation-duration: 11s; animation-delay: -3s; }
.sC { animation-duration: 9.5s; animation-delay: -6s; }
.sD { animation-duration: 13s; animation-delay: -2s; }

.bubble {
  position: absolute;
  bottom: -20px;
  border: 1px solid rgba(205, 238, 226, 0.38);
  border-radius: 50%;
  background: rgba(205, 238, 226, 0.06);
  opacity: 0;
  animation: rise 18s linear infinite;
}

.ray {
  position: absolute;
  top: -10%;
  height: 80%;
  background: linear-gradient(180deg, rgba(170, 215, 180, 0.1), rgba(170, 215, 180, 0));
  transform: rotate(var(--ray-rot));
  transform-origin: top center;
  animation: ray 14s ease-in-out infinite alternate;
}

@keyframes sway {
  from { transform: rotate(-1.4deg); }
  to { transform: rotate(1.7deg); }
}

@keyframes rise {
  0% { opacity: 0; transform: translate(0, 0); }
  8% { opacity: 0.75; }
  50% { transform: translate(10px, -700px); }
  100% { opacity: 0; transform: translate(-6px, -1500px); }
}

@keyframes ray {
  from { opacity: 0.35; }
  to { opacity: 0.9; }
}

/* ---------- Easter egg: aquarium light ---------- */
.light-switch {
  position: absolute;
  z-index: 3;
  top: 18px;
  right: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  border: 0;
  background: none;
  cursor: pointer;
  gap: 5px;
  opacity: 0.55;
  transition: opacity 200ms ease;

  &:hover,
  &:focus-visible,
  &[aria-pressed='true'] {
    opacity: 0.9;
  }

  &:focus-visible {
    border-radius: 6px;
    outline: 2px solid #9fd3b4;
    outline-offset: 2px;
  }
}

.light-switch__plate {
  position: relative;
  display: block;
  overflow: hidden;
  width: 20px;
  height: 30px;
  padding: 3px;
  border: 1px solid rgba(190, 225, 205, 0.3);
  border-radius: 5px;
  background: rgba(10, 24, 19, 0.8);

  /* Occasional glint sweeping across the plate, a hint that it can be pressed */
  &::after {
    position: absolute;
    top: -50%;
    left: -150%;
    width: 60%;
    height: 200%;
    background: linear-gradient(90deg, rgba(220, 245, 230, 0), rgba(220, 245, 230, 0.55), rgba(220, 245, 230, 0));
    content: '';
    pointer-events: none;
    transform: rotate(25deg);
    animation: glint 7s ease-in-out 2s infinite;
  }

  [aria-pressed='true'] &::after {
    animation: none;
  }
}

@keyframes glint {
  0%, 82% { left: -150%; }
  100% { left: 190%; }
}

.light-switch__rocker {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(180deg, #1a2c25 0%, #1a2c25 50%, #2e4a3e 50%, #3b5a4c 100%);
  transition: background 120ms ease;

  [aria-pressed='true'] & {
    background: linear-gradient(180deg, #5d8a74 0%, #46705c 50%, #1a2c25 50%, #1a2c25 100%);
  }
}

.light-switch__led {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #24352e;
  transition: background 200ms ease, box-shadow 200ms ease;

  [aria-pressed='true'] & {
    background: #8ff0b8;
    box-shadow: 0 0 6px 1px rgba(143, 240, 184, 0.8);
  }
}

.scene__light,
.scene__lamp {
  position: absolute;
  opacity: 0;
}

.scene__light {
  inset: 0;
  background:
    radial-gradient(ellipse 85% 50% at 50% -8%, rgba(215, 245, 225, 0.26), rgba(215, 245, 225, 0) 72%),
    linear-gradient(180deg, rgba(70, 140, 105, 0.16) 0%, rgba(40, 95, 70, 0.1) 55%, rgba(40, 95, 70, 0) 100%);
  mix-blend-mode: screen;
}

.scene__lamp {
  top: 0;
  right: 8%;
  left: 8%;
  height: 2px;
  border-radius: 2px;
  background: rgba(235, 252, 242, 0.9);
  box-shadow: 0 0 28px 8px rgba(185, 240, 210, 0.35);
}

.is-lit {
  .scene__light,
  .scene__lamp {
    animation: flicker 1s linear forwards;
  }
}

.scene__back,
.scene__mid,
.scene__left,
.scene__right,
.ray {
  transition: filter 400ms ease, opacity 400ms ease;
}

.is-lit {
  .scene__back,
  .scene__mid,
  .scene__left,
  .scene__right,
  .ray {
    transition-delay: 350ms;
    transition-duration: 1400ms;
  }

  .scene__back {
    filter: blur(1.8px) brightness(1.7) saturate(1.2);
    opacity: 0.85;
  }

  .scene__mid {
    filter: blur(0.9px) brightness(1.6) saturate(1.2);
    opacity: 1;
  }

  .scene__left,
  .scene__right {
    filter: brightness(1.85) saturate(1.3);
  }

  .ray {
    filter: brightness(2.2);
  }
}

/* Hidden details: invisible in the dark, revealed by the light */
.reveal {
  opacity: 0;
  transition: opacity 400ms ease;

  .is-lit & {
    opacity: 1;
    transition: opacity 1400ms ease 350ms;
  }
}

.lotus.reveal {
  .is-lit & {
    opacity: 0.7;
  }
}

/* Colours that change with the light: same timing as the plants' brightening */
.red-plant use,
.red-plant__stem,
.back-stem use,
.back-stem__stem,
.rock,
.rock-top,
.rock-crack,
.wood path,
.tint {
  transition: fill 400ms ease, stroke 400ms ease;

  .is-lit & {
    transition-delay: 350ms;
    transition-duration: 1400ms;
  }
}

/* Generic: dark silhouette (--dark) that takes its real colour (--lit) with the light on */
.tint {
  fill: var(--dark, #0b1d15);

  .is-lit & {
    fill: var(--lit);
  }
}

.red-plant use {
  fill: #11301f;

  .is-lit & {
    fill: var(--lit);
  }
}

.red-plant__stem {
  stroke: #143423;

  .is-lit & {
    stroke: #6b4a2a;
  }
}

.back-stem use {
  fill: #0c2118;

  .is-lit & {
    fill: var(--lit);
  }
}

.back-stem__stem {
  stroke: #0d241a;

  .is-lit & {
    stroke: #2f4a26;
  }
}

.rock {
  fill: #0e1714;

  .is-lit & {
    fill: #343a37;
  }
}

.rock-top {
  fill: #121c18;

  .is-lit & {
    fill: #4d5551;
  }
}

.rock-crack {
  fill: none;
  stroke: #0b1310;
  stroke-width: 1.5;

  .is-lit & {
    stroke: #232825;
  }
}

.wood path {
  stroke: #101914;

  .is-lit & {
    stroke: #3c2b20;
  }
}

.wood path.wood-hi {
  stroke: #121c16;

  .is-lit & {
    stroke: #5e4532;
  }
}

.defs-only {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
}

.school {
  position: absolute;
  top: 46%;
  left: 0;
  width: 530px;
  height: 200px;
  filter: blur(1.4px);
  animation: school 34s linear infinite;
}

/* Slightly faded, so the school sits further back */
.school.reveal {
  .is-lit & {
    opacity: 0.8;
  }
}

.fish {
  position: absolute;
  height: auto;
  animation: wiggle 1.4s ease-in-out infinite alternate;
}

@keyframes flicker {
  0% { opacity: 0; }
  8% { opacity: 0.7; }
  12% { opacity: 0.05; }
  22% { opacity: 0.85; }
  26% { opacity: 0.2; }
  34% { opacity: 0.6; }
  38% { opacity: 0.3; }
  60%, 100% { opacity: 1; }
}

@keyframes school {
  0% { transform: translate(-580px, 0); }
  25% { transform: translate(25vw, -40px); }
  50% { transform: translate(52vw, 20px); }
  75% { transform: translate(78vw, -24px); }
  100% { transform: translate(calc(100vw + 60px), 10px); }
}

@keyframes wiggle {
  from { transform: translate(0, 0) rotate(-2deg); }
  to { transform: translate(4px, 3px) rotate(2deg); }
}

/* ---------- Content ---------- */
.content {
  position: relative;
  z-index: 2;
  display: flex;
  max-width: 720px;
  flex-direction: column;
  margin: 0 auto;
  gap: 64px;
  padding: 104px 24px 160px;
}

.intro {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.intro__id {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px 28px;
}

.intro__photo {
  width: 120px;
  height: 120px;
  flex: none;
  border: 1px solid rgba(190, 225, 205, 0.16);
  border-radius: 50%;
  background: #10211b;
  object-fit: cover;
}

.intro__name {
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    margin: 0;
    color: #eef4f0;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.15;
  }

  p {
    margin: 0;
    color: #a9bdb4;
    font-size: 17px;
  }
}

.intro__bio {
  display: flex;
  max-width: 62ch;
  flex-direction: column;
  gap: 14px;
  color: #d3dfd9;
  font-size: 17px;
  line-height: 1.7;

  :deep(p) {
    margin: 0;
  }

  :deep(strong) {
    color: #eef4f0;
    font-weight: 500;
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section--tight {
  gap: 12px;
}

.section__title {
  margin: 0;
  color: #a9bdb4;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 24px;
  border: 1px solid rgba(170, 215, 190, 0.1);
  border-radius: 10px;
  background: rgba(7, 17, 14, 0.66);
  backdrop-filter: blur(6px);
}

.project__icon {
  width: 64px;
  height: 64px;
  flex: none;
  object-fit: contain;
}

.project__body {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;

  h3 {
    margin: 0;
    color: #eef4f0;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #b8c9c1;
    font-size: 15px;
  }
}

.project__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 4px;
  gap: 0 18px;
  font-size: 15px;

  a {
    padding: 8px 0;
  }

  a.stars {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border: 1px solid rgba(170, 215, 190, 0.22);
    border-radius: 999px;
    background: rgba(170, 215, 190, 0.06);
    color: #d3dfd9;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    gap: 6px;
    transition: border-color 160ms ease, background-color 160ms ease;

    svg {
      color: #e3c46f;
    }

    &:hover {
      border-color: rgba(170, 215, 190, 0.45);
      background: rgba(170, 215, 190, 0.12);
      color: #eef4f0;
      text-decoration: none;
    }
  }
}

@media (max-width: 480px) {
  .project {
    padding: 16px 18px;
    gap: 16px;
  }

  .project__icon {
    width: 48px;
    height: 48px;
  }
}

.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 28px;

  a {
    padding: 10px 0;
  }
}

.footer {
  color: #8ea69b;
  font-size: 13px;
}

@media (prefers-reduced-motion: reduce) {
  .sway,
  .ray,
  .fish,
  .light-switch__plate::after,
  .is-lit .scene__light,
  .is-lit .scene__lamp {
    animation: none;
  }

  .is-lit .scene__light,
  .is-lit .scene__lamp {
    opacity: 1;
  }

  .school {
    left: 62%;
    animation: none;
  }

  .bubble {
    display: none;
  }
}
</style>
