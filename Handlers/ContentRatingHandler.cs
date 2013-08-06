using NogginBox.ContentStarRating.Models;
using Orchard.ContentManagement.Handlers;
using Orchard.Data;

namespace NogginBox.ContentStarRating.Handlers
{
	public class ContentRatingHandler : ContentHandler
	{
		public ContentRatingHandler(IRepository<ContentRatingPartRecord> repository) {
			Filters.Add(StorageFilter.For(repository));
		}
	}
}