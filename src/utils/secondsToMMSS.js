export default function sToMMSS(s) {
	let m = Math.trunc(s / 60) + ''
	s = (s % 60) + ''
	return m.padStart(2, 0) + ':' + s.padStart(2, 0)
}
