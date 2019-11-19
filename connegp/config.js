var respecConfig = {
    specStatus: "ED",
    shortName: "dx-prof-conneg",
    edDraftURI: "https://w3c.github.io/dxwg/conneg-by-ap/",
    previousPublishDate: "2019-04-30",
    previousMaturity: "PWD",
    prevRecURI: "https://www.w3.org/TR/2019/WD-dx-prof-conneg-20190430/",
    testSuiteURI: "https://github.com/w3c/conneg-prof-testing",
    implementationReportURI: "https://github.com/w3c/conneg-prof-testing",
    canonicalURI: "TR",
    editors: [{
        name:       "Lars G. Svensson",
        company:    "Invited Expert and before at Deutsche Nationalbibliothek",
        companyURL: "http://www.dnb.de/",
	    orcid:      "0000-0002-8714-9718",
        w3cid:      44603
      },
      {
        name:       "Rob Atkinson",
        company:    "Metalinkage, Open Geospatial Consortium",
        companyURL: "http://www.opengeospatial.org/",
        orcid:      "0000-0002-7878-2693"
      },
      {
        name:       "Nicholas J. Car",
        mailto:     "nicholas.car@surroundaustralia.com",
        company:    "SURROUND Australia Pty Ltd and before at CSIRO",
        companyURL: "https://surroundaustralia.com",
        orcid:      "0000-0002-8742-7730",
        w3cid:      70131
    }],
    otherLinks: [{
    	key: "Contributors",
	    data: [{
            value: "Ruben Verborgh",
            href:  "https://ruben.verborgh.org/"
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
           editors: [
               "J. Kunze",
               "R. Rodgers"
            ],
            href: "https://tools.ietf.org/id/draft-kunze-ark-15.txt",
            title: "The ARK Identifier Scheme" ,
            date: "2008-05-22",
            status: "Internet-Draft"
        },
        "PROF-GUIDANCE": {
            editors: [
                "Rob Atkinson",
                "Karen Coyle",
                "Antoine Isaac",
                "Nicholas J. Car"
            ],
            href: "https://w3c.github.io/dxwg/profiles/",
            title: "Profile Guidance",
            date: " 2019-04-24",
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
        }
    }
};
