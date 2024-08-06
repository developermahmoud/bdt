CREATE TABLE "main$documenttitle" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"createddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_main$documenttitle_system$owner" ON "main$documenttitle" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('fac8e92f-9895-465d-9c17-8170ddeae40d', 'Main.DocumentTitle', 'main$documenttitle', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7c2f33cb-cd5d-4f69-a51e-f9313699ab0b', 'fac8e92f-9895-465d-9c17-8170ddeae40d', 'Name', 'name', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('5b92d9fa-c9a8-3144-9e01-4b31e87d39f4', 'fac8e92f-9895-465d-9c17-8170ddeae40d', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('2c0f8a68-4bb0-3e30-a9b7-132ee7ff47b9', 'fac8e92f-9895-465d-9c17-8170ddeae40d', 'idx_main$documenttitle_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('2c0f8a68-4bb0-3e30-a9b7-132ee7ff47b9', 'f2edda5b-183f-30b0-a3af-ae6794321666', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('f2edda5b-183f-30b0-a3af-ae6794321666', 'System.owner', 'system$owner', 'fac8e92f-9895-465d-9c17-8170ddeae40d', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240727 09:04:16';
