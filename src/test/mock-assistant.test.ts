import { describe, expect, it } from "vitest";

import { detectTopic, getMockReply } from "@/lib/mock-assistant";

describe("gig worker mock assistant", () => {
  it("detects the five worker-support topics in a user message", () => {
    expect(detectTopic("Can you help me track today's payout?" )).toBe("earnings");
    expect(detectTopic("I feel unsafe on this delivery" )).toBe("safety");
    expect(detectTopic("Where can I check e-Shram benefits?" )).toBe("rights");
    expect(detectTopic("What documents should I keep?" )).toBe("documents");
    expect(detectTopic("Help me draft a complaint" )).toBe("grievance");
  });

  it("returns the same local, canned answer without contacting a service", () => {
    expect(getMockReply("earnings", "en", false)).toBe(
      "Let’s work it out together. Add today’s payouts, cash tips, and work expenses separately, then subtract expenses from your earnings. For example only: ₹1,200 in payouts − ₹180 in fuel = ₹1,020 before any other costs. Save a screenshot of each payout. This is a demo calculation, not a tax statement.",
    );
  });

  it("returns a clear localized fallback when an evaluator simulates an outage", () => {
    expect(getMockReply("safety", "hi", true)).toContain("नकली सहायक सेवा उपलब्ध नहीं है");
  });

  it("serves canned responses in all four prototype languages", () => {
    expect(getMockReply("general", "hi", false)).toContain("मदद चाहिए");
    expect(getMockReply("general", "bn", false)).toContain("সাহায্য করতে পারি");
    expect(getMockReply("general", "ta", false)).toContain("உதவலாம்");
  });
});