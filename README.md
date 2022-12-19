## Aplicatie Clona Trello - proiect DSS

### Tech Stack:

1. Frontend:

   - Next.JS
   - Material UI

2. Backend:

   - Strapi CMS
   - Node.JS (Koa framework)

3. Database:

   - PostgreSQL

4. Analytics:
   - Segment
   - Amplitude

![Arhitecture](https://ocw.cs.pub.ro/courses/_media/se/assignment/se-assignment-diagram-v2.png?cache=)

Orice companie ar trebui sa inteleaga comportamentul utilizatorilor, intrucat cunoasterea mai multor informatii despre acesta poate imbunatati retentia si activitatea utilizatorilor, crescand automat si veniturile. Nu doar retentia este factorul principal pentru care s-au folosit tool-urile de analytics, ci si aducerea de utilizatori noi.
Am folosit Amplitude pentru ca faciliteaza cele enumrate anterior, echipele de marketing putand folosi datele pentru a lua decizii de afaceri solide. Segment este alegerea potrivita pentru ca ofera o integrare usoara cu Amplitude si orice alt tool de analytics se va mai folosi pe viitor si este suportat de acesta.
In Amplitude s-au creat grafice.

Strapi este un CMS headless open-source bazat pe Node.JS (koa.js framework) si a fost ales pentru ca reduce mult timp din dezvoltarea unei aplicații. Fiind un CMS headless, conținutul lui este accesibil prin utilizarea unui API. Astfel, acesta comunica prin cereri http cu partea de client, dezvoltata in Next.JS.
Next a fost ales pentru benficiile cu care vine dar mai ales server-side rendering.
Material UI accelereaza styling-ul.
Alegerea unei baze de date relationale precum PostgreSQL este motivata de usurinta utilizarii dar si usurinta clasificarii datelor intr-o baza de date de acest gen, care ulterior poate fi interogata si filtrata pentru generarea de rapoarte.

Rulare locala:

1.

```
./database/init.sh
```

2:

```
npm install --prefix ./client
```

3:

```
npm install --prefix ./server
```

4.

```
npm run dev --prefix ./client
```

5.

```
npm run develop --prefix ./server
```

6.

se poate testa aplicatia pe: http://localhost:3000
nu este obligatoriu sa se faca cont pe http://localhost:1337, insa se poate vedea structura bazei de date
