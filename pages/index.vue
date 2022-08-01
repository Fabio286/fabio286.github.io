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
            <img class="m-auto block rotate-[-8deg] rounded-full border-8 border-teal-500 opacity-75 duration-200 ease-linear hover:opacity-100" src="/images/picture.png">
            <h2 class="text-center text-5xl font-bold text-gray-50">
              <span class="opacity-30">About</span> Fabio Di Stasio<span class="text-teal-500">.</span>
            </h2>
            <div class="text-center text-2xl text-gray-50">
              A wild software developer located in Milan, Italy
            </div>
            <div class="text-justify text-lg text-gray-50 md:text-center">
              <p>I am a full-stack developer with a passion for computer science and technology.</p>
              <p>
                I started my career several years ago building websites working as a freelancer and mostly on LAMP stacks.<br>
                Over the years I have shifted my work towards developing both frontend and backend web applications on a <strong class="font-bold">JavaScript</strong> stack.
                I also acquired skills related to <strong class="font-bold">SQL databases</strong>, in the management of <strong class="font-bold">Linux systems</strong> and on the <strong class="font-bold">AWS cloud</strong>.<br>
                Currently I develop software mainly for the electronic payments sector for transaction monitoring and document digitization and archiving.
              </p>
              <p>The frameworks or technologies I work with most are <strong class="font-bold">Vue.js</strong>, <strong class="font-bold">Tailwind CSS</strong>, <strong class="font-bold">Node.js</strong> and <strong class="font-bold">Electron.js</strong>.</p>
            </div>
          </div>
          <div class="flex justify-center">
            <a title="GitHub Profile" target="_blank" class="mx-2 rounded-full bg-teal-600 p-1" href="https://github.com/Fabio286">
              <BrandGithubIcon class="text-gray-50" size="32" />
            </a>
            <a title="Follow on Twitter" target="_blank" class="mx-2 rounded-full bg-teal-600 p-1" href="https://twitter.com/fabiodistasio86">
              <BrandTwitterIcon class="text-gray-50" size="32" />
            </a>
            <a title="LinkedIn profile" target="_blank" class="mx-2 rounded-full bg-teal-600 p-1" href="https://www.linkedin.com/in/distasiofabio/">
              <BrandLinkedinIcon class="text-gray-50" size="32" />
            </a>
          </div>
        </div>
      </BasePageContent>
    </main>
  </div>
</template>
<script setup lang="ts"></script>
