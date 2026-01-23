import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_job_openings_status" AS ENUM('Open', 'Closed');
  CREATE TYPE "public"."enum__pages_v_version_job_openings_status" AS ENUM('Open', 'Closed');
  CREATE TYPE "public"."enum_pages_journey_cards_icon" AS ENUM('Book', 'Users', 'Briefcase', 'BookOpen', 'FileCheck', 'Calculator', 'Phone');
  CREATE TYPE "public"."enum_pages_quick_tools_icon" AS ENUM('Calculator', 'Car', 'FileCheck', 'TrendingUp');
  CREATE TYPE "public"."enum_pages_badges_icon" AS ENUM('Shield', 'CheckCircle', 'Award');
  CREATE TYPE "public"."enum_pages_scrolling_notices_type" AS ENUM('announcement', 'warning', 'info');
  CREATE TYPE "public"."enum__pages_v_version_journey_cards_icon" AS ENUM('Book', 'Users', 'Briefcase', 'BookOpen', 'FileCheck', 'Calculator', 'Phone');
  CREATE TYPE "public"."enum__pages_v_version_quick_tools_icon" AS ENUM('Calculator', 'Car', 'FileCheck', 'TrendingUp');
  CREATE TYPE "public"."enum__pages_v_version_badges_icon" AS ENUM('Shield', 'CheckCircle', 'Award');
  CREATE TYPE "public"."enum__pages_v_version_scrolling_notices_type" AS ENUM('announcement', 'warning', 'info');
  CREATE TABLE "pages_floating_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_journey_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_journey_cards_icon" DEFAULT 'Book',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar DEFAULT 'Explore',
  	"link" varchar
  );
  
  CREATE TABLE "pages_quick_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Calculate Now',
  	"icon" "enum_pages_quick_tools_icon" DEFAULT 'Calculator'
  );
  
  CREATE TABLE "pages_trust_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"sub_label" varchar
  );
  
  CREATE TABLE "pages_badges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"sub_title" varchar,
  	"icon" "enum_pages_badges_icon" DEFAULT 'Shield'
  );
  
  CREATE TABLE "pages_scrolling_notices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" varchar,
  	"type" "enum_pages_scrolling_notices_type" DEFAULT 'announcement',
  	"expiry_date" timestamp(3) with time zone
  );
  
  CREATE TABLE "_pages_v_version_floating_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_journey_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_journey_cards_icon" DEFAULT 'Book',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar DEFAULT 'Explore',
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_quick_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Calculate Now',
  	"icon" "enum__pages_v_version_quick_tools_icon" DEFAULT 'Calculator',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_trust_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"sub_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_badges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"sub_title" varchar,
  	"icon" "enum__pages_v_version_badges_icon" DEFAULT 'Shield',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_scrolling_notices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"message" varchar,
  	"type" "enum__pages_v_version_scrolling_notices_type" DEFAULT 'announcement',
  	"expiry_date" timestamp(3) with time zone,
  	"_uuid" varchar
  );
  
  ALTER TABLE "form_dashboards" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "form_dashboards" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_parent_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_pages_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_posts_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_categories_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_parent_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_pages_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_posts_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_categories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_form_dashboards_fk";
  
  DROP INDEX "pages_directors_photo_idx";
  DROP INDEX "pages_leadership_photo_idx";
  DROP INDEX "pages_products_image_idx";
  DROP INDEX "pages_hero_hero_media_idx";
  DROP INDEX "pages_contact_form_idx";
  DROP INDEX "pages_meta_meta_image_idx";
  DROP INDEX "pages_slug_idx";
  DROP INDEX "pages_updated_at_idx";
  DROP INDEX "pages_created_at_idx";
  DROP INDEX "pages__status_idx";
  DROP INDEX "pages_rels_order_idx";
  DROP INDEX "pages_rels_parent_idx";
  DROP INDEX "pages_rels_path_idx";
  DROP INDEX "pages_rels_pages_id_idx";
  DROP INDEX "pages_rels_posts_id_idx";
  DROP INDEX "pages_rels_categories_id_idx";
  DROP INDEX "_pages_v_version_directors_photo_idx";
  DROP INDEX "_pages_v_version_leadership_photo_idx";
  DROP INDEX "_pages_v_version_products_image_idx";
  DROP INDEX "_pages_v_parent_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_media_idx";
  DROP INDEX "_pages_v_version_version_contact_form_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_idx";
  DROP INDEX "_pages_v_version_version_slug_idx";
  DROP INDEX "_pages_v_version_version_updated_at_idx";
  DROP INDEX "_pages_v_version_version_created_at_idx";
  DROP INDEX "_pages_v_version_version__status_idx";
  DROP INDEX "_pages_v_created_at_idx";
  DROP INDEX "_pages_v_updated_at_idx";
  DROP INDEX "_pages_v_latest_idx";
  DROP INDEX "_pages_v_autosave_idx";
  DROP INDEX "_pages_v_rels_order_idx";
  DROP INDEX "_pages_v_rels_parent_idx";
  DROP INDEX "_pages_v_rels_path_idx";
  DROP INDEX "_pages_v_rels_pages_id_idx";
  DROP INDEX "_pages_v_rels_posts_id_idx";
  DROP INDEX "_pages_v_rels_categories_id_idx";
  DROP INDEX "form_submissions_form_idx";
  DROP INDEX "form_submissions_resume_idx";
  DROP INDEX "form_submissions_updated_at_idx";
  DROP INDEX "form_submissions_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_form_dashboards_id_idx";
  ALTER TABLE "pages_job_openings" ADD COLUMN "status" "enum_pages_job_openings_status" DEFAULT 'Open';
  ALTER TABLE "pages_job_openings" ADD COLUMN "expiry_date" timestamp(3) with time zone;
  ALTER TABLE "pages" ADD COLUMN "hero_badge1" varchar DEFAULT 'NBFC Licensed';
  ALTER TABLE "pages" ADD COLUMN "hero_badge2" varchar DEFAULT 'Secure & Trusted';
  ALTER TABLE "pages" ADD COLUMN "hero_rating" varchar DEFAULT '4.9/5';
  ALTER TABLE "pages" ADD COLUMN "hero_title_part1" varchar DEFAULT 'Smart Finance';
  ALTER TABLE "pages" ADD COLUMN "hero_title_part2" varchar DEFAULT 'Made Simple';
  ALTER TABLE "pages" ADD COLUMN "hero_subtitle" varchar DEFAULT 'Instant BNPL solutions and vehicle financing with transparent terms...';
  ALTER TABLE "pages" ADD COLUMN "journey_title" varchar DEFAULT 'Your Financial Journey Simplified';
  ALTER TABLE "pages" ADD COLUMN "journey_description" varchar DEFAULT 'Discover our comprehensive financial services...';
  ALTER TABLE "pages" ADD COLUMN "quick_tools_title" varchar DEFAULT 'Quick Tools';
  ALTER TABLE "pages" ADD COLUMN "trust_title" varchar DEFAULT 'Trusted by Thousands';
  ALTER TABLE "pages" ADD COLUMN "certification_title" varchar DEFAULT 'Licensed & Certified';
  ALTER TABLE "pages" ADD COLUMN "home_products_config_title" varchar DEFAULT 'Our Final Solutions';
  ALTER TABLE "pages" ADD COLUMN "home_products_config_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "home_products_config_min_rows" numeric DEFAULT 2;
  ALTER TABLE "pages" ADD COLUMN "home_products_config_max_rows" numeric DEFAULT 4;
  ALTER TABLE "pages" ADD COLUMN "home_testimonials_config_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "pages" ADD COLUMN "home_testimonials_config_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "home_testimonials_config_min_rows" numeric DEFAULT 3;
  ALTER TABLE "pages" ADD COLUMN "home_testimonials_config_max_rows" numeric DEFAULT 10;
  ALTER TABLE "pages" ADD COLUMN "home_knowledge_config_title" varchar DEFAULT 'Latest News & Updates';
  ALTER TABLE "pages" ADD COLUMN "home_knowledge_config_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "home_knowledge_config_min_rows" numeric DEFAULT 3;
  ALTER TABLE "pages" ADD COLUMN "home_knowledge_config_max_rows" numeric DEFAULT 6;
  ALTER TABLE "_pages_v_version_job_openings" ADD COLUMN "status" "enum__pages_v_version_job_openings_status" DEFAULT 'Open';
  ALTER TABLE "_pages_v_version_job_openings" ADD COLUMN "expiry_date" timestamp(3) with time zone;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_badge1" varchar DEFAULT 'NBFC Licensed';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_badge2" varchar DEFAULT 'Secure & Trusted';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_rating" varchar DEFAULT '4.9/5';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_title_part1" varchar DEFAULT 'Smart Finance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_title_part2" varchar DEFAULT 'Made Simple';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_subtitle" varchar DEFAULT 'Instant BNPL solutions and vehicle financing with transparent terms...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_journey_title" varchar DEFAULT 'Your Financial Journey Simplified';
  ALTER TABLE "_pages_v" ADD COLUMN "version_journey_description" varchar DEFAULT 'Discover our comprehensive financial services...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_quick_tools_title" varchar DEFAULT 'Quick Tools';
  ALTER TABLE "_pages_v" ADD COLUMN "version_trust_title" varchar DEFAULT 'Trusted by Thousands';
  ALTER TABLE "_pages_v" ADD COLUMN "version_certification_title" varchar DEFAULT 'Licensed & Certified';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_products_config_title" varchar DEFAULT 'Our Final Solutions';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_products_config_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_products_config_min_rows" numeric DEFAULT 2;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_products_config_max_rows" numeric DEFAULT 4;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_testimonials_config_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_testimonials_config_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_testimonials_config_min_rows" numeric DEFAULT 3;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_testimonials_config_max_rows" numeric DEFAULT 10;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_knowledge_config_title" varchar DEFAULT 'Latest News & Updates';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_knowledge_config_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_knowledge_config_min_rows" numeric DEFAULT 3;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_knowledge_config_max_rows" numeric DEFAULT 6;
  ALTER TABLE "search_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "pages_floating_features" ADD CONSTRAINT "pages_floating_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_stats" ADD CONSTRAINT "pages_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_journey_cards" ADD CONSTRAINT "pages_journey_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_quick_tools" ADD CONSTRAINT "pages_quick_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_trust_stats" ADD CONSTRAINT "pages_trust_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_badges" ADD CONSTRAINT "pages_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_scrolling_notices" ADD CONSTRAINT "pages_scrolling_notices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_floating_features" ADD CONSTRAINT "_pages_v_version_floating_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_stats" ADD CONSTRAINT "_pages_v_version_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_journey_cards" ADD CONSTRAINT "_pages_v_version_journey_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_quick_tools" ADD CONSTRAINT "_pages_v_version_quick_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_trust_stats" ADD CONSTRAINT "_pages_v_version_trust_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_badges" ADD CONSTRAINT "_pages_v_version_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_scrolling_notices" ADD CONSTRAINT "_pages_v_version_scrolling_notices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_floating_features_order_idx" ON "pages_floating_features" USING btree ("_order");
  CREATE INDEX "pages_floating_features_parent_id_idx" ON "pages_floating_features" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_stats_order_idx" ON "pages_hero_stats" USING btree ("_order");
  CREATE INDEX "pages_hero_stats_parent_id_idx" ON "pages_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_journey_cards_order_idx" ON "pages_journey_cards" USING btree ("_order");
  CREATE INDEX "pages_journey_cards_parent_id_idx" ON "pages_journey_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_quick_tools_order_idx" ON "pages_quick_tools" USING btree ("_order");
  CREATE INDEX "pages_quick_tools_parent_id_idx" ON "pages_quick_tools" USING btree ("_parent_id");
  CREATE INDEX "pages_trust_stats_order_idx" ON "pages_trust_stats" USING btree ("_order");
  CREATE INDEX "pages_trust_stats_parent_id_idx" ON "pages_trust_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_badges_order_idx" ON "pages_badges" USING btree ("_order");
  CREATE INDEX "pages_badges_parent_id_idx" ON "pages_badges" USING btree ("_parent_id");
  CREATE INDEX "pages_scrolling_notices_order_idx" ON "pages_scrolling_notices" USING btree ("_order");
  CREATE INDEX "pages_scrolling_notices_parent_id_idx" ON "pages_scrolling_notices" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_floating_features_order_idx" ON "_pages_v_version_floating_features" USING btree ("_order");
  CREATE INDEX "_pages_v_version_floating_features_parent_id_idx" ON "_pages_v_version_floating_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_stats_order_idx" ON "_pages_v_version_hero_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_stats_parent_id_idx" ON "_pages_v_version_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_journey_cards_order_idx" ON "_pages_v_version_journey_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_version_journey_cards_parent_id_idx" ON "_pages_v_version_journey_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_quick_tools_order_idx" ON "_pages_v_version_quick_tools" USING btree ("_order");
  CREATE INDEX "_pages_v_version_quick_tools_parent_id_idx" ON "_pages_v_version_quick_tools" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_trust_stats_order_idx" ON "_pages_v_version_trust_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_version_trust_stats_parent_id_idx" ON "_pages_v_version_trust_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_badges_order_idx" ON "_pages_v_version_badges" USING btree ("_order");
  CREATE INDEX "_pages_v_version_badges_parent_id_idx" ON "_pages_v_version_badges" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_scrolling_notices_order_idx" ON "_pages_v_version_scrolling_notices" USING btree ("_order");
  CREATE INDEX "_pages_v_version_scrolling_notices_parent_id_idx" ON "_pages_v_version_scrolling_notices" USING btree ("_parent_id");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_10_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_10_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_10_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_10_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_10_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_10_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_career_applications_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_service_inquiries_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_directors_photo_10_idx" ON "pages_directors" USING btree ("photo_id");
  CREATE INDEX "pages_leadership_photo_10_idx" ON "pages_leadership" USING btree ("photo_id");
  CREATE INDEX "pages_products_image_10_idx" ON "pages_products" USING btree ("image_id");
  CREATE INDEX "pages_hero_hero_media_10_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_contact_form_10_idx" ON "pages" USING btree ("contact_form_id");
  CREATE INDEX "pages_meta_meta_image_10_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_10_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_10_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_10_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_10_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_10_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_10_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_10_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_10_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_10_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_version_directors_photo_10_idx" ON "_pages_v_version_directors" USING btree ("photo_id");
  CREATE INDEX "_pages_v_version_leadership_photo_10_idx" ON "_pages_v_version_leadership" USING btree ("photo_id");
  CREATE INDEX "_pages_v_version_products_image_10_idx" ON "_pages_v_version_products" USING btree ("image_id");
  CREATE INDEX "_pages_v_parent_10_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_10_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_version_contact_form_10_idx" ON "_pages_v" USING btree ("version_contact_form_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_10_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_10_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_10_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_10_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_10_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_10_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_10_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_10_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_10_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_10_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_10_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_10_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_10_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_10_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "form_submissions_form_3_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_resume_1_idx" ON "form_submissions" USING btree ("resume_id");
  CREATE INDEX "form_submissions_updated_at_3_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_3_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "search_rels_pages_id_idx" ON "search_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_1_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_2_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_3_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  ALTER TABLE "pages_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "form_dashboards_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "form_dashboards" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"target_form_id" integer NOT NULL,
  	"priority" numeric DEFAULT 10,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "pages_floating_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_hero_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_journey_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_quick_tools" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_trust_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_badges" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_scrolling_notices" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_floating_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_journey_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_quick_tools" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_trust_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_badges" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_scrolling_notices" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_floating_features" CASCADE;
  DROP TABLE "pages_hero_stats" CASCADE;
  DROP TABLE "pages_journey_cards" CASCADE;
  DROP TABLE "pages_quick_tools" CASCADE;
  DROP TABLE "pages_trust_stats" CASCADE;
  DROP TABLE "pages_badges" CASCADE;
  DROP TABLE "pages_scrolling_notices" CASCADE;
  DROP TABLE "_pages_v_version_floating_features" CASCADE;
  DROP TABLE "_pages_v_version_hero_stats" CASCADE;
  DROP TABLE "_pages_v_version_journey_cards" CASCADE;
  DROP TABLE "_pages_v_version_quick_tools" CASCADE;
  DROP TABLE "_pages_v_version_trust_stats" CASCADE;
  DROP TABLE "_pages_v_version_badges" CASCADE;
  DROP TABLE "_pages_v_version_scrolling_notices" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_parent_10_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_pages_10_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_posts_10_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_parent_10_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_pages_10_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_posts_10_fk";
  
  ALTER TABLE "search_rels" DROP CONSTRAINT "search_rels_pages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_career_applications_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_service_inquiries_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk";
  
  DROP INDEX "pages_directors_photo_10_idx";
  DROP INDEX "pages_leadership_photo_10_idx";
  DROP INDEX "pages_products_image_10_idx";
  DROP INDEX "pages_hero_hero_media_10_idx";
  DROP INDEX "pages_contact_form_10_idx";
  DROP INDEX "pages_meta_meta_image_10_idx";
  DROP INDEX "pages_slug_10_idx";
  DROP INDEX "pages_updated_at_10_idx";
  DROP INDEX "pages_created_at_10_idx";
  DROP INDEX "pages__status_10_idx";
  DROP INDEX "pages_rels_order_10_idx";
  DROP INDEX "pages_rels_parent_10_idx";
  DROP INDEX "pages_rels_path_10_idx";
  DROP INDEX "pages_rels_pages_id_10_idx";
  DROP INDEX "pages_rels_posts_id_10_idx";
  DROP INDEX "_pages_v_version_directors_photo_10_idx";
  DROP INDEX "_pages_v_version_leadership_photo_10_idx";
  DROP INDEX "_pages_v_version_products_image_10_idx";
  DROP INDEX "_pages_v_parent_10_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_media_10_idx";
  DROP INDEX "_pages_v_version_version_contact_form_10_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_10_idx";
  DROP INDEX "_pages_v_version_version_slug_10_idx";
  DROP INDEX "_pages_v_version_version_updated_at_10_idx";
  DROP INDEX "_pages_v_version_version_created_at_10_idx";
  DROP INDEX "_pages_v_version_version__status_10_idx";
  DROP INDEX "_pages_v_created_at_10_idx";
  DROP INDEX "_pages_v_updated_at_10_idx";
  DROP INDEX "_pages_v_latest_10_idx";
  DROP INDEX "_pages_v_autosave_10_idx";
  DROP INDEX "_pages_v_rels_order_10_idx";
  DROP INDEX "_pages_v_rels_parent_10_idx";
  DROP INDEX "_pages_v_rels_path_10_idx";
  DROP INDEX "_pages_v_rels_pages_id_10_idx";
  DROP INDEX "_pages_v_rels_posts_id_10_idx";
  DROP INDEX "form_submissions_form_3_idx";
  DROP INDEX "form_submissions_resume_1_idx";
  DROP INDEX "form_submissions_updated_at_3_idx";
  DROP INDEX "form_submissions_created_at_3_idx";
  DROP INDEX "search_rels_pages_id_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_1_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_2_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_3_idx";
  ALTER TABLE "pages_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "form_dashboards_id" integer;
  ALTER TABLE "form_dashboards" ADD CONSTRAINT "form_dashboards_target_form_id_forms_id_fk" FOREIGN KEY ("target_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "form_dashboards_target_form_idx" ON "form_dashboards" USING btree ("target_form_id");
  CREATE INDEX "form_dashboards_updated_at_idx" ON "form_dashboards" USING btree ("updated_at");
  CREATE INDEX "form_dashboards_created_at_idx" ON "form_dashboards" USING btree ("created_at");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_dashboards_fk" FOREIGN KEY ("form_dashboards_id") REFERENCES "public"."form_dashboards"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_directors_photo_idx" ON "pages_directors" USING btree ("photo_id");
  CREATE INDEX "pages_leadership_photo_idx" ON "pages_leadership" USING btree ("photo_id");
  CREATE INDEX "pages_products_image_idx" ON "pages_products" USING btree ("image_id");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_contact_form_idx" ON "pages" USING btree ("contact_form_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_version_directors_photo_idx" ON "_pages_v_version_directors" USING btree ("photo_id");
  CREATE INDEX "_pages_v_version_leadership_photo_idx" ON "_pages_v_version_leadership" USING btree ("photo_id");
  CREATE INDEX "_pages_v_version_products_image_idx" ON "_pages_v_version_products" USING btree ("image_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_version_contact_form_idx" ON "_pages_v" USING btree ("version_contact_form_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_resume_idx" ON "form_submissions" USING btree ("resume_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_form_dashboards_id_idx" ON "payload_locked_documents_rels" USING btree ("form_dashboards_id");
  ALTER TABLE "pages_job_openings" DROP COLUMN "status";
  ALTER TABLE "pages_job_openings" DROP COLUMN "expiry_date";
  ALTER TABLE "pages" DROP COLUMN "hero_badge1";
  ALTER TABLE "pages" DROP COLUMN "hero_badge2";
  ALTER TABLE "pages" DROP COLUMN "hero_rating";
  ALTER TABLE "pages" DROP COLUMN "hero_title_part1";
  ALTER TABLE "pages" DROP COLUMN "hero_title_part2";
  ALTER TABLE "pages" DROP COLUMN "hero_subtitle";
  ALTER TABLE "pages" DROP COLUMN "journey_title";
  ALTER TABLE "pages" DROP COLUMN "journey_description";
  ALTER TABLE "pages" DROP COLUMN "quick_tools_title";
  ALTER TABLE "pages" DROP COLUMN "trust_title";
  ALTER TABLE "pages" DROP COLUMN "certification_title";
  ALTER TABLE "pages" DROP COLUMN "home_products_config_title";
  ALTER TABLE "pages" DROP COLUMN "home_products_config_description";
  ALTER TABLE "pages" DROP COLUMN "home_products_config_min_rows";
  ALTER TABLE "pages" DROP COLUMN "home_products_config_max_rows";
  ALTER TABLE "pages" DROP COLUMN "home_testimonials_config_title";
  ALTER TABLE "pages" DROP COLUMN "home_testimonials_config_description";
  ALTER TABLE "pages" DROP COLUMN "home_testimonials_config_min_rows";
  ALTER TABLE "pages" DROP COLUMN "home_testimonials_config_max_rows";
  ALTER TABLE "pages" DROP COLUMN "home_knowledge_config_title";
  ALTER TABLE "pages" DROP COLUMN "home_knowledge_config_description";
  ALTER TABLE "pages" DROP COLUMN "home_knowledge_config_min_rows";
  ALTER TABLE "pages" DROP COLUMN "home_knowledge_config_max_rows";
  ALTER TABLE "_pages_v_version_job_openings" DROP COLUMN "status";
  ALTER TABLE "_pages_v_version_job_openings" DROP COLUMN "expiry_date";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_badge1";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_badge2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_rating";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_title_part1";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_title_part2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_journey_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_journey_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_quick_tools_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_trust_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_certification_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_products_config_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_products_config_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_products_config_min_rows";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_products_config_max_rows";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_testimonials_config_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_testimonials_config_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_testimonials_config_min_rows";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_testimonials_config_max_rows";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_knowledge_config_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_knowledge_config_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_knowledge_config_min_rows";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_knowledge_config_max_rows";
  ALTER TABLE "search_rels" DROP COLUMN "pages_id";
  DROP TYPE "public"."enum_pages_job_openings_status";
  DROP TYPE "public"."enum__pages_v_version_job_openings_status";
  DROP TYPE "public"."enum_pages_journey_cards_icon";
  DROP TYPE "public"."enum_pages_quick_tools_icon";
  DROP TYPE "public"."enum_pages_badges_icon";
  DROP TYPE "public"."enum_pages_scrolling_notices_type";
  DROP TYPE "public"."enum__pages_v_version_journey_cards_icon";
  DROP TYPE "public"."enum__pages_v_version_quick_tools_icon";
  DROP TYPE "public"."enum__pages_v_version_badges_icon";
  DROP TYPE "public"."enum__pages_v_version_scrolling_notices_type";`)
}
