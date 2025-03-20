import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { 
  insertUserSchema, 
  insertWorkExperienceSchema, 
  insertEducationSchema, 
  insertFormMappingSchema,
  insertApplicationSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express) {
  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: "Invalid user data" });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    const user = await storage.getUser(parseInt(req.params.id));
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  });

  app.patch("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.updateUser(parseInt(req.params.id), req.body);
      res.json(user);
    } catch (error) {
      res.status(404).json({ error: "User not found" });
    }
  });

  // Work experience routes
  app.post("/api/work-experience", async (req, res) => {
    try {
      const expData = insertWorkExperienceSchema.parse(req.body);
      const exp = await storage.addWorkExperience(expData);
      res.json(exp);
    } catch (error) {
      res.status(400).json({ error: "Invalid work experience data" });
    }
  });

  app.get("/api/work-experience/:userId", async (req, res) => {
    const experiences = await storage.getWorkExperience(parseInt(req.params.userId));
    res.json(experiences);
  });

  // Education routes
  app.post("/api/education", async (req, res) => {
    try {
      const eduData = insertEducationSchema.parse(req.body);
      const edu = await storage.addEducation(eduData);
      res.json(edu);
    } catch (error) {
      res.status(400).json({ error: "Invalid education data" });
    }
  });

  app.get("/api/education/:userId", async (req, res) => {
    const education = await storage.getEducation(parseInt(req.params.userId));
    res.json(education);
  });

  // Form mapping routes
  app.post("/api/form-mappings", async (req, res) => {
    try {
      const mappingData = insertFormMappingSchema.parse(req.body);
      const mapping = await storage.addFormMapping(mappingData);
      res.json(mapping);
    } catch (error) {
      res.status(400).json({ error: "Invalid form mapping data" });
    }
  });

  app.get("/api/form-mappings/:platform", async (req, res) => {
    const mappings = await storage.getFormMappings(req.params.platform);
    res.json(mappings);
  });

  // New application tracking routes
  app.get("/api/applications/:userId", async (req, res) => {
    const applications = await storage.getApplications(parseInt(req.params.userId));
    res.json(applications);
  });

  app.get("/api/applications/:userId/:id", async (req, res) => {
    const application = await storage.getApplication(parseInt(req.params.id));
    if (!application) {
      res.status(404).json({ error: "Application not found" });
      return;
    }
    res.json(application);
  });

  app.post("/api/applications", async (req, res) => {
    try {
      const appData = insertApplicationSchema.parse(req.body);
      const application = await storage.addApplication(appData);
      res.json(application);
    } catch (error) {
      res.status(400).json({ error: "Invalid application data" });
    }
  });

  app.patch("/api/applications/:id", async (req, res) => {
    try {
      const application = await storage.updateApplication(parseInt(req.params.id), req.body);
      res.json(application);
    } catch (error) {
      res.status(404).json({ error: "Application not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}