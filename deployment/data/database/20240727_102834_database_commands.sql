CREATE TABLE "main$communicationtype" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"createddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_main$communicationtype_system$owner" ON "main$communicationtype" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('723f7dd2-b996-4fc5-aca2-f002e3f01904', 'Main.CommunicationType', 'main$communicationtype', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('ffeaef0d-827f-4866-aecb-c8f232497f35', '723f7dd2-b996-4fc5-aca2-f002e3f01904', 'Name', 'name', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('0c45b185-0c99-3d61-8118-024303e2433a', '723f7dd2-b996-4fc5-aca2-f002e3f01904', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('49b932b7-8659-3095-aab4-5f9765a4ae54', '723f7dd2-b996-4fc5-aca2-f002e3f01904', 'idx_main$communicationtype_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('49b932b7-8659-3095-aab4-5f9765a4ae54', '2cc464e6-4f57-31ea-b305-f83497fd9d00', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('2cc464e6-4f57-31ea-b305-f83497fd9d00', 'System.owner', 'system$owner', '723f7dd2-b996-4fc5-aca2-f002e3f01904', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
CREATE TABLE "main$communicationstatus" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"createddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_main$communicationstatus_system$owner" ON "main$communicationstatus" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('628d9f3d-dc38-4c53-9087-aad41c4bd081', 'Main.CommunicationStatus', 'main$communicationstatus', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4ff9ebb8-8c56-4791-9518-6fddc49d008c', '628d9f3d-dc38-4c53-9087-aad41c4bd081', 'Name', 'name', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('65fc495e-0b99-3e1c-a7d0-8a72c2826400', '628d9f3d-dc38-4c53-9087-aad41c4bd081', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('7aca8a0e-3174-3fc3-b328-b9d6be55cd6e', '628d9f3d-dc38-4c53-9087-aad41c4bd081', 'idx_main$communicationstatus_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('7aca8a0e-3174-3fc3-b328-b9d6be55cd6e', '0b172a57-e209-305f-b541-c9cac9bfc8be', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('0b172a57-e209-305f-b541-c9cac9bfc8be', 'System.owner', 'system$owner', '628d9f3d-dc38-4c53-9087-aad41c4bd081', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
CREATE TABLE "main$communication" (
	"id" BIGINT NOT NULL,
	"startdate" TIMESTAMP NULL,
	"remarks" VARCHAR_IGNORECASE(2147483647) NULL,
	"createddate" TIMESTAMP NULL,
	"changeddate" TIMESTAMP NULL,
	"system$changedby" BIGINT NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_main$communication_system$changedby" ON "main$communication" ("system$changedby" ASC,"id" ASC);
CREATE INDEX "idx_main$communication_system$owner" ON "main$communication" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('3ef1ea23-ae22-4516-969e-0c84d5d66702', 'Main.Communication', 'main$communication', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8ce97bd9-8ead-485e-b11a-21fd093f1662', '3ef1ea23-ae22-4516-969e-0c84d5d66702', 'StartDate', 'startdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('eff62970-a210-4fa9-bde1-c1ec894bb5f8', '3ef1ea23-ae22-4516-969e-0c84d5d66702', 'Remarks', 'remarks', 30, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('00e65100-7946-363d-8e39-c8d660a3284b', '3ef1ea23-ae22-4516-969e-0c84d5d66702', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('d83ecf18-6184-3268-92a7-e327882c9ed7', '3ef1ea23-ae22-4516-969e-0c84d5d66702', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('e2e474b2-b2c8-32e3-bed6-e4f07cebb87f', '3ef1ea23-ae22-4516-969e-0c84d5d66702', 'idx_main$communication_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('e2e474b2-b2c8-32e3-bed6-e4f07cebb87f', 'eb9da3b9-4c0e-3338-9caa-c8c7f245a05d', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('387e1265-2094-32cc-8e15-0c225d3cd922', '3ef1ea23-ae22-4516-969e-0c84d5d66702', 'idx_main$communication_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('387e1265-2094-32cc-8e15-0c225d3cd922', '7726ad51-815c-3679-a40b-ce26827ce58f', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('eb9da3b9-4c0e-3338-9caa-c8c7f245a05d', 'System.changedBy', 'system$changedby', '3ef1ea23-ae22-4516-969e-0c84d5d66702', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby');
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('7726ad51-815c-3679-a40b-ce26827ce58f', 'System.owner', 'system$owner', '3ef1ea23-ae22-4516-969e-0c84d5d66702', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
CREATE TABLE "main$communication_communicationtype" (
	"main$communicationid" BIGINT NOT NULL,
	"main$communicationtypeid" BIGINT NOT NULL,
	PRIMARY KEY("main$communicationid","main$communicationtypeid"),
	CONSTRAINT "uniq_main$communication_communicationtype_main$communicationid" UNIQUE ("main$communicationid"));
CREATE INDEX "idx_main$communication_communicationtype_main$communicationtype_main$communication" ON "main$communication_communicationtype" ("main$communicationtypeid" ASC,"main$communicationid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('89ca66b0-3f52-4b22-8b50-dd13f541088e', 'Main.Communication_CommunicationType', 'main$communication_communicationtype', '3ef1ea23-ae22-4516-969e-0c84d5d66702', '723f7dd2-b996-4fc5-aca2-f002e3f01904', 'main$communicationid', 'main$communicationtypeid', 'idx_main$communication_communicationtype_main$communicationtype_main$communication');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$communication_communicationtype_main$communicationid', '89ca66b0-3f52-4b22-8b50-dd13f541088e', 'de6b7b80-eca2-363e-a5a7-15cebf7dc991');
CREATE TABLE "main$communication_communicationstatus" (
	"main$communicationid" BIGINT NOT NULL,
	"main$communicationstatusid" BIGINT NOT NULL,
	PRIMARY KEY("main$communicationid","main$communicationstatusid"),
	CONSTRAINT "uniq_main$communication_communicationstatus_main$communicationid" UNIQUE ("main$communicationid"));
CREATE INDEX "idx_main$communication_communicationstatus_main$communicationstatus_main$communication" ON "main$communication_communicationstatus" ("main$communicationstatusid" ASC,"main$communicationid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('bcd460e1-4391-423e-9593-70aab87c81c0', 'Main.Communication_CommunicationStatus', 'main$communication_communicationstatus', '3ef1ea23-ae22-4516-969e-0c84d5d66702', '628d9f3d-dc38-4c53-9087-aad41c4bd081', 'main$communicationid', 'main$communicationstatusid', 'idx_main$communication_communicationstatus_main$communicationstatus_main$communication');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$communication_communicationstatus_main$communicationid', 'bcd460e1-4391-423e-9593-70aab87c81c0', 'de37a21d-08e0-3264-b79b-4858f55054da');
CREATE TABLE "main$communication_lead" (
	"main$communicationid" BIGINT NOT NULL,
	"main$leadid" BIGINT NOT NULL,
	PRIMARY KEY("main$communicationid","main$leadid"),
	CONSTRAINT "uniq_main$communication_lead_main$communicationid" UNIQUE ("main$communicationid"));
CREATE INDEX "idx_main$communication_lead_main$lead_main$communication" ON "main$communication_lead" ("main$leadid" ASC,"main$communicationid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('75345680-bbe0-46d5-a6cc-cfb01cb7b4f8', 'Main.Communication_Lead', 'main$communication_lead', '3ef1ea23-ae22-4516-969e-0c84d5d66702', '0b2c6b9a-3389-40a1-9f3f-1da60a67f3e6', 'main$communicationid', 'main$leadid', 'idx_main$communication_lead_main$lead_main$communication');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$communication_lead_main$communicationid', '75345680-bbe0-46d5-a6cc-cfb01cb7b4f8', '76895d83-f0ce-345c-8092-c6a91af084f3');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240727 10:28:34';
