using NogginBox.ContentStarRating.Models;
using Orchard.ContentManagement;
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

		//GET
		protected override DriverResult Editor(ContentRatingPart part, dynamic shapeHelper)
		{
			return ContentShape("Parts_ContentRating_Edit",
				() => shapeHelper.EditorTemplate(
					TemplateName: "Parts/ContentRating",
					Model: part,
					Prefix: Prefix));
		}

		//POST
		protected override DriverResult Editor(ContentRatingPart part, IUpdateModel updater, dynamic shapeHelper)
		{
			updater.TryUpdateModel(part, Prefix, null, null);
			return Editor(part, shapeHelper);
		}
	}
}