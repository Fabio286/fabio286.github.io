<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div>
    <Head>
      <Title>Fabio Di Stasio - Full Stack Web Developer</Title>
    </Head>
    <main class="my-12 flex min-h-screen items-center justify-center lg:my-0">
      <BasePageContent>
        <div class="space-y-10" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">
          <div class="space-y-8">
            <img class="m-auto block rounded-full border-8 border-orange-600 duration-200 ease-linear" src="/images/picture.png">
            <h2 class="text-center text-5xl font-bold text-gray-50">
              <span class="opacity-30">About</span> Fabio Di Stasio<span class="text-orange-600">.</span>
            </h2>
            <div class="text-center text-2xl text-gray-50">
              A wild software developer located in Milan, Italy
            </div>
            <div class="text-justify text-lg text-gray-50 md:text-center">
              <p>I am a full-stack developer with a passion for computer science and technology.</p>
              <p>
                I started my career several years ago building websites as a freelancer, mainly on LAMP stack.<br>
                Over the years I have shifted my work to developing both frontend and backend web applications on a <strong class="font-bold">JavaScript</strong> stack.<br>
                I have also acquired skills related to <strong class="font-bold">SQL databases</strong>, <strong class="font-bold">Linux systems</strong> management, and the <strong class="font-bold">AWS cloud</strong>.<br>
                I currently develop software mainly for the electronic payments industry for transaction tracking and document digitization and archiving.
              </p>
              <p>The frameworks or technologies I work with most are <strong class="font-bold">Vue.js</strong>, <strong class="font-bold">Tailwind CSS</strong>, <strong class="font-bold">Node.js</strong> and <strong class="font-bold">Electron.js</strong>.</p>
              <p>I'm the author of <a class="font-bold text-orange-600 transition-colors hover:text-white" rel="nofollow" href="https://github.com/antares-sql/antares" target="_blank">Antares SQL</a>, <a class="font-bold text-orange-600 transition-colors hover:text-white" rel="nofollow" href="https://github.com/Fabio286/mizar" target="_blank">Mizar TCP Tester</a> and other open-source stuffs.</p>
            </div>
          </div>
          <div class="flex justify-center">
            <a title="GitHub Profile" rel="nofollow me" target="_blank" class="mx-2 rounded-full p-1" href="https://github.com/Fabio286">
              <BrandGithubIcon class="text-gray-50" size="32" />
            </a>
            <a title="Follow on Mastodon" rel="nofollow me" target="_blank" class="mx-2 rounded-full p-1" href="https://mastodon.uno/@akela86">
              <BrandMastodonIcon class="text-gray-50" size="32" />
            </a>
            <a title="LinkedIn profile" rel="nofollow me" target="_blank" class="mx-2 rounded-full p-1" href="https://www.linkedin.com/in/distasiofabio/">
              <BrandLinkedinIcon class="text-gray-50" size="32" />
            </a>
          </div>
        </div>
      </BasePageContent>
    </main>
  </div>
</template>
<script setup lang="ts"></script>
