<script lang="ts" setup>
useServerSeoMeta({
  title: 'ATENEA 5K | CARRERA ATLÉTICA',
  ogTitle: 'ATENEA 5K | CARRERA ATLÉTICA',
  ogType: 'website',
  ogUrl: 'https://5k.ateneanutricion.com',

  // description: 'Atenea Nutrición brinda servicios de bienestar y salud, somos expertos en nutrición deportiva & clínica, creamos planes de alimentación individualizados, entrenamientos personalizados & test epigenéticos para una nutrición óptima. Nos encontramos en San Luis Potosí SLP. y Matehuala S.L.P',
  // ogDescription: 'Atenea Nutrición brinda servicios de bienestar y salud, somos expertos en nutrición deportiva & clínica, creamos planes de alimentación individualizados, entrenamientos personalizados & test epigenéticos para una nutrición óptima. Nos encontramos en San Luis Potosí SLP. y Matehuala S.L.P',

  ogImage: 'https://5k.ateneanutricion.com/og-images/index-26-04-24.webp',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://5k.ateneanutricion.com/og-images/index-26-04-24.webp',
})
</script>

<template>
  <div class="bg-zinc-900">
    <header class="bg-zinc-900 fixed z-2 w-full top-0 h-12 px-4 py-2 flex items-center justify-between">
      <span class="font-black flex gap-1 items-center">
        ATENEA 5K
        <span class="text-[0.5rem] px-0.8 py-0.4 rounded border font-light">24</span>
      </span>

      <CTAButton
        group
        class="flex items-center gap-2 px-2! py-1!"
        :to-section="true"
      >
        Inscribete
        <UnoIcon class="i-heroicons:arrow-right-16-solid group-hover:animate-head-shake" />
      </CTAButton>
    </header>

    <main class="container max-w-[80ch] mx-auto">
      <section class="h-[100dvh] py-12 px-4 overflow-clip flex flex-col items-center">
        <AteneaTitle class="h-full w-1/2 md:w-full" />

        <span class="font-mono font-thin text-center w-full py-4">
          28 JUN, 2024
          <br>
          MATEHUHALA, SLP
        </span>

        <CTAButton to-section>
          Inscribete
        </CTAButton>

        <UnoIcon class="i-heroicons:arrow-down-16-solid shrink-0 size-6 animate-bounce mt-4" />
      </section>

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
            src="/map.webp"
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

      <Divider />
      <section class="py-6 px-4 relative flex flex-col items-center">
        <span class="text-2xl font-mono text-neutral-400">¿Estás listo?</span>
        <CalendarDate class="w-full" />
        <CTAButton>¡CORRE!</CTAButton>
      </section>
      <Divider />

      <section class="pt-12 pb-6 px-4 overflow-clip flex flex-col items-center gap-9">
        <div class="font-mono w-full flex items-end gap-4">
          <h3 class="text-xl font-black write-vertical-left rotate-180 flex flex-col text-lime">
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
              <span class="font-bold">Disparo de salida:</span> 18:30 horas.
            </p>

            <p>
              <span class="font-bold">Distancias:</span> 3K y 5K.
            </p>
            <p>
              <span class="font-bold">Categorias 5K:</span>
            </p>
            <p>&lt; 19 años</p>
            <p>19-35 años</p>
            <p>&gt; 35 años</p>

            <p>
              <span class="font-bold">Premiación:</span>
              3 primeros lugares ambas ramas (Femenil y Varonil) en las categorias de 5km. 3k
              recreativa por lo cual no se premia.
              Medalla conmemorativa a los primero 150 lugares en llegar a la meta.
            </p>
          </div>
        </div>

        <Divider />
        <div class="font-mono w-full flex items-end gap-4">
          <h3 class="text-xl font-black write-vertical-left rotate-180 flex flex-col text-lime">
            INSCRIPCIONES
            <span class="text-neutral-400 text-xs font-light">02</span>
          </h3>

          <div class="space-y-2 text-neutral-400 text-sm">
            <p>
              <span class="font-bold">Cuota promoción:</span>
              $ 100,00 (cien pesos 00/100 M.N)
              Vigencia al <span class="font-bold">02 de Junio de 2024</span> a las 23:59:59 horas
            </p>
            <p>
              <span class="font-bold">Cuota Normal 1:</span>
              $ 150.00 (ciento cincuenta pesos 00/100 M.M)
              Vigencia del 02 de Junio al 27 de Junio de 2024 a las 20:00 horas
            </p>
          </div>
        </div>

        <Divider />
        <div class="font-mono w-full flex items-end gap-4">
          <h3 class="text-xl font-black write-vertical-left rotate-180 flex flex-col text-lime">
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
      </section>

      <section
        id="inscribete"
        class="py-10 px-4 flex flex-col items-center gap-4"
      >
        <header class="font-mono space-y-2 w-full">
          <h3 class="text-xl font-black">
            INSCRIBETE
          </h3>
          <p class="text-sm text-neutral-400">
            Puedes inscribirte de manera prencencial en:
          </p>
        </header>

        <div class="flex flex-col items-start w-full gap-4 text-sm font-mono text-neutral-300">
          <ul class="w-full">
            <li class="flex justify-between items-center pr-4">
              <ul class="list-circle-inside">
                <li>La Envidia Store</li>
                <li>Hidalgo #508 (entre Colón y Reyes)</li>
                <li>Horario de L-V de 10:30 a 19:00</li>
              </ul>
              <UnoIcon class="i-sponsors:envidia-store size-16 shrink-0" />
            </li>

            <Divider class="my-4" />

            <li class="flex justify-between items-center pr-4">
              <ul class="list-circle-inside">
                <li>Ferreteria Torres</li>
                <li>Chiapas #1504-A (a un costado de la primaria)</li>
                <li>Horario de L-V de 09:00 a 18:00</li>
              </ul>
              <img
                src="/sponsors/ferreteria-torres.webp"
                alt="Ferreteria Torres"
                class="h-15 w-auto shrink-0"
              >
            </li>
          </ul>
        </div>

        <p class="text-sm text-neutral-400">
          O inscribete ahora mediante transferencia por WhatsApp...
        </p>

        <CTAButton
          group
          class="flex items-center gap-2 px-2! py-1!"
        >
          Inscribete
          <UnoIcon class="i-heroicons:arrow-right-16-solid group-hover:animate-head-shake" />
        </CTAButton>
      </section>

      <SponsorsSection class="py-6 px-4 flex flex-col items-center gap-4" />
    </main>
  </div>
</template>
