CREATE TABLE "main$role" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'Main.Role', 'main$role', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b44cab06-2a2f-4a32-b5f7-699065d87e88', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'Name', 'name', 30, 200, '', false);
CREATE TABLE "main$role_involvedparties_host" (
	"main$roleid" BIGINT NOT NULL,
	"main$involvedpartiesid" BIGINT NOT NULL,
	PRIMARY KEY("main$roleid","main$involvedpartiesid"),
	CONSTRAINT "uniq_main$role_involvedparties_host_main$roleid" UNIQUE ("main$roleid"));
CREATE INDEX "idx_main$role_involvedparties_host_main$involvedparties_main$role" ON "main$role_involvedparties_host" ("main$involvedpartiesid" ASC,"main$roleid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('19c630cf-d7ff-4c97-b6e0-31e04f0fd50e', 'Main.Role_InvolvedParties_Host', 'main$role_involvedparties_host', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'main$roleid', 'main$involvedpartiesid', 'idx_main$role_involvedparties_host_main$involvedparties_main$role');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$role_involvedparties_host_main$roleid', '19c630cf-d7ff-4c97-b6e0-31e04f0fd50e', '1e2fbcdf-7e22-3640-b02a-00879a8fd887');
CREATE TABLE "main$role_involvedparties_invitee" (
	"main$roleid" BIGINT NOT NULL,
	"main$involvedpartiesid" BIGINT NOT NULL,
	PRIMARY KEY("main$roleid","main$involvedpartiesid"),
	CONSTRAINT "uniq_main$role_involvedparties_invitee_main$roleid" UNIQUE ("main$roleid"));
CREATE INDEX "idx_main$role_involvedparties_invitee_main$involvedparties_main$role" ON "main$role_involvedparties_invitee" ("main$involvedpartiesid" ASC,"main$roleid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('b1f5c85b-3fdb-405f-8e48-6cda40fa0538', 'Main.Role_InvolvedParties_Invitee', 'main$role_involvedparties_invitee', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'main$roleid', 'main$involvedpartiesid', 'idx_main$role_involvedparties_invitee_main$involvedparties_main$role');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$role_involvedparties_invitee_main$roleid', 'b1f5c85b-3fdb-405f-8e48-6cda40fa0538', '5641f4c1-72b8-34eb-9899-cfa8f4fa8c64');
CREATE TABLE "main$involvedparties" (
	"id" BIGINT NOT NULL,
	"hostenabled" BOOLEAN NULL,
	"inviteeenabled" BOOLEAN NULL,
	"partneringtype" VARCHAR_IGNORECASE(13) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('f7e77337-073a-4849-8be3-36676f4b90f1', 'Main.InvolvedParties', 'main$involvedparties', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('270907c7-8997-47ff-8f06-347be3cff65e', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'HostEnabled', 'hostenabled', 10, 0, 'false', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6a6c9e5e-2f40-45ad-96dc-326701a56ac9', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'InviteeEnabled', 'inviteeenabled', 10, 0, 'false', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('489ea9f0-0dc8-484f-af82-4fcbf5cbc7b0', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'PartneringType', 'partneringtype', 40, 13, '', false);
CREATE TABLE "main$scope_involvedparties_host" (
	"main$scopeid" BIGINT NOT NULL,
	"main$involvedpartiesid" BIGINT NOT NULL,
	PRIMARY KEY("main$scopeid","main$involvedpartiesid"),
	CONSTRAINT "uniq_main$scope_involvedparties_host_main$scopeid" UNIQUE ("main$scopeid"));
CREATE INDEX "idx_main$scope_involvedparties_host_main$involvedparties_main$scope" ON "main$scope_involvedparties_host" ("main$involvedpartiesid" ASC,"main$scopeid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('2e9a45cc-b634-48f1-840a-128896f04d62', 'Main.Scope_InvolvedParties_Host', 'main$scope_involvedparties_host', '3cef9ffb-534f-4ad5-9431-d0326e83bb7e', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'main$scopeid', 'main$involvedpartiesid', 'idx_main$scope_involvedparties_host_main$involvedparties_main$scope');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$scope_involvedparties_host_main$scopeid', '2e9a45cc-b634-48f1-840a-128896f04d62', '657820b0-fd96-3972-9158-be6e3e1ad366');
CREATE TABLE "main$scope_involvedparties_invitee" (
	"main$scopeid" BIGINT NOT NULL,
	"main$involvedpartiesid" BIGINT NOT NULL,
	PRIMARY KEY("main$scopeid","main$involvedpartiesid"),
	CONSTRAINT "uniq_main$scope_involvedparties_invitee_main$scopeid" UNIQUE ("main$scopeid"));
CREATE INDEX "idx_main$scope_involvedparties_invitee_main$involvedparties_main$scope" ON "main$scope_involvedparties_invitee" ("main$involvedpartiesid" ASC,"main$scopeid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('c9155e5f-b3f1-4dcb-bb6e-5c2758c4d819', 'Main.Scope_InvolvedParties_Invitee', 'main$scope_involvedparties_invitee', '3cef9ffb-534f-4ad5-9431-d0326e83bb7e', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'main$scopeid', 'main$involvedpartiesid', 'idx_main$scope_involvedparties_invitee_main$involvedparties_main$scope');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$scope_involvedparties_invitee_main$scopeid', 'c9155e5f-b3f1-4dcb-bb6e-5c2758c4d819', '2871cfaa-67dd-3bd3-b563-f2d8630a4596');
CREATE TABLE "main$entity_involvedparties_host" (
	"main$entityid" BIGINT NOT NULL,
	"main$involvedpartiesid" BIGINT NOT NULL,
	PRIMARY KEY("main$entityid","main$involvedpartiesid"),
	CONSTRAINT "uniq_main$entity_involvedparties_host_main$entityid" UNIQUE ("main$entityid"));
CREATE INDEX "idx_main$entity_involvedparties_host_main$involvedparties_main$entity" ON "main$entity_involvedparties_host" ("main$involvedpartiesid" ASC,"main$entityid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('094f87ca-dc47-4c6b-86b5-2fff6e4e2634', 'Main.Entity_InvolvedParties_Host', 'main$entity_involvedparties_host', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'main$entityid', 'main$involvedpartiesid', 'idx_main$entity_involvedparties_host_main$involvedparties_main$entity');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$entity_involvedparties_host_main$entityid', '094f87ca-dc47-4c6b-86b5-2fff6e4e2634', '65b05d6e-3796-3d6c-905f-677b4975361d');
CREATE TABLE "main$entity_involvedparties_invitee" (
	"main$entityid" BIGINT NOT NULL,
	"main$involvedpartiesid" BIGINT NOT NULL,
	PRIMARY KEY("main$entityid","main$involvedpartiesid"),
	CONSTRAINT "uniq_main$entity_involvedparties_invitee_main$entityid" UNIQUE ("main$entityid"));
CREATE INDEX "idx_main$entity_involvedparties_invitee_main$involvedparties_main$entity" ON "main$entity_involvedparties_invitee" ("main$involvedpartiesid" ASC,"main$entityid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('8df5fb57-8438-466b-9f43-fe6070e06f8d', 'Main.Entity_InvolvedParties_Invitee', 'main$entity_involvedparties_invitee', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'main$entityid', 'main$involvedpartiesid', 'idx_main$entity_involvedparties_invitee_main$involvedparties_main$entity');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$entity_involvedparties_invitee_main$entityid', '8df5fb57-8438-466b-9f43-fe6070e06f8d', '8ae07335-e0b0-386b-8751-debd208c66a1');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240806 23:06:48';
