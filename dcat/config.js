var respecConfig = {
//	preProcess: [dfn_index],
    specStatus: "ED",
    shortName: "dcat-1-1",
    canonicalURI: "TR",
//    previousMaturity:     "NOTE",
//    previousPublishDate:  "2016-07-23",
//    previousURI:          "https://www.w3.org/TR/2016/NOTE-poe-ucr-20160721/",
    edDraftURI: "https://w3c.github.io/dxwg/dcat/",
    editors: [
    {
      name: "Simon Cox",
      company: "CSIRO",
      companyURL: "https://www.csiro.au/"
    },
    {
      name: "Thomas D'Haenens",
      company: "Informatie Vlaanderen",
      companyURL: "https://overheid.vlaanderen.be/informatie-vlaanderen"
    },
  {
    name:       "Alejandra Gonzalez Beltran",
    company:    "University of Oxford eResearch Centre",
    companyURL: "http://www.oerc.ox.ac.uk/"
  },
  {
    name: "Peter Winstanley",
    company: "Scottish Government",
    companyURL: "http://www.gov.scot/"
  }
  ],
  authors: [
    {
      name: "Phil Archer",
      company: "W3C/ERCIM",
      companyURL: "https://www.w3.org/People/#phila"
    },
    {
      name: "An Other Author",
      company: "Affiliation",
      companyURL: "#"
    }

  ],
    otherLinks: [
      {
        key: "Original authors",
        data: [
        {
          value: "Fadi Maali"
        },
        {
          value: "John Erickson"
        }
      ]}
    ],


    wg: "Dataset Exchange Working Group",
    wgURI: "https://www.w3.org/2017/dxwg/",
    wgPublicList: "public-dxwg-comments",
    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/99375/status",
    inlineCSS: "true",
	lint: "false",
    noRecTrack: "true",
    localBiblio: {
      "SCHEMA-ORG":{
        "href":"http://schema.org/",
        "title":"Schema.org"
       },
      "DCAT-AP": {
        "href":"https://joinup.ec.europa.eu/asset/dcat_application_profile/description",
        "title":"DCAT application profile for data portals in Europe",
        "publisher":"ISA² programme of the European Commission",
        "authors":["Makx Dekkers"],
        "date":"2017-03-14"
      },
      "DATS": {
        "href":"http://wg3-metadataspecifications.readthedocs.io/",
        "title":"DAta Tag Suite",
        "authors":["Philippe Rocca-Serra", "Alejandra Gonzalez-Beltran"],
        "publisher":"NIH Big Data 2 Knowledge bioCADDIE project.",
        "date":"2016"
      }
    },
    issueBase: "https://github.com/w3c/dxwg/issues"
};
