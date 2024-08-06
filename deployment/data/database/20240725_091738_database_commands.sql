ALTER TABLE "main$lead" ADD "trystatus" VARCHAR_IGNORECASE(15) NULL;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('28278600-61cc-46e7-8b51-238d9dea4b22', '0b2c6b9a-3389-40a1-9f3f-1da60a67f3e6', 'TryStatus', 'trystatus', 40, 15, '', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240725 09:17:38';
