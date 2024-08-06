CREATE TABLE "main$personenvolved" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"designation" VARCHAR_IGNORECASE(200) NULL,
	"contactnumber" VARCHAR_IGNORECASE(200) NULL,
	"createddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_main$personenvolved_system$owner" ON "main$personenvolved" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('305bda68-47fa-4326-bb1a-e0057dfb7297', 'Main.PersonEnvolved', 'main$personenvolved', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('1affeb36-3082-4f37-91ca-743da4024520', '305bda68-47fa-4326-bb1a-e0057dfb7297', 'Name', 'name', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('cf05a3dd-31c7-4b8b-9651-dccf9e01ca76', '305bda68-47fa-4326-bb1a-e0057dfb7297', 'Designation', 'designation', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('40fab818-5005-4c02-a7a4-7ee090270b48', '305bda68-47fa-4326-bb1a-e0057dfb7297', 'ContactNumber', 'contactnumber', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('90da5230-aa2d-3cbb-94e0-a56f68d93ad9', '305bda68-47fa-4326-bb1a-e0057dfb7297', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('8f122eed-d73a-3e4f-bd39-e3f0928147bf', '305bda68-47fa-4326-bb1a-e0057dfb7297', 'idx_main$personenvolved_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('8f122eed-d73a-3e4f-bd39-e3f0928147bf', 'be4edab6-de08-390e-870d-7bd902537c27', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('be4edab6-de08-390e-870d-7bd902537c27', 'System.owner', 'system$owner', '305bda68-47fa-4326-bb1a-e0057dfb7297', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
CREATE TABLE "main$personenvolved_communication" (
	"main$personenvolvedid" BIGINT NOT NULL,
	"main$communicationid" BIGINT NOT NULL,
	PRIMARY KEY("main$personenvolvedid","main$communicationid"),
	CONSTRAINT "uniq_main$personenvolved_communication_main$personenvolvedid" UNIQUE ("main$personenvolvedid"));
CREATE INDEX "idx_main$personenvolved_communication_main$communication_main$personenvolved" ON "main$personenvolved_communication" ("main$communicationid" ASC,"main$personenvolvedid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('06bd6a58-cfb8-425d-99cd-360a772981d7', 'Main.PersonEnvolved_Communication', 'main$personenvolved_communication', '305bda68-47fa-4326-bb1a-e0057dfb7297', '3ef1ea23-ae22-4516-969e-0c84d5d66702', 'main$personenvolvedid', 'main$communicationid', 'idx_main$personenvolved_communication_main$communication_main$personenvolved');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$personenvolved_communication_main$personenvolvedid', '06bd6a58-cfb8-425d-99cd-360a772981d7', '14ee6c76-d82e-3d2d-ae01-e87d68bcca38');
CREATE TABLE "main$entity" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"createddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_main$entity_system$owner" ON "main$entity" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('97267c7f-2c32-49da-b4cc-f51359273c8e', 'Main.Entity', 'main$entity', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('5a2b9002-a9d7-4e3d-87d6-aa3012a3e092', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'Name', 'name', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('85058fa4-d782-3e6a-9310-15ae1480a1bf', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('6ffe32e1-4117-3930-bdff-9a4b8704e169', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'idx_main$entity_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('6ffe32e1-4117-3930-bdff-9a4b8704e169', '31c71d52-4005-3698-81e5-a855483e532d', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('31c71d52-4005-3698-81e5-a855483e532d', 'System.owner', 'system$owner', '97267c7f-2c32-49da-b4cc-f51359273c8e', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240727 11:18:21';
