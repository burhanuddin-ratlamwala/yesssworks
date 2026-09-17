import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { LocationSlug } from "@/data/locations";
import { OFFICE_OPTIONS, officeLabel } from "@/data/office-options";
import { z } from "zod";

interface Props {
  trigger: ReactNode;
  defaultLocation?: LocationSlug;
}

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, { message: "Enter a valid phone number" }),
  seats: z.coerce.number().min(1).max(500),
  location: z.string().min(2).max(60),
});

export const BookTourDialog = ({ trigger, defaultLocation }: Props) => {
  const initialLabel = officeLabel(defaultLocation);
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      seats: String(fd.get("seats") || ""),
      location: String(fd.get("location") || ""),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast({ title: "Please check your details", description: parsed.error.issues[0]?.message ?? "Invalid input", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    // TODO: wire to Google Sheet + email notification (HubSpot / serverless)
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setOpen(false);
    navigate("/thank-you", {
      state: {
        ...parsed.data,
        company: "",
        message: "I'd like to book a free tour.",
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a free tour</DialogTitle>
          <DialogDescription>We'll confirm your slot within 1 working hour.</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div>
            <Label htmlFor="bt-name">Name *</Label>
            <Input id="bt-name" name="name" required maxLength={80} placeholder="Your full name" />
          </div>
          <div>
            <Label htmlFor="bt-email">Work email *</Label>
            <Input id="bt-email" name="email" type="email" required maxLength={160} placeholder="you@company.com" />
          </div>
          <div>
            <Label htmlFor="bt-phone">Phone number *</Label>
            <Input id="bt-phone" name="phone" type="tel" required maxLength={20} placeholder="+91 98765 43210" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bt-seats">Number of seats *</Label>
              <Input id="bt-seats" name="seats" type="number" min={1} max={500} required defaultValue={1} />
            </div>
            <div>
              <Label htmlFor="bt-loc">Preferred location *</Label>
              <select id="bt-loc" name="location" key={initialLabel || "none"} defaultValue={initialLabel} required className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                <option value="" disabled>
                  Choose the location
                </option>
                {OFFICE_OPTIONS.map((o) => (
                  <option key={o.slug} value={o.label}>YesssWorks {o.label}</option>
                ))}
              </select>
            </div>
          </div>
          <Button type="submit" disabled={submitting} size="lg">
            {submitting ? "Submitting..." : "Request my tour"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted by YesssWorks.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
