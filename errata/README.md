
# Using Github issues to handle errata in Recommendations

## Introduction

The [W3C Process errata management](https://www.w3.org/2018/Process-20180201/#errata) indicates that Working Groups must keep a record as errors are reported by readers and implementers. Such error reports should be processed no less frequently than quarterly. Readers of the Recommendation should be able easily to find and see the errata that apply to that specific Recommendation with their associated tests. Working Groups decide how to document errata. The best practice is a document that identifies itself as based on the Recommendation text and clearly identifies the errata and any proposed corrections; other approaches include various forms of an errata page, possibly auto-generated from a database.

This repository intends to harmonize how Groups document errata by establishing a workflow to process errors reported by readers and implementers and facilitates the update of errata pages.

The workflow described below is applicable to Recommendations maintained by Working Groups as well as Recommendations without a Working Group (the Working Group was closed). Note that a correction, created within the context of a Working Group or without one, can only become part of the Recommendation by the process for [Revising a Recommendation](https://www.w3.org/2018/Process-20180201/#errata).

## This repository

This repository contains a simple file with some associated scripts to handle and document errata for published Recommendations. The "model" is as follows:

* Errata are raised and managed in a GitHub repository (“errata repository” in what follows). This often means re-using the repository used by a Working Group, if one exists.  If one or more individuals wishes to use this model for a Recommendation which does not have a draft in the W3C GitHub repository, please send an inquiry to the [W3C webmaster](webreq@w3.org) so that they can create one for you.
* There is a selected group of administrators (not only the team…) that can change the labels for issues in the repository.

Note that the workflow describes the case whereby a single repository is used for several documents. In case the Working Group follows the separate repository per document model, an errata file must be installed separately for each document.

## How does it work for the user

Raising and managing errata is done as follows. Note that the approach below is for a case when the errata repository is used for several recommendations (identified by separate labels, `Model` and `Vocab` in the example below). Obviously, if a separate errata repository is used for separate documents, that approach can be simplified.

* Errata are introduced and stored in the issue list of the dedicated repository. The workflow to add a new erratum is as follows:
  * An issue is raised for a possible erratum. The label of the issue SHOULD be set to “`ErratumRaised`”. It SHOULD also include the label corresponding to the document on which the erratum is raised, e.g., “`Model`” or “`Vocab`”. It is o.k. for an erratum to have several labels. In some, exceptional, cases, i.e., when the erratum is very general, it is also acceptable not to have a reference to a document.
  * The community discusses the issue. If it is accepted as a genuine erratum, the label “`Errata`” is added to the entry and the “`ErratumRaised`” label should be removed. Additionally, a new comment on the issue MAY be added, beginning with the word "Summary:" (if such a summary is useful based on the discussion).
  * If the community rejects the issue as an erratum, the issue should be closed.
  * Each errata may be labelled as “`Editorial`”; editorial errata are listed separately from the substantial ones. By default, an issue is considered substantive unless indicated otherwise.
  * ALL substantive errata are generally expected to have corresponding test(s) (such as a pull request in [web-platforms-tests](https://github.com/web-platforms-tests/wpt)), either in the form of new tests or modifications to existing tests, or must include the rationale for why test updates are not required for the erratum.

That is it. When the `index.html` is fetched, it displays the list of accepted errata, possibly with a summary, and categorized by document. That `index.html` file can be used as the official errata reference in the Recommendation’s header.

## How to contribute to the maintenance of a W3C Recommendation?

We would like to encourage the community at large to contribute to the maintenance of W3C Recommendations.  As long as the pull request contains an error that can be resolved by one or more changes in classes 1-3 of [section 6.2.5 Classes of Changes](https://www.w3.org/2018/Process-20180201/#correction-classes), anyone should be able to send a pull request to help fixing issues and consequently better matching the reality of implementations. If the pull request demonstrate usefulness and skills, we will be encouraged to grant commit access to the repository (see [The Pull Request Hack](https://felixge.de/2013/03/11/the-pull-request-hack.html)).

## Installation

The `index.html` file must be adapted. Apart from the obvious changes (setting the right title, reference to the Working Group, etc), the following attribute values must be set in the source:

* `@data-githubrepo`, to be set on the `<head>` element to the repository name. For W3C repositories the name is usually of the form `w3c/@@@`, though there are groups that use a different “organization”.
* If the WG has published several Recommendations:
  * `@data-erratalabel` must be set _on each_ top level `<section>` elements, except for the last one, within the `<main>` element. The value should be the label used in the errata repository for the specific document among the published one.
  * the last section should be left as is (i.e., with `data-nolabel`), and is used by errata that are not explicitly assigned to a document.
* If the WG has published a single document:
  * keep only one subsection within `<main>` and use `data-nolabel` for that one.

If an editor's draft is maintained to reflect the text of the published Recommendation amended to include approved errata, you should add a link to this document in the `index.html` file.

## Examples

There is a ”test” version in this repository (it relies on the errata repository of the CSV on the Web WG):

https://w3c.github.io/display_errata/test.html

There are also some past Working Groups that have been using the mechanism (though possibly earlier versions thereof), see:

* CSV on the Web Working Group: https://www.w3.org/2013/csvw/errata/
* Web Annotation Working Group: https://www.w3.org/annotation/errata/
* Permissions & Obligations Expression Working Group: https://www.w3.org/2016/poe/errata/
