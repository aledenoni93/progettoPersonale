import { Nemico } from "../models/nemico.models";

export const NEMICI : Nemico[] = [
  {
    _id: 1,
    nome: "Custode di tombe",
    descrizione: "I custodi di tombe si trovano nel Cimitero delle Ceneri e nello Santuario del legame del Fuoco, le prime aree del gioco, e quindi sono piuttosto deboli. Indossano abiti e mantelli di colore scuro, sembrano lenti e disinteressati ai loro dintorni. Impugnano varie armi, tra cui: balestre leggere con dardi esplosivi, spade spezzate, spade corte, lance e coltelli del bandito (solo nelle Tombe deserte). Alcuni guardiani sembrano docili e svogliati; si siedono sul percorso o si appoggiano alle mura montuose che adornano i cimiteri e l'arena. Tuttavia, attaccheranno comunque il giocatore una volta che si avvicina, quindi è consigliabile prestare attenzione.",
    area: "Cimitero della cenere, Santuario del Legame del fuoco",
    debolezza: "Spadone massacra vuoti, tutti gli status alterati",
    immagine: "../../assets/images/custode-di-tombe.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 2,
    nome: "Lucertola di cristallo vorace",
    descrizione: "Queste imponenti creature, versioni più grandi delle lucertole di cristallo, rappresentano una sfida importante grazie alla loro grande quantità di salute e ai loro attacchi veloci e erratici. La loro superficie dorsale è quasi interamente coperta da cristalli luccicanti, utilizzati in alcuni degli attacchi più letali della creatura. Questi lucertoloni sono altrettanto ambiti dei loro corrispettivi più piccoli, grazie ai preziosi materiali di aggiornamento che rilasciano. Tuttavia, ucciderne uno non è un'impresa facile e i giocatori dovranno prestare attenzione o utilizzare uno scudo particolarmente stabile. Questa bestia è presente nell'area di tutorial del gioco ed è probabile che mietesse molte vite nel Cimitero delle Ceneri.",
    area: "Cimitero della cenere, Cattedrale delle profondità, Forte farron, Cimitero abbandonato",
    debolezza: "Tutti gli status alterati",
    immagine: "../../assets/images/lucertola-di-cristallo-vorace.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 3,
    nome: "Cane affamato",
    descrizione: "Implacabili, rabidi e alimentati dalla bramosia di sangue, questi cani daranno la caccia persino alla propria ombra senza fermarsi di fronte a nulla. Nonostante le loro forme magre, spesso in agguato o appena celati tra i passaggi obliqui di Lothric, sbraneranno i non sospettosi Ceneri fino a ridurli in pezzi. Quando affrontati in gruppo, questi cani sono avversari di notevole aggressività, pronti ad attaccare e a tendere imboscate per conseguenze disastrose. Questi nemici sono presenti in varie aree del gioco, spesso piazzati per sorprendere il giocatore. Può essere difficile evitarli, soprattutto per i nuovi giocatori, quindi si consiglia di creare una certa distanza prima di affrontarli. Combatterli in gruppo non è consigliato, in quanto la loro forza sta nel numero. Tuttavia, affrontarli uno alla volta dovrebbe essere un po' più facile nonostante la loro velocità.",
    area: "Cimitero della cenere, Santuario del Legame del fuoco, Mura alte di Lothric, Borgo dei non morti, Strada dei sacrifici, Cattedrale delle profondità, Cimitero abbandonato",
    debolezza: "Spadone massacra vuoti, fuoco, tutti gli status alterati",
    immagine: "../../assets/images/cane-famelico.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 4,
    nome: "Lucertola di cristallo",
    descrizione: "Questa strana creatura si vedrà scattare attraverso Lothric, notevole soprattutto per la sua corazza ornata di una gemma luminosa. Alla sua morte, è possibile estrarre questo minerale, utilizzato come parte di un raro processo di rifinitura e potenziamento delle armi. Di conseguenza, questi lucertoloni sono bramosamente inseguiti nonostante spesso appaiano in luoghi difficili da raggiungere. Spariranno se non uccisi rapidamente. Una volta uccisi, l'oggetto verrà depositato direttamente nell'inventario del giocatore, il che significa che il minerale non verrà perso alla morte accidentale della creatura (come le cadute). Infine, se uno di questi lucertoloni riesce a scappare, è possibile farlo riapparire ricaricando il gioco.",
    area: "ogni zona",
    debolezza: "Fuoco, armi contundenti",
    immagine: "../../assets/images/lucertola-di-cristallo.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 5,
    nome: "Cavaliere Vuoto",
    descrizione: "I resti dell'esercito di Lothric vagano sui polverosi parapetti del regno ormai cadente, le cui una volta stoiche fortificazioni hanno resistito a battaglie tra bestie ultraterrene, giganti e re. In verità, di questa potente forza resta ben poco; il tempo non perdona, le loro spade ormai arrugginite e le loro sagome non sono più minacciose come ai tempi antichi. I soldati vuoti dovrebbero rappresentare un fastidio piuttosto modesto per i nuovi giocatori, sebbene non per molto tempo. Alcuni sembrano completamente disinteressati alle questioni che li circondano, e non attaccheranno a meno che non vengano provocati. Possono essere trovati a proteggere i terreni del castello, come il ponte sopra il forte farron e le mura alte di Lothric, e non sono molto diversi dai Vuoti nei giochi precedenti, offrendo una tipica sfida di livello iniziale per i giocatori.",
    area: "Mura alte di Lothric, Forte farron",
    debolezza: "Spadone massacra vuoti, tutti gli status alterati",
    immagine: "../../assets/images/cavaliere-vuoto.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 6,
    nome: "Viverna di Lothric",
    descrizione: "Nemico incontrato in coppia dopo il secondo falò del castello di Lothric e vicino al secondo del Muro Alto di Lothric. In entrambe le posizioni, questo nemico sputa fuoco, proteggendo il passaggio attraverso un'area.",
    area: "Mura alte di lothric",
    debolezza: "Fede, ghiaccio, fulmine",
    immagine: "../../assets/images/viverna-di-lothric.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 7,
    nome: "Ratto",
    descrizione: "Gli avventurieri intrepidi non sono mai troppo lontani da un branco di topi, che annusano curiosamente l'aria alla ricerca di avanzi e potenziali prede. Questi portatori di pestilenza non dovrebbero rappresentare altro che un fastidio, ma possono comunque essere indisciplinati e difficili da prevedere in grandi numeri. È saggio attaccare un ratto alla volta, poiché sono particolarmente abili nel circondare i giocatori. Gli attacchi taglienti sono particolarmente utili contro questi nemici, e alcuni colpi precisi elimineranno rapidamente i non desiderati. I loro attacchi sono in gran parte prevedibili e il tempo di recupero è abbastanza ampio per consentire ai giocatori di attaccare più volte.",
    area: "Ogni area",
    debolezza: "Armi da taglio, fuoco",
    immagine: "../../assets/images/ratto.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 8,
    nome: "Demone",
    descrizione: "Il Demone è un mini-boss in Dark Souls 3. Si trova vagando nell'Insediamento dei non morti e nelle Catacombe di Carthus. Il Demone dell'Insediamento dei non morti è legato alla missione di Siegward di Catarina, mentre il Demone delle Catacombe di Carthus rilascia un'anima speciale che può essere utilizzata nella Trasposizione dell'Anima.",
    area: "Insediamento dei non morti, Catacombe di Carthus",
    debolezza: "Armi del cavaliere nero, Oscurità",
    immagine: "../../assets/images/demone.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 9,
    nome: "Licantropo",
    descrizione: "I licantropi sono grandi esseri vuoti dagli occhi rossi con croci incatenate sulla schiena. Indossano stracci strappati e hanno artigli affilati che sporgono dalle loro dita allungate. Di solito si vedono seduti, attaccando solo quando qualcuno si avvicina. Stranamente, alcuni licantropi non attaccheranno a meno che non vengano provocati.",
    area: "Strada dei sacrifici",
    debolezza: "Sanguinamento, fuoco, oscurità",
    immagine: "../../assets/images/Licantropo.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 10,
    nome: "Cacciatori di licantropi",
    descrizione: "I Cacciatori di Licantropi si trovano in pattuglia lungo la Strada dei Sacrifici. Portano con sé una grande picca di legno che usano come lancia, e spesso si muovono in gruppo. Alcuni di questi cacciatori potrebbero essere visti riposare o sembrare disinteressati all'ambiente circostante, proprio come altri vuoti. I Cacciatori di Licantropi possono essere allertati dal suono, ma solo su un livello molto basilare (il loro raggio uditivo è minimo).",
    area: "Strada dei sacrifici",
    debolezza: "Fuoco",
    immagine: "../../assets/images/cacciatore-di-licantropi.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 11,
    nome: "Cavaliere nero",
    descrizione: "I Cavalieri Neri sono grandi e imponenti nemici spesso trovati a guardia di posizioni chiave. Nonostante impugnino armi diverse, tutti condividono la stessa armatura di un nero intenso con corna che sporgono dall'elmo. Quando provocati, i Cavalieri Neri sono sorprendentemente agili e possono facilmente cogliere un giocatore alla sprovvista con una serie di attacchi ad alto danno. I Cavalieri Neri erano i cavalieri d'elite di Gwyn, il primo Signore delle Ceneri. Tuttavia, furono bruciati in cenere, lasciando solo i loro fantasmi a vagare per la terra.",
    area: "In quasi tutte le aree",
    debolezza: "Oscurità,ghiaccio,veleno",
    immagine: "../../assets/images/cavaliere-nero.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 12,
    nome: "Verme cadavere",
    descrizione: "Il Verme-Cadavere è una massa di vermi e carne contorti, tutti attaccati ad un singolo vuoto. Sono spesso trovati in aree contenenti acqua o sporcizia, in linea con la loro natura. Come ci si aspetta, i Verme-Cadavere subiscono danni massicci dagli attacchi basati sul fuoco a causa della loro composizione.",
    area: "Cattedrale delle profondità",
    debolezza: "Fuoco",
    immagine: "../../assets/images/verme-cadavere.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
]
