(function (window, document) {
	var FormCreator = function () {
		this.baseUrl = 'http://uo-o.scene7.com/is/image/FreePeople/';
		this.suffix = '';
		this.styleNubmer = '';
		this.colorCode = '';
	};
	FormCreator.prototype = {
		constructor: FormCreator,
		attachEvent: function (element, type, handler) {
			if (element.addEventListener) {
		        element.addEventListener(type, handler, false);
		    } else if (element.attachEvent) {
		        element.attachEvent('on' + type, handler)
		    } else {
		        element['on' + type] = handler;
		    }
		},
		getFormData: function(e) {
			e.preventDefault();
			document.getElementById('createImageBtn').blur();
			this.styleNumber = document.getElementById('styleNumber').value;
			if (this.styleNumber.length === 0) {
				alert('Please enter a style number.');
				document.getElementById('styleNumber').focus();
				return false;
			}
			this.colorCode = document.getElementById('colorCode').value;
			if (this.colorCode.length === 0) {
				alert('Please enter a color code.');
				document.getElementById('colorCode').focus();
				return false;
			}
			this.suffix = document.getElementById('suffix').value;
			if (this.suffix.length === 0) {
				alert('Please enter a Scene7 suffix.');
				document.getElementById('suffix').focus();
				return false;
			}
			return true;
		},
		displayImage: function (e) {
			if (!this.getFormData(e)) {
				return;
			}
			var imgSrc = this.baseUrl + this.styleNumber + '_' + this.colorCode + '_' + this.suffix;
			var newImg = document.createElement('img');
			newImg.src = imgSrc;
			var imgTarget = document.getElementById('image--target')
			imgTarget.innerHTML = '';
			imgTarget.appendChild(newImg);
		},
		init: function (elem) {
			this.attachEvent(elem, 'click', this.displayImage.bind(this));
		}
	}

	var fc = new FormCreator();
	fc.init(document.getElementById('createImageBtn'));
}(window, document));
