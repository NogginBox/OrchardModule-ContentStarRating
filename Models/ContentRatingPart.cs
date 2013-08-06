using Orchard.ContentManagement;

namespace NogginBox.ContentStarRating.Models
{
	public class ContentRatingPart : ContentPart<ContentRatingPartRecord>
	{
		public int Rating {
			get { return Record.Rating; }
			set { Record.Rating = value; }
		}
	}
}