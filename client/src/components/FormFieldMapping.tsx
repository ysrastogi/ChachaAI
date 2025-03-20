import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import type { FormMapping } from "@shared/schema";

export function FormFieldMapping() {
  const { toast } = useToast();
  const [platform, setPlatform] = useState("workday");
  
  const { data: mappings } = useQuery<FormMapping[]>({ 
    queryKey: [`/api/form-mappings/${platform}`]
  });

  const handleCustomMapping = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "START_MAPPING" });
        
        toast({
          title: "Mapping Mode",
          description: "Click on form fields to create custom mappings"
        });
      }
    });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">Field Mappings</h3>
            <Badge variant="outline">{platform}</Badge>
          </div>

          {mappings?.length ? (
            <div className="space-y-2">
              {mappings.map((mapping) => (
                <div 
                  key={mapping.id}
                  className="text-sm flex justify-between items-center"
                >
                  <span className="text-muted-foreground">
                    {mapping.fieldName}
                  </span>
                  <span className="font-medium">
                    {mapping.mappedField}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No custom mappings defined
            </p>
          )}

          <Button 
            variant="outline" 
            size="sm"
            className="w-full"
            onClick={handleCustomMapping}
          >
            Add Custom Mapping
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
