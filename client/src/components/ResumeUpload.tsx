import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { parseResume } from "@/lib/resumeParser";

export function ResumeUpload() {
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setProgress(30);
      const parsedData = await parseResume(file);
      setProgress(100);
      
      toast({
        title: "Resume Parsed",
        description: "Your resume has been successfully processed"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to parse resume",
        variant: "destructive"
      });
    } finally {
      setProgress(0);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => document.getElementById("resume-upload")?.click()}
        >
          Upload Resume
        </Button>
        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      
      {progress > 0 && (
        <Progress value={progress} className="w-full" />
      )}
    </div>
  );
}
