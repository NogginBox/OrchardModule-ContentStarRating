(function ($) {
	$.fn.extend({
		contentRatingUI: function () {
			var forms = $(this).parents("form");
			if (forms.length != 1) {
				return $(this);
			}
			var hiddenField = $(forms.first()).find('[name="Rating"]');
			forms = null;
			
			var stars = $(this).find(".star");
			var getStarValue = function(aStar) {
				var ratingMatch = aStar.attr("class").match(/\bstar-(\d+)\b/);
				if (!ratingMatch || ratingMatch.length < 2) {
					return 0;
				}
				return +aStar.attr("class").match(/\bstar-(\d+)\b/)[1];
			};
			var setStatusClearButton = function (rating) {
				if (rating > 0) {
					$(".stars-clear").addClass("active");
				}
				else {
					$(".stars-clear").removeClass("active");
				}
			};
			var setStarRating = function(rating) {
				hiddenField.val(rating);

				stars.each(function () {
					var aStar = $(this);
					var starValue = getStarValue(aStar);
					if (starValue <= rating) {
						aStar.removeClass("empty-star");
					}
					else {
						aStar.addClass("empty-star");
					}
				});
				setStatusClearButton(rating);

			};
			setStatusClearButton(+hiddenField.val());
			return stars.each(function () {
				var _this = $(this);

				$(".stars-clear").click(function () {
					setStarRating(0);
				});

				_this.click(function() {
					var rating = getStarValue($(this));
					setStarRating(rating);

				});

				return _this;
			});
		}
	});
	$(function () {
		$(".content-rating").contentRatingUI();
	});
})(jQuery);