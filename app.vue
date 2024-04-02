<template>
  <div>
   <header class="h-16">
    <nav class="w-full h-full">
      <ul class="h-full flex justify-around items-center font-extralight font-stretch-semi-expanded">
        <li>MENÚ</li>

        <li class="hidden">REGISTRO</li>

        <li class="relative">
          <Logo class="h-24 w-24 mt-16 blur-xl md:blur-md text-lime"/>
          <Logo class="absolute h-24 w-24 mt-16 inset-0"/>
        </li>

        <li class="hidden">TU NÚMERO</li>
        <!-- <li>RESULTADOS</li> -->
        <li class="hidden">PREGUNTAS</li>
        <li>MENÚ</li>
      </ul>

      <Teleport to="#teleports">
        <div class="hidden absolute inset-0 w-full h-dvh bg-zinc-900 py-8">
          <ul class="h-full flex flex-col gap-8 items-center font-extralight font-stretch-semi-expanded">
            <li class="relative">
              <Logo class="h-24 w-24 blur-xl md:blur-md"/>
              <Logo class="absolute h-24 w-24 inset-0"/>
            </li>

            <li class="">EL EVENTO</li>
            <li class="">REGISTRO</li>
            <li class="">TU NÚMERO</li>
            <li class="text-neutral flex flex-col">
              <span>RESULTADOS</span>
              <span class="text-xs">proximamente</span>
            </li>
          </ul>
        </div>
      </Teleport>
    </nav>
   </header>

    <main class="py-16 px-4 space-y-6 container">
      <h1 class="flex items-center justify-center text-xl">
        <span class="font-stretch-semi-expanded">ATENEA&nbsp;</span>
        <span class="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-lime via-lime to-transparent">
          5/3K
        </span>
        <span class="font-stretch-semi-expanded">JUNIO 28</span>
      </h1>

      <div class="rounded-lg overflow-hidden h-60 w-full relative">
        <img
          src="/athlete-prepared-run-athletics-track.jpg"
          class="object-cover h-full w-full"
        >
        <div class="absolute inset-0 p-2 flex flex-col">
          <div class="text-3xl text-zinc-900 space-y-0.5 font-stretch-semi-expanded">
            <p class="bg-lime rounded-lg px-2 py-0.5 w-fit">It is the power</p>
            <p class="bg-lime rounded-lg px-2 py-0.5 w-fit">of the mind</p>
            <p class="bg-lime rounded-lg px-2 py-0.5 w-fit">to be unconquerable.</p>
          </div>

          <div class="h-full rounded-lg overflow-hidden mt-6">
            <div class="h-full bg-zinc-900">
              <div class="h-full flex items-center justify-around">

                <div class="flex flex-col font-stretch-semi-expanded">
                  <span class="text-xs font-extralight">Tiempo</span>
                  <span class="tabular-nums font-bold text-lime">00:30:89</span>
                </div>

                <div class="flex flex-col font-stretch-semi-expanded">
                  <span class="text-xs font-extralight">Distancia</span>
                  <span class="tabular-nums font-bold text-lime">5KM</span>
                </div>

                <div class="flex flex-col font-stretch-semi-expanded">
                  <span class="text-xs font-extralight">Calorias</span>
                  <span class="tabular-nums font-bold text-lime">350 Kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg overflow-hidden h-60 w-full relative">
        <img
          src="/map.jpg"
          class="object-cover h-full w-full"
        >
        <div class="absolute inset-0 p-2">
          <div class="flex justify-between text-xs font-stretch-semi-expanded">
            <span class="bg-zinc-900 text-lime rounded-lg px-2 py-0.5 flex items-center gap-1">
              <UnoIcon class="i-heroicons:sun-16-solid"/>
              28°c
            </span>
            <span class="bg-zinc-900 rounded-lg px-2 py-0.5">Running map</span>
          </div>
        </div>
      </div>

      <p class="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-lime via-lime to-transparent">
        ¡CORRE!
      </p>

      <CalendarDate />

      <hr>
      <div class="flex flex-col">
        <span>Preparate</span>

        <span>CARRERA ATENEA</span>
        <span>3K Familiar, 5K 2024</span>

        <span>
          <span>FECHA</span>
          <span>28 de Junio de 2024</span>
        </span>

        <span>
          <span>LUGAR</span>
          <span>Parque las Camelias, Matehuala. S.L.P.</span>
        </span>

        <span>
          <span>Disparo de salida</span>
          <span>19:00horas</span>
        </span>

        <span>
          <span>Distancia</span>
          <span>3K Familiar</span>
          <span>5K Carrera</span>
        </span>

         <span>
          <span>Premiación</span>
          <span>3 primeros lugares absolutos en ambas ramas de la distancia 5K. 3K recreativa por lo cual no se premia. Medalla conmemorativa a los primeros 150 lugares en llegar a la meta.</span>
        </span>
      </div>

      <div>
        <h2>PATROCINADORES</h2>
        <p>La carrea puede llevarse a cabo gracias a la colaboración de...</p>

        <div>
          <NuxtLink 
            external
            target="_blank"
            href="https://drinkprime.com/"
          >
            <img src="/patrocinadores/natura.png" alt="" srcset="">
          </NuxtLink>
          <a
            class="company-link group relative flex h-24 items-center justify-center overflow-hidden md:h-32" 
            title="Visita la página del patrocinador Prime"
            href="https://drinkprime.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link con el logo de Prime que lleva a https://drinkprime.com/"
            >
              <svg class="company-logo px-5 text-white transition group-hover:scale-110 group-focus:scale-110 md:px-4" data-testid="sponsorsLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 49" width="144" height="49" data-astro-cid-ey7maxor="" data-astro-cid-eycpdzdb=""> <path d="M8.646 21.581h1.625c1.95 0 2.21-1.235 2.21-2.73v-8.062c0-1.69-.26-2.86-2.21-2.86H8.646v13.652Zm0 7.865V48.82H0V.453h12.287c7.345 0 8.906 3.641 8.906 9.557v9.686c0 5.915-2.406 9.75-8.451 9.75H8.646ZM33.282 20.15h1.69c1.69 0 2.406-.65 2.406-2.925v-6.566c0-2.08-.39-2.73-2.146-2.73h-1.95V20.15Zm0 28.669h-8.646V.453h13.652c5.265 0 7.931 2.926 7.931 8.06v7.737c0 3.9-2.21 5.85-3.836 6.501 1.43.52 3.706 2.08 3.706 5.72v16.447c0 2.08.39 2.99.715 3.576v.325h-8.646c-.39-.52-.78-1.56-.78-3.706V31.008c0-2.21-.52-2.86-2.276-2.86h-1.82v20.672ZM49.792 48.819V.453h8.646V48.82h-8.646ZM62.337.453h10.661l3.316 24.443L79.629.453h9.946V48.82h-7.8V20.216l-4.291 28.603h-3.25l-4.356-28.603v28.603h-7.541V.453ZM111.545.453V8.97h-9.426v10.532h7.41v8.71h-7.41v11.897H112v8.71H93.473V.454h18.072Z" class="astro-eycpdzdb" data-astro-cid-eycpdzdb=""></path> 
              </svg>
            </a>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
:root {
  color-scheme: only dark;
}
</style>
