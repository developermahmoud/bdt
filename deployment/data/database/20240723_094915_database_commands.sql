CREATE TABLE "main$priceoverview" (
	"id" BIGINT NOT NULL,
	"revenueforecast" DECIMAL(28, 8) NULL,
	"submittedprice" DECIMAL(28, 8) NULL,
	"createddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_main$priceoverview_system$owner" ON "main$priceoverview" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('b46c9273-6b61-4587-9b72-5b4e6620c255', 'Main.PriceOverview', 'main$priceoverview', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('05ae9955-fb2c-444b-b9b5-41120eb4a38a', 'b46c9273-6b61-4587-9b72-5b4e6620c255', 'RevenueForecast', 'revenueforecast', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('43b6b2a8-203d-420c-a3ee-908529df4189', 'b46c9273-6b61-4587-9b72-5b4e6620c255', 'SubmittedPrice', 'submittedprice', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f8a11fb9-b18f-306e-ab40-c6f3125f7d4a', 'b46c9273-6b61-4587-9b72-5b4e6620c255', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('585ee00a-49c7-3a36-ba12-6a6c20fcd60d', 'b46c9273-6b61-4587-9b72-5b4e6620c255', 'idx_main$priceoverview_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('585ee00a-49c7-3a36-ba12-6a6c20fcd60d', '254389ef-668c-3a7c-92ab-ac927e7a3861', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('254389ef-668c-3a7c-92ab-ac927e7a3861', 'System.owner', 'system$owner', 'b46c9273-6b61-4587-9b72-5b4e6620c255', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
CREATE TABLE "main$priceoverview_lead" (
	"main$priceoverviewid" BIGINT NOT NULL,
	"main$leadid" BIGINT NOT NULL,
	PRIMARY KEY("main$priceoverviewid","main$leadid"),
	CONSTRAINT "uniq_main$priceoverview_lead_main$priceoverviewid" UNIQUE ("main$priceoverviewid"));
CREATE INDEX "idx_main$priceoverview_lead_main$lead_main$priceoverview" ON "main$priceoverview_lead" ("main$leadid" ASC,"main$priceoverviewid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('7b0475fb-4eb7-4117-a055-5af1660f5e8a', 'Main.PriceOverview_Lead', 'main$priceoverview_lead', 'b46c9273-6b61-4587-9b72-5b4e6620c255', '0b2c6b9a-3389-40a1-9f3f-1da60a67f3e6', 'main$priceoverviewid', 'main$leadid', 'idx_main$priceoverview_lead_main$lead_main$priceoverview');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$priceoverview_lead_main$priceoverviewid', '7b0475fb-4eb7-4117-a055-5af1660f5e8a', '8158b33d-ece7-3e9c-840b-7afab1cf9ceb');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240723 09:49:15';
