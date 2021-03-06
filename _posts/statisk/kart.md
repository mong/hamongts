---
filename: kart
title: Om statistikkformidling ved hjelp av kart
lang: nb
---

Kart er et kraftfullt formidlingsverktøy og gir oss et intuitivt og forenklet bilde over et tallmateriale. Men kart kan også være forførende og sterkt misvisende, og det er viktig at leseren er oppmerksom på noen helt grunnleggende momenter. Når en skal velge kartografiske uttrykksformer står en ovenfor en rekke valg som innebærer både fordeler og ulemper. Den mest brukte kartografiske metoden kalles koroplettkart (skravurkart). I slike kart gis hver arealenhet (i det interaktive atlaset benyttes opptaksområder (HF-områder) som arealenhet) en **fargetone** avhengig av hvilken klasse/gruppe dataverdien faller innenfor. Fordelen er at det er lett å identifisere områdene som beskrives, ulempen er at arealmessig store opptaksområder dominerer kartet visuelt, mens opptaksområder med lite areal får langt mindre oppmerksomhet.

**Gruppering** eller klassifisering er et annet moment man bør være oppmerksom på i tolkning av kart. Alle variablene som presenteres er i utgangspunktet kontinuerlige (ratene er på intervall-/forholdstallsnivå). Får å gi en meningsfull fremstilling i kart må informasjonen forenkles – vi må klassifisere (gruppere) informasjonen.En uheldig effekt av en slik generalisering er at store forskjeller mellom dataverdiene i datasettet kan skjules i kartet og/eller at små forskjeller mellom variabelverdiene fremheves. For å motvirke dette er det i det interaktive atlaset valgt å bruke metoden som heter naturlig brudd (Jenks’ natural breaks), og det er brukt fire grupper (i noen tilfeller færre grupper). Denne gruppeinndelingsmetoden bruker en algoritme som maksimerer homogeniteten innad i gruppene og maksimerer heterogeniteten mellom gruppene, dvs. gruppene defineres slik at det er størst mulig forskjeller mellom gruppene og minst mulig forskjeller mellom opptaksområdene innad i hver gruppe. Antall opptaksområder som inngår i hver gruppe vil dermed variere mellom pasientutvalgene. I noen tilfeller vil det f.eks. kun være ett opptaksområde i en gruppe og mange opptaksområder i en annen gruppe, mens for andre pasientutvalg kan antall opptaksområder være jevnt fordelt i gruppene.

I det interaktive atlaset inngår en tabell og et søylediagram som er ment å brukes sammen med kartet i fortolkningen av de variasjoner som observeres.

Kart skal gi et forenklet bilde av virkeligheten, men kart er også konstruert med bakgrunn i en rekke subjektive valg. Dette legger føringer på andres virkelighetsforståelse. I likhet med tolkning og forståelse av tall og statistikk, bør derfor de som tolker kart gjøre dette med et kritisk blikk. **Vær derfor bevisst kartets retoriske muligheter.**
