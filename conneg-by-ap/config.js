var respecConfig = {
    specStatus: "FPWD",
    shortName: "dx-prof-conneg",
    edDraftURI: "https://w3c.github.io/dxwg/conneg-by-ap/",
    previousURI: "https://w3c.github.io/dxwg/conneg-by-ap/",
    testSuiteURI: "https://github.com/CSIRO-enviro-informatics/prof-conneg-test-suite",
    implementationReportURI: "https://github.com/CSIRO-enviro-informatics/prof-conneg-implementations",
    canonicalURI: "TR",
    editors: [{
        name: "Lars G. Svensson",
        company: "Deutsche Nationalbibliothek",
        companyURL: "http://www.dnb.de/",
	    orcid: "0000-0002-8714-9718",
        w3cid:  "44603"
      },
      {
        name: "Rob Atkinson",
        company: "Metalinkage, Open Geospatial Consortium",
        companyURL: "http://www.opengeospatial.org/",
        orcid: "0000-0002-7878-2693"
      },
      {
        name:       "Nicholas J. Car",
        url:        "https://people.csiro.au/Nicholas-Car",
        mailto:     "nicholas.car@csiro.au",
        company:    "CSIRO",
        companyURL: "https://www.csiro.au",
        orcid:      "0000-0002-8742-7730",
        w3cid:      70131
    }],
    otherLinks: [{
    	key: "Contributors",
	    data: [{
		value:       "Ruben Verborgh",
		href:        "https://ruben.verborgh.org/"
	      }]
    }],
    wg: "Dataset Exchange Working Group",
    wgURI: "https://www.w3.org/2017/dxwg/",
    wgPublicList: "public-dxwg-comments",
    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/99375/status",
    inlineCSS: "true",
    lint: "false",
    maxTocLevel: 3,
    issueBase: "https://github.com/w3c/dxwg/issues/",
    github: "https://github.com/w3c/dxwg/",
    localBiblio: {
	"ARK" : {
	   editors: ["J. Kunze", 
		    "R. Rodgers"
		    ],
		href: "https://tools.ietf.org/id/draft-kunze-ark-15.txt",
		title: "The ARK Identifier Scheme" ,
		date: "2008-05-22",
		status: "Internet-Draft"
	},
        "PROF-CONNEG": {
            editors: [
                "Lars G. Svensson",
                "Rob Atkinson",
                "Nicholas J. Car"
            ],
            href: "https://www.w3.org/TR/2018/WD-dx-prof-conneg-20181218/",
            title: "Content Negotiation by Profile",
            date: " 2018-12-18",
            status: "W3C First Public Working Draft"
        },
        "PROF-GUIDANCE": {
            editors: [
                "Rob Atkinson",
                "Karen Coyle",
                "Antoine Isaac",
                "Nicholas J. Car"
            ],
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
            href: "https://profilenegotiation.github.io/I-D-Profile-Negotiation/I-D-Profile-Negotiation",
            title: "Indicating and Negotiating Profiles in HTTP",
            date: " 2019-07-11",
            status: "IETF Internet Draft"
        },
        "PROF": {
            editors: [
                "Rob Atkinson",
                "Nicholas J. Car"
            ],
            href: "https://www.w3.org/TR/2018/WD-dx-prof-20181218/",
            title: "Profile Descriptions ontology",
            date: "2018-12-18",
            status: "W3C First Public Working Draft"
        }
    }
};
