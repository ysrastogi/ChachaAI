"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ResumeUpload } from "@/components/ResumeUpload";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertUserSchema, type InsertUser } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { LinkedInSync } from "@/components/linkedin-sync";

export default function Profile() {
  const { toast } = useToast();
  const { data: user } = useQuery({ 
    queryKey: ['/api/users/1']
  });

  const form = useForm<InsertUser>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: user || {
      name: "",
      email: "",
      phone: "",
      address: "",
      professionalSummary: ""
    }
  });

  const onSubmit = async (data: InsertUser) => {
    try {
      if (user) {
        await apiRequest("PATCH", `/api/users/${user.id}`, data);
      } else {
        await apiRequest("POST", "/api/users", data);
      }

      toast({
        title: "Success",
        description: "Profile saved successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save profile",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <LinkedInSync />

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="professionalSummary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Summary</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <ResumeUpload />

                <div className="flex justify-between gap-4">
                  <Link href="/">
                    <Button variant="outline" type="button">
                      Back
                    </Button>
                  </Link>
                  <Button type="submit">Save Profile</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}