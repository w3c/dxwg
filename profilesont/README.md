# Profile Vocabulary
This vocabulary is for describing relationships between standards/specifications, profiles of them and supporting artifacts such as validating resources.

This model starts with [http://dublincore.org/2012/06/14/dcterms#Standard](dct:Standard) entities which can either be base specifications (Standards not profiling any other Standard) or Profiles (Standards which do profile others). Non-profiling Standards or Profiles can have Resource Descriptors associated with them that define implementing rules for the them. Resource Descriptors must indicate the role they play (to guide, to validate etc.) and the formalism they adhere to (dct:format) to allow for content negotiation. An extensible vocabulary of Resource Roles is provided alongside this vocabulary.

![](figures/profilesont.svg)  
**Fig. 1**: Overview diagram of this ontology  

Development of this ontology is part of the work of the [Data Exchange Working Group](https://www.w3.org/2017/dxwg/) (DXWG)'s [Profile Guidance](https://w3c.github.io/dxwg/profiles/) work.

## Ontology components
The main files of this ontology are:

* [index.html](https://w3c.github.io/dxwg/profilesont/) - ontology description as a web page (HTML)
* [profilesont.ttl](profilesont.ttl) - ontology source (RDF, turtle)
* [profilesont.svg](figures/profilesont.svg) - ontology diagram (PNG)

Additional components:

* **Examples**
  * [examples](examples/) - this folder contains a series of scenarios in which the Profiles Description Ontology is used to model existing and likely future profiling situations
* **Roles vocabulary** - a small vocabulary of Implementation Resource Descriptor Roles
  * [resource_roles.html](https://w3c.github.io/dxwg/profilesont/resource_roles.html) - vocab as a web page (HTML)
  * [resource_roles.ttl](resource_roles.ttl) - vocab source (RDF, turtle)
  * [resource_roles.svg](resource_roles.svg) - vocab diagram (PNG)
* **Alignments**
  * within the main ontology document, Section 'Alignments'
  * [alignment_dcat.ttl](alignment_dcat.ttl) - alignment source (RDF, turtle)
  * [alignment_dcat_classes.png](alignment_dcat_classes.png) - alignment diagram for classes (PNG)
  * [alignment_dcat_properties.png](alignment_dcat_classes.png) - alignment diagram for properties (PNG)


## Status
As of August, 2018, the DXWG is formulating overall profile guidance and current work on this Profile Desc. is focussed on ensuring that it fits within that work.

## Contact
Primary contact for this ontology is:

**Nicholas Car**  
*Senior Experimental Scientist*  
CSIRO Land & Water, Brisbane Australia  
<nicholas.car@csiro.au>  
Member of the Data Exchange WG
