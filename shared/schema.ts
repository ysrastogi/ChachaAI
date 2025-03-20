import { pgTable, text, serial, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  professionalSummary: text("professional_summary"),
});

export const workExperience = pgTable("work_experience", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  company: text("company").notNull(),
  title: text("title").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  description: text("description").notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  school: text("school").notNull(),
  degree: text("degree").notNull(),
  field: text("field").notNull(),
  graduationDate: text("graduation_date").notNull(),
});

export const formMappings = pgTable("form_mappings", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  fieldName: text("field_name").notNull(),
  mappedField: text("mapped_field").notNull(),
});

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  platform: text("platform").notNull(),
  status: text("status").notNull().default("applied"),
  applicationDate: timestamp("application_date").notNull().defaultNow(),
  lastUpdated: timestamp("last_updated").notNull().defaultNow(),
  notes: text("notes"),
  url: text("url"),
});

export const insertUserSchema = createInsertSchema(users);
export const insertWorkExperienceSchema = createInsertSchema(workExperience);
export const insertEducationSchema = createInsertSchema(education);
export const insertFormMappingSchema = createInsertSchema(formMappings);

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  applicationDate: true,
  lastUpdated: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type WorkExperience = typeof workExperience.$inferSelect;
export type InsertWorkExperience = z.infer<typeof insertWorkExperienceSchema>;
export type Education = typeof education.$inferSelect;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type FormMapping = typeof formMappings.$inferSelect;
export type InsertFormMapping = z.infer<typeof insertFormMappingSchema>;

export type Application = typeof applications.$inferSelect;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;