<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div>
    <Head>
      <Title>{{ bio?.title }}</Title>
    </Head>
    <main class="aquarium" data-aquarium>
      <div class="aquarium__light" aria-hidden="true" />

      <div class="bubbles" aria-hidden="true">
        <span v-for="bubble in 12" :key="bubble" class="bubble" :class="`bubble--${bubble}`" />
      </div>

      <img class="fish fish--gourami" data-fish="gourami" :src="gouramiFish" alt="">
      <div class="fish-school fish-school--neon" data-fish-school="neon" aria-hidden="true">
        <img
          v-for="fish in 9"
          :key="`neon-${fish}`"
          class="fish fish--neon"
          :class="`fish-school__member--${fish}`"
          :src="neonFish"
          alt=""
        >
      </div>
      <div class="fish-school fish-school--medaka" data-fish-school="medaka" aria-hidden="true">
        <img
          v-for="fish in 4"
          :key="`medaka-${fish}`"
          class="fish fish--medaka"
          :class="`medaka-school__member--${fish}`"
          :src="medakaFish"
          alt=""
        >
      </div>

      <div class="plants" aria-hidden="true">
        <img
          class="plant plant--lotus"
          data-plant="nymphaea"
          :src="lotusPlant"
          alt=""
        >
        <img
          v-for="position in ['left-back', 'left-front', 'right-back', 'right-front']"
          :key="`stem-${position}`"
          class="plant plant--stem"
          :class="`plant--${position}`"
          data-plant="stem"
          :src="stemPlant"
          alt=""
        >
        <img
          v-for="position in ['left-back', 'left-front', 'right-back', 'right-front']"
          :key="`vallisneria-${position}`"
          class="plant plant--vallisneria"
          :class="`plant--${position}`"
          data-plant="vallisneria"
          :src="vallisneriaPlant"
          alt=""
        >
      </div>

      <section class="profile-card" aria-labelledby="profile-title">
        <div class="profile-card__content">
          <img class="profile-photo" src="/images/picture.png" alt="Fabio Di Stasio">
          <h1 id="profile-title" class="profile-title">
            <span>About</span> Fabio Di Stasio<span class="profile-title__period">.</span>
          </h1>
          <p class="profile-subtitle">
            {{ bio?.subtitle }}
          </p>
          <ContentRenderer v-if="bio" class="profile-bio" :value="bio" />
          <nav class="social-links" aria-label="Social profiles">
            <a title="GitHub Profile" aria-label="GitHub Profile" rel="nofollow me noopener noreferrer" target="_blank" href="https://github.com/Fabio286">
              <BrandGithubIcon size="24" />
            </a>
            <a title="Follow on Mastodon" aria-label="Mastodon profile" rel="nofollow me noopener noreferrer" target="_blank" href="https://mastodon.uno/@akela86">
              <BrandMastodonIcon size="24" />
            </a>
            <a title="LinkedIn profile" aria-label="LinkedIn profile" rel="nofollow me noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/distasiofabio/">
              <BrandLinkedinIcon size="24" />
            </a>
          </nav>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import gouramiFish from '~/assets/images/pesce-gourami.svg'
import medakaFish from '~/assets/images/pesce-medaka.svg'
import neonFish from '~/assets/images/pesce-neon.svg'
import lotusPlant from '~/assets/images/nymphaea-lotus.svg'
import stemPlant from '~/assets/images/pianta-a-stelo.svg'
import vallisneriaPlant from '~/assets/images/vallisneria.svg'

const { localeProperties, localeCodes } = useI18n()

const { data: bio } = await useAsyncData<ParsedContent | null>('home', () => {
  return queryContent()
    .where({
      _path: `/${(localeProperties.value.iso || localeCodes.value[0]).toLowerCase()}/_home`
    })
    .findOne()
})
</script>

