// Slugify a string
export function slugify(str) {
	str = str.replaceAll(/^\s+|\s+$/g, '')

	// Make the string lowercase
	str = str.toLowerCase()

	// Remove accents, swap ñ for n, etc
	const from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;'
	const to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------'
	for (let i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
	}

	// Remove invalid chars
	str = str.replaceAll(/[^a-z0-9 -]/g, '-')
	// Collapse whitespace and replace by -
	.replaceAll(/\s+/g, '-')
	// Collapse dashes
	.replaceAll(/-+/g, '-')
	// Trim - from start of text
	.replace(/^-|-$/g, '')

	return str
}
