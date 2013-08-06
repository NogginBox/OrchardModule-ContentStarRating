using NogginBox.ContentStarRating.Models;
using Orchard.ContentManagement.Drivers;

namespace NogginBox.ContentStarRating.Drivers
{
	public class ContentRatingDriver : ContentPartDriver<ContentRatingPart>
	{
		protected override DriverResult Display(ContentRatingPart part, string displayType, dynamic shapeHelper)
		{
			return ContentShape("Parts_ContentRating",
				() => shapeHelper.Parts_ContentRating(
					Rating: part.Rating));
		}
	}
}