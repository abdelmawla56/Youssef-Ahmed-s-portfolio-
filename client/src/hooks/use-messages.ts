import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { api } from "@shared/routes";
import { z } from "zod";

// Create a local type matching the input schema to avoid direct schema inference issues
// if @shared/routes types aren't fully resolved during generation.
type MessageInput = z.infer<typeof api.messages.create.input>;

export function useCreateMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const res = await fetch(api.messages.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Invalid form data");
        }
        throw new Error("Failed to send message. Please try again later.");
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: error.message,
      });
    }
  });
}