<style lang="scss" scoped>
.aquarium {
  position: relative;
  isolation: isolate;
  display: grid;
  height: 100vh;
  height: 100svh;
  place-items: center;
  overflow: hidden;
  background: linear-gradient(155deg, #102c30 0%, #0c2027 48%, #102c2b 100%);
  color: #e4f2e9;
}

.aquarium__light {
  position: absolute;
  z-index: 0;
  top: -25%;
  left: 18%;
  width: 65%;
  height: 85%;
  background: repeating-conic-gradient(from 220deg at 50% 0, transparent 0deg 7deg, rgba(152, 225, 195, 0.035) 8deg 10deg, transparent 11deg 19deg);
  filter: blur(9px);
  opacity: 0.85;
  transform: rotate(-8deg);
  animation: light-drift 18s ease-in-out infinite alternate;
  pointer-events: none;
}

.profile-card {
  position: relative;
  z-index: 2;
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  padding: 1.5rem 1.25rem;
  background: rgba(14, 42, 44, 0.26);
  backdrop-filter: blur(5px);
}

.profile-card__content {
  width: min(100%, 1100px);
  padding: clamp(1rem, 3vh, 2.4rem);
  text-align: center;
}

.profile-photo {
  display: block;
  width: 88px;
  height: 88px;
  margin: 0 auto 0.8rem;
  border: 3px solid rgba(172, 216, 174, 0.8);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 7px rgba(141, 195, 160, 0.1), 0 12px 30px rgba(2, 16, 20, 0.35);
}

.profile-title {
  margin: 0;
  color: #f0f7ef;
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.12;
}

.profile-title > span:first-child {
  color: #9db9a9;
  font-weight: 400;
}

.profile-title__period {
  color: #b7d59f;
}

.profile-subtitle {
  margin: 0.55rem 0 0;
  color: #c1d9cb;
  font-size: clamp(0.95rem, 2.4vw, 1.2rem);
}

.profile-bio {
  max-width: 850px;
  margin: 0.9rem auto 0;
  color: #c0d0c7;
  font-size: 0.88rem;
  line-height: 1.55;
  text-align: center;
}

.profile-bio :deep(p) {
  margin: 0 0 0.65rem;
  break-inside: avoid;
}

.profile-bio :deep(p:last-child) {
  margin-bottom: 0;
}

.profile-bio :deep(a) {
  color: #b7d59f;
  font-weight: 700;
  text-decoration: none;
  transition: color 180ms ease;
}

.profile-bio :deep(a:hover) {
  color: #e4f2e9;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.social-links a {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid rgba(188, 224, 198, 0.19);
  border-radius: 50%;
  color: #c5deca;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
}

.social-links a:hover {
  background: rgba(165, 208, 164, 0.14);
  color: #f0f7ef;
  transform: translateY(-3px);
}

.bubbles {
  position: absolute;
  z-index: 1;
  overflow: hidden;
  inset: 0;
  pointer-events: none;
}

.bubble {
  position: absolute;
  bottom: -30px;
  left: var(--bubble-left);
  width: var(--bubble-size);
  height: var(--bubble-size);
  border: 1px solid rgba(194, 235, 219, 0.45);
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, rgba(221, 255, 245, 0.55), rgba(123, 194, 174, 0.06) 62%);
  box-shadow: inset -2px -2px 6px rgba(159, 228, 201, 0.12), 0 0 12px rgba(153, 225, 202, 0.08);
  animation: bubble-rise var(--bubble-duration) linear var(--bubble-delay) infinite;
}

.bubble--1 { --bubble-left: 8%; --bubble-size: 9px; --bubble-duration: 12s; --bubble-delay: -3s; }
.bubble--2 { --bubble-left: 17%; --bubble-size: 5px; --bubble-duration: 15s; --bubble-delay: -9s; }
.bubble--3 { --bubble-left: 26%; --bubble-size: 12px; --bubble-duration: 18s; --bubble-delay: -6s; }
.bubble--4 { --bubble-left: 37%; --bubble-size: 6px; --bubble-duration: 14s; --bubble-delay: -11s; }
.bubble--5 { --bubble-left: 48%; --bubble-size: 8px; --bubble-duration: 17s; --bubble-delay: -4s; }
.bubble--6 { --bubble-left: 58%; --bubble-size: 4px; --bubble-duration: 13s; --bubble-delay: -7s; }
.bubble--7 { --bubble-left: 68%; --bubble-size: 11px; --bubble-duration: 19s; --bubble-delay: -13s; }
.bubble--8 { --bubble-left: 78%; --bubble-size: 6px; --bubble-duration: 16s; --bubble-delay: -2s; }
.bubble--9 { --bubble-left: 89%; --bubble-size: 9px; --bubble-duration: 14s; --bubble-delay: -8s; }
.bubble--10 { --bubble-left: 94%; --bubble-size: 5px; --bubble-duration: 20s; --bubble-delay: -15s; }
.bubble--11 { --bubble-left: 32%; --bubble-size: 5px; --bubble-duration: 21s; --bubble-delay: -17s; }
.bubble--12 { --bubble-left: 73%; --bubble-size: 4px; --bubble-duration: 12s; --bubble-delay: -5s; }

