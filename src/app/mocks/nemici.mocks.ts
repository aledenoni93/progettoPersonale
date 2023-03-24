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
    area: "Cimitero della cenere, cattedrale delle profondità, forte farron, cimitero abbandonato",
    debolezza: "Tutti gli status alterati",
    immagine: "../../assets/images/lucertola-di-cristallo-vorace.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 3,
    nome: "Cane affamato",
    descrizione: "Implacabili, rabidi e alimentati dalla bramosia di sangue, questi cani daranno la caccia persino alla propria ombra senza fermarsi di fronte a nulla. Nonostante le loro forme magre, spesso in agguato o appena celati tra i passaggi obliqui di Lothric, sbraneranno i non sospettosi Ceneri fino a ridurli in pezzi. Quando affrontati in gruppo, questi cani sono avversari di notevole aggressività, pronti ad attaccare e a tendere imboscate per conseguenze disastrose. Questi nemici sono presenti in varie aree del gioco, spesso piazzati per sorprendere il giocatore. Può essere difficile evitarli, soprattutto per i nuovi giocatori, quindi si consiglia di creare una certa distanza prima di affrontarli. Combatterli in gruppo non è consigliato, in quanto la loro forza sta nel numero. Tuttavia, affrontarli uno alla volta dovrebbe essere un po' più facile nonostante la loro velocità.",
    area: "Cimitero della cenere, Santuario del Legame del fuoco, mura alte di Lothric, borgo dei non morti, strada dei sacrifici, cattedrale delle profondità, cimitero abbandonato",
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
    area: "mura alte di Lothric, forte farron",
    debolezza: "Spadone massacra vuoti, tutti gli status alterati",
    immagine: "../../assets/images/cavaliere-vuoto.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
  {
    _id: 6,
    nome: "Viverna di Lothric",
    descrizione: "Nemico incontrato in coppia dopo il secondo falò del castello di Lothric e vicino al secondo del Muro Alto di Lothric. In entrambe le posizioni, questo nemico sputa fuoco, proteggendo il passaggio attraverso un'area.",
    area: "mura alte di lothric",
    debolezza: "Fede, ghiaccio, fulmine",
    immagine: "../../assets/images/viverna-di-lothric.jpg",
    data: "24/03/2023",
    pubblicato: true
  },
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
    _id: 1,
    nome: "Custode di tombe",
    descrizione: "I custodi di tombe si trovano nel Cimitero delle Ceneri e nello Santuario del legame del Fuoco, le prime aree del gioco, e quindi sono piuttosto deboli. Indossano abiti e mantelli di colore scuro, sembrano lenti e disinteressati ai loro dintorni. Impugnano varie armi, tra cui: balestre leggere con dardi esplosivi, spade spezzate, spade corte, lance e coltelli del bandito (solo nelle Tombe deserte). Alcuni guardiani sembrano docili e svogliati; si siedono sul percorso o si appoggiano alle mura montuose che adornano i cimiteri e l'arena. Tuttavia, attaccheranno comunque il giocatore una volta che si avvicina, quindi è consigliabile prestare attenzione.",
    area: "Cimitero della cenere, Santuario del Legame del fuoco",
    debolezza: "Spadone massacra vuoti, tutti gli status alterati",
    immagine: "../../assets/images/custode-di-tombe.jpg",
    data: "24/03/2023",
    pubblicato: true
  },

]
