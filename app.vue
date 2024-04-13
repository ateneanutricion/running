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
    <!-- <OgImage /> -->
    <main class="pt-10 pb-16 px-4 space-y-8 w-full max-w-[80ch] mx-auto">
      <header class="relative z-0">
        <div class="z-1 relative flex flex-col gap-4 items-center">
          <div class="relative h-24 w-24 md:h-30 md:w-30 lg:h-32 lg:w-32">
            <Logo class="blur-xl md:blur-md text-lime" />
            <Logo class="absolute inset-0" />
          </div>

          <h1 class="font-stretch-extra-condensed text-center">
            <span class="font-serif text-2xl md:text-3xl">
              CARRERA
              ATLÉTICA
            </span>
            <br>
            <span class="text-6xl md:text-7xl lg:text-8xl font-black">
              ATENEA
              <span class="text-transparent bg-clip-text bg-gradient-to-b from-lime via-lime to-transparent">5K</span>
            </span>
          </h1>

          <p class="text-xs md:text-base font-stretch-extra-expanded font-extralight">
            Fortaleza es movimiento.
          </p>
        </div>

        <div class="z-0 absolute inset-0 flex justify-between w-full max-w-[80ch] mx-auto opacity-20">
          <Columns class="h-full" />
          <Columns class="h-full" />
        </div>
      </header>

      <section class="flex flex-col md:flex-row items-center justify-center gap-8">
        <div class="rounded-lg overflow-hidden h-60 w-full relative">
          <img
            src="/header_card.webp"
            class="object-cover h-full w-full"
          >
          <div class="absolute inset-0 p-2 flex flex-col">
            <div class="text-3xl text-zinc-900 space-y-0.5 font-stretch-semi-expanded">
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
                <UnoIcon class="i-heroicons:sun-16-solid" />
                28°c
              </span>
              <span class="bg-zinc-900 rounded-lg px-2 py-0.5">Running map</span>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="flex flex-col items-center justify-center text-xl">
          <span class="font-serif">¿Estás listo?</span>
          <span class="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-lime via-lime to-transparent">
            ¡CORRE!
          </span>
        </h2>

        <NuxtLink
          external
          to="https://wa.me/524881128398?text=Hola,%20quiero%20quiero%20inscribirme%20a%20la%20carrera.%20Gracias!"
          class="block mx-auto rounded-lg px-4 py-2 font-stretch-extra-condensed text-xl w-fit border border-lime text-lime hover:bg-lime-900"
        >
          Inscribete
        </NuxtLink>

        <CalendarDate />
      </section>

      <section class="space-y-4">
        <details>
          <summary class="bg-zinc-800 rounded-lg px-4 py-4 text-lime list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
            <span class="font-stretch-semi-expanded">
              CONVOCATORIA
            </span>
            <UnoIcon class="i-heroicons:bolt-16-solid" />
          </summary>

          <div class="p-2 space-y-2">
            <p>
              <span class="font-bold">Fecha:</span> Viernes 28 de junio de 2024.
            </p>
            <p>
              <span class="font-bold">Disparo de salida:</span> 19:00 horas.
            </p>
            <p>
              <span class="font-bold">Lugar:</span> Parque las Camelias, Matehuala. S.L.P.
            </p>
            <p>
              <span class="font-bold">Distancias:</span> 3K Familiar, 5K Carrera.
            </p>
            <p>
              <span class="font-bold">Premiación:</span> 3 primeros lugares ambas ramas (varonil y femenil) de la distancia 5K. 3K recreativa por lo cual no se premia. Medalla conmemorativa a los primeros 150 lugares en llegar a la meta.
            </p>
          </div>
        </details>

        <details>
          <summary class="bg-zinc-800 rounded-lg px-4 py-4 text-lime list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
            <span class="font-stretch-semi-expanded">
              INSCRIPCIONES
            </span>
            <UnoIcon class="i-heroicons:pencil-square-solid" />
          </summary>

          <div class="p-2 space-y-2">
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
        </details>

        <details>
          <summary class="bg-zinc-800 rounded-lg px-4 py-4 text-lime list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
            <span class="font-stretch-semi-expanded">
              ENTREGA DE KITS
            </span>
            <UnoIcon class="i-heroicons:shopping-bag-16-solid" />
          </summary>

          <div class="p-2 space-y-2">
            <p>
              <span class="font-bold">Fecha:</span> Jueves 27 junio de 2024.
            </p>
            <p>
              <span class="font-bold">Horario:</span> 15:00 -20:00 horas.
            </p>
            <p>
              <span class="font-bold">Lugar:</span> Consultorios Agora . Casa aurora, Morelos 510 centro Para recoger tu número presentarse con alguna identificación y el comprobante de pago de la inscripción.
            </p>
          </div>
        </details>
      </section>

      <section class="space-y-4">
        <div class="text-center font-stretch-semi-expanded ">
          <h3 class="text-2xl font-bold">
            PATROCINADORES
          </h3>
          <p class="font-extralight">
            <span class="font-bold">ATENEA 5K</span> puede llevarse a cabo gracias a la colaboración de...
          </p>
        </div>

        <div class="grid cols-3 gap-4">
          <NuxtLink
            external
            target="_blank"
            to="https://wa.me/524881463761?text=Hola,%20me%20interesa%20comprar%20productos%20Natura.%20Gracias!"
            title="Natura Altiplano"
            class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
          >
            <UnoIcon class="i-sponsors:natura h-20 w-20 md:h-22 md:w-22 lg:h-30 lg:w-30" />
          </NuxtLink>

          <NuxtLink
            external
            target="_blank"
            to="https://www.facebook.com/LaEnvidiaSTORE/"
            title="La Envidia Store"
            class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
          >
            <UnoIcon class="i-sponsors:envidia-store h-20 w-20 md:h-22 md:w-22 lg:h-30 lg:w-30" />
          </NuxtLink>

          <NuxtLink
            external
            to="tel:+524888822068"
            title="Totopos Chilaquil y tostadas de la cruz"
            class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
          >
            <img
              src="/sponsors/totopos-chilaquil-tostadas-de-la-cruz.webp"
              alt="TOTOPOS CHILAQUIL Y TOSTADAS DE LA CRUZ"
              class="h-20 md:h-22 lg:h-30 w-auto"
            >
          </NuxtLink>

          <NuxtLink
            external
            target="_blank"
            to="https://www.youtube.com/channel/UCRJlIgDC2TV9IfncsFh8u2w"
            title="Nación Fútbol"
            class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
          >
            <img
              src="/sponsors/NFC.webp"
              alt="Nación Fútbol"
              class="h-20 md:h-22 lg:h-30 w-auto"
            >
          </NuxtLink>
        </div>

        <div class="flex items-center justify-center gap-2">
          <span class="text-xs text-neutral-500">Web patrocinada por</span>
          <NuxtLink
            external
            target="_blank"
            to="https://wa.me/524881128398?text=Hola,%20me%20interesa%20desarrollar%20un%20sitio%20web.%20Gracias!"
            title="attq developing solutions"
          >
            <UnoIcon class="i-sponsors:attq h-8 w-18 text-white" />
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
:root {
  color-scheme: only dark;
}
</style>
