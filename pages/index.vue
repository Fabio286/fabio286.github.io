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
            <img class="m-auto block rounded-full border-8 border-teal-500 opacity-75 duration-200 ease-linear hover:opacity-100" src="/images/picture.png">
            <h2 class="text-center text-5xl font-bold text-gray-50">
              <span class="opacity-30">About</span> Fabio Di Stasio<span class="text-teal-500">.</span>
            </h2>
            <div class="text-center text-2xl text-gray-50">
              A wild software developer located in Milan, Italy
            </div>
            <div class="text-justify text-lg text-gray-50 md:text-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
