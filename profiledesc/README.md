# Profile Descriptions Ontology
This ontology is for describing relationships between standards/specifications, profiles of them, and supporting artefacts such as validating resources.

This model starts with entities of type <http://dublincore.org/2012/06/14/dcterms#Standard>, which can either be a Base Specification (a Standard not profiling any other Standard) or Profiles (Standards which do profile others). Any Standard (i.e. a Base Specification or Profile) can have one or more associated Implementation Resource Descriptors, which define implementing rules for it. The role played by the Implementation Resource Descriptor must be indicated (guidance, validation etc.) and the formalism they adhere to (dct:format) to support content negotiation. A preliminary set of Implementation Resource Roles is provided as a 'vocabulary' alongside this ontology.

Development of this ontology is part of the work of the [Data Exchange Working Group](https://www.w3.org/2017/dxwg/) (DXWG)'s [Profile Guidance](https://w3c.github.io/dxwg/profile-guidance/) work.

## Ontology components
The main files of this ontology are:

* [index.html](https://w3c.github.io/dxwg/profiledesc/) - ontology description as a web page (HTML)
* [profiledesc.ttl](profiledesc.ttl) - ontology source (RDF, turtle)
* [profiledesc.png](profiledesc.png) - ontology diagram (PNG)

Additional components:

* **Examples**
  * [examples](examples/) - this folder contains a series of scenarios in which the Profiles Description Ontology is used to model existing and likely future profiling situations
* **Roles vocabulary** - a small vocabulary of Implementation Resource Descriptor Roles
  * [impl_res_roles.html](https://w3c.github.io/dxwg/profiledesc/impl_res_roles.html) - vocab as a web page (HTML)
  * [impl_res_roles.ttl](impl_res_roles.ttl) - vocab source (RDF, turtle)
  * [impl_res_roles.png](impl_res_roles.png) - vocab diagram (PNG)
* **Alignments**
  * alignment of ProfileDesc to DCAT 1.1 alignment
    * note that this is alignment to the 2018 version of DCAT also being produced by the DXWG
  * [profiledesc_dcat_alignment.html](https://w3c.github.io/dxwg/profiledesc/profiledesc_dcat_alignment.html) - alignment as a web page (HTML)
  * [profiledesc_dcat_alignment.ttl](profiledesc_dcat_alignment.ttl) - alignment source (RDF, turtle)
  * [profiledesc_dcat_alignment.png](profiledesc_dcat_alignment_classes.png) - alignment diagram for classes (PNG)
  * [profiledesc_dcat_alignment.png](profiledesc_dcat_alignment_classes.png) - alignment diagram for properties (PNG)


## Status
As of August, 2018, the DXWG is formulating overall profile guidance and current work on this Profile Desc. is focussed on ensuring that it fits within that work.

## Contact
Primary contact for this ontology is:

**Nicholas Car**  
*Senior Experimental Scientist*  
CSIRO Land & Water, Brisbane Australia  
<nicholas.car@csiro.au>  
Member of the Data Exchange WG
