# Profile Vocabulary
The Profiles Vocabulary is an RDF vocabulary to describe profiles of (one or more) standards for information resources. It describes the general pattern of narrowing the scope of a specification with additional, but consistent, constraints, and is particularly relevant to data exchange situations where conformance to such profiles is expected and carries additional context.   The Profiles Vocabulary enables profile descriptions to specify the role of resources related to data exchange such as schemas, ontologies, rules about use of controlled vocabularies, validation tools, and guidelines. The ontology may however be used to describe the role of artifacts in any situation where constraints are made on a the usage of more general specifications.
    
The namespace for PROF terms is `http://www.w3.org/ns/dx/prof/`. The PROF vocabulary, defined in OWL and encoded in RDF Turtle, is available at [profilesont.ttl](profilesont.ttl).

The latest stable release of this vocabulary document is online at <https://www.w3.org/TR/dx-prof/>. The latest Editor's Draft is online at <https://w3c.github.io/dxwg/profilesont/>.

Development of this ontology is part of the work of the [Data Exchange Working Group](https://www.w3.org/2017/dxwg/) (DXWG)'s work on characterising and handling *profiles*.

![](figures/profilesont.svg)  
**Fig. 1**: Overview diagram of this vocabulary  

## Components
The main files of this ontology are:

* [index.html](https://w3c.github.io/dxwg/profilesont/) - ontology description as a web page (HTML)
* [profilesont.ttl](profilesont.ttl) - ontology source (RDF, turtle)
* [profilesont.rdf](profilesont.rdf) - ontology source (RDF/XML)
* [profilesont.svg](figures/profilesont.svg) - ontology diagram (PNG)

Additional components:

* **Examples**
  * [examples](examples/)
  * also within the HTML document
* **Alignments**
  * [alignments](alignments/)
  * also within the HTML document
* **Roles vocabulary** - a small vocabulary of `Resource Role` instances
  * some of these are within the main HTML document
  * as a web page: [resource_roles.html](https://w3c.github.io/dxwg/profilesont/resource_roles.html)

## Contact
Primary contact for this ontology is:

**Nicholas Car**  
*Senior Experimental Scientist*  
CSIRO Land & Water, Brisbane Australia  
<nicholas.car@csiro.au>  
Member of the Data Exchange WG
