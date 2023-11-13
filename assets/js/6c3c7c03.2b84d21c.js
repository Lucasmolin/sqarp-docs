"use strict";(self.webpackChunksqarp_docs=self.webpackChunksqarp_docs||[]).push([[481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=r,m=c["".concat(s,".").concat(p)]||c[p]||h[p]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Virtualization",l={unversionedId:"data-editing/virtualization",id:"data-editing/virtualization",title:"Virtualization",description:"Module overview",source:"@site/docs/data-editing/virtualization.md",sourceDirName:"data-editing",slug:"/data-editing/virtualization",permalink:"/data-editing/virtualization",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Product packages",permalink:"/data-editing/product_packages"},next:{title:"Inspirationals",permalink:"/data-editing/inspirationals"}},s={},u=[{value:"Module overview",id:"module-overview",level:3},{value:"How to use the editing template",id:"how-to-use-the-editing-template",level:3},{value:"Data &amp; definitions",id:"data--definitions",level:3},{value:"How to use the editing template",id:"how-to-use-the-editing-template-1",level:3}],d={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"virtualization"},"Virtualization"),(0,r.kt)("h3",{id:"module-overview"},"Module overview"),(0,r.kt)("p",null,"In this module, virtuals are created, basic information is added to the virtuals and products are connected to virtuals. Virtualization is where variant management is done and product titles are set. Virtualization is a language specific module."),(0,r.kt)("h3",{id:"how-to-use-the-editing-template"},"How to use the editing template"),(0,r.kt)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/R2K2YdoxGSw?si=_6silOmZAGLDKgTx",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h3",{id:"data--definitions"},"Data & definitions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Rules & validation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manufacturer","_","article","_","number"),(0,r.kt)("td",{parentName:"tr",align:null},"The manufacturers unique identifier for a product"),(0,r.kt)("td",{parentName:"tr",align:null},"Article number must exist in SQARP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"internal","_","reference"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique reference for the virtual"),(0,r.kt)("td",{parentName:"tr",align:null},"Can only contain alphanumerical characters and \u201c-\u201c, \u201c","_","\u201d. Each internal reference must be unique within the organization. Mandatory for every virtual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"product","_","type"),(0,r.kt)("td",{parentName:"tr",align:null},"A sting indicating the type of product (or category) included in the virtual. Used in the product title."),(0,r.kt)("td",{parentName:"tr",align:null},"Must be the same for all rows with the same internal","_","reference. Mandatory for every virtual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"virtual","_","name","_","translation"),(0,r.kt)("td",{parentName:"tr",align:null},"A string indicating the specific features and differentiation for the virtual"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be the same for all rows with the same internal","_","reference.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectable","_","key","_","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"The header for the selectable key with index ","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"Should only be used if virtual contains more than one product. Must be the same for all rows with the same internal","_","reference. Keys with different index numbers within the same virtual must be unique.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectable","_","value","_","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"The selectable value for the particular product relating to the key with index ","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"Should only be used if virtual contains more than one product. The combination of selectable values across all indices must be unique for every product within a virtual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectable","_","image","_","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to a swatch image corresponding to the selectable value for the particular product"),(0,r.kt)("td",{parentName:"tr",align:null},"Should only be used if virtual contains more than one product. Must be valid URL to an image file. Must be the same image for all products with the same selectable value for each index number.")))),(0,r.kt)("admonition",{title:"SQARP GOLD STANDARD",type:"caution"},(0,r.kt)("h3",{parentName:"admonition",id:"internal-references"},"Internal references"),(0,r.kt)("p",{parentName:"admonition"},"The internal reference should be set so that the virtual is recognizable from the reference itself. When editing data in SQARP, you will frequently need to reference these codes. This task will be made much easier if codes are recognizable. A good rule of thumb can be to use the following structure: ","[BRAND]","-","[TYPE]","-","[DISTINGUISHER]",". For example, \u201cSQARP-LAWN-MOWER-SE400\u201d."),(0,r.kt)("p",{parentName:"admonition"},"It is customary in SQARP to use uppercased letters and hyphens in internal references."),(0,r.kt)("h3",{parentName:"admonition",id:"virtual-groupings"},"Virtual groupings"),(0,r.kt)("p",{parentName:"admonition"},"Most brands have a strong sense of how virtuals should be constructed. The configuration of virtuals in SQARP are very flexible to accommodate the shifting needs of brands. We have however gathered a few best practices:"),(0,r.kt)("admonition",{parentName:"admonition",type:"warning"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Products that look very different visually should generally not be grouped into the same virtual. That risks leading to products become \u201chidden\u201d from a customer in a site list and risk underexposing your assortment."),(0,r.kt)("li",{parentName:"ul"},"Products that have significant differences in price and technical specifications should generally not be grouped together. That risks confusing the customer when browsing through the assortment."),(0,r.kt)("li",{parentName:"ul"},"If a brands total number of products is small, you should group products less frequently and use smaller virtual groups. If a brands total number of products is large, you should group products more frequently and into larger virtual groups."))),(0,r.kt)("h3",{parentName:"admonition",id:"product-type"},"Product type"),(0,r.kt)("p",{parentName:"admonition"},"The product type of the virtual must be relevant for all products included in the virtual group."),(0,r.kt)("p",{parentName:"admonition"},"The product type should be specific enough so that a customer can understand what product they are looking at."),(0,r.kt)("p",{parentName:"admonition"},"The product type should include specific context where necessary. For example: \u201cScrew\u201d is not a helpful product type whereas \u201cScrew for door handle\u201d is."),(0,r.kt)("p",{parentName:"admonition"},"Product types should be consistent across a brands assortment. Meaning if \u201cNail Polish\u201d is a product type in your assortment, you shouldn\u2019t have another product type called \u201cNail polish\u201d or \u201cPolish for Nails\u201d. Consistency will help customers make sense of the assortment."),(0,r.kt)("p",{parentName:"admonition"},"Product types should be set with regard to consumer search patterns. Product types are used in titles which, if built thoughtfully, are effective at driving search traffic. Research what words are used by consumers when searching for your particular products and incorporate the findings into your product types. For example, \u201cGaming Chair\u201d might be a better product type than \u201cComputer Chair\u201d or \u201cOffice Chair\u201d."),(0,r.kt)("admonition",{parentName:"admonition",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Product types should not include features. Don\u2019t include the colour, material, size, or other features of the product in the product type. These are left for virtual names.")),(0,r.kt)("admonition",{parentName:"admonition",title:"Style guide for product types",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use only standard characters to the greatest extent possible \u2013 you never know what non-standard characters will look like in other systems and websites."),(0,r.kt)("li",{parentName:"ul"},"Emphasize the important words by using uppercased letters in the beginning of the word. Begin other words, such as \u201cfor\u201d, \u201cwith\u201d, \u201cin\u201d with lowercased letters."),(0,r.kt)("li",{parentName:"ul"},"Keep types concise, when you cross 25 characters, you better have a good explanation for why such a long type is necessary."))),(0,r.kt)("h3",{parentName:"admonition",id:"virtual-name"},"Virtual name"),(0,r.kt)("p",{parentName:"admonition"},"Virtual names should distinguish different virtuals that have the same product type from each other."),(0,r.kt)("p",{parentName:"admonition"},"Virtual names should be consistent within the context of product types. For example, if one virtual has virtual name \u201cBlue 100 cm\u201d and another with the same product type has virtual name \u201cBlue\u201d, then yes, they are unique, but they are not consistent. Keep consistency by calling them \u201cBlue 100 cm\u201d and \u201cBlue 200 cm\u201d respectively. In general, try to keep the same theme for how virtual names are structured within product types."),(0,r.kt)("p",{parentName:"admonition"},"Virtual names should include the most important keywords. Since virtual names are part of the title for products, it\u2019s important to include words that customers use when searching for products in the title. These keywords should be added even if they\u2019re not necessary for distinguishing virtuals from one another."),(0,r.kt)("admonition",{parentName:"admonition",title:"STYLE GUIDE FOR virtual names:",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use only standard characters to the greatest extent possible \u2013 you never know what non-standard characters will look like in other systems and websites"),(0,r.kt)("li",{parentName:"ul"},"Emphasize the important words by using uppercased letters in the beginning of the word. Begin other words, such as \u201cfor\u201d, \u201cwith\u201d, \u201cin\u201d with lowercased letters."),(0,r.kt)("li",{parentName:"ul"},"Include units in virtual names \u201c100 cm\u201d is better than \u201c100\u201d. Use space to separate the value from its unit."),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t include the name of the brand"),(0,r.kt)("li",{parentName:"ul"},"Use \u201c.\u201d Instead of \u201c,\u201d for decimals"),(0,r.kt)("li",{parentName:"ul"},"Avoid the use of commas in virtual names"))),(0,r.kt)("h3",{parentName:"admonition",id:"selectables"},"Selectables"),(0,r.kt)("p",{parentName:"admonition"},"Keep selectable keys and values stringent across the assortment. Don\u2019t use \u201cLength (mm)\u201d for one virtual and \u201cLength\u201d for another."),(0,r.kt)("p",{parentName:"admonition"},"Avoid incomplete selections. When using multiple selectables, make sure they are harmonized so that the customer always makes the number of choices as there are selectables. For example, there are 4 products in a virtual \u201cGreen Cotton\u201d, \u201cBlue Cotton\u201d, \u201cRed Cotton\u201d and \u201cGreen Silk\u201d. If you use two selectables, \u201cColor\u201d and \u201cMaterial\u201d you will not get a harmonized choice \u2013 because if a customer selects the material \u201cSilk\u201d, then they have already made the complete selection. In this case, it is better to give the customer one selectable \u201cType\u201d or \u201cModel\u201d and get all the options in one selectable."),(0,r.kt)("p",{parentName:"admonition"},"If you have the choice, build fewer selectables. You want to make a customers configuration on a product page as easy as possible, but you also want to minimize the number of clicks required before the customer can add a product to their cart. If you are wondering whether to add an additional selectable, the answer is most likely no."),(0,r.kt)("p",{parentName:"admonition"},"Make sure the selectable values stand on their own. You don\u2019t want to make the values dependent on the keys since the keys will not be available in all applications. Say for example that you have a lamp that is available with and without dimmer. It might be tempting to set the key \u201cHas dimmer\u201d and the values \u201cYes\u201d and \u201cNo\u201d. But these values make no sense without the key. Instead, set the key to \u201cModel\u201d or \u201cDimmer\u201d and the values to \u201cWith Dimmer\u201d and \u201cWithout Dimmer\u201d."),(0,r.kt)("p",{parentName:"admonition"},"Always include units in selectable values. Never \u201c100\u201d, always \u201c100 mm\u201d."),(0,r.kt)("p",{parentName:"admonition"},"Set selectables that consumers can relate to. Include the extra explanation to make the choice easy for consumers. If your selling a radiator, it might be tempting to use \u201c5 kW\u201d as the selectable value, but \u201c5 kW (5-10 m3)\u201d is much more useful for the customer."),(0,r.kt)("p",{parentName:"admonition"},"Don\u2019t get to specific on the keys. Since the values should stand on their own, it\u2019s better to use keys that are easy to understand to avoid confusing the customer."),(0,r.kt)("p",{parentName:"admonition"},"Use swatches every chance you get. They make for a much better consumer experience."),(0,r.kt)("admonition",{parentName:"admonition",title:"STYLE GUIDE FOR SELECTABLES",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If multiple text-values (colors for example) should be fit into the same selectable value, use \u201c/\u201d as separator"),(0,r.kt)("li",{parentName:"ul"},"If multiple measurements should be fit into the same selectable values, use \u201cx\u201d as separator if they are in the same unit."),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t begin a selectable value with a lowercased letter."),(0,r.kt)("li",{parentName:"ul"},"Use blanks to separate measurements from units."),(0,r.kt)("li",{parentName:"ul"},"Use standard characters."))),(0,r.kt)("h3",{parentName:"admonition",id:"product-title"},"Product title"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"The concatenation of Product type + Brand + Virtual name must always be unique")," across the organisation\u2019s assortment. This is the unique virtual titles rule in SQARP."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"The concatenation of Product type + Brand + Virtual name + Selectable values must always be unique")," across the organisation\u2019s assortment. This is the unique product titles rule in SQARP.")),(0,r.kt)("h3",{id:"how-to-use-the-editing-template-1"},"How to use the editing template"),(0,r.kt)("p",null,"Each sheet in the virtualization template represents virtualization in one language. You can add multiple sheets to the template representing different languages. Indicate the appropriate language in the sheet name using lowercased ISO 3166-1 alpha-2 codes."),(0,r.kt)("p",null,"Each row in the virtualization template represents one product."),(0,r.kt)("p",null,"Virtuals are defined in the internal reference, product type and virtual name columns."),(0,r.kt)("p",null,"Virtualization is the only module where new virtuals can be created. Virtuals must always have products related to them upon creation."),(0,r.kt)("p",null,"The relation between products and virtuals are defined in the mapping between manufacturer article numbers and internal references."),(0,r.kt)("p",null,"A virtual with several products related to it will be duplicated at the same number of rows as there are products associated with the virtual. The internal reference, product type and virtual name must be the same on all of those rows."),(0,r.kt)("p",null,"Selectables should only be used if there is more than one product related to the virtual."),(0,r.kt)("p",null,"The selectables are used to distinguish the products within a virtual. There is no limit to the number of selectables that can be added to a virtual. For each selectable that has been defined, each product within a virtual must have the same selectable key. If one selectable is used, each product within the virtual must have a unique selectable value. If multiple selectables are used, the combination of all selectable values must be unique for each product within a virtual."),(0,r.kt)("p",null,"Selectable images must contain image URLs. Selectable images must correspond 1-1 with the selectable values within a selectable."),(0,r.kt)("p",null,"Only the virtuals included in the template will be affected upon upload. For virtuals that are included, the data in the template will be master, meaning that all products associated with a virtual must always be included in the template."),(0,r.kt)("p",null,"To add a new product to an existing virtual, indicate the appropriate internal reference and add the product type and virtual name of the virtual. Then match the existing selectable structure to the new product. The new product must have the same selectable keys as the products that already exist on that product, and the selectable values must be unique in relation to the existing products on that virtual."),(0,r.kt)("p",null,"To add new selectables, create new columns to the right. You need three columns for each new selectable created: selectable","_","key","_","X, selectable","_","value","_","X and selectable","_","image","_","X. X should be substituted for the appropriate index number for the selectable."))}h.isMDXComponent=!0}}]);