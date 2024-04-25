<script lang="ts" setup>
useServerSeoMeta({
  title: 'ATENEA 5K | CARRERA ATLÉTICA',
  ogTitle: 'ATENEA 5K | CARRERA ATLÉTICA',
  ogType: 'website',
  ogUrl: 'https://5k.ateneanutricion.com',

  // description: 'Atenea Nutrición brinda servicios de bienestar y salud, somos expertos en nutrición deportiva & clínica, creamos planes de alimentación individualizados, entrenamientos personalizados & test epigenéticos para una nutrición óptima. Nos encontramos en San Luis Potosí SLP. y Matehuala S.L.P',
  // ogDescription: 'Atenea Nutrición brinda servicios de bienestar y salud, somos expertos en nutrición deportiva & clínica, creamos planes de alimentación individualizados, entrenamientos personalizados & test epigenéticos para una nutrición óptima. Nos encontramos en San Luis Potosí SLP. y Matehuala S.L.P',

  ogImage: 'https://5k.ateneanutricion.com/og-images/index.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://5k.ateneanutricion.com/og-images/index.png',
})
</script>

<template>
  <div class="bg-zinc-900 select-none">
    <header class="bg-zinc-900 fixed z-1 w-full top-0 h-12 px-4 flex items-center justify-between">
      <span class="font-black flex gap-1 items-center">
        ATENEA 5K
        <span class="text-[0.5rem] px-0.8 py-0.4 rounded border font-light">24</span>
      </span>

      <NuxtLink
        external
        group
        target="_blank"
        to="https://wa.me/524881128398?text=Hola,%20quiero%20quiero%20inscribirme%20a%20la%20carrera.%20Gracias!"
        class="flex gap-2 h-8/12 px-4 items-center rounded-lg font-light bg-white text-zinc-900 text-xs"
      >
        Inscribete
        <UnoIcon class="i-heroicons:arrow-right-16-solid group-hover:animate-head-shake" />
      </NuxtLink>
    </header>

    <main class="container  mx-auto">
      <section class="h-[100dvh] py-12 px-4 overflow-clip flex flex-col items-center">
        <AteneaTitle class="h-full w-1/2 md:w-full" />

        <span class="font-mono font-thin text-center w-full py-4">
          28 JUN, 2024
          <br>
          MATEHUHALA, SLP
        </span>

        <NuxtLink
          external
          group
          target="_blank"
          to="https://wa.me/524881128398?text=Hola,%20quiero%20quiero%20inscribirme%20a%20la%20carrera.%20Gracias!"
          class="flex gap-2 py-2 px-4 items-center rounded-lg font-light bg-white text-zinc-900"
        >
          Inscribete
        </NuxtLink>
      </section>

      <div class="w-full max-w-[80ch] mx-auto">
        <section class="p-4 overflow-clip flex flex-col md:flex-row items-center justify-center gap-8">
          <div class="rounded-lg overflow-hidden h-60 w-full relative">
            <img
              src="/header_card.webp"
              class="object-cover h-full w-full"
            >
            <div class="absolute inset-0 p-2 flex flex-col">
              <div class="text-3xl text-zinc-900 space-y-0.5">
                <p class="bg-lime rounded-lg px-2 py-0.5 w-fit">
                  Sueña sin <span class="font-bold">miedos</span>
                </p>
                <p class="bg-lime rounded-lg px-2 py-0.5 w-fit">
                  entrena
                </p>
                <p class="bg-lime rounded-lg px-2 py-0.5 w-fit">
                  sin <span class="font-bold">limites.</span>
                </p>
              </div>

              <div class="h-full rounded-lg overflow-hidden mt-6">
                <div class="h-full rounded-lg bg-zinc-900/70 backdrop-blur">
                  <div class="h-full flex items-center justify-around">
                    <div class="flex flex-col">
                      <span class="text-xs font-extralight">Tiempo</span>
                      <span class="tabular-nums font-bold text-lime font-mono">00:30:89</span>
                    </div>

                    <div class="flex flex-col">
                      <span class="text-xs font-extralight">Distancia</span>
                      <span class="tabular-nums font-bold text-lime font-mono">5KM</span>
                    </div>

                    <div class="flex flex-col">
                      <span class="text-xs font-extralight">Calorias</span>
                      <span class="tabular-nums font-bold text-lime font-mono">350 Kcal</span>
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
              <div class="flex justify-between text-xs">
                <span class="bg-zinc-900 text-lime rounded-lg px-2 py-0.5 flex items-center gap-1 font-mono">
                  <UnoIcon class="i-heroicons:sun-16-solid" />
                  28°c
                </span>
                <span class="bg-zinc-900 rounded-lg px-2 py-0.5">Running map</span>
              </div>
            </div>
          </div>
        </section>

        <section class="py-12 px-4 overflow-clip flex flex-col items-center gap-9">
          <Divider />
          <div class="font-mono w-full flex items-end gap-4">
            <h3 class="text-xl font-black write-vertical-left rotate-180 flex flex-col">
              CONVOCATORIA
              <span class="text-neutral-400 text-xs font-light">01</span>
            </h3>

            <div class="space-y-2 text-neutral-400 text-sm">
              <p>
                Viernes 28 de Junio de 2024.
              </p>
              <p>
                Parque las Camelias, Matehuala. S.L.P.
              </p>

              <p>
                <span class="font-bold">Disparo de salida:</span> 19:00 horas.
              </p>

              <p>
                <span class="font-bold">Distancias:</span> 3K Familiar, 5K Carrera.
              </p>
              <p>
                <span class="font-bold">Premiación:</span> 3 primeros lugares ambas ramas (varonil y femenil) de la distancia 5K. 3K recreativa por lo cual no se premia. Medalla conmemorativa a los primeros 150 lugares en llegar a la meta.
              </p>
            </div>
          </div>

          <Divider />
          <div class="font-mono w-full flex items-end gap-4">
            <h3 class="text-xl font-black write-vertical-left rotate-180 flex flex-col">
              INSCRIPCIONES
              <span class="text-neutral-400 text-xs font-light">02</span>
            </h3>

            <div class="space-y-2 text-neutral-400 text-sm">
              <p>
                <span class="font-bold">Cuota promoción:</span>
                $ 100,00 (cien pesos 00/100 M.N)
                Vigencia al 30 de abril de 2024 a las 23:59:59 horas
              </p>
              <p>
                <span class="font-bold">Cuota Normal 1:</span>
                $ 150.00 (ciento cincuenta pesos 00/100 M.M)
                Vigencia del 31 de abril al 27 de junio de 2024 a las 20:00 horas
              </p>
            </div>
          </div>

          <Divider />
          <div class="font-mono w-full flex items-end gap-4">
            <h3 class="text-xl font-black write-vertical-left rotate-180 flex flex-col">
              ENTREGA DE KITS
              <span class="text-neutral-400 text-xs font-light">03</span>
            </h3>

            <div class="space-y-2 text-neutral-400 text-sm">
              <p>
                Jueves 27 junio de 2024.
              </p>
              <p>
                15:00 a 20:00 horas.
              </p>
              <p>
                <span class="font-bold">Lugar:</span> Consultorios Agora. Casa Aurora, Morelos #510, col. Centro. Para recoger tu número presentarse con alguna identificación y el comprobante de pago de la inscripción.
              </p>
            </div>
          </div>
          <Divider />
        </section>

        <section class="py-12 px-4 relative">
          <CalendarDate />
          <!-- <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative w-8/12 opacity-15">
              <Logo class="blur-xl md:blur-md text-lime" />
              <Logo class="absolute inset-0" />
            </div>
          </div> -->
        </section>

        <Divider />

        <section class="py-12 px-4 overflow-clip flex flex-col items-center gap-9">
          <span class="font-mono text-neutral-400">¿Estás listo?</span>
          <NuxtLink
            external
            group
            target="_blank"
            to="https://wa.me/524881128398?text=Hola,%20quiero%20quiero%20inscribirme%20a%20la%20carrera.%20Gracias!"
            class="py-4 px-8 rounded-lg bg-white text-zinc-900 text-2xl font-bold"
          >
            ¡CORRE!
          </NuxtLink>
        </section>

        <Divider />

        <SponsorsSection class="py-12 px-4 flex flex-col items-center gap-4" />
      </div>
    </main>

    <!-- <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative size-60 md:h-30 md:w-30 lg:h-32 lg:w-32">
            <Logo class="blur-xl md:blur-md text-lime" />
            <Logo class="absolute inset-0" />
          </div>
        </div> -->
  </div>
</template>

<style>
:root {
  color-scheme: only dark;
}
</style>
