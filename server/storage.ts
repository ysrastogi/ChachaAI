import {
  type User,
  type InsertUser,
  type WorkExperience,
  type InsertWorkExperience,
  type Education,
  type InsertEducation,
  type FormMapping,
  type InsertFormMapping,
  type Application,
  type InsertApplication,
  users,
  workExperience,
  education,
  formMappings,
  applications
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<User>): Promise<User>;

  // Work experience operations
  getWorkExperience(userId: number): Promise<WorkExperience[]>;
  addWorkExperience(exp: InsertWorkExperience): Promise<WorkExperience>;

  // Education operations
  getEducation(userId: number): Promise<Education[]>;
  addEducation(edu: InsertEducation): Promise<Education>;

  // Form mapping operations
  getFormMappings(platform: string): Promise<FormMapping[]>;
  addFormMapping(mapping: InsertFormMapping): Promise<FormMapping>;

  // Application tracking operations
  getApplications(userId: number): Promise<Application[]>;
  getApplication(id: number): Promise<Application | undefined>;
  addApplication(app: InsertApplication): Promise<Application>;
  updateApplication(id: number, app: Partial<Application>): Promise<Application>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async createUser(user: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    const [updatedUser] = await db
      .update(users)
      .set(userData)
      .where(eq(users.id, id))
      .returning();

    if (!updatedUser) throw new Error("User not found");
    return updatedUser;
  }

  async getWorkExperience(userId: number): Promise<WorkExperience[]> {
    return db
      .select()
      .from(workExperience)
      .where(eq(workExperience.userId, userId));
  }

  async addWorkExperience(exp: InsertWorkExperience): Promise<WorkExperience> {
    const [newExp] = await db
      .insert(workExperience)
      .values(exp)
      .returning();
    return newExp;
  }

  async getEducation(userId: number): Promise<Education[]> {
    return db
      .select()
      .from(education)
      .where(eq(education.userId, userId));
  }

  async addEducation(edu: InsertEducation): Promise<Education> {
    const [newEdu] = await db
      .insert(education)
      .values(edu)
      .returning();
    return newEdu;
  }

  async getFormMappings(platform: string): Promise<FormMapping[]> {
    return db
      .select()
      .from(formMappings)
      .where(eq(formMappings.platform, platform));
  }

  async addFormMapping(mapping: InsertFormMapping): Promise<FormMapping> {
    const [newMapping] = await db
      .insert(formMappings)
      .values(mapping)
      .returning();
    return newMapping;
  }

  async getApplications(userId: number): Promise<Application[]> {
    return db
      .select()
      .from(applications)
      .where(eq(applications.userId, userId))
      .orderBy(desc(applications.applicationDate));
  }

  async getApplication(id: number): Promise<Application | undefined> {
    const [application] = await db
      .select()
      .from(applications)
      .where(eq(applications.id, id));
    return application;
  }

  async addApplication(app: InsertApplication): Promise<Application> {
    const [newApp] = await db
      .insert(applications)
      .values(app)
      .returning();
    return newApp;
  }

  async updateApplication(id: number, appData: Partial<Application>): Promise<Application> {
    const [updatedApp] = await db
      .update(applications)
      .set({
        ...appData,
        lastUpdated: new Date()
      })
      .where(eq(applications.id, id))
      .returning();

    if (!updatedApp) throw new Error("Application not found");
    return updatedApp;
  }
}

export const storage = new DatabaseStorage();