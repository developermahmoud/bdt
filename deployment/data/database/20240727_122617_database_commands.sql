CREATE TABLE "main$attachments_documenttitle" (
	"main$attachmentsid" BIGINT NOT NULL,
	"main$documenttitleid" BIGINT NOT NULL,
	PRIMARY KEY("main$attachmentsid","main$documenttitleid"),
	CONSTRAINT "uniq_main$attachments_documenttitle_main$attachmentsid" UNIQUE ("main$attachmentsid"));
CREATE INDEX "idx_main$attachments_documenttitle_main$documenttitle_main$attachments" ON "main$attachments_documenttitle" ("main$documenttitleid" ASC,"main$attachmentsid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('494d82d3-7133-4568-8498-9cca10e175c3', 'Main.Attachments_DocumentTitle', 'main$attachments_documenttitle', 'f95c0569-5989-4bd5-b39a-74b03125cb12', 'fac8e92f-9895-465d-9c17-8170ddeae40d', 'main$attachmentsid', 'main$documenttitleid', 'idx_main$attachments_documenttitle_main$documenttitle_main$attachments');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$attachments_documenttitle_main$attachmentsid', '494d82d3-7133-4568-8498-9cca10e175c3', 'ae506757-771b-3f23-af3e-3067e095a0ce');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240727 12:26:17';
