# Data Catalog Vocabulary (DCAT) - Version 3

## What is DCAT

DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web.

DCAT enables a publisher to describe datasets and data services in a catalog using a standard model and vocabulary that facilitates the consumption and aggregation of metadata from multiple catalogs. This can increase the discoverability of datasets and data services. It also makes it possible to have a decentralized approach to publishing data catalogs and makes federated search for datasets across catalogs in multiple sites possible using the same query mechanism and structure. Aggregated DCAT metadata can serve as a manifest file as part of the digital preservation process.

## DCAT history

The original DCAT vocabulary was developed and hosted at the Digital Enterprise Research Institute (DERI) (now [Data Science Institute at NUI Galway](https://dsi.nuigalway.ie/)), then refined by the [eGov Interest Group](https://www.w3.org/egov/), and finally standardized in 2014 [[VOCAB-DCAT-1](https://www.w3.org/TR/vocab-dcat-1/)] by the [Government Linked Data (GLD) Working Group](http://www.w3.org/2011/gld/).

A second recommended revision of DCAT, DCAT 2 [[VOCAB-DCAT-2](https://www.w3.org/TR/vocab-dcat-2/)], was developed by the [Dataset Exchange Working Group (DXWG)](https://www.w3.org/2017/dxwg/) in response to a new set of Use Cases and Requirements [[DCAT-UCR](https://www.w3.org/TR/dcat-ucr/)] gathered from peoples' experience with the DCAT vocabulary from the time of the original version, and new applications that were not considered in the first version.

This version of DCAT, DCAT 3 [[VOCAB-DCAT-3](https://www.w3.org/TR/vocab-dcat-3/)], was developed by the [Dataset Exchange Working Group (DXWG)](https://www.w3.org/2017/dxwg/), considering some of the more pressing use cases and requests among those left unaddressed in the previous standardization round. 
The main changes to the DCAT vocabulary have been:

-   addition of [spdx:checksum](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_checksum) property and [spdx:Checksum](https://www.w3.org/TR/vocab-dcat-3/#Class:Checksum) class to provide digest for DCAT distributions
-   addition of properties for supporting versioning, see [11. Versioning](https://www.w3.org/TR/vocab-dcat-3/#dataset-versions)
-   addition of a [dcat:DatasetSeries](https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset_Series) class and properties for representing Dataset Series, see [12. Dataset series](https://www.w3.org/TR/vocab-dcat-3/#dataset-series)


In particular, DCAT Dataset Series refer to data, somehow interrelated, that are published separately. An example is budget data split by year and/or country instead of being made available in a single dataset. DCAT makes dataset series first-class citizens of data catalogs by minting a new class [dcat:DatasetSeries](https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset_Series), defined as a subclass of [dcat:Dataset](https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset).
DCAT versioning supports versions resulting from a revision - i.e., from changes occurring to a resource as part of its life-cycle. DCAT mints new properties for versioning resources building upon existing vocabularies, in particular, the versioning component of the [[PAV](https://www.w3.org/TR/vocab-dcat-3/#bib-pav)] ontology and the relevant terms from [[DCTERMS](https://www.w3.org/TR/vocab-dcat-3/#bib-dcterms)], and [[VOCAB-ADMS](https://www.w3.org/TR/vocab-dcat-3/#bib-vocab-adms)].

## Prioritization of the issues /requirements to address in DCAT 3
The prioritization was made considering the requirements left out from the second round of standardization and the feedback received at the time.

We organized the issues on different GitHub Projects, splitting the effort into Thematically-homogeneous sprints. https://github.com/w3c/dxwg/projects?query=is%3Aopen&type=classic

  Among the springs, we decide to prioritize [DCAT Sprint: Dataset Series](https://github.com/w3c/dxwg/projects/10) and [DCAT Sprint: Versioning](https://github.com/w3c/dxwg/projects/9) as
- they counted a quite conspicuous number of open issues, 14 and 18 open issues, respectively
- they seemed to be two core building blocks whose stabilization could simplify addressing other aspects
- they were relevant for different communities, from governmental to open science.

Of course, we didn't work only on Dataset series and versioning,
A summary of the changes from [[VOCAB-DCAT-2](https://www.w3.org/TR/vocab-dcat-2/)] is provided in [the change history section](https://www.w3.org/TR/vocab-dcat-3/#changes) of [[VOCAB-DCAT-3](https://www.w3.org/TR/vocab-dcat-3/)].
Overall, around  [160 github issues](https://github.com/w3c/dxwg/issues?q=is%3Aissue+is%3Aclosed++label%3Adcat++closed%3A%3E2020-02-10) have been closed as part of the effort in DCAT3.

## DCAT Examples

The DCAT 3 [[VOCAB-DCAT-3](https://www.w3.org/TR/vocab-dcat-3/)] specification includes different examples of use which are also accessible as RDF code at the [GitHub directory](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples/vocab-dcat-3).
