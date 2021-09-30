export default {
  global: {
    componenteFormativo: 'Gestión campañas donación de sangre',
    descripcionCurso:
      'En el presente componente se tratarán aspectos técnicos generales de la donación de sangre, que permitirán al promotor conocer y aclarar los conceptos técnicos para realizar una adecuada promoción de la donación de sangre, con conocimientos sólidos para abordar a la población general.</br></br> Se revisarán aspectos técnicos generales, ¿qué es la sangre?, sus componentes, tiempo de vida útil, conservación, tipos de donación, tipos de donantes, conceptos relacionados con agentes infecciosos de interés en banco de sangre, periodo de ventana inmunológica y organización y planeación de campañas de donación de sangre, acciones de mejora, eventos adversos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de campañas para la promoción y colecta de sangre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '1.1',
            titulo: 'Conceptos básicos para promover la donación de sangre',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Seguimiento de indicadores',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Reacciones adversas a la donación y a la transfusión',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor Metodológico y Pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Instituto Nacional de Salud',
      },
      {
        nombre: 'Magda Juliana Rodríguez Rodríguez',
        cargo: 'Experta Temática',
        centro: 'Red Nacional Bancos de Sangre y Servicios de Transfusión.',
      },
      {
        nombre: 'Mauricio Hernán Bonilla Contreras.',
        cargo: 'Experto Temático',
        centro: 'Red Nacional Bancos de Sangre y Servicios de Transfusión.',
      },
      {
        nombre: 'Olga Maritza Berrio Pérez',
        cargo: 'Experta Temática',
        centro: 'Red Nacional Bancos de Sangre y Servicios de Transfusión.',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte Organizacional',
        regional: 'Regional Tolima',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'José Jaime Luis Tang Pinzón',
          'Maria Camila Ovalle Ospina',
          'María Natalia Maldonado Delgado',
          'Wilson Andres Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Nacional de Salud, y Ministerio de Salud y Protección Social. (2018). Lineamiento técnico para la selección de donantes de sangre en Colombia, documento técnico. Instituto Nacional de Salud. ',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2010). Manual de hemovigilancia. Instituto Nacional de Salud.',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2011). Guía de control de calidad de componentes sanguíneos. Instituto Nacional de Salud..',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2018). Informe anual Red Nacional de Bancos de Sangre y Servicios de Transfusión, Colombia 2017. Instituto Nacional de Salud.',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2020). Informe de Reacciones Adversas a la Donación (RAD) notificadas a Sihevi-INS© durante 2018. Instituto Nacional de Salud.',
    },
    {
      referencia:
        'Ministerio de Salud de Colombia. (1993). Decreto 1571 de 1993. Sangre segura para todos. ',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1310796#:~:text=(agosto%2012)-,por%20el%20cual%20se%20reglamenta%20parcialmente%20el%20T%C3%ADtulo%20IX%20de,Bancos%20de%20Sangre%20y%20se',
    },
    {
      referencia:
        'Ministerio de Salud de Colombia. (1995). Resolución 1738 de 1995. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/RESOLUCION-1738-DE-1995.pdf',
    },
    {
      referencia:
        ' Ministerio de Salud de Colombia. (1996). Resolución 901 de 1996. Manual de normas técnicas administrativas y de procedimientos en bancos de sangre',
      link:
        'https://www.dssa.gov.co/donacionytrasplantes/images/Legislacion/Legislacion_sangre/Resolucion_%200901_1996.pdf',
    },
    {
      referencia:
        'Ministerio de Salud de la República de Argentina y Plan Nacional de Sangre (2014). Manual de colectas externas de sangre. Ministerio de Salud de la República de Argentina',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2014) Resolución 437 del 14 de febrero de 2014.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200437%20de%202014.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2001) El uso clínico de la sangre. Organización Mundial de la Salud.',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2004). La cadena de frío de la sangre. Organización Mundial de la Salud.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2005). Manual hagamos la diferencia. Organización Panamericana de la Salud.',
    },
    {
      referencia:
        'Rodríguez, M. J. (2019). Lineamiento promoción de la donación de sangre y componentes anatómicos.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/promocion-donacion-sangre-y-componentes-anatomicos.pdf',
    },
    {
      referencia:
        'Salazar, M. (2003). Guías para la transfusión de sangre y sus componentes. Rev Panam Salud Pública / Pan Am J Public Health 13(3),183–90.',
    },
    {
      referencia:
        'Sociedad Española de Transfusión Sanguínea y Terapia Celular SET. (2015). Guía sobre la transfusión de componentes sanguíneos y derivados plasmáticos. Sociedad Española de Transfusión Sanguínea y Terapia Celular.',
    },
    {
      referencia:
        'World Health Organization WHO. (2016). A Guide to Establishing a National Haemovigilance System. World Health Organization.',
    },
  ],
  glosario: [
    {
      termino: 'Donante de sangre',
      significado:
        'persona que, previo el cumplimiento de los requisitos señalados en este Decreto, da, sin retribución económica y a título gratuito y para fines preventivos, terapéuticos de diagnóstico o de investigación, una porción de su sangre en forma voluntaria, libre y consciente (Ministerio de Salud, 1993).',
    },
    {
      termino: 'Pruebas de compatibilidad',
      significado:
        'son los procedimientos realizados por los servicios de transfusión o los bancos de sangre, previos a la transfusión, con el fin de asegurar la selección adecuada de la unidad de sangre o los componentes a transfundirse (Ministerio de Salud, 1993).',
    },
    {
      termino: 'Prueba cruzada',
      significado:
        'es el procedimiento del laboratorio realizado por los bancos de sangre o servicios de transfusión, mediante el cual se pone en contacto suero del receptor con glóbulos rojos del donante, con el objeto de determinar su compatibilidad (Ministerio de Salud, 1993).',
    },
  ],
  complementario: [
    {
      texto:
        'Instituto Nacional de Salud. (2011). Guía de control de calidad de componentes sanguíneos. Instituto Nacional de Salud.',
      tipo: 'Guía',
      link:
        'downloads/complementario/control-de-calidad-de-componentes-sanguineos.pdc.pdf',
    },
    {
      texto:
        'Beltrán, M., Ayala, M., Jara, J. (1999) Frecuencia de grupos sanguíneos y factor Rh en donantes de sangre. Biomédica, 19(1), 39-44.',
      tipo: 'Artículo',
      link:
        'https://revistabiomedica.org/index.php/biomedica/article/view/1006',
    },
    {
      texto:
        'Instituto Nacional de Salud. (2010). Guía rápida para tomar decisiones en medicina transfusional. Instituto Nacional de Salud.',
      tipo: 'Documento técnico',
      link:
        'downloads/complementario/Guia_Rapida_para_Tomar_Decisiones_Medicina_Transfusional.pdf',
    },
  ],
}
