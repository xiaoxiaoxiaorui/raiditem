!
function(a, b, c) {
	function d(a) {
		return a
	}
	function e(a) {
		return decodeURIComponent(a.replace(f, " "))
	}
	var f = /\+/g,
		g = a.cookie = function(f, h, i) {
			if (h !== c) {
				if (i = a.extend({}, g.defaults, i), null === h && (i.expires = -1), "number" == typeof i.expires) {
					var j = i.expires,
						k = i.expires = new Date;
					k.setDate(k.getDate() + j)
				}
				return h = g.json ? JSON.stringify(h) : String(h), b.cookie = [encodeURIComponent(f), "=", g.raw ? h : encodeURIComponent(h), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
			}
			for (var l = g.raw ? d : e, m = b.cookie.split("; "), n = 0, o = m.length; o > n; n++) {
				var p = m[n].split("=");
				if (l(p.shift()) === f) {
					var q = l(p.join("="));
					return g.json ? JSON.parse(q) : q
				}
			}
			return null
		};
	g.defaults = {}, a.removeCookie = function(b, c) {
		return null !== a.cookie(b) ? (a.cookie(b, null, c), !0) : !1
	}
}(jQuery, document), $("ul.tabs").each(function() {
	var a, b, c = $(this).find("a");
	a = $(c.filter('[href="' + location.hash + '"]')[0] || c[0]), a.parent("li").addClass("active"), b = $(a.attr("href")), c.not(a).each(function() {
		$($(this).attr("href")).hide()
	}), $("a", this).click(function(c) {
		a.parent("li").removeClass("active"), b.hide(), a = $(this), b = $($(this).attr("href")), a.parent("li").addClass("active"), b.show(), c.preventDefault()
	})
}), window.Rainbow = function() {
	function a(a) {
		var b, c = a.getAttribute && a.getAttribute("data-language") || 0;
		if (!c) for (a = a.attributes, b = 0; b < a.length; ++b) if ("data-language" === a[b].nodeName) return a[b].nodeValue;
		return c
	}
	function b(b) {
		var c = a(b) || a(b.parentNode);
		if (!c) {
			var d = /\blang(?:uage)?-(\w+)/;
			(b = b.className.match(d) || b.parentNode.className.match(d)) && (c = b[1])
		}
		return c
	}
	function c(a, b) {
		for (var c in o[r]) if (c = parseInt(c, 10), (a == c && b == o[r][c] ? 0 : c >= a && b >= o[r][c]) && (delete o[r][c], delete n[r][c]), a >= c && a < o[r][c] || b > c && b < o[r][c]) return !0;
		return !1
	}
	function d(a, b) {
		return '<span class="' + a.replace(/\./g, " ") + (l ? " " + l : "") + '">' + b + "</span>"
	}
	function e(a, b, h, j) {
		var k = a.exec(h);
		if (k) {
			++t, !b.name && "string" == typeof b.matches[0] && (b.name = b.matches[0], delete b.matches[0]);
			var l = k[0],
				m = k.index,
				p = k[0].length + m,
				q = function() {
					function c() {
						e(a, b, h, j)
					}
					t % 100 > 0 ? c() : setTimeout(c, 0)
				};
			if (c(m, p)) q();
			else {
				var s = f(b.matches),
					u = function(a, c, e) {
						if (a >= c.length) e(l);
						else {
							var f = k[c[a]];
							if (f) {
								var h = b.matches[c[a]],
									j = h.language,
									m = h.name && h.matches ? h.matches : h,
									n = function(b, f, g) {
										var h;
										h = 0;
										var i;
										for (i = 1; i < c[a]; ++i) k[i] && (h += k[i].length);
										f = g ? d(g, f) : f, l = l.substr(0, h) + l.substr(h).replace(b, f), u(++a, c, e)
									};
								j ? i(f, j, function(a) {
									n(f, a)
								}) : "string" == typeof h ? n(f, f, h) : g(f, m.length ? m : [m], function(a) {
									n(f, a, h.matches ? h.name : 0)
								})
							} else u(++a, c, e)
						}
					};
				u(0, s, function(a) {
					b.name && (a = d(b.name, a)), n[r] || (n[r] = {}, o[r] = {}), n[r][m] = {
						replace: k[0],
						"with": a
					}, o[r][m] = p, q()
				})
			}
		} else j()
	}
	function f(a) {
		var b, c = [];
		for (b in a) a.hasOwnProperty(b) && c.push(b);
		return c.sort(function(a, b) {
			return b - a
		})
	}
	function g(a, b, c) {
		function d(b, f) {
			f < b.length ? e(b[f].pattern, b[f], a, function() {
				d(b, ++f)
			}) : h(a, function(a) {
				delete n[r], delete o[r], --r, c(a)
			})
		}++r, d(b, 0)
	}
	function h(a, b) {
		function c(a, b, d, e) {
			if (d < b.length) {
				++u;
				var f = b[d],
					g = n[r][f],
					a = a.substr(0, f) + a.substr(f).replace(g.replace, g["with"]),
					f = function() {
						c(a, b, ++d, e)
					};
				u % 250 > 0 ? f() : setTimeout(f, 0)
			} else e(a)
		}
		var d = f(n[r]);
		c(a, d, 0, b)
	}
	function i(a, b, c) {
		var d = p[b] || [],
			e = p[s] || [],
			b = q[b] ? d : d.concat(e);
		g(a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&(?![\w\#]+;)/g, "&amp;"), b, c)
	}
	function j(a, c, d) {
		if (c < a.length) {
			var e = a[c],
				f = b(e);
			return -1 < (" " + e.className + " ").indexOf(" rainbow ") || !f ? j(a, ++c, d) : (f = f.toLowerCase(), e.className += e.className ? " rainbow" : "rainbow", i(e.innerHTML, f, function(b) {
				e.innerHTML = b, n = {}, o = {}, m && m(e, f), setTimeout(function() {
					j(a, ++c, d)
				}, 0)
			}))
		}
		d && d()
	}
	function k(a, b) {
		var c, a = a && "function" == typeof a.getElementsByTagName ? a : document,
			d = a.getElementsByTagName("pre"),
			e = a.getElementsByTagName("code"),
			f = [];
		for (c = 0; c < e.length; ++c) f.push(e[c]);
		for (c = 0; c < d.length; ++c) d[c].getElementsByTagName("code").length || f.push(d[c]);
		j(f, 0, b)
	}
	var l, m, n = {},
		o = {},
		p = {},
		q = {},
		r = 0,
		s = 0,
		t = 0,
		u = 0;
	return {
		extend: function(a, b, c) {
			1 == arguments.length && (b = a, a = s), q[a] = c, p[a] = b.concat(p[a] || [])
		},
		b: function(a) {
			m = a
		},
		a: function(a) {
			l = a
		},
		color: function(a, b, c) {
			return "string" == typeof a ? i(a, b, c) : "function" == typeof a ? k(0, a) : void k(a, b)
		}
	}
}(), window.addEventListener ? window.addEventListener("load", Rainbow.color, !1) : window.attachEvent("onload", Rainbow.color), Rainbow.onHighlight = Rainbow.b, Rainbow.addClass = Rainbow.a, Rainbow.extend([{
	matches: {
		1: {
			name: "keyword.operator",
			pattern: /\=/g
		},
		2: {
			name: "string",
			matches: {
				name: "constant.character.escape",
				pattern: /\\('|"){1}/g
			}
		}
	},
	pattern: /(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm
}, {
	name: "comment",
	pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm
}, {
	name: "constant.numeric",
	pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
}, {
	matches: {
		1: "keyword"
	},
	pattern: /\b(and|array|as|bool(ean)?|c(atch|har|lass|onst)|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi
}, {
	name: "constant.language",
	pattern: /true|false|null/g
}, {
	name: "keyword.operator",
	pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g
}, {
	matches: {
		1: "function.call"
	},
	pattern: /(\w+?)(?=\()/g
}, {
	matches: {
		1: "storage.function",
		2: "entity.name.function"
	},
	pattern: /(function)\s(.*?)(?=\()/g
}]), Rainbow.extend("javascript", [{
	name: "selector",
	pattern: /(\s|^)\$(?=\.|\()/g
}, {
	name: "support",
	pattern: /\b(window|document)\b/g
}, {
	matches: {
		1: "support.property"
	},
	pattern: /\.(length|node(Name|Value))\b/g
}, {
	matches: {
		1: "support.function"
	},
	pattern: /(setTimeout|setInterval)(?=\()/g
}, {
	matches: {
		1: "support.method"
	},
	pattern: /\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g
}, {
	matches: {
		1: "support.tag.script",
		2: [{
			name: "string",
			pattern: /('|")(.*?)(\1)/g
		}, {
			name: "entity.tag.script",
			pattern: /(\w+)/g
		}],
		3: "support.tag.script"
	},
	pattern: /(&lt;\/?)(script.*?)(&gt;)/g
}, {
	name: "string.regexp",
	matches: {
		1: "string.regexp.open",
		2: {
			name: "constant.regexp.escape",
			pattern: /\\(.){1}/g
		},
		3: "string.regexp.close",
		4: "string.regexp.modifier"
	},
	pattern: /(\/)(?!\*)(.+)(\/)([igm]{0,3})/g
}, {
	matches: {
		1: "storage",
		3: "entity.function"
	},
	pattern: /(var)?(\s|^)(.*)(?=\s?=\s?function\()/g
}, {
	matches: {
		1: "keyword",
		2: "entity.function"
	},
	pattern: /(new)\s+(.*)(?=\()/g
}, {
	name: "entity.function",
	pattern: /(\w+)(?=:\s{0,}function)/g
}]), Rainbow.extend("html", [{
	name: "source.php.embedded",
	matches: {
		2: {
			language: "php"
		}
	},
	pattern: /&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm
}, {
	name: "source.css.embedded",
	matches: {
		0: {
			language: "css"
		}
	},
	pattern: /&lt;style(.*?)&gt;([\s\S]*?)&lt;\/style&gt;/gm
}, {
	name: "source.js.embedded",
	matches: {
		0: {
			language: "javascript"
		}
	},
	pattern: /&lt;script(?! src)(.*?)&gt;([\s\S]*?)&lt;\/script&gt;/gm
}, {
	name: "comment.html",
	pattern: /&lt;\!--[\S\s]*?--&gt;/g
}, {
	matches: {
		1: "support.tag.open",
		2: "support.tag.close"
	},
	pattern: /(&lt;)|(\/?\??&gt;)/g
}, {
	name: "support.tag",
	matches: {
		1: "support.tag",
		2: "support.tag.special",
		3: "support.tag-name"
	},
	pattern: /(&lt;\??)(\/|\!?)(\w+)/g
}, {
	matches: {
		1: "support.attribute"
	},
	pattern: /([a-z-]+)(?=\=)/gi
}, {
	matches: {
		1: "support.operator",
		2: "string.quote",
		3: "string.value",
		4: "string.quote"
	},
	pattern: /(=)('|")(.*?)(\2)/g
}, {
	matches: {
		1: "support.operator",
		2: "support.value"
	},
	pattern: /(=)([a-zA-Z\-0-9]*)\b/g
}, {
	matches: {
		1: "support.attribute"
	},
	pattern: /\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g
}], !0);