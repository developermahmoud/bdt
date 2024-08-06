CREATE TABLE "main$personenvolved_entity" (
	"main$personenvolvedid" BIGINT NOT NULL,
	"main$entityid" BIGINT NOT NULL,
	PRIMARY KEY("main$personenvolvedid","main$entityid"),
	CONSTRAINT "uniq_main$personenvolved_entity_main$personenvolvedid" UNIQUE ("main$personenvolvedid"));
CREATE INDEX "idx_main$personenvolved_entity_main$entity_main$personenvolved" ON "main$personenvolved_entity" ("main$entityid" ASC,"main$personenvolvedid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('95f73498-9887-4b0e-91bb-c3a3f5002b8a', 'Main.PersonEnvolved_Entity', 'main$personenvolved_entity', '305bda68-47fa-4326-bb1a-e0057dfb7297', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'main$personenvolvedid', 'main$entityid', 'idx_main$personenvolved_entity_main$entity_main$personenvolved');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$personenvolved_entity_main$personenvolvedid', '95f73498-9887-4b0e-91bb-c3a3f5002b8a', 'c37b292f-9eb3-33a6-b9c3-6705dd72ce2c');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240727 12:23:11';
