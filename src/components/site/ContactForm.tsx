import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LocationSlug } from "@/data/locations";
import { OFFICE_OPTIONS, resolveOfficeSlug } from "@/data/office-options";

interface Props {
  defaultLocation?: LocationSlug;
  defaultMessage?: string;
}

export const ContactForm = ({ defaultLocation, defaultMessage = "" }: Props) => {
  const initial = resolveOfficeSlug(defaultLocation);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    // Lightweight client-only submission, integrate with HubSpot Forms / Cloud function as needed
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    navigate("/thank-you", {
      state: {
        name: String(fd.get("name") || ""),
        company: String(fd.get("company") || ""),
        phone: String(fd.get("phone") || ""),
        email: String(fd.get("email") || ""),
        seats: String(fd.get("seats") || ""),
        location: String(fd.get("location") || ""),
        message: String(fd.get("message") || ""),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-primary">Name *</Label>
          <Input id="name" name="name" required placeholder="Name" />
        </div>
        <div>
          <Label htmlFor="company" className="text-primary">Company Name *</Label>
          <Input id="company" name="company" required placeholder="Company Name" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-primary">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="Phone Number" />
        </div>
        <div>
          <Label htmlFor="email" className="text-primary">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="Email" />
        </div>
      </div>
      <div>
        <Label htmlFor="location" className="text-primary">Location *</Label>
        <select
          id="location"
          name="location"
          key={initial || "none"}
          defaultValue={initial}
          required
          className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="" disabled>
            Choose the location
          </option>
          {OFFICE_OPTIONS.map((o) => (
            <option key={o.slug} value={o.slug}>YesssWorks {o.label}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="seats" className="text-primary">Number of seats</Label>
        <Input id="seats" name="seats" type="number" min={1} max={500} placeholder="e.g. 12" />
      </div>
      <div>
        <Label htmlFor="message" className="text-primary">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={3}
          defaultValue={defaultMessage}
          className="w-full rounded-md border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <Button type="submit" disabled={submitting} size="lg" className="justify-self-start">
        {submitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};
