using Orchard.ContentManagement.Records;

namespace NogginBox.ContentStarRating.Models
{
	public class ContentRatingPartRecord : ContentPartRecord
	{
		public virtual int Rating { get; set; }
	}
}