"use strict";(self.webpackChunksqarp_docs=self.webpackChunksqarp_docs||[]).push([[942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,v=p["".concat(d,".").concat(u)]||p[u]||m[u]||l;return a?r.createElement(v,i(i({ref:t},k),{},{components:a})):r.createElement(v,i({ref:t},k))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},i="Produktrelationer",o={unversionedId:"e-optimization-2-0/produktrelationer",id:"e-optimization-2-0/produktrelationer",title:"Produktrelationer",description:"Kontext i hela processen",source:"@site/docs/e-optimization-2-0/produktrelationer.mdx",sourceDirName:"e-optimization-2-0",slug:"/e-optimization-2-0/produktrelationer",permalink:"/e-optimization-2-0/produktrelationer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Order- och logistikinformation",permalink:"/e-optimization-2-0/order-logistik"},next:{title:"Varianthantering",permalink:"/e-optimization-2-0/varianthantering"}},d={},s=[{value:"Kontext i hela processen",id:"kontext-i-hela-processen",level:2},{value:"Vad \xe4r det f\xf6r data som ing\xe5r i denna modul?",id:"vad-\xe4r-det-f\xf6r-data-som-ing\xe5r-i-denna-modul",level:2},{value:"Varf\xf6r \xe4r denna modul viktig?",id:"varf\xf6r-\xe4r-denna-modul-viktig",level:2},{value:"Tips &amp; trix / Best-practice",id:"tips--trix--best-practice",level:2},{value:"Hur g\xe5r jag praktiskt tillv\xe4ga f\xf6r att f\xe4rdigst\xe4lla modulen?",id:"hur-g\xe5r-jag-praktiskt-tillv\xe4ga-f\xf6r-att-f\xe4rdigst\xe4lla-modulen",level:2},{value:"Q&amp;A",id:"qa",level:2}],k={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"produktrelationer"},"Produktrelationer"),(0,n.kt)("h2",{id:"kontext-i-hela-processen"},"Kontext i hela processen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modulen d\xe4r kompabilitetsrelationer skapas mellan olika produkter. Med kompabilitetsrelationer menas tillval, tillbeh\xf6r, reservdelar, komponenter och andra relationer d\xe4r den relaterade produkten k\xf6ps tillsammans med en annan produkt. Modulen hanterar inte f\xf6rslag p\xe5 relaterade produkter eller alternativ som kunden ocks\xe5 kan vara intresserad av s\xe5som ",(0,n.kt)("em",{parentName:"li"},"\u201dDu kanske ocks\xe5 ocks\xe5 \xe4r intresserad av denna\u201d")," eller ",(0,n.kt)("em",{parentName:"li"},"\u201dSe \xe4ven den h\xe4r produkten\u201d.")," "),(0,n.kt)("li",{parentName:"ul"},"M\xe5let med modulen \xe4r att alla skapa alla relevanta relationer och importera dessa till SQARP plattformen, s\xe5 att relaterade artiklar kan visas tillsammans med andra artiklar. Detta hj\xe4lper kunden att f\xf6rst\xe5 hur sortimentet h\xe4nger ihop, ger tips och v\xe4gledning f\xf6r att s\xe4kerst\xe4lla en bra k\xf6pupplevelse och garanterar att inga relevanta relationer missas."),(0,n.kt)("li",{parentName:"ul"},"M\xe5let \xe4r \xe4ven att s\xe4kra att den grundl\xe4ggande informationen som kr\xe4vs f\xf6r att st\xf6dja fl\xf6den f\xf6r order och logistik fungerar.")),(0,n.kt)("h2",{id:"vad-\xe4r-det-f\xf6r-data-som-ing\xe5r-i-denna-modul"},"Vad \xe4r det f\xf6r data som ing\xe5r i denna modul?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modulen behandlar endast relationer mellan produkter och metadata kopplad till dessa relationer. "),(0,n.kt)("li",{parentName:"ul"},"En relation mellan en produkt \xe4r en koppling mellan en \u201dhuvudprodukt\u201d och en \u201drelaterad produkt\u201d. S\xe5ledes beh\xf6ver b\xe5da produkterna vara skapade i SQARP i tidigare moduler f\xf6r att kunna kopplas till varandra."),(0,n.kt)("li",{parentName:"ul"},"Alla relationer klassificeras i en av fem olika grupper: Tillval, Tillbeh\xf6r, Reservdelar, Komponenter och Passar-till. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Tillval \u201dAddon\u201d:"))," Produkter som helst b\xf6r k\xf6pas tillsammans med \u201dhuvudprodukten\u201d. I vissa fall \xe4r detta till och med obligatoriskt, eftersom tillvalet inte kan k\xf6pas separat eller s\xe5 kan man inte k\xf6pa huvudprodukten utan tillvalet. Tillval k\xf6ps alltid i definierade kvantiteter och inom ramen f\xf6r tillvalskategorier.\nMed definierade kvantiteter menas att f\xf6r varje tillval specificerar vi antalet enheter av det tillvalet som m\xe5ste k\xf6pas om tillvalet v\xe4ljs. Det inneb\xe4r att kunden inte kan ge antalet enheter fritt. "),(0,n.kt)("p",null,"F\xf6r ",(0,n.kt)("strong",{parentName:"p"},"Tillval")," ska man berika relationerna med meta-data genom att dela in relationerna i olika tillvalskategorier. Meta-data kan vara namn, beskrivning, bild, video och dokument. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Tillbeh\xf6r:"))," Produkter som rekommenderas tillsammans med huvudprodukten, men d\xe4r tillbeh\xf6ret \xe4r en separat produkt som kan k\xf6pas f\xf6r sig. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Reservdelar:"))," Produkter som klassas som komponenter till huvudprodukter. Reservdelar \xe4r aldrig relevanta att k\xf6pa i samma best\xe4llning som huvudprodukten. Ist\xe4llet anv\xe4nder kunder denna relation f\xf6r att hitta delar till en produkt de redan \xe4ger \u2013 och reservdelen \xe4r endast relevant att k\xf6pa om kunden redan \xe4ger huvudprodukten. Reservdelar \xe4r alltid separata produkter som kan k\xf6pas f\xf6r sig.\n",(0,n.kt)("em",{parentName:"p"},"Exempel: Cykelkedja. Om din cykelkedja g\xe5r s\xf6nder kan du vilja k\xf6pa en ny kedja."),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Komponenter:"))," Produkter som ing\xe5r i ett paket \u2013 d\xe4r paketet \xe4r huvudprodukten. Komponenter kan vara relevanta att k\xf6pa utan att \xe4ga huvudprodukten. Komponenter kan ocks\xe5 vara relevanta att k\xf6pa i samma best\xe4llning som huvudprodukten. I teorin best\xe5r ett paket alltid av flera komponenter.\n",(0,n.kt)("em",{parentName:"p"},"Exempel: Ett bord med stolar som ett paket med eget artikelnummer, men bordet och stolarna sj\xe4lva har egna artikelnummer och kan k\xf6pas separat.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passar-till:"))," "),(0,n.kt)("h2",{id:"varf\xf6r-\xe4r-denna-modul-viktig"},"Varf\xf6r \xe4r denna modul viktig?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hj\xe4lpa kunden f\xf6rst\xe5 hur sortimentet h\xe4nger ihop")),(0,n.kt)("p",null,"o Om du har ett komplext eller tekniskt sortiment d\xe4r en kund beh\xf6ver k\xf6pa flera artikelnummer f\xf6r att f\xe5 en komplett produkt, \xe4r relationer avg\xf6rande f\xf6r att v\xe4gleda kunden genom k\xf6pprocessen. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\xd6ka sannolikheten att du f\xe5r en n\xf6jd kund")),(0,n.kt)("p",null,"o Det \xe4r viktigt att produkten kunden f\xe5r motsvarar de f\xf6rv\xe4ntningar som st\xe4llts i den digitala kanalen vi k\xf6pet. Om relevanta relationer presenteras tillsammans med huvudprodukten minskar risken att kunden missar viktiga tillval eller tillbeh\xf6r som skulle kunna f\xf6rb\xe4ttra k\xf6pet och upplevelsen ytterligare."),(0,n.kt)("p",null,"o Om relationer kan inspirera kunden till att g\xf6ra ett \xe4nnu mer komplett k\xf6p, \xf6kar ocks\xe5 sannolikheten att kunden blir n\xf6jd."),(0,n.kt)("p",null,"o Relationer ger dig m\xf6jligheten att guida kunden genom sortimentet och s\xe4kra att de f\xe5r den kompletta upplevelsen av produkten som de k\xf6per."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"F\xe5 upp dina genomsnittliga orderv\xe4rden")),(0,n.kt)("p",null,"o Relevanta tillval, tillbeh\xf6r och andra kompabilitetsrelationer kan konvertera s\xe5 mycket som 50% p\xe5 k\xf6p av huvudprodukten. Detta ger h\xf6gre genomsnittliga orderv\xe4rden och b\xe4ttre ekonomi i hela e-handelsaff\xe4ren d\xe5 fraktkostnaden kan spridas ut \xf6ver flera artiklar. "),(0,n.kt)("p",null,"o I fysiska butiker \xe4r det vanligt att visa relaterade produkter tillsammans. Detta \xe4r den digitala versionen av en \u201dbutiksdisplay\u201d. Exempelvis rekommenderas rostad l\xf6k tillsammans med korvbr\xf6d, eller f\xe4stanordning tillsammans med TV-apparater."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Minimera antalet klick som kunden beh\xf6ver g\xf6ra f\xf6r att f\xe5 ihop en hel varukorg")),(0,n.kt)("p",null,"o Om relaterade produkter inte finns definierade i datan kommer de inte kunna visas tillsammans med huvudprodukten. Detta inneb\xe4r att kunden m\xe5ste navigera genom kategoritr\xe4det, anv\xe4nda s\xf6kfunktionen eller p\xe5 annat s\xe4tt leta efter tillbeh\xf6ret. Detta \xe4r som regel mellan 8 och 12 klick f\xf6r att hitta r\xe4tt produkt vilket dramatiskt minskar sannolikheten f\xf6r ett k\xf6p. Dessutom \xf6kar det kundens os\xe4kerhet kring kompabilitet, vilket ytterligare s\xe4nker konverteringsgrad."),(0,n.kt)("h2",{id:"tips--trix--best-practice"},"Tips & trix / Best-practice"),(0,n.kt)("admonition",{title:"SQARP GOLD STANDARD",type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Bygg relationer i en riktning, fr\xe5n huvudprodukten till den relaterade produkten. Det \xe4r generellt sett inte en bra id\xe9 att bygga relationen \xe4ven \xe5t andra h\xe5llet."),(0,n.kt)("li",{parentName:"ul"},"Inkludera en l\xe4mplig beskrivning av tillvalen f\xf6r att v\xe4gleda kunden genom urvalet av tillval."),(0,n.kt)("li",{parentName:"ul"},"Det \xe4r bra att l\xe4gga till n\xe5gra generiska tillbeh\xf6r som \xe4r l\xe4mpliga att rekommendera tillsammans med huvudprodukten. Inkludera dock inte f\xf6r m\xe5nga; fem \xe4r en bra riktlinje f\xf6r den h\xe4r typen av generiska tillbeh\xf6r."))),(0,n.kt)("h2",{id:"hur-g\xe5r-jag-praktiskt-tillv\xe4ga-f\xf6r-att-f\xe4rdigst\xe4lla-modulen"},"Hur g\xe5r jag praktiskt tillv\xe4ga f\xf6r att f\xe4rdigst\xe4lla modulen?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ladda ner, fyll i och importera template som heter \u201drelations\u201d. Om du ska skapa tillval som relationstyp beh\xf6ver du f\xf6rst ladda ned, fylla i och importera template som heter \u201daddon categories\u201d. F\xf6r denna template beh\xf6ver du \xe4ven definiera vilka spr\xe5k det ska g\xf6ras p\xe5. "),(0,n.kt)("li",{parentName:"ol"},"Granska plattformen f\xf6r att verifiera att allt ser korrekt och bra ut. S\xe4kerst\xe4ll s\xe5 du inte missat n\xe5gra implicita relationer.")),(0,n.kt)("h2",{id:"qa"},"Q&A"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Jag har inga relationer i mitt sortiment idag, vad kan jag g\xf6ra?"),(0,n.kt)("p",null,"Det finns flera steg du kan ta f\xf6r att implementera detta. Till att b\xf6rja med kan du identifiera vilka produkter som \xe4r kompatibla eller relaterade till varandra baserat p\xe5 deras anv\xe4ndningsomr\xe5den eller kundbehov. Sedan kan du enkelt l\xe4gga till dessa relationer i SQARP plattformen. ")),(0,n.kt)("details",null,(0,n.kt)("summary",null,'Jag har kompletterande produkter som passar bra, men som inte"beh\xf6vs". Vilken relationstyp ska jag anv\xe4nda f\xf6r dessa?'),(0,n.kt)("p",null,"H\xe4r kan du anv\xe4nda relationstypen Tillbeh\xf6r. Dessa relationer kan hj\xe4lpa kunder att uppt\xe4cka och \xf6verv\xe4ga ytterligare produkter som f\xf6rb\xe4ttrar eller kompletterar huvudprodukten. ")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hur m\xe5nga relationer ska jag ha p\xe5 en huvudprodukt?"),(0,n.kt)("p",null,"Det beror dels p\xe5 produkttypen men generellt sett kan ett f\xf6r stort antal tillbeh\xf6rsalternativ g\xf6ra det r\xf6rigt f\xf6r kunden och s\xe5ledes att fatta ett k\xf6pbeslut. D\xe4rf\xf6r \xe4r det f\xf6rdelaktigt att begr\xe4nsa antalet till ett f\xe5tal, kanske som mest 5 alternativ, som \xe4r mest relevanta och passnde f\xf6r huvudprodukten. Detta kommer underl\xe4tta f\xf6r kunden att navigera och fatta ett k\xf6pbeslut. Det \xe4r viktigt att prioritera de tillbeh\xf6r som b\xe4st kompletterar huvudprodukten eller som ni \xf6nskar att kunden ska k\xf6pa, med tanke p\xe5 marginaler och kundens behov. Med detta menar vi att ni b\xf6r begr\xe4nsa er till kanske h\xf6gst fyra alternativ inom en specifik relationstyp. Ni beh\xf6ver inte begr\xe4nsa er till att ha endast fyra av alla relationstyper totalt sett, utan fyra inom varje relationstyp. ")))}m.isMDXComponent=!0}}]);