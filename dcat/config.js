var respecConfig = {
//	preProcess: [dfn_index],
//    subtitle: "Version 2",
    specStatus: "ED",
//    specStatus: "CR",
//    crEnd: "2019-10-24",
//    implementationReportURI: "http://example.com/rep/",
    shortName: "vocab-dcat-2",
    canonicalURI: "TR",
    prevRecURI:           "https://www.w3.org/TR/vocab-dcat/",
    previousPublishDate:  "2014-01-16",
    previousMaturity:     "REC",
//    previousURI:          "https://www.w3.org/TR/2014/REC-vocab-dcat-20140116/", -- Needed for CR etc
    edDraftURI:           "https://w3c.github.io/dxwg/dcat/",
//    issueBase:            "https://github.com/w3c/dxwg/issues/", -- Not needed when github used
    alternateFormats: [{
      label: "Turtle",
      uri: "https://w3c.github.io/dxwg/dcat/rdf/dcat.ttl",
    }], 
    editors: [{
      name:       "Riccardo Albertoni",
      orcid:  "0000-0001-5648-2713",
      company:    "CNR - Consiglio Nazionale delle Ricerche, Italy",
      url: "http://www.imati.cnr.it/joomla/index.php/people/8-curricula/178-riccardo-albertoni",
      companyURL: "http://www.cnr.it/",
      w3cid: 72458
    },{
      name: "David Browning",
      company: "Refinitiv",
      companyURL: "https://www.refinitiv.com",
      w3cid: 98704
    },{
      name:       "Simon Cox",
      orcid:      "0000-0002-3884-3420",
      company:    "CSIRO",
      url:        "http://people.csiro.au/Simon-Cox",
      companyURL: "https://www.csiro.au/",
      w3cid: 1796
    },{
      name:       "Alejandra Gonzalez Beltran",
      orcid:      "0000-0003-3499-8262",
      company:    "Oxford eResearch Centre, Engineering Science, University of Oxford",
      url: "https://www.oerc.ox.ac.uk/people/alejandra",
      companyURL: "http://www.oerc.ox.ac.uk/",
      w3cid: 61587
    },{
      name:       "Andrea Perego",
      orcid:      "0000-0001-9300-2694",
      company:    "European Commission, Joint Research Centre",
      companyURL: "https://ec.europa.eu/jrc/",
      w3cid: 40317
    },{
      name: "Peter Winstanley",
      company: "Scottish Government",
      companyURL: "http://www.gov.scot/",
      w3cid: 64374
    }],
    formerEditors: [{
      name: "Fadi Maali",
      company: "DERI",
      companyURL: "https://en.wikipedia.org/wiki/Digital_Enterprise_Research_Institute"
    }, {
      name: "John Erickson",
      company: "Tetherless World Constellation (RPI)",
      companyURL: "http://tw.rpi.edu/"
    }],    
    otherLinks: [{
        key: "Contributors",
        data: [{
            value: "Makx Dekkers",
            href: "http://www.makxdekkers.com"
        }]
      },
/*                 
      {
        key: "Editors of previous version",
        data: [{
            value: "Fadi Maali, DERI",
            href: "https://en.wikipedia.org/wiki/Digital_Enterprise_Research_Institute"
          },
          {
            value: "John Erickson, Tetherless World Constellation (RPI)",
            href: "http://tw.rpi.edu/"
          }
        ]
      }
*/      
    ],
    wg: "Dataset Exchange Working Group",
    wgURI: "https://www.w3.org/2017/dxwg/",
    wgPublicList: "public-dxwg-comments",
    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/99375/status",
    inlineCSS: "true",
    lint: "false",
    github: "https://github.com/w3c/dxwg/",
    localBiblio: {
        "DATS": {
            "href": "https://datatagsuite.github.io/docs/html/",
            "title": "Data Tag Suite",
            "authors": ["Alejandra Gonzalez-Beltran", "Philippe Rocca-Serra"],
            "publisher": "NIH Big Data 2 Knowledge bioCADDIE and NIH Data Commons projects",
            "date": "2016"
        },
        "DBPEDIA-ONT" : {
            href:"http://dbpedia.org/ontology/",
            title:"DBPedia ontology"
        },
        "DCAT-AP-SE": {
            title: "DCAT-AP-SE: Swedish recommendation for DCAT-AP1.1",
            href: "https://lankadedata.se/spec/DCAT-AP-SE",
            authors: ["Matthias Palmér"],
            etAl: false
        },
        "DCAT-BE": {
            title: "Linking data portals across Belgium.",
            href: "http://dcat.be/"
        },
        "DCAT-AP-IT": {
            title: "Profilo metadatazione DCAT-AP_IT",
            href: "https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/dcat-ap_it.html",
			publisher: "AgID & Team Digitale"
        },
        "DCAT-AP-NO": {
            title: "Standard for beskrivelse av datasett og datakataloger (DCAT-AP-NO)",
            href: "http://difi.github.io/dcat-ap-no/"
        },
        "DCAT-AP.de": {
            title: "Vokabulare und Dokumente für DCAT-AP.de",
            href: "https://dcat-ap.de/def/"
        },
        "DDI" : {
            href : "http://www.ddialliance.org/explore-documentation",
            title : "Data Documentation Initiative",
            publisher : "DDI Alliance"
        },
        "DOAP" : {
            href:"https://github.com/ewilderj/doap/wiki",
            title:"Description of a Project",
            authors: ["Edd Wilder-James"]
        },
        "FAIR" : {
            title : "The FAIR Guiding Principles for scientific data management and stewardship",
            authors : [ "Mark D. Wilkinson" ],
            etAl : true,
            status : "Scientific Data, vol. 3, Article nr. 160018",
            publisher : "Nature",
            href : "https://doi.org/10.1038/sdata.2016.18"
        },
        "FRAPO" : {
            href:"http://www.sparontologies.net/ontologies/frapo",
            title:"FRAPO, the Funding, Research Administration and Projects Ontology",
            authors: ["David Shotton"],
            date: "04 September 2017"
        },
        "GeoDCAT-AP-IT": {
            title: "GeoDCAT-AP in Italy, the national guidelines published",
            href: "https://joinup.ec.europa.eu/news/geodcat-apit"
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
        "INSPIRE-DoC": {
            "href":"http://inspire.ec.europa.eu/metadata-codelist/DegreeOfConformity/",
            "title":"INSPIRE Registry: Degrees of conformity",
            "publisher":"European Commission"
        },
        "INSPIRE-SDST": {
            "href":"http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/",
            "title":"INSPIRE Registry: Spatial data service types",
            "publisher":"European Commission"
        },        
        "ISO-IEC-25012" : {
            title : "ISO/IEC 25012 - Data Quality model",
            href : "http://iso25000.com/index.php/en/iso-25000-standards/iso-25012"
        },
        "ISO-26324" : {
            "authors":["ISO/TC 46/SC 9"],
            "href":"https://www.iso.org/standard/43506.html",
            "title":"Information and documentation -- Digital object identifier system",
            "publisher":"ISO",
            "status":"International Standard",
            "date":"2012"
        },
        "LinkedDataPatterns" : {
            title : "Linked Data Patterns: A pattern catalogue for modelling, publishing, and consuming Linked Data",
            authors : [ "Leigh Dodds", "Ian Davis" ],
            date: "31 May 2012",
            href : "http://patterns.dataincubator.org/book/"
        },
        "MDR-AR":{
            "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/access-right",
            "title":"Named Authority List: Access rights",
            "publisher":"Publications Office of the European Union"
        },
        "netCDF": {
            href: "https://www.unidata.ucar.edu/software/netcdf/",
            title: "Network Common Data Form (NetCDF)",
            publisher: "UNIDATA"
        },
        "OBO" : {
            href:"http://www.obofoundry.org/",
            title:"The OBO Foundry"
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
/*	    
        "OpenAPI": {
            href: "https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md",
            title: "OpenAPI Specification. Version 3.0.2",
            date: "08 October 2018",
            publisher: "OAI"
        },
*/	
        "OpenSearch": {
            authors: [
                "DeWitt Clinton"
            ],
            href:"https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md",
            title:"OpenSearch 1.1 Draft 6",
            date:"17 April 2018",
            publisher:"OpenSearch"
        },
        "PDO" : {
            href:"http://vocab.deri.ie/pdo",
            title:"Project Documents Ontology",
            authors: ["Pradeep Varma"],
            date: "09 July 2010"
        },
/*        
        "PROF-CONNEG": {
            href: "https://w3c.github.io/dxwg/conneg-by-ap/",
            title: "Content Negotiation by Profile",
            date: "03 October 2018",
            status: "W3C Editor's Draft"
        },
*/        
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
        "SCHEMA-ORG" : {
            href : "http://schema.org/",
            title : "Schema.org"
        },
        "ShEx" : {
            href : "http://shex.io/shex-semantics/",
            title : "Shape Expressions Language 2.1",
            date: "17 November 2018",
            status: "Draft Community Group Report",
			publisher: "Shape Expressions W3C Community Group"
        },
        "VIVO-ISF" : {
            href:"http://github.com/vivo-isf/vivo-isf",
            title:"VIVO-ISF Data Standard"
        },
        "ZaveriEtAl" : {
            title : "Quality assessment for Linked Data: A Survey",
            authors : [ "Amrapali Zaveri"],
            etAl : true,
            status : "Semantic Web, vol. 7, no. 1, pp. 63-93",
            publisher : "IOS Press",
            href : "https://doi.org/10.3233/SW-150175",
            date : "2015"
        },
        
    }
};

