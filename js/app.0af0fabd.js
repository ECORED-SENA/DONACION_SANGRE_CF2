(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{"chunk-0206bfa0":"e075d262","chunk-0cfca828":"4b18dcd5","chunk-13303073":"59489ee7","chunk-1479a341":"50b5963c","chunk-1fb07a61":"03e40e5e","chunk-2c06842c":"2756a8c2","chunk-2d0dad62":"213ae528","chunk-2d208d90":"b4c11c76","chunk-2d21d0e2":"f998fe44","chunk-2d22c123":"61b6b362","chunk-2e80bb9a":"fbbc5396","chunk-515a8379":"2f39036e","chunk-522cec8c":"ebd41266","chunk-59974754":"93700630","chunk-5a6377df":"baba126d","chunk-7432e4d4":"aa33b356","chunk-766a929b":"6873f18b","chunk-c796899c":"ea2c97e7",comple:"2ec5c1e1",creditos:"5d70c8d0",glosario:"5789f1e2",referencias:"c3c15de2",tema1:"f5513ea1"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-5a6377df":1,"chunk-7432e4d4":1,"chunk-766a929b":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d0dad62":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-515a8379":"4b1941a7","chunk-522cec8c":"99a35118","chunk-59974754":"f777a2af","chunk-5a6377df":"eecfadba","chunk-7432e4d4":"99a35118","chunk-766a929b":"92cde18b","chunk-c796899c":"31d6cfe0",comple:"5c2c613e",creditos:"4b1941a7",glosario:"774fc6f5",referencias:"9d51a070",tema1:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],p.parentNode.removeChild(p),n(t)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.0f3b944a.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view"),n("footer")],1)],1),n("BarraAvance")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,s=(n("cf25"),n("2877")),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),p=n("ae58"),f=n("7e58");o["a"].use(u["a"]);var m=new u["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}}]},{path:"/actividad/:index?",name:"actividad"},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}return{x:0,y:0,behavior:"auto"}}}),g=m,b=n("1c2c"),h=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Gestión campañas donación de sangre",descripcionCurso:"En el presente componente se tratarán aspectos técnicos generales de la donación de sangre, que permitirán al promotor conocer y aclarar los conceptos técnicos para realizar una adecuada promoción de la donación de sangre, con conocimientos sólidos para abordar a la población general.</br></br> Se revisarán aspectos técnicos generales, ¿qué es la sangre?, sus componentes, tiempo de vida útil, conservación, tipos de donación, tipos de donantes, conceptos relacionados con agentes infecciosos de interés en banco de sangre, periodo de ventana inmunológica y organización y planeación de campañas de donación de sangre, acciones de mejora, eventos adversos.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Gestión de campañas para la promoción y colecta de sangre",desarrolloContenidos:!0,subMenu:[{icono:"far fa-play-circle",numero:"1.1",titulo:"Conceptos básicos para promover la donación de sangre",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Seguimiento de indicadores",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Reacciones adversas a la donación y a la transfusión",hash:"t_1_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor Metodológico y Pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Instituto Nacional de Salud"},{nombre:"Magda Juliana Rodríguez Rodríguez",cargo:"Experta Temática",centro:"Red Nacional Bancos de Sangre y Servicios de Transfusión."},{nombre:"Mauricio Hernán Bonilla Contreras.",cargo:"Experto Temático",centro:"Red Nacional Bancos de Sangre y Servicios de Transfusión."},{nombre:"Olga Maritza Berrio Pérez",cargo:"Experta Temática",centro:"Red Nacional Bancos de Sangre y Servicios de Transfusión."},{nombre:"Maryuri Agudelo Franco",cargo:"Diseñadora Instruccional",centro:"Centro de Diseño y Metrología",regional:"Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Evaluador Instruccional",centro:"Centro para la Industria y la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"María Isabel Román Rueda",cargo:"Revisora de estilo",centro:"Centro Industrial Del Diseño Y La Manufactura",regional:"Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",regional:"Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte Organizacional",regional:"Regional Tolima"},{nombre:["Camilo Andrés Villamizar Lizcano","José Jaime Luis Tang Pinzón","Maria Camila Ovalle Ospina","María Natalia Maldonado Delgado","Wilson Andres Arenales Cáceres","Zuleidy Maria Ruiz Torres"],cargo:"Diseño web y Producción Audiovisual",centro:"Centro Industrial Del Diseño Y La Manufactura",regional:"Regional Santander"},{nombre:"Gustavo Adolfo Marún Suárez",cargo:"Desarrollo Front-End"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:["Validación de recursos"],centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Instituto Nacional de Salud, y Ministerio de Salud y Protección Social. (2018). Lineamiento técnico para la selección de donantes de sangre en Colombia, documento técnico. Instituto Nacional de Salud. "},{referencia:"Instituto Nacional de Salud. (2010). Manual de hemovigilancia. Instituto Nacional de Salud."},{referencia:"Instituto Nacional de Salud. (2011). Guía de control de calidad de componentes sanguíneos. Instituto Nacional de Salud.."},{referencia:"Instituto Nacional de Salud. (2018). Informe anual Red Nacional de Bancos de Sangre y Servicios de Transfusión, Colombia 2017. Instituto Nacional de Salud."},{referencia:"Instituto Nacional de Salud. (2020). Informe de Reacciones Adversas a la Donación (RAD) notificadas a Sihevi-INS© durante 2018. Instituto Nacional de Salud."},{referencia:"Ministerio de Salud de Colombia. (1993). Decreto 1571 de 1993. Sangre segura para todos. ",link:"https://www.suin-juriscol.gov.co/viewDocument.asp?id=1310796#:~:text=(agosto%2012)-,por%20el%20cual%20se%20reglamenta%20parcialmente%20el%20T%C3%ADtulo%20IX%20de,Bancos%20de%20Sangre%20y%20se"},{referencia:"Ministerio de Salud de Colombia. (1995). Resolución 1738 de 1995. ",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/RESOLUCION-1738-DE-1995.pdf"},{referencia:" Ministerio de Salud de Colombia. (1996). Resolución 901 de 1996. Manual de normas técnicas administrativas y de procedimientos en bancos de sangre",link:"https://www.dssa.gov.co/donacionytrasplantes/images/Legislacion/Legislacion_sangre/Resolucion_%200901_1996.pdf"},{referencia:"Ministerio de Salud de la República de Argentina y Plan Nacional de Sangre (2014). Manual de colectas externas de sangre. Ministerio de Salud de la República de Argentina"},{referencia:"Ministerio de Salud y Protección Social. (2014) Resolución 437 del 14 de febrero de 2014.",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200437%20de%202014.pdf"},{referencia:"Organización Mundial de la Salud. (2001) El uso clínico de la sangre. Organización Mundial de la Salud."},{referencia:"Organización Mundial de la Salud. (2004). La cadena de frío de la sangre. Organización Mundial de la Salud."},{referencia:"Organización Panamericana de la Salud. (2005). Manual hagamos la diferencia. Organización Panamericana de la Salud."},{referencia:"Rodríguez, M. J. (2019). Lineamiento promoción de la donación de sangre y componentes anatómicos.",link:"https://www.ins.gov.co/BibliotecaDigital/promocion-donacion-sangre-y-componentes-anatomicos.pdf"},{referencia:"Salazar, M. (2003). Guías para la transfusión de sangre y sus componentes. Rev Panam Salud Pública / Pan Am J Public Health 13(3),183–90."},{referencia:"Sociedad Española de Transfusión Sanguínea y Terapia Celular SET. (2015). Guía sobre la transfusión de componentes sanguíneos y derivados plasmáticos. Sociedad Española de Transfusión Sanguínea y Terapia Celular."},{referencia:"World Health Organization WHO. (2016). A Guide to Establishing a National Haemovigilance System. World Health Organization."}],glosario:[{termino:"Donante de sangre",significado:"persona que, previo el cumplimiento de los requisitos señalados en este Decreto, da, sin retribución económica y a título gratuito y para fines preventivos, terapéuticos de diagnóstico o de investigación, una porción de su sangre en forma voluntaria, libre y consciente (Ministerio de Salud, 1993)."},{termino:"Pruebas de compatibilidad",significado:"son los procedimientos realizados por los servicios de transfusión o los bancos de sangre, previos a la transfusión, con el fin de asegurar la selección adecuada de la unidad de sangre o los componentes a transfundirse (Ministerio de Salud, 1993)."},{termino:"Prueba cruzada",significado:"es el procedimiento del laboratorio realizado por los bancos de sangre o servicios de transfusión, mediante el cual se pone en contacto suero del receptor con glóbulos rojos del donante, con el objeto de determinar su compatibilidad (Ministerio de Salud, 1993)."}],complementario:[{texto:"Instituto Nacional de Salud. (2011). Guía de control de calidad de componentes sanguíneos. Instituto Nacional de Salud.",tipo:"Guía",link:"downloads/complementario/control-de-calidad-de-componentes-sanguineos.pdc.pdf"},{texto:"Beltrán, M., Ayala, M., Jara, J. (1999) Frecuencia de grupos sanguíneos y factor Rh en donantes de sangre. Biomédica, 19(1), 39-44.",tipo:"Artículo",link:"https://revistabiomedica.org/index.php/biomedica/article/view/1006"},{texto:"Instituto Nacional de Salud. (2010). Guía rápida para tomar decisiones en medicina transfusional. Instituto Nacional de Salud.",tipo:"Documento técnico",link:"downloads/complementario/Guia_Rapida_para_Tomar_Decisiones_Medicina_Transfusional.pdf"}]});o["a"].prototype.$config=h,o["a"].config.productionTip=!1,new o["a"]({router:g,store:b["a"],render:function(e){return e(d)}}).$mount("#app")},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.a3ec0b9b.svg"},cf25:function(e,a,n){"use strict";n("fea6")},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.736921eb.png"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.0af0fabd.js.map