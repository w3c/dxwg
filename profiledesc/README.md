# Profile Descriptions Ontology
This ontology is for describing relationships between standards/specifications, profiles of them and supporting artefacts such as validating resources.

This model starts with <http://dublincore.org/2012/06/14/dcterms#Standard> entities which can either be Base Specifications (a standard not profiling any other Standard) or Profiles (Standards which do profile others). Base Specifications or Profiles can have Implementation Resource Descriptors associated with them that defines implementing rules for the it. Implementation Resource Descriptors must indicate the role they play (to guide, to validate etc.) and the formalism they adhere to (dct:format) to allow for content negotiation. A vocabulary of Implementation Resource Roles are provided alongside this ontology but that list is extensible.

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
