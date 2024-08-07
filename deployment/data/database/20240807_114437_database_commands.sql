ALTER TABLE "main$scope_involvedparties_host" DROP CONSTRAINT "uniq_main$scope_involvedparties_host_main$scopeid";
DROP INDEX "idx_main$scope_involvedparties_host_main$involvedparties_main$scope";
ALTER TABLE "main$scope_involvedparties_host" RENAME TO "52674f57171b480fb628f8de25a1f2e8";
ALTER TABLE "main$scope_involvedparties_invitee" DROP CONSTRAINT "uniq_main$scope_involvedparties_invitee_main$scopeid";
DROP INDEX "idx_main$scope_involvedparties_invitee_main$involvedparties_main$scope";
ALTER TABLE "main$scope_involvedparties_invitee" RENAME TO "89274a127b83422883504d3e2305c664";
ALTER TABLE "main$entity_involvedparties_host" DROP CONSTRAINT "uniq_main$entity_involvedparties_host_main$entityid";
DROP INDEX "idx_main$entity_involvedparties_host_main$involvedparties_main$entity";
ALTER TABLE "main$entity_involvedparties_host" RENAME TO "1914490f467d4d31adc826467b9fc096";
ALTER TABLE "main$entity_involvedparties_invitee" DROP CONSTRAINT "uniq_main$entity_involvedparties_invitee_main$entityid";
DROP INDEX "idx_main$entity_involvedparties_invitee_main$involvedparties_main$entity";
ALTER TABLE "main$entity_involvedparties_invitee" RENAME TO "ad991cc17a4f44989b3f77c6081134a3";
ALTER TABLE "main$role_involvedparties_host" DROP CONSTRAINT "uniq_main$role_involvedparties_host_main$roleid";
DROP INDEX "idx_main$role_involvedparties_host_main$involvedparties_main$role";
ALTER TABLE "main$role_involvedparties_host" RENAME TO "a4f0b313b0e74dd88ad25c905dc0efce";
ALTER TABLE "main$role_involvedparties_invitee" DROP CONSTRAINT "uniq_main$role_involvedparties_invitee_main$roleid";
DROP INDEX "idx_main$role_involvedparties_invitee_main$involvedparties_main$role";
ALTER TABLE "main$role_involvedparties_invitee" RENAME TO "c96aedd628ee4a46846c8385e5d8cc66";
DELETE FROM "mendixsystem$association"  WHERE "id" = '2e9a45cc-b634-48f1-840a-128896f04d62';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_main$scope_involvedparties_host_main$scopeid' AND "column_id" = '657820b0-fd96-3972-9158-be6e3e1ad366';
DELETE FROM "mendixsystem$association"  WHERE "id" = 'c9155e5f-b3f1-4dcb-bb6e-5c2758c4d819';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_main$scope_involvedparties_invitee_main$scopeid' AND "column_id" = '2871cfaa-67dd-3bd3-b563-f2d8630a4596';
DELETE FROM "mendixsystem$association"  WHERE "id" = '094f87ca-dc47-4c6b-86b5-2fff6e4e2634';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_main$entity_involvedparties_host_main$entityid' AND "column_id" = '65b05d6e-3796-3d6c-905f-677b4975361d';
DELETE FROM "mendixsystem$association"  WHERE "id" = '8df5fb57-8438-466b-9f43-fe6070e06f8d';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_main$entity_involvedparties_invitee_main$entityid' AND "column_id" = '8ae07335-e0b0-386b-8751-debd208c66a1';
DELETE FROM "mendixsystem$association"  WHERE "id" = '19c630cf-d7ff-4c97-b6e0-31e04f0fd50e';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_main$role_involvedparties_host_main$roleid' AND "column_id" = '1e2fbcdf-7e22-3640-b02a-00879a8fd887';
DELETE FROM "mendixsystem$association"  WHERE "id" = 'b1f5c85b-3fdb-405f-8e48-6cda40fa0538';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_main$role_involvedparties_invitee_main$roleid' AND "column_id" = '5641f4c1-72b8-34eb-9899-cfa8f4fa8c64';
CREATE TABLE "main$involvedparties_lead" (
	"main$involvedpartiesid" BIGINT NOT NULL,
	"main$leadid" BIGINT NOT NULL,
	PRIMARY KEY("main$involvedpartiesid","main$leadid"),
	CONSTRAINT "uniq_main$involvedparties_lead_main$involvedpartiesid" UNIQUE ("main$involvedpartiesid"));
