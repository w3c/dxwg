var respecConfig = {
//	preProcess: [dfn_index],
    specStatus: "WD",
    shortName: "vocab-dcat-2",
    canonicalURI: "TR",
    prevRecURI:           "https://www.w3.org/TR/vocab-dcat/",
    previousPublishDate:  "2018-05-08",
    previousMaturity:     "FPWD",
//    previousURI:          "https://www.w3.org/TR/2014/REC-vocab-dcat-20140116/",
    edDraftURI:           "https://w3c.github.io/dxwg/dcat/",
    issueBase:            "https://github.com/w3c/dxwg/issues/",
    editors: [{
      name:       "Alejandra Gonzalez Beltran",
      company:    "University of Oxford eResearch Centre",
      url: "https://www.oerc.ox.ac.uk/people/alejandra",
      companyURL: "http://www.oerc.ox.ac.uk/"
    },{
      name: "Dave Browning",
      company: "Thomson Reuters",
      companyURL: "https://www.thomsonreuters.com"
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
//            href: "https://ec.europa.eu/jrc/en/research-topic/digital-earth"
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
          title : "Quality assessment for Linked Data: A Survey",
          authors : [ "Amrapali Zaveri", "Anisa Rula", "Andrea Maurino",
                      "Ricardo Pietrobon", "Jens  Lehmann", "Sören Auer" ],
          status : "Semantic Web, vol. 7, no. 1, pp. 63-93, 2015",
          href : "https://dx.doi.org/10.3233/SW-150175"
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
      "schema-org" : {
         href:"http://schema.org/",
         title:"Schema.org"
      },
      "dbpedia-ont" : {
         href:"http://dbpedia.org/ontology/",
         title:"DBPedia ontology"
      },
      "doap" : {
         href:"https://github.com/ewilderj/doap/wiki",
         title:"Description of a Project",
         authors: ["Edd Wilder-James"]
      },
      "frapo" : {
         href:"http://www.sparontologies.net/ontologies/frapo",
         title:"FRAPO, the Funding, Research Administration and Projects Ontology",
         authors: ["David Shotton"],
         date: "04 September 2017"
      },
      "obo" : {
         href:"http://www.obofoundry.org/",
         title:"The OBO Foundry"
      },
      "pdo" : {
         href:"http://vocab.deri.ie/pdo",
         title:"Project Documents Ontology",
         authors: ["Pradeep Varma"],
         date: "09 July 2010"
      },
      "vivo-isf" : {
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
            href: "https://www.w3.org/TR/conneg-by-ap/",
            title: "Content Negotiation by Profile",
            date: " 2018-12-31",
            status: "W3C Editor's Draft"
      },
      "PROF-GUIDE": {
            href: "https://www.w3.org/TR/profile-guidance/",
            title: "Profile Guidance",
            date: " 2018-12-31",
            status: "W3C Editor's Draft"
      },
      "PROF-IETF": {
            authors: [
                "L. Svensson",
                "R. Verborgh"
            ],
            href: "https://profilenegotiation.github.io/I-D-Accept--Schema/I-D-accept-schema/",
            title: "Negotiating Profiles in HTTP",
            date: " 2017-10-24",
            status: "IETF Internet Draft"
      }
    }
  };
