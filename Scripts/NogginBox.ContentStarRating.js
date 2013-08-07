(function ($) {
	$.fn.extend({
		contentRatingUI: function () {
			var stars = $(this).find(".star");
			return stars.each(function () {
				var _this = $(this);
				var forms = _this.parents("form");
				if (forms.length != 1) {
					return _this;
				}

				/*var clearVote = $("<span class=\"stars-clear\">x</span>");
				$(".stars-clear").click(
						function (e) {
							var _clear_this = $(this);

							OpenDeleteRatingConfirmationDialog();

							$("#confirmDeleteRatingButton").unbind(".rating").bind("click.rating", function () {
								_clear_this.addClass("active");
								var form = _clear_this.closest(".content-rating").find("form").first();
								form.find('[name="rating"]')
									.children('option[value="-1"]').attr("selected", true);
								$.post(
									form.attr("action"),
									form.serialize()
								);
								form = null;
								var resultDisplay = _clear_this.closest(".stars-current-result").first();
								var existingUserRating = resultDisplay.attr("class").match(/\bstars-user-rating-\d+\b/);
								if (existingUserRating && existingUserRating.length > 0) {
									resultDisplay.removeClass(existingUserRating[0]);
								}
								removeClearVoteUI(_clear_this);

								$("#reviewsList li.mine").fadeOut();
								CloseDeleteRatingConfirmationDialog();
							});

							e.preventDefault();
							return false;
						})
					.mouseenter(
						function () { $(this).addClass("mousey"); }
						)
					.mouseleave(
						function () { $(this).removeClass("mousey"); }
					);

				function addClearVoteUI(fromHere) {
					fromHere.find(".stars-current-result").first().append(clearVote);
				}

				function removeClearVoteUI(fromHere) {
					fromHere.closest(".stars-current-result").first().children(".stars-clear").removeClass("mousey").removeClass("active").remove();
				}*/

				_this.click(function() {
					var thisStar = $(this);
					var ratingMatch = thisStar.attr("class").match(/\bstar-(\d+)\b/);
					if (!ratingMatch || ratingMatch.length < 2) {
						return;
					}

					var rating = +thisStar.attr("class").match(/\bstar-(\d+)\b/)[1];

					var form = $(forms.first());
					form.find('[name="Rating"]').val(rating);
					form = null;

					// Update rating stars based on rating
					stars.each(function () {
						var aStar = $(this);
						var starValue = +aStar.attr("class").match(/\bstar-(\d+)\b/)[1];
						if(starValue <= rating) {
							aStar.removeClass("empty-star");
						}
						else {
							aStar.addClass("empty-star");
						}
					});

					//addClearVoteUI(_thisStar);
				});
					/*.find(".a-star")
						.hover(
							function () { // mouseenter
								var _thisStar = $(this);
								_this.addClass(_thisStar.attr("class").match(/\bstar-\d+\b/)[0]);
							},
							function () { // mouseleave
								var _thisStar = $(this);
								_this.removeClass(_thisStar.attr("class").match(/\bstar-\d+\b/)[0]);
						});*/

				// add the "clear vote" bit
				/*if (_this.find(".stars-current-result").first().attr("class").match(/\bstars-user-rating-\d+\b/)) {
					addClearVoteUI(_this);
				}*/

				return _this;
			});
		}
	});
	$(function () {
		$(".content-rating").contentRatingUI();
	});
})(jQuery);