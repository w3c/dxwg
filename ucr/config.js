var respecConfig = {
//	preProcess: [dfn_index],
    specStatus: "ED",
    shortName: "dxwg-ucr",
//    previousMaturity:     "NOTE",
//    previousPublishDate:  "2016-07-23",
//    previousURI:          "https://www.w3.org/TR/2016/NOTE-poe-ucr-20160721/",
    edDraftURI: "https://w3c.github.io/dxwg/ucr/",
   editors: [{
  name:       "Ixchel Faniel",
  company:    "OCLC (Online Computer Library Center, Inc.)",
  companyURL: "https://www.oclc.org/"
},
{
name: "Jaroslav Pullmann",
company: "Fraunhofer Gesellschaft",
companyURL: "https://www.fraunhofer.de/"
},
{
name: "Rob Atkinson",
company: "Metalinkage, Open Geospatial Consortium",
companyURL: "http://www.opengeospatial.org/"
}
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
	"WMS":{
        href:"http://www.opengeospatial.org/standards/wms",
        publisher:"OGC",
        authors:["Jeff de la Beaujardiere"],
        date:"15 March 2006",
        title:"Web Map Service Implementation Specification",
        status:"OpenGIS Implementation Standard"
      },
      "GeoSPARQL":{
        href:"http://www.opengeospatial.org/standards/geosparql",
        publisher:"OGC",
        title:"GeoSPARQL - A Geographic Query Language for RDF Data",
        authors: ["Matthew Perry", "John Herring"],
        date: "10 September 2012"
      },
      "CSW":{
        href:"http://www.opengeospatial.org/standards/cat",
        publisher:"OGC",
        title:"Catalogue Services 3.0 - General Model",
        authors:["Douglas Nebert", "Uwe Voges", "Lorenzo Bigagli"],
        date: "10 June 2016"
      },
    },
    issueBase: "https://github.com/w3c/dxwg/issues"
};
