# Task
- port UCR requirements to GitHub issues preserving (most) of stucture to allow re-import

# Tests
- GET sample issue (JSON): https://api.github.com/repos/w3c/dxwg/issues/50
- POST issue: curl -u <credentials> --header "Content-Type:application/json" --data @issue.json https://api.github.com/repos/w3c/dxwg/issues
- confirm display and persistence of rich HTML markup via minimal issue structure

```
	{
		"title": "Dummy issue [RDMY]",
		"body": "<section class='requirement' id='RDMY'><h3>Dummy issue [RDMY]</h3> ... </section>",
		"labels": [ "content_negotiation", "profile","out_of_scope"]
	}
```
# Conversion
- remove line breaks: multiline content not allowed in JSON ("body" element)
- replace double-quotes with single quotes (mistaken for string delimiter)
- turn [id] within the header into UCR-document link: ...#id, target="_blank"
- include header to "relatedRequirements": <span class='noCssFallback'><em>Related requirements</em></span>
- turn "relatedRequirements" links into UCR-document requirement link: ...#rid, target="_blank"
- include header to "relatedUseCases": <span class='noCssFallback'><em>Related use cases</em></span>
- turn "relatedUseCases" links into UCR-document links: ...#id, target="_blank"
- write each requirement into a separate file via xsl:result-document
- collect, merge and serialize labels
- check for json conformance via jsonlint-py
- upload each via POST to https://api.github.com/repos/w3c/dxwg/issues/

# Resources
- https://github.com/w3c/dxwg/issues
- https://api.github.com/repos/w3c/dxwg/issues
- https://developer.github.com/v3/#authentication
- https://www.w3.org/TR/xslt-30/
- https://www.saxonica.com/download/java.xml

