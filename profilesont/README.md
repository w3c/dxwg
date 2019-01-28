# Profile Descriptions Ontology
This ontology is for describing relationships between standards/specifications, profiles of them, and supporting artefacts such as validating resources.

This model starts with entities of type <http://dublincore.org/2012/06/14/dcterms#Standard>. A Standard can be either a Base Specification (a Standard not profiling any other Standard) or a Profile (a Standard which does profile others). Any Standard can have one or more associated Implementation Resource Descriptors, each of which defines implementing rules for it. The role played by each Implementation Resource Descriptor must be indicated (guidance, validation etc.), and the formalism they adhere to (dct:format) in order to support content negotiation. A preliminary set of Implementation Resource Roles is provided as a 'vocabulary' alongside this ontology.

Development of this ontology is part of the work of the [Data Exchange Working Group](https://www.w3.org/2017/dxwg/) (DXWG)'s [Profile Guidance](https://w3c.github.io/dxwg/profiles/) work.

## Ontology components
The main files of this ontology are:

* [index.html](https://w3c.github.io/dxwg/profilesont/) - ontology description as a web page (HTML)
* [profilesont.ttl](profilesont.ttl) - ontology source (RDF, turtle)
* [profilesont.png](profilesont.png) - ontology diagram (PNG)

Additional components:

* **Examples**
  * [examples](examples/) - this folder contains a series of scenarios in which the Profiles Description Ontology is used to model existing and likely future profiling situations
* **Roles vocabulary** - a small vocabulary of Implementation Resource Descriptor Roles
  * [resource_roles.html](https://w3c.github.io/dxwg/profilesont/resource_roles.html) - vocab as a web page (HTML)
  * [resource_roles.ttl](resource_roles.ttl) - vocab source (RDF, turtle)
  * [resource_roles.png](resource_roles.png) - vocab diagram (PNG)
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