.fish {
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.fish--gourami {
  top: 20%;
  right: -190px;
  width: clamp(140px, 16vw, 200px);
  opacity: 0.85;
  animation: swim-left 56s linear -14s infinite;
}

.fish-school {
  position: absolute;
  z-index: 1;
  width: clamp(210px, 24vw, 280px);
  height: 130px;
  pointer-events: none;
}

.fish-school--neon {
  top: 36%;
  left: -280px;
  animation: school-swim-right 56s linear -16s infinite;
}

.fish-school--medaka {
  top: 7%;
  right: -260px;
  height: 110px;
  animation: school-swim-left 105s linear -7s infinite;
}

.fish--neon {
  width: clamp(38px, 4vw, 56px);
  opacity: 0.78;
}

.fish--medaka {
  width: clamp(42px, 4.5vw, 58px);
  opacity: 0.88;
}

.fish-school__member--1 { top: 38%; left: 0; transform: scaleX(-1) scale(0.88); }
.fish-school__member--2 { top: 5%; left: 12%; transform: scaleX(-1) scale(0.78); }
.fish-school__member--3 { top: 70%; left: 20%; transform: scaleX(-1) scale(0.84); }
.fish-school__member--4 { top: 24%; left: 33%; transform: scaleX(-1) scale(0.92); }
.fish-school__member--5 { top: 60%; left: 43%; transform: scaleX(-1) scale(0.75); }
.fish-school__member--6 { top: 4%; left: 54%; transform: scaleX(-1) scale(0.82); }
.fish-school__member--7 { top: 42%; left: 64%; transform: scaleX(-1); }
.fish-school__member--8 { top: 18%; left: 77%; transform: scaleX(-1) scale(0.78); }
.fish-school__member--9 { top: 68%; left: 85%; transform: scaleX(-1) scale(0.86); }

.medaka-school__member--1 { top: 22%; left: 0; transform: scale(0.84); }
.medaka-school__member--2 { top: 2%; left: 25%; transform: scale(0.72); }
.medaka-school__member--3 { top: 54%; left: 47%; transform: scale(0.9); }
.medaka-school__member--4 { top: 18%; left: 70%; transform: scale(0.76); }

.fish-school,
.fish-school__member--1,
.fish-school__member--2,
.fish-school__member--3,
.fish-school__member--4,
.fish-school__member--5,
.fish-school__member--6,
.fish-school__member--7,
.fish-school__member--8,
.fish-school__member--9 {
  will-change: transform;
}

.plants {
  position: absolute;
  z-index: 1;
  height: min(42vh, 360px);
  min-height: 230px;
  inset: auto 0 0;
  overflow: hidden;
  pointer-events: none;
}

.plant {
  position: absolute;
  bottom: -24px;
  height: 100%;
  width: auto;
  object-fit: contain;
  object-position: bottom;
  transform-origin: 50% 100%;
}

.plant--lotus {
  right: 5%;
  height: 88%;
}

.plant--stem.plant--left-back {
  left: 4%;
  height: 72%;
}

.plant--stem.plant--left-front {
  left: 12%;
  height: 96%;
}

.plant--stem.plant--right-back {
  right: 4%;
  height: 76%;
  transform: scaleX(-1);
}

.plant--stem.plant--right-front {
  right: 12%;
  height: 92%;
  transform: scaleX(-1);
}

.plant--vallisneria.plant--left-back {
  left: 20%;
  height: 76%;
}

.plant--vallisneria.plant--left-front {
  left: 28%;
  height: 98%;
}

.plant--vallisneria.plant--right-back {
  right: 20%;
  height: 72%;
  transform: scaleX(-1);
}

.plant--vallisneria.plant--right-front {
  right: 28%;
  height: 94%;
  transform: scaleX(-1);
}

@keyframes bubble-rise {
  0% { opacity: 0; transform: translate3d(0, 0, 0) scale(0.65); }
  12% { opacity: 0.8; }
  80% { opacity: 0.6; }
  100% { opacity: 0; transform: translate3d(28px, -110vh, 0) scale(1.1); }
}

@keyframes swim-left {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100vw - 320px)); }
}

