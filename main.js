document.addEventListener("DOMContentLoaded", function() {
	
	var userFeed = new Instafeed({
		get: 'user',
		userId: '7591003794',
		clientId: 'b32413e16fd449329239378789ac1ba4',
		target: 'instafeed',
		resolution: 'standard_resolution',
		accessToken: '7591003794.1677ed0.472a208a354e424d9653c53d7f21aea8',
		sortBy: 'most-recent',
		limit : 3,
		template: '<div class="image-item insta-page">' +
		  '<a class="image insta-image" href="{{image}}>' +
		  '<img alt="{{user.full_name}}" src="{{image}}>' +
		  '<div class="img-backdrop-tutorial">' +
		  '<div class="insta-caption">' +
		  '<p>{{caption}}</p>' +
		  '</div>' +
		  '</div>' +
		  '<div class="captions">' +
		  '<a></a>' +
		  '</div>' +
		  '</a>' +
		  '</div>',
		  
		filter: function(image) {
			return image.type === 'image';
		 },
		   
		 after: function () {
			loader.style.display = 'none';
			if (!this.hasNext()) {
				loadButton.setAttribute('disabled', 'disabled');
			}
		}
			});
	
	userFeed.run();
	
	
	
});
