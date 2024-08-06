CREATE SEQUENCE "main$lead_sn_mxseq" AS BIGINT START WITH 1;
ALTER TABLE "main$lead" ADD "sn" BIGINT NULL;
UPDATE "main$lead" SET "sn" = NEXT VALUE FOR "main$lead_sn_mxseq";
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('cb4785f6-4bb7-4ad4-9ed7-13c5995d520f', '0b2c6b9a-3389-40a1-9f3f-1da60a67f3e6', 'SN', 'sn', 0, 0, '1', true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", "name", "start_value", "current_value") VALUES ('cb4785f6-4bb7-4ad4-9ed7-13c5995d520f', 'main$lead_sn_mxseq', 1, 3);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240723 10:44:07';