@keyframes swim-right {
  from { transform: translateX(0); }
  to { transform: translateX(calc(100vw + 320px)); }
}

@keyframes school-swim-left {
  0% { transform: translateX(0); }
  16% { transform: translateX(calc(-16vw - 51px)); }
  28% { transform: translateX(calc(-24vw - 77px)); }
  45% { transform: translateX(calc(-43vw - 138px)); }
  65% { transform: translateX(calc(-59vw - 189px)); }
  76% { transform: translateX(calc(-76vw - 243px)); }
  100% { transform: translateX(calc(-100vw - 320px)); }
}

@keyframes school-swim-right {
  0% { transform: translateX(0); }
  16% { transform: translateX(calc(16vw + 51px)); }
  28% { transform: translateX(calc(24vw + 77px)); }
  45% { transform: translateX(calc(43vw + 138px)); }
  65% { transform: translateX(calc(59vw + 189px)); }
  76% { transform: translateX(calc(76vw + 243px)); }
  100% { transform: translateX(calc(100vw + 320px)); }
}

@keyframes light-drift {
  from { opacity: 0.45; transform: translateX(-3%) rotate(-8deg); }
  to { opacity: 0.9; transform: translateX(4%) rotate(-3deg); }
}

@media (max-width: 640px) {
  .profile-card {
    padding: 0.75rem 0.5rem;
  }

  .profile-card__content {
    padding: 0.65rem 0.5rem;
  }

  .profile-photo {
    width: 68px;
    height: 68px;
    margin-bottom: 0.55rem;
  }

  .profile-title {
    font-size: clamp(1.6rem, 7vw, 2.35rem);
  }

  .profile-subtitle {
    margin-top: 0.4rem;
    font-size: 0.95rem;
  }

  .profile-bio {
    max-width: 480px;
    margin-top: 0.65rem;
    font-size: 0.76rem;
    line-height: 1.35;
    text-align: center;
  }

  .profile-bio :deep(p) {
    margin-bottom: 0.45rem;
  }

  .social-links {
    margin-top: 0.7rem;
  }

  .social-links a {
    width: 40px;
    height: 40px;
  }

  .plants {
    height: 23vh;
    min-height: 120px;
  }

  .fish--gourami {
    top: 9%;
    width: clamp(100px, 24vw, 140px);
  }

  .fish-school--neon {
    top: 42%;
    width: 190px;
    height: 100px;
  }

  .fish-school--medaka {
    top: 5%;
    width: 180px;
    height: 80px;
  }

  .fish--neon,
  .fish--medaka {
    width: clamp(34px, 10vw, 42px);
  }

  .fish-school__member--4 {
    left: 47%;
  }

  .fish-school__member--5 {
    left: 67%;
  }

  .fish-school__member--6 {
    left: 54%;
  }

  .fish-school__member--7 {
    left: 64%;
  }

  .fish-school__member--8 {
    left: 77%;
  }

  .fish-school__member--9 {
    left: 85%;
  }
}

@media (max-height: 700px) {
  .profile-card__content {
    padding: 0.35rem 1rem;
  }

  .profile-photo {
    width: 64px;
    height: 64px;
    margin-bottom: 0.45rem;
  }

  .profile-title {
    font-size: clamp(1.7rem, 5vh, 2.5rem);
  }

  .profile-subtitle {
    margin-top: 0.35rem;
    font-size: 0.9rem;
  }

  .profile-bio {
    margin-top: 0.55rem;
    font-size: 0.78rem;
    line-height: 1.32;
  }

  .social-links {
    margin-top: 0.55rem;
  }

  .social-links a {
    width: 38px;
    height: 38px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
</style>
