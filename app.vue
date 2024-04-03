<template>
  <div class="bg-zinc-900 select-none">
    <header class="h-16">
      <nav class="w-full h-full relative">
        <ul class="h-full flex px-8 justify-between items-center font-extralight font-stretch-semi-expanded">
          <li>
            <!-- <UnoIcon class="i-heroicons:queue-list-16-solid" /> -->
          </li>

        <!-- <li>MENÚ</li> -->
        </ul>

        <div class="flex justify-center">
          <div class="relative h-24 w-24 block -mt-10">
            <Logo class="blur-xl md:blur-md text-lime" />
            <Logo class="absolute inset-0" />
          </div>
        </div>
      </nav>
    </header>

    <main class="py-18 px-4 space-y-8 w-full max-w-[80ch] mx-auto">
      <section class="flex flex-col items-center">
        <h1 class="text-2xl font-semibold font-stretch-extra-condensed text-center">
          CARRERA
          ATLÉTICA
          <br>
          <span class="text-6xl font-black">
            ATENEA
            <span class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-lime via-lime to-transparent">5K</span>
          </span>
        </h1>

        <p class="text-xs font-stretch-extra-expanded font-extralight">
          Fortaleza es movimiento.
        </p>
      </section>

      <section class="flex flex-col md:flex-row items-center justify-center gap-8">
        <div class="rounded-lg overflow-hidden h-60 w-full relative">
          <img
            src="/athlete-prepared-run-athletics-track.jpg"
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
          <span class="font-stretch-semi-expanded font-extralight">¿Estás listo?</span>
          <span class="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-lime via-lime to-transparent">
            ¡CORRE!
          </span>
        </h2>

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
            La carrea puede llevarse a cabo gracias a la colaboración de...
          </p>
        </div>

        <div class="grid cols-3 gap-4">
          <NuxtLink
            external
            target="_blank"
            href=""
            class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
          >
            <UnoIcon class="i-sponsors:natura h-20 w-20" />
          </NuxtLink>

          <NuxtLink
            external
            target="_blank"
            href="https://www.facebook.com/LaEnvidiaSTORE/"
            class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
          >
            <UnoIcon class="i-sponsors:envidia-store h-20 w-20" />
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
