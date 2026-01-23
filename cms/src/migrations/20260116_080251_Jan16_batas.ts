import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_faq_categories_questions_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_faq_categories_locales" (
  	"category_name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_regulatory_info_locales" (
  	"title" varchar,
  	"details" varchar,
  	"validity" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_documents_locales" (
  	"title" varchar,
  	"description" varchar,
  	"category" varchar,
  	"last_updated" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_important_notices_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_faq_categories_questions_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_faq_categories_locales" (
  	"category_name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_regulatory_info_locales" (
  	"title" varchar,
  	"details" varchar,
  	"validity" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_documents_locales" (
  	"title" varchar,
  	"description" varchar,
  	"category" varchar,
  	"last_updated" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_important_notices_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages" ADD COLUMN "phone_url" varchar DEFAULT 'tel:18001234567';
  ALTER TABLE "pages_locales" ADD COLUMN "faq_header_title" varchar DEFAULT 'Frequently Asked Questions';
  ALTER TABLE "pages_locales" ADD COLUMN "faq_header_subtitle" varchar DEFAULT 'Find answers to common questions about our services. Can''t find what you''re looking for? Our support team is here to help.';
  ALTER TABLE "pages_locales" ADD COLUMN "support_title" varchar DEFAULT 'Still have questions?';
  ALTER TABLE "pages_locales" ADD COLUMN "support_description" varchar DEFAULT 'Our customer support team is available 24/7 to assist you with any questions or concerns.';
  ALTER TABLE "pages_locales" ADD COLUMN "chat_button_label" varchar DEFAULT 'Chat with Support';
  ALTER TABLE "pages_locales" ADD COLUMN "call_button_label" varchar DEFAULT 'Call 1800-123-4567';
  ALTER TABLE "pages_locales" ADD COLUMN "legal_header_title" varchar DEFAULT 'Legal & Compliance';
  ALTER TABLE "pages_locales" ADD COLUMN "legal_header_subtitle" varchar DEFAULT 'Transparency and compliance are at the heart of our operations';
  ALTER TABLE "pages_locales" ADD COLUMN "regulatory_title" varchar DEFAULT 'Regulatory Information';
  ALTER TABLE "pages_locales" ADD COLUMN "regulatory_subtitle" varchar DEFAULT 'Our licenses and certifications';
  ALTER TABLE "pages_locales" ADD COLUMN "documents_title" varchar DEFAULT 'Legal Documents';
  ALTER TABLE "pages_locales" ADD COLUMN "documents_subtitle" varchar DEFAULT 'Access our policies and legal documentation';
  ALTER TABLE "pages_locales" ADD COLUMN "notices_title" varchar DEFAULT 'Important Notices';
  ALTER TABLE "_pages_v" ADD COLUMN "version_phone_url" varchar DEFAULT 'tel:18001234567';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_faq_header_title" varchar DEFAULT 'Frequently Asked Questions';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_faq_header_subtitle" varchar DEFAULT 'Find answers to common questions about our services. Can''t find what you''re looking for? Our support team is here to help.';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_support_title" varchar DEFAULT 'Still have questions?';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_support_description" varchar DEFAULT 'Our customer support team is available 24/7 to assist you with any questions or concerns.';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_chat_button_label" varchar DEFAULT 'Chat with Support';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_call_button_label" varchar DEFAULT 'Call 1800-123-4567';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_legal_header_title" varchar DEFAULT 'Legal & Compliance';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_legal_header_subtitle" varchar DEFAULT 'Transparency and compliance are at the heart of our operations';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_regulatory_title" varchar DEFAULT 'Regulatory Information';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_regulatory_subtitle" varchar DEFAULT 'Our licenses and certifications';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_documents_title" varchar DEFAULT 'Legal Documents';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_documents_subtitle" varchar DEFAULT 'Access our policies and legal documentation';
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_notices_title" varchar DEFAULT 'Important Notices';
  ALTER TABLE "pages_faq_categories_questions_locales" ADD CONSTRAINT "pages_faq_categories_questions_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_faq_categories_questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_faq_categories_locales" ADD CONSTRAINT "pages_faq_categories_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_faq_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_regulatory_info_locales" ADD CONSTRAINT "pages_regulatory_info_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_regulatory_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_documents_locales" ADD CONSTRAINT "pages_documents_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_important_notices_locales" ADD CONSTRAINT "pages_important_notices_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_important_notices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_faq_categories_questions_locales" ADD CONSTRAINT "_pages_v_version_faq_categories_questions_locales_pare_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_faq_categories_questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_faq_categories_locales" ADD CONSTRAINT "_pages_v_version_faq_categories_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_faq_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_regulatory_info_locales" ADD CONSTRAINT "_pages_v_version_regulatory_info_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_regulatory_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_documents_locales" ADD CONSTRAINT "_pages_v_version_documents_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_important_notices_locales" ADD CONSTRAINT "_pages_v_version_important_notices_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_important_notices"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "pages_faq_categories_questions_locales_locale_parent_id_u_10" ON "pages_faq_categories_questions_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_faq_categories_locales_locale_parent_id_unique_10" ON "pages_faq_categories_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_regulatory_info_locales_locale_parent_id_unique_10" ON "pages_regulatory_info_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_documents_locales_locale_parent_id_unique_10" ON "pages_documents_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_important_notices_locales_locale_parent_id_unique_10" ON "pages_important_notices_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_faq_categories_questions_locales_locale__10" ON "_pages_v_version_faq_categories_questions_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_faq_categories_locales_locale_parent_id__10" ON "_pages_v_version_faq_categories_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_regulatory_info_locales_locale_parent_id_10" ON "_pages_v_version_regulatory_info_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_documents_locales_locale_parent_id_uniqu_10" ON "_pages_v_version_documents_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_important_notices_locales_locale_parent__10" ON "_pages_v_version_important_notices_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "pages_faq_categories_questions" DROP COLUMN "question";
  ALTER TABLE "pages_faq_categories_questions" DROP COLUMN "answer";
  ALTER TABLE "pages_faq_categories" DROP COLUMN "category_name";
  ALTER TABLE "pages_regulatory_info" DROP COLUMN "title";
  ALTER TABLE "pages_regulatory_info" DROP COLUMN "details";
  ALTER TABLE "pages_regulatory_info" DROP COLUMN "validity";
  ALTER TABLE "pages_documents" DROP COLUMN "title";
  ALTER TABLE "pages_documents" DROP COLUMN "description";
  ALTER TABLE "pages_documents" DROP COLUMN "category";
  ALTER TABLE "pages_documents" DROP COLUMN "last_updated";
  ALTER TABLE "pages_important_notices" DROP COLUMN "title";
  ALTER TABLE "pages_important_notices" DROP COLUMN "description";
  ALTER TABLE "pages" DROP COLUMN "faq_header_title";
  ALTER TABLE "pages" DROP COLUMN "faq_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "legal_header_title";
  ALTER TABLE "pages" DROP COLUMN "legal_header_subtitle";
  ALTER TABLE "_pages_v_version_faq_categories_questions" DROP COLUMN "question";
  ALTER TABLE "_pages_v_version_faq_categories_questions" DROP COLUMN "answer";
  ALTER TABLE "_pages_v_version_faq_categories" DROP COLUMN "category_name";
  ALTER TABLE "_pages_v_version_regulatory_info" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_regulatory_info" DROP COLUMN "details";
  ALTER TABLE "_pages_v_version_regulatory_info" DROP COLUMN "validity";
  ALTER TABLE "_pages_v_version_documents" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_documents" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_documents" DROP COLUMN "category";
  ALTER TABLE "_pages_v_version_documents" DROP COLUMN "last_updated";
  ALTER TABLE "_pages_v_version_important_notices" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_important_notices" DROP COLUMN "description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_faq_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_faq_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_legal_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_legal_header_subtitle";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_faq_categories_questions_locales" CASCADE;
  DROP TABLE "pages_faq_categories_locales" CASCADE;
  DROP TABLE "pages_regulatory_info_locales" CASCADE;
  DROP TABLE "pages_documents_locales" CASCADE;
  DROP TABLE "pages_important_notices_locales" CASCADE;
  DROP TABLE "_pages_v_version_faq_categories_questions_locales" CASCADE;
  DROP TABLE "_pages_v_version_faq_categories_locales" CASCADE;
  DROP TABLE "_pages_v_version_regulatory_info_locales" CASCADE;
  DROP TABLE "_pages_v_version_documents_locales" CASCADE;
  DROP TABLE "_pages_v_version_important_notices_locales" CASCADE;
  ALTER TABLE "pages_faq_categories_questions" ADD COLUMN "question" varchar;
  ALTER TABLE "pages_faq_categories_questions" ADD COLUMN "answer" varchar;
  ALTER TABLE "pages_faq_categories" ADD COLUMN "category_name" varchar;
  ALTER TABLE "pages_regulatory_info" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_regulatory_info" ADD COLUMN "details" varchar;
  ALTER TABLE "pages_regulatory_info" ADD COLUMN "validity" varchar;
  ALTER TABLE "pages_documents" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_documents" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_documents" ADD COLUMN "category" varchar;
  ALTER TABLE "pages_documents" ADD COLUMN "last_updated" varchar;
  ALTER TABLE "pages_important_notices" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_important_notices" ADD COLUMN "description" varchar;
  ALTER TABLE "pages" ADD COLUMN "faq_header_title" varchar DEFAULT 'Frequently Asked Questions';
  ALTER TABLE "pages" ADD COLUMN "faq_header_subtitle" varchar DEFAULT 'Find answers to common questions about our services. Can''t find what you''re looking for? Our support team is here to help.';
  ALTER TABLE "pages" ADD COLUMN "legal_header_title" varchar DEFAULT 'Legal & Compliance';
  ALTER TABLE "pages" ADD COLUMN "legal_header_subtitle" varchar DEFAULT 'Transparency and compliance are at the heart of our operations';
  ALTER TABLE "_pages_v_version_faq_categories_questions" ADD COLUMN "question" varchar;
  ALTER TABLE "_pages_v_version_faq_categories_questions" ADD COLUMN "answer" varchar;
  ALTER TABLE "_pages_v_version_faq_categories" ADD COLUMN "category_name" varchar;
  ALTER TABLE "_pages_v_version_regulatory_info" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_regulatory_info" ADD COLUMN "details" varchar;
  ALTER TABLE "_pages_v_version_regulatory_info" ADD COLUMN "validity" varchar;
  ALTER TABLE "_pages_v_version_documents" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_documents" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_documents" ADD COLUMN "category" varchar;
  ALTER TABLE "_pages_v_version_documents" ADD COLUMN "last_updated" varchar;
  ALTER TABLE "_pages_v_version_important_notices" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_important_notices" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_faq_header_title" varchar DEFAULT 'Frequently Asked Questions';
  ALTER TABLE "_pages_v" ADD COLUMN "version_faq_header_subtitle" varchar DEFAULT 'Find answers to common questions about our services. Can''t find what you''re looking for? Our support team is here to help.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_legal_header_title" varchar DEFAULT 'Legal & Compliance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_legal_header_subtitle" varchar DEFAULT 'Transparency and compliance are at the heart of our operations';
  ALTER TABLE "pages" DROP COLUMN "phone_url";
  ALTER TABLE "pages_locales" DROP COLUMN "faq_header_title";
  ALTER TABLE "pages_locales" DROP COLUMN "faq_header_subtitle";
  ALTER TABLE "pages_locales" DROP COLUMN "support_title";
  ALTER TABLE "pages_locales" DROP COLUMN "support_description";
  ALTER TABLE "pages_locales" DROP COLUMN "chat_button_label";
  ALTER TABLE "pages_locales" DROP COLUMN "call_button_label";
  ALTER TABLE "pages_locales" DROP COLUMN "legal_header_title";
  ALTER TABLE "pages_locales" DROP COLUMN "legal_header_subtitle";
  ALTER TABLE "pages_locales" DROP COLUMN "regulatory_title";
  ALTER TABLE "pages_locales" DROP COLUMN "regulatory_subtitle";
  ALTER TABLE "pages_locales" DROP COLUMN "documents_title";
  ALTER TABLE "pages_locales" DROP COLUMN "documents_subtitle";
  ALTER TABLE "pages_locales" DROP COLUMN "notices_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_phone_url";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_faq_header_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_faq_header_subtitle";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_support_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_support_description";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_chat_button_label";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_call_button_label";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_legal_header_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_legal_header_subtitle";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_regulatory_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_regulatory_subtitle";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_documents_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_documents_subtitle";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_notices_title";`)
}
