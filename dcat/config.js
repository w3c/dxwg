var respecConfig = {
//	preProcess: [dfn_index],
    specStatus: "ED",
    shortName: "vocab-dcat-2",
    canonicalURI: "TR",
    prevRecURI:           "https://www.w3.org/TR/vocab-dcat/",
    previousPublishDate:  "2014-01-16",
    previousMaturity:     "REC",
//    previousURI:          "https://www.w3.org/TR/2014/REC-vocab-dcat-20140116/",
    edDraftURI:           "https://w3c.github.io/dxwg/dcat/",
    issueBase:            "https://github.com/w3c/dxwg/issues/",
    editors: [{
      name:       "Alejandra Gonzalez Beltran",
      company:    "Oxford eResearch Centre, Engineering Science, University of Oxford",
      url: "https://www.oerc.ox.ac.uk/people/alejandra",
      companyURL: "http://www.oerc.ox.ac.uk/"
    },{
      name: "Dave Browning",
      company: "Refinitiv",
      companyURL: "https://www.refinitiv.com"
    },{
      name: "Simon Cox",
      company: "CSIRO",
      url: "http://people.csiro.au/Simon-Cox",
      companyURL: "https://www.csiro.au/"
    },{
      name: "Peter Winstanley",
      company: "Scottish Government",
      companyURL: "http://www.gov.scot/"
    }],
    otherLinks: [{
//        key: "Contributors",
//        data: [{
//            value: "Makx Dekkers",
//            href: "http://www.makxdekkers.com"
//        },{
//            value: "Antoine Isaac, Europeana Foundation",
//            href: "https://pro.europeana.eu/person/antoine-isaac"
//        },{
//            value: "Andrea Perego, European Commission",
//            href: "https://ec.europa.eu/jrc/"
//        }]
//      },{
        key: "Editors of previous version",
        data: [{
            value: "Fadi Maali, DERI",
            href: "https://en.wikipedia.org/wiki/Digital_Enterprise_Research_Institute"
        },{
            value: "John Erickson, Tetherless World Constellation (RPI)",
            href: "http://tw.rpi.edu/"
        }]
      }],
    wg: "Dataset Exchange Working Group",
    wgURI: "https://www.w3.org/2017/dxwg/",
    wgPublicList: "public-dxwg-comments",
    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/99375/status",
    inlineCSS: "true",
	  lint: "false",
    localBiblio: {
      "SCHEMA-ORG" : {
        href : "http://schema.org/",
        title : "Schema.org"
       },
       "DATS": {
         href : "http://wg3-metadataspecifications.readthedocs.io/",
         title : "Data Tag Suite",
         authors : ["Philippe Rocca-Serra", "Alejandra Gonzalez-Beltran"],
         publisher : "NIH Big Data 2 Knowledge bioCADDIE project.",
         date : "2016"
       },
      "ZaveriEtAl" : {
          title : "Quality assessment for Linked Data: A Survey",
          authors : [ "Amrapali Zaveri", "Anisa Rula", "Andrea Maurino",
                      "Ricardo Pietrobon", "Jens  Lehmann", "Sören Auer" ],
          status : "Semantic Web, vol. 7, no. 1, pp. 63-93",
	  publisher : "IOS Press",
          href : "https://doi.org/10.3233/SW-150175",
	  date : "2015"
      },
      "ISOIEC25012" : {
          title : "ISO/IEC 25012 - Data Quality model",
          href : "http://iso25000.com/index.php/en/iso-25000-standards/iso-25012"
      },
      "DDI" : {
         href : "http://www.ddialliance.org/explore-documentation",
         title : "Data Documentation Initiative",
         publisher : "DDI Alliance"
      },
      "DATS": {
          "href": "https://github.com/datatagsuite/",
          "title": "Data Tag Suite",
          "authors": ["Alejandra Gonzalez-Beltran", "Philippe Rocca-Serra"],
          "publisher": "NIH Big Data 2 Knowledge bioCADDIE and NIH Data Commons projects",
          "date": "2016"
      },
      "DBPEDIA-ONT" : {
         href:"http://dbpedia.org/ontology/",
         title:"DBPedia ontology"
      },
      "DOAP" : {
         href:"https://github.com/ewilderj/doap/wiki",
         title:"Description of a Project",
         authors: ["Edd Wilder-James"]
      },
      "FRAPO" : {
         href:"http://www.sparontologies.net/ontologies/frapo",
         title:"FRAPO, the Funding, Research Administration and Projects Ontology",
         authors: ["David Shotton"],
         date: "04 September 2017"
      },
      "OBO" : {
         href:"http://www.obofoundry.org/",
         title:"The OBO Foundry"
      },
      "PDO" : {
         href:"http://vocab.deri.ie/pdo",
         title:"Project Documents Ontology",
         authors: ["Pradeep Varma"],
         date: "09 July 2010"
      },
      "VIVO-ISF" : {
         href:"http://github.com/vivo-isf/vivo-isf",
         title:"VIVO-ISF Data Standard"
      },
     "LinkedDataPatterns" : {
          title : "Linked Data Patterns: A pattern catalogue for modelling, publishing, and consuming Linked Data",
          authors : [ "Leigh Dodds", "Ian Davis" ],
          date: "31 May 2012",
          href : "http://patterns.dataincubator.org/book/"
      },
      "PROF-CONNEG": {
            href: "https://w3c.github.io/dxwg/conneg-by-ap/",
            title: "Content Negotiation by Profile",
            date: "03 October 2018",
            status: "W3C Editor's Draft"
      },
      "PROF-GUIDE": {
            href: "https://w3c.github.io/dxwg/profiles/",
            title: "Profile Guidance",
            date: "03 October 2018",
            status: "W3C Editor's Draft"
      },
      "PROF-IETF": {
            authors: [
                "L. Svensson",
                "R. Verborgh"
            ],
            href: "https://profilenegotiation.github.io/I-D-Accept--Schema/I-D-accept-schema",
            title: "Negotiating Profiles in HTTP",
            date: "24 October 2017",
            status: "IETF Internet Draft"
      },
      "OpenAPI": {
            href: "https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md",
            title: "OpenAPI Specification. Version 3.0.2",
            date: "08 October 2018",
            publisher: "OAI"
      },
      "OpenSearch": {
            authors: [
                "DeWitt Clinton"
            ],
            href:"https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md",
            title:"OpenSearch 1.1 Draft 6",
            date:"17 April 2018",
            publisher:"OpenSearch"
      },
      "HYDRA": {
            authors: [
                "Markus Lanthaler"
            ],
            href:"https://www.hydra-cg.com/spec/latest/core/",
            title:"Hydra Core Vocabulary",
            date:"15 March 2018",
            publisher:"Hydra W3C Community Group",
            status:"Unofficial Draft"
      },
      "ODRS": {
            authors: [
                "Leigh Dodds"
            ],
            href:"http://schema.theodi.org/odrs",
            title:"Open Data Rights Statement Vocabulary",
            date:"29 July 2013",
            publisher:"ODI"
      },
      "MDR-AR":{
        "href":"http://publications.europa.eu/resource/authority/access-right",
        "title":"Named Authority List: Access rights",
        "publisher":"Publications Office of the European Union"
       },
      "FAIR" : {
          title : "The FAIR Guiding Principles for scientific data management and stewardship",
          authors : [ "Mark D. Wilkinson" ],
	  etAl : true,
          status : "Scientific Data, vol. 3, Article nr. 160018",
	  publisher : "Nature",
          href : "https://doi.org/10.1038/sdata.2016.18"
      },
    }
  };