CREATE INDEX "idx_main$involvedparties_lead_main$lead_main$involvedparties" ON "main$involvedparties_lead" ("main$leadid" ASC,"main$involvedpartiesid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('d3a81b89-f6e2-48c4-8aab-17dc1a3b2687', 'Main.InvolvedParties_Lead', 'main$involvedparties_lead', 'f7e77337-073a-4849-8be3-36676f4b90f1', '0b2c6b9a-3389-40a1-9f3f-1da60a67f3e6', 'main$involvedpartiesid', 'main$leadid', 'idx_main$involvedparties_lead_main$lead_main$involvedparties');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$involvedparties_lead_main$involvedpartiesid', 'd3a81b89-f6e2-48c4-8aab-17dc1a3b2687', '453f26a1-045c-3db3-974e-96139ce66869');
CREATE TABLE "main$involvedparties_entity_invitee" (
	"main$involvedpartiesid" BIGINT NOT NULL,
	"main$entityid" BIGINT NOT NULL,
	PRIMARY KEY("main$involvedpartiesid","main$entityid"),
	CONSTRAINT "uniq_main$involvedparties_entity_invitee_main$involvedpartiesid" UNIQUE ("main$involvedpartiesid"));
CREATE INDEX "idx_main$involvedparties_entity_invitee_main$entity_main$involvedparties" ON "main$involvedparties_entity_invitee" ("main$entityid" ASC,"main$involvedpartiesid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('a82c836f-1ab0-4d09-852f-ec88439c7808', 'Main.InvolvedParties_Entity_Invitee', 'main$involvedparties_entity_invitee', 'f7e77337-073a-4849-8be3-36676f4b90f1', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'main$involvedpartiesid', 'main$entityid', 'idx_main$involvedparties_entity_invitee_main$entity_main$involvedparties');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$involvedparties_entity_invitee_main$involvedpartiesid', 'a82c836f-1ab0-4d09-852f-ec88439c7808', 'd188c57b-0430-3083-aeea-a66eec4b0300');
CREATE TABLE "main$involvedparties_scope_invitee" (
	"main$involvedpartiesid" BIGINT NOT NULL,
	"main$scopeid" BIGINT NOT NULL,
	PRIMARY KEY("main$involvedpartiesid","main$scopeid"),
	CONSTRAINT "uniq_main$involvedparties_scope_invitee_main$involvedpartiesid" UNIQUE ("main$involvedpartiesid"));
CREATE INDEX "idx_main$involvedparties_scope_invitee_main$scope_main$involvedparties" ON "main$involvedparties_scope_invitee" ("main$scopeid" ASC,"main$involvedpartiesid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('76224e2f-3a06-4940-b8dd-2239da575505', 'Main.InvolvedParties_Scope_Invitee', 'main$involvedparties_scope_invitee', 'f7e77337-073a-4849-8be3-36676f4b90f1', '3cef9ffb-534f-4ad5-9431-d0326e83bb7e', 'main$involvedpartiesid', 'main$scopeid', 'idx_main$involvedparties_scope_invitee_main$scope_main$involvedparties');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$involvedparties_scope_invitee_main$involvedpartiesid', '76224e2f-3a06-4940-b8dd-2239da575505', '599b5cd8-530e-35a9-bc5a-8f88902cc7ab');
CREATE TABLE "main$involvedparties_role_invitee" (
	"main$involvedpartiesid" BIGINT NOT NULL,
	"main$roleid" BIGINT NOT NULL,
	PRIMARY KEY("main$involvedpartiesid","main$roleid"),
	CONSTRAINT "uniq_main$involvedparties_role_invitee_main$involvedpartiesid" UNIQUE ("main$involvedpartiesid"));
CREATE INDEX "idx_main$involvedparties_role_invitee_main$role_main$involvedparties" ON "main$involvedparties_role_invitee" ("main$roleid" ASC,"main$involvedpartiesid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('5dcc63f8-7d93-4976-9c78-735654fb10bf', 'Main.InvolvedParties_Role_Invitee', 'main$involvedparties_role_invitee', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'main$involvedpartiesid', 'main$roleid', 'idx_main$involvedparties_role_invitee_main$role_main$involvedparties');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$involvedparties_role_invitee_main$involvedpartiesid', '5dcc63f8-7d93-4976-9c78-735654fb10bf', 'c2b29116-f6e5-3e90-9895-d03319b2bf9c');
CREATE TABLE "main$involvedparties_entity_host" (
	"main$involvedpartiesid" BIGINT NOT NULL,
	"main$entityid" BIGINT NOT NULL,
	PRIMARY KEY("main$involvedpartiesid","main$entityid"),
	CONSTRAINT "uniq_main$involvedparties_entity_host_main$involvedpartiesid" UNIQUE ("main$involvedpartiesid"));
CREATE INDEX "idx_main$involvedparties_entity_host_main$entity_main$involvedparties" ON "main$involvedparties_entity_host" ("main$entityid" ASC,"main$involvedpartiesid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('9076fbf7-686e-4e90-8096-83fc783541b8', 'Main.InvolvedParties_Entity_Host', 'main$involvedparties_entity_host', 'f7e77337-073a-4849-8be3-36676f4b90f1', '97267c7f-2c32-49da-b4cc-f51359273c8e', 'main$involvedpartiesid', 'main$entityid', 'idx_main$involvedparties_entity_host_main$entity_main$involvedparties');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$involvedparties_entity_host_main$involvedpartiesid', '9076fbf7-686e-4e90-8096-83fc783541b8', '7fbb7f6d-1f4a-3a5c-aa66-af3adb41b266');
CREATE TABLE "main$involvedparties_role_host" (
	"main$involvedpartiesid" BIGINT NOT NULL,
	"main$roleid" BIGINT NOT NULL,
	PRIMARY KEY("main$involvedpartiesid","main$roleid"),
	CONSTRAINT "uniq_main$involvedparties_role_host_main$involvedpartiesid" UNIQUE ("main$involvedpartiesid"));
CREATE INDEX "idx_main$involvedparties_role_host_main$role_main$involvedparties" ON "main$involvedparties_role_host" ("main$roleid" ASC,"main$involvedpartiesid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('6a8f5b61-7320-4da8-be19-505691ebb664', 'Main.InvolvedParties_Role_Host', 'main$involvedparties_role_host', 'f7e77337-073a-4849-8be3-36676f4b90f1', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'main$involvedpartiesid', 'main$roleid', 'idx_main$involvedparties_role_host_main$role_main$involvedparties');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$involvedparties_role_host_main$involvedpartiesid', '6a8f5b61-7320-4da8-be19-505691ebb664', '65825592-ffa9-3883-9465-0b3eb18a4e78');
CREATE TABLE "main$involvedparties_scope_host" (
	"main$involvedpartiesid" BIGINT NOT NULL,
	"main$scopeid" BIGINT NOT NULL,
	PRIMARY KEY("main$involvedpartiesid","main$scopeid"),
	CONSTRAINT "uniq_main$involvedparties_scope_host_main$involvedpartiesid" UNIQUE ("main$involvedpartiesid"));
CREATE INDEX "idx_main$involvedparties_scope_host_main$scope_main$involvedparties" ON "main$involvedparties_scope_host" ("main$scopeid" ASC,"main$involvedpartiesid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name") VALUES ('c71303e9-84cf-4ae0-afb2-90fea2a4f846', 'Main.InvolvedParties_Scope_Host', 'main$involvedparties_scope_host', 'f7e77337-073a-4849-8be3-36676f4b90f1', '3cef9ffb-534f-4ad5-9431-d0326e83bb7e', 'main$involvedpartiesid', 'main$scopeid', 'idx_main$involvedparties_scope_host_main$scope_main$involvedparties');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_main$involvedparties_scope_host_main$involvedpartiesid', 'c71303e9-84cf-4ae0-afb2-90fea2a4f846', '3fef73cb-ef4d-30ad-8c66-aa1cf0f73bff');
DROP TABLE "52674f57171b480fb628f8de25a1f2e8";
DROP TABLE "89274a127b83422883504d3e2305c664";
DROP TABLE "1914490f467d4d31adc826467b9fc096";
DROP TABLE "ad991cc17a4f44989b3f77c6081134a3";
DROP TABLE "a4f0b313b0e74dd88ad25c905dc0efce";
DROP TABLE "c96aedd628ee4a46846c8385e5d8cc66";
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240807 11:44:37';
