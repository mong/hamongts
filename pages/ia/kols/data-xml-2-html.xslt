<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ia="http://data.instantatlas.com/atlas" xmlns:iao="http://www.instantatlas.com/xml/atlas">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" doctype-public="-//W3C//DTD HTML 4.01//EN" doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>
	<xsl:template match="/">
		<html>
			<head>
				<title>InstantAtlas&#8482; :: Data Table for <xsl:value-of select="//ia:Geography/@name|//iao:Geography/@name"/>
				</title>
				<style type="text/css">
					body,table,th,td {
						font-family: Verdana, Arial, sans-serif;
					}
					body {
						font-size: 73%;
					}
					table,th,td {
						font-size: 1em;
					}
					table {
						border-collapse: collapse;
					}
					table, td, th {
						border: solid 1px #aaaaaa;
					}
					th {
						background-color: #e9e9e9;
					}
					th.column {
						padding: 4px 4px 4px 4px;
					}
					th.row {
						padding: 2px 4px 2px 4px;
					}
					td {
						padding: 2px 2px 2px 2px;
					}
					tr.odd {
						background-color: #ffffff;
					}
					tr.even {
						background-color: #ffffaa;
					}
					caption {
						font-size: 0.9em;
						font-style: italic;
					}
				</style>
			</head>
			<body>
				<h4><a href="http://www.instantatlas.com/" target="_blank" accesskey="i">InstantAtlas&#8482;</a> :: Data Table for <xsl:value-of select="//ia:Geography/@name|//iao:Geography/@name"/></h4>
				<p>This data is also available as an <a href="atlas.html" title="Click here to open the interactive report">dynamic report and map</a>.</p>
				<table border="1">
					<xsl:attribute name="summary">Data table for <xsl:value-of select="//ia:Geography/@name|//iao:Geography/@name"/>, containing data arranged in <xsl:value-of select="count(//ia:ThemeList/ia:Theme) + count(//ia:ThemeList/ia:ThemeFile) + count(//iao:ThemeList/iao:Theme) + count(//iao:ThemeList/iao:ThemeFile)" /> themes.</xsl:attribute>
					<caption>Indicator data for <xsl:value-of select="//ia:Geography/@name|//iao:Geography/@name"/>.</caption>
					<thead>
						<tr>
							<th rowspan="2">
								<xsl:value-of select="//ia:Geography/@name|//iao:Geography/@name"/>
							</th>
							<xsl:apply-templates select="//ia:Geography/ia:ThemeList/ia:Theme|//ia:Geography/ia:ThemeList/ia:ThemeFile|//iao:Geography/iao:ThemeList/iao:Theme|//iao:Geography/iao:ThemeList/iao:ThemeFile" mode="header"/>
						</tr>
						<tr>
							<xsl:apply-templates select="//ia:Geography/ia:ThemeList/ia:Theme/ia:Indicator|//ia:Geography/ia:ThemeList/ia:ThemeFile/ia:Indicator|//ia:Geography/ia:ThemeList/ia:Theme/ia:Indicator|//iao:Geography/iao:ThemeList/iao:ThemeFile/iao:Indicator" mode="header"/>
						</tr>
					</thead>
					<tbody>
						<xsl:apply-templates select="//ia:Geography/ia:FeatureList/ia:Feature|//iao:Geography/iao:FeatureList/iao:Feature"/>
					</tbody>
				</table>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="ia:Theme|iao:Theme" mode="header">
		<th>
			<xsl:attribute name="colspan"><xsl:value-of select="count(./ia:Indicator) + count(./iao:Indicator)"/></xsl:attribute>
			<xsl:choose>
				<xsl:when test="@href and (@href != '')">
					<a>
						<xsl:attribute name="title">Click for more information on <xsl:value-of select="@name"/></xsl:attribute>
						<xsl:attribute name="href"><xsl:value-of select="@href"/></xsl:attribute>
						<xsl:value-of select="@name"/>
					</a>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="@name"/>
				</xsl:otherwise>
			</xsl:choose>
		</th>
	</xsl:template>
	<xsl:template match="ia:ThemeFile|iao:ThemeFile" mode="header">
		<th>
			<xsl:attribute name="colspan"><xsl:value-of select="count(./ia:Indicator) + count(./iao:Indicator)"/></xsl:attribute>
			<xsl:choose>
				<xsl:when test="@href and (@href != '')">
					<a>
						<xsl:attribute name="title">Click for more information on <xsl:value-of select="@name"/></xsl:attribute>
						<xsl:attribute name="href"><xsl:value-of select="@href"/></xsl:attribute>
						<xsl:value-of select="@theme-name"/>
					</a>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="@theme-name"/>
				</xsl:otherwise>
			</xsl:choose>
		</th>
	</xsl:template>
	<xsl:template match="ia:Indicator|iao:Indicator" mode="header">
		<th class="column">
			<xsl:choose>
				<xsl:when test="@href and (@href != '')">
					<a>
						<xsl:attribute name="title">Click for more information on <xsl:value-of select="@name"/></xsl:attribute>
						<xsl:attribute name="href"><xsl:value-of select="@href"/></xsl:attribute>
						<xsl:value-of select="@name"/>
						<xsl:if test="@date"><br />(<xsl:value-of select="@date"/>)</xsl:if>
					</a>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="@name"/>
					<xsl:if test="@date"><br />(<xsl:value-of select="@date"/>)</xsl:if>
				</xsl:otherwise>
			</xsl:choose>
		</th>
	</xsl:template>
	<xsl:template match="ia:Theme|iao:Theme" mode="data">
		<xsl:param name="geoid"/>
		<xsl:apply-templates select="./ia:Indicator/ia:Value[@for = $geoid]|./iao:Indicator/iao:Value[@for = $geoid]" mode="data"/>
	</xsl:template>
	<xsl:template match="ia:ThemeFile|iao:ThemeFile" mode="data">
		<xsl:param name="geoid"/>
		<xsl:variable name="url">
			<xsl:value-of select="@file-name"/>
		</xsl:variable>
		<xsl:apply-templates select="document($url)//ia:Theme/ia:Indicator/ia:Value[@for = $geoid]|document($url)//iao:Theme/iao:Indicator/iao:Value[@for = $geoid]" mode="data"/>
	</xsl:template>
	<xsl:template match="ia:Value|iao:Value" mode="data">
		<td>
			<xsl:choose>
				<xsl:when test="../@type = 'categoric'">
					<xsl:attribute name="style">text-align: left;</xsl:attribute>
				</xsl:when>
				<xsl:otherwise>
					<xsl:attribute name="style">text-align: right;</xsl:attribute>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:choose>
				<xsl:when test=". = 'NaN'">&#160;</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="."/>
				</xsl:otherwise>
			</xsl:choose>
		</td>
	</xsl:template>
	<xsl:template match="ia:Feature|iao:Feature">
		<xsl:variable name="geoid">
			<xsl:value-of select="@id"/>
		</xsl:variable>
		<tr>
			<xsl:choose>
				<xsl:when test="(position() mod 2) = 1">
					<xsl:attribute name="class">odd</xsl:attribute>
				</xsl:when>
				<xsl:otherwise>
					<xsl:attribute name="class">even</xsl:attribute>
				</xsl:otherwise>
			</xsl:choose>
			<th class="row">
				<xsl:choose>
					<xsl:when test="@href and (@href != '')">
						<a>
							<xsl:attribute name="title">Click for more information on <xsl:value-of select="@name"/></xsl:attribute>
							<xsl:attribute name="href"><xsl:value-of select="@href"/></xsl:attribute>
							<xsl:value-of select="@name"/>
						</a>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="@name"/>
					</xsl:otherwise>
				</xsl:choose>
			</th>
			<xsl:apply-templates select="//ia:Geography/ia:ThemeList/ia:Theme|//ia:Geography/ia:ThemeList/ia:ThemeFile|//iao:Geography/iao:ThemeList/iao:Theme|//iao:Geography/iao:ThemeList/iao:ThemeFile" mode="data">
				<xsl:with-param name="geoid" select="$geoid"/>
			</xsl:apply-templates>
		</tr>
	</xsl:template>
</xsl:stylesheet>
