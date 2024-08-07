ALTER TABLE "main$role" ADD "createddate" TIMESTAMP NULL;
ALTER TABLE "main$role" ADD "system$owner" BIGINT NULL;
CREATE INDEX "idx_main$role_system$owner" ON "main$role" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3669a978-1f20-3968-a452-3b7baba22eb8', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name") VALUES ('df80beda-3e2c-31d9-ac61-cd24a0dd74ce', 'System.owner', 'system$owner', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner');
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('243492b1-de10-39c1-b538-2d9d35b91477', 'f53ded29-2fcd-46db-9a22-f12f6268e5cb', 'idx_main$role_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('243492b1-de10-39c1-b538-2d9d35b91477', 'df80beda-3e2c-31d9-ac61-cd24a0dd74ce', false, 0);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240807 10:45:23';
