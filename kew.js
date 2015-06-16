(function(window) {
	var $kew = function(selector, context) {
		if (window === this) {
            return new $kew(selector);
        }
		var els = (context || document).querySelectorAll(selector);
		this.elements = els;
		this.length = els.length;
		return this;
	}

	$kew.prototype = {
		ready: function(callback) {
			document.addEventListener("DOMContentLoaded", callback);
		},
		each: function(callback) {
			for (var i = 0; i < this.length; i++) {
				callback(this.elements[i]);
			}
		},
		attr: function(attrName, attrValue) {
			if (typeof attrName === 'string' && typeof attrValue === 'string') {
				for (var i = 0; i < this.length; i++) {
					var attr = '';
                    
                    if (this.elements[i].getAttribute(attrName) !== 'undefined') {
                        attr = this.elements[i].getAttribute(attrName);
                    }

					this.elements[i].setAttribute(attrName, attr + ' ' + attrValue);
				}
			}
		},
		class: function(className) {
			this.attr('class', className);
		},
		remove: function() {
			for (var i = 0; i < this.length; i++) {
				this.elements[i].parentElement.removeChild(this.elements[i]);
			}
		},
		add: function(htmlString) {
			if (htmlString == "") {
				throw new Error("Parameter in .add must not be an empty string.");
			}

			for (var i = 0; i < this.length; i++) {
				var tag, element, text, nodeState;

				var elemQueried = this.elements[i];

				// Parse through the string to get the opening tag
                for (var i = 0; i < htmlString.length; i++) {
                	var character = htmlString[i];

                	if (character == '>') {
                		tag = htmlString.substr(0, i + 1);
                		break;
                	}
                }

                element = tag.slice(1, tag.length - 1);
                if (tag.length == 3) { // If tag is like <i>
                	element = tag[1];
                }

                text = htmlString.slice(tag.length, htmlString.length - (tag.length + 1));

                var node = document.createElement(element);
                var textNode = document.createTextNode(text);

                node.appendChild(textNode);
                elemQueried.appendChild(node);
            }
		}
	}

	window.$kew = $kew;
})(typeof window != 'undefined' ? window : undefined);
