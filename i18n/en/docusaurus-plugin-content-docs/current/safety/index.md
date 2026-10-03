---
title: Safety & Judgment
sidebar_position: 1
description: Data security, privacy, fact-checking, and team guidelines for using AI. Learn to protect yourself first so you can keep using AI for the long run.
keywords: [AI safety, AI privacy, data protection, AI usage policy, trade secrets]
tags: [safety, privacy, guidelines]
---

# Safety & Judgment

This chapter isn't here to scare you. It's here so you can **keep using AI with peace of mind**.
Getting AI banned at your company because of one careless moment would be a real shame.

---

## The One Rule That Matters Most

> **If you wouldn't want a coworker, client, or journalist to see it, don't paste it into AI.**

This rule covers 90% of situations. The details are below.

---

## Data Tiers: What You Can Paste and What You Can't

### Never paste

- ID numbers, passport numbers, bank account numbers, credit card numbers
- Passwords, API keys, access tokens
- Medical records, health checkup results
- Client lists and contact details
- Unreleased financial figures, price quotes, contract terms
- Anyone else's personal information (even a coworker's)

### Check your company's policy first

- Internal company documents, presentations, meeting notes
- Product plans, features that haven't launched yet
- Code (especially code that contains business logic)
- HR-related information

### Usually fine

- Public information and published content
- Your own study notes and drafts
- Examples with identifying details removed
- General knowledge questions

---

## Anonymizing: What to Do When You Need to Paste Something

Replacing real details with placeholders usually makes it safe to use:

```text
Original: John Smith (555-123-4567) complained on 3/15 that our ABC product at the downtown store...
Revised: Customer A recently complained that our Product X at one of our stores...
```

**Tip:** Before pasting, use your text editor's "Find and Replace"
to swap company names, people's names, phone numbers, and dollar amounts for placeholders. Then paste.

---

## Why Be Careful: Where Does Your Data Actually Go?

Different plans handle your data very differently:

| Plan type | How your data may be used | Recommendation |
| --- | --- | --- |
| Free personal plan | Some services may use it to improve their models by default | Only use public or personal content |
| Paid personal plan | You can usually turn off training use in settings | Go into settings, check, and turn it off |
| Business / team plan | Contracts usually guarantee it won't be used for training | Follow your company's guidelines |
| Self-hosted or local model | Your data never leaves your machine | The choice for the most sensitive data |

:::caution
Each service's policies change, and the location of the "turn off training" option moves around often too.
**Check the settings page of every service you use on a regular basis.**
:::

---

## Fact-Checking: What AI Says Isn't Always True

For the full guide, see [Hallucinations and Fact-Checking](../ai-basics/hallucination.md). Here's the short version:

**Always check:** numbers, dates, laws and regulations, cited sources, claims about people, product specs

**The 30-second fact-check:**

1. What happens if this is wrong? If nothing much, just use it
2. Pick out the specific claims (numbers, quotes)
3. Ask the AI: "Which parts are you confident about? Which parts are guesses? Please cite your sources"
4. Confirm the key points with a search engine or official website, and **actually click the links**

---

## Copyright and Commercial Use

### What you put in

Don't upload complete copyrighted works (entire books, full paywalled articles) for large-scale processing.
Summarizing or analyzing short excerpts is usually considered fair use, but keep in mind that laws differ from country to country.

### What comes out

- Countries treat copyright for AI-generated content differently. **Don't assume you automatically own all the rights**
- Check the service's license terms before using output commercially (especially for image generation)
- AI can produce content that's very similar to existing work, so do a reverse search before using it for anything important

### Disclosure

More and more platforms, journals, and clients are asking people to disclose AI use.
**Being honest about which parts you used AI to help with** works in your favor over the long run.

---

## Rolling It Out to a Team: A Minimum Viable Usage Policy

If you're championing AI at your company, here's a skeleton you can edit and use right away:

```text
[1. Approved tools]
- Company-purchased version: ___ (use this first)
- Allowed personal versions: ___ (non-company data only)

[2. Data red lines]
The following must never be entered into any AI tool:
- Client personal information and contact details
- Unreleased financials, price quotes, and contracts
- Employee personal information
- System passwords and keys

[3. Responsibility for output]
- All AI output is treated as a draft and must be checked by the person responsible before it goes out
- Numbers, regulations, and citations in external documents must be verified separately
- Anything involving legal, tax, financial, or medical matters must be reviewed by a qualified professional

[4. Disclosure]
- If client deliverables rely heavily on AI-generated content, tell the client upfront

[5. When in doubt]
- If you're not sure whether something can be pasted in, ask ___ (contact person) first
```

---

## Three Common Myths

### "It's just a little snippet, it should be fine"

The risk isn't about length, it's about **what kind of content it is**. A single line with a client's phone number is a personal data leak.

### "The company has no rule against it, so it must be okay"

No rule usually means **nobody has thought about it yet**, not that it's allowed. Asking once protects you.

### "The AI told me it won't remember my data"

AI **gets things wrong about its own product policies, too**. Go by the official documentation, not by asking the model.

---

:::tip One last reminder
Being safety-minded isn't about making you afraid to use AI. It's about letting you **use it longer and more boldly**.
Once you've drawn your red lines clearly, you're free to go all in on everything inside them.
:::
