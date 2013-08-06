using System.Data;
using Orchard.ContentManagement.MetaData;
using Orchard.Core.Contents.Extensions;
using Orchard.Data.Migration;

namespace NogginBox.ContentStarRating
{
	public class Migrations : DataMigrationImpl
	{
		public int Create() {
            SchemaBuilder.CreateTable("ContentRatingPartRecord", table => table
                .ContentPartRecord()
                .Column("Rating", DbType.Int32)
            );

			ContentDefinitionManager.AlterPartDefinition("ContentRatingPart",
				builder => builder.Attachable());

            return 1;
        }
	}
}