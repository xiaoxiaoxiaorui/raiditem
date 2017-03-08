var _0x5864 = ["verticalnav", "fn", "left", "extend", "<li class='showhide'><span class='title'>Choose Games</span><span class='icon'></span></li>", "prepend", ".vertical-nav", "align", "right", "addClass", "resize", "unbind", "li", "find", "hide", "ul", "innerWidth", "mouseleave", "interval", "fadeOut", "stop", "children", "bind", "mouseover", "fadeIn", ".vertical-nav li", "click", "display", "css", "none", "slideDown", "slideUp", ".vertical-nav > li", ".vertical-nav > li:not(.showhide)", "show", ".vertical-nav > li.showhide", ":hidden", "is"];
$[_0x5864[1]][_0x5864[0]] = function(a) {
	var b = {
		speed: 300,
		align: _0x5864[2]
	};
	$[_0x5864[3]](b, a);
	$(_0x5864[6])[_0x5864[5]](_0x5864[4]);
	if (b[_0x5864[7]] == _0x5864[8]) {
		$(_0x5864[6])[_0x5864[9]](_0x5864[8])
	};
	_0xe4a7x3();
	$(window)[_0x5864[10]](function() {
		_0xe4a7x3()
	});

	function _0xe4a7x3() {
		$(_0x5864[6])[_0x5864[13]](_0x5864[12])[_0x5864[11]]();
		$(_0x5864[6])[_0x5864[13]](_0x5864[15])[_0x5864[14]](0);
		if (window[_0x5864[16]] <= 768) {
			_0xe4a7x6();
			_0xe4a7x5()
		} else {
			_0xe4a7x7();
			_0xe4a7x4()
		}
	};

	function _0xe4a7x4() {
		$(_0x5864[25])[_0x5864[22]](_0x5864[23], function() {
			$(this)[_0x5864[21]](_0x5864[15])[_0x5864[20]](true, true)[_0x5864[24]](b[_0x5864[18]])
		})[_0x5864[22]](_0x5864[17], function() {
			$(this)[_0x5864[21]](_0x5864[15])[_0x5864[20]](true, true)[_0x5864[19]](b[_0x5864[18]])
		})
	};

	function _0xe4a7x5() {
		$(_0x5864[32])[_0x5864[22]](_0x5864[26], function() {
			if ($(this)[_0x5864[21]](_0x5864[15])[_0x5864[28]](_0x5864[27]) == _0x5864[29]) {
				$(this)[_0x5864[13]](_0x5864[15])[_0x5864[20]](true, true)[_0x5864[30]](b[_0x5864[18]])
			} else {
				$(this)[_0x5864[21]](_0x5864[15])[_0x5864[20]](true, true)[_0x5864[31]](b[_0x5864[18]])
			}
		})
	};

	function _0xe4a7x6() {
		$(_0x5864[33])[_0x5864[14]](0);
		$(_0x5864[35])[_0x5864[34]](0);
		$(_0x5864[35])[_0x5864[22]](_0x5864[26], function() {
			if ($(_0x5864[32])[_0x5864[37]](_0x5864[36])) {
				$(_0x5864[32])[_0x5864[30]](300)
			} else {
				$(_0x5864[33])[_0x5864[31]](300);
				$(_0x5864[35])[_0x5864[34]](0)
			}
		})
	};

	function _0xe4a7x7() {
		$(_0x5864[32])[_0x5864[34]](0);
		$(_0x5864[35])[_0x5864[14]](0)
	}
};