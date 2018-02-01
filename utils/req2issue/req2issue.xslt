<xsl:stylesheet
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:saxon="http://saxon.sf.net/"
	exclude-result-prefixes="saxon"
	version="2.0">
	<xsl:output method="xml" omit-xml-declaration="yes" saxon:single-quotes="yes" /><!--not in Saxon-HE, using SaxonEE evaluation-->
	<xsl:strip-space elements="*" />
	<xsl:variable name="ucr" select="'https://www.w3.org/TR/dcat-ucr'"/>
	<xsl:variable name="dq">"</xsl:variable>
	<xsl:variable name="dqr">'</xsl:variable>
    <xsl:template match="/"><xsl:apply-templates select="html/body//section[@class='requirement']"/></xsl:template>
    <xsl:template match="section[@class='requirement']">
		<xsl:variable name="self"><xsl:copy><xsl:apply-templates select="@*|*|text()"/></xsl:copy></xsl:variable>
		<!-- Collect label elements, merge finally-->
		<xsl:variable name="labels"><xsl:for-each select="p[@class='relatedUseCases']/a"><xsl:apply-templates select="//section[@id=substring-after(current()/@href,'#')]" mode="label" /></xsl:for-each></xsl:variable>
		<xsl:result-document href="/home/pullmann/Work/W3C/issue_conversion/github/{@id}.json">{
	"title": "<xsl:value-of select="h3"/>",
	"body": "<xsl:copy-of select="$self"/>",
	"labels": ["requirement",<xsl:for-each select="distinct-values($labels/label)">"<xsl:value-of select="." />"<xsl:if test="position() != last()">,</xsl:if></xsl:for-each>]
}
		</xsl:result-document>
	</xsl:template>
	<xsl:template match="section/h3"><h3><xsl:value-of select="substring-before(.,'[')"/>[<a href="{concat($ucr,'#',../@id)}" target="_blank"><xsl:value-of select="../@id" /></a>]</h3></xsl:template>
	<xsl:template match="processing-instruction()|comment()" />
	<xsl:template match="@*|*"><xsl:copy><xsl:apply-templates select="*|@*|text()"/></xsl:copy></xsl:template>
	<!-- Normalize white spaces, convert double quotes -->
	<xsl:template match="text()"><xsl:value-of select="translate(normalize-space(.),$dq,$dqr)"/></xsl:template>
	<xsl:template match="p[@class='relatedRequirements'][count(a) &gt; 0]"><br></br><em>Related requirements</em>: <xsl:apply-templates select="a"/></xsl:template>
	<xsl:template match="p[@class='relatedUseCases'][count(a) &gt; 0]"><br></br><em>Related use cases</em>: <xsl:apply-templates select="a"/></xsl:template>
	<xsl:template match="p[@class='relatedRequirements']/a"><a href="{concat($ucr,@href)}" target="_blank"><xsl:value-of select="//section[@id=substring-after(current()/@href,'#')]/h3" /></a>&#160;</xsl:template>
	<xsl:template match="p[@class='relatedUseCases']/a"><a href="{concat($ucr,@href)}" target="_blank"><xsl:value-of select="//section[@id=substring-after(current()/@href,'#')]/h2" /></a>&#160;</xsl:template>
	<!-- Intermediate label format -->
	<xsl:template match="section" mode="label"><xsl:for-each select="p[@class='tags']/span/text()"><label><xsl:value-of select="."/></label></xsl:for-each></xsl:template>
	<!-- Inline links-->
	<xsl:template match="a"><a href="{concat($ucr,@href)}" target="_blank"><xsl:value-of select="@href" /></a></xsl:template>
</xsl:stylesheet>

