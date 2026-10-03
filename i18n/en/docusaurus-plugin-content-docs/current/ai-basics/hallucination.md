---
title: "Why AI Gets Things Wrong: Hallucinations and Fact-Checking"
sidebar_label: Hallucinations & Fact-Checking
sidebar_position: 3
description: What AI hallucinations are, why they happen, which situations carry the highest risk, and a fact-checking routine you can run in 30 seconds.
keywords: [AI hallucination, hallucination, fact-checking, verifying AI answers, AI risks]
tags: [AI Basics, Safety]
---

# Why AI Gets Things Wrong: Hallucinations and Fact-Checking

## What Is a Hallucination?

A **hallucination** is when AI produces content that's smooth and confident but actually incorrect — or that doesn't exist at all.

What it commonly looks like:

- Citing a book that doesn't exist, complete with a convincing-looking ISBN
- Giving you a specific section number of a law, when that section actually says something else
- Claiming a company did something in a certain year, when neither the date nor the event checks out
- Providing a link that leads to a 404 page

---

## Why It Happens

Back to the key idea from the previous page: the model is **predicting the most reasonable next chunk of text**, not checking facts.

When it "doesn't know," it doesn't stop, because its job was never to "figure out whether it knows."
Its job is to "produce text that looks reasonable." So it generates things that are **right in form but made up in content**.

Put another way: **hallucinations aren't a bug — they're a side effect of how the whole thing works.**
You can't get rid of them, but you can learn to spot them and check the facts.

---

## Risk Levels: Where to Be Most Careful

### High risk (always check)

- **Legal, medical, finance, and tax**: laws, diagnoses, tax rates, filing rules
- **Specific numbers**: market share, statistics, prices, dates
- **Cited sources**: book titles, research papers, news articles, links
- **Facts about people**: what someone has done, where they've worked
- **Product specs**: whether a feature exists, what a plan includes

### Medium risk (spot-check)

- Step-by-step instructions (the overall process is right, but details may be outdated)
- How-to guides for tools (the interface may have changed)
- Translations (the meaning is usually right, but double-check specialized terms)

### Low risk (fine to use as-is)

- Brainstorming and coming up with ideas
- Changing the tone or polishing your writing
- Summarizing documents **you provided yourself**
- Creating formats, templates, and outlines

:::tip The single most important rule of thumb
**If it's "organizing information you gave it," the risk is low. If it's "recalling from memory," the risk is high.**
That's why giving it your materials is far safer than asking it to remember things on its own.
:::

---

## The 30-Second Fact-Check

When the content will affect a decision, run through these four steps:

### 1. Ask yourself first: what happens if this is wrong?

Nothing much → go ahead and use it. You'd be embarrassed, lose money, or make a bad decision → keep going.

### 2. Pick out the specifics

Numbers, dates, names, laws, sources. These are hallucinations' favorite hiding spots.

### 3. Question the AI once

```text
About the answer above:
1. Which parts are you confident about? Which parts are guesses?
2. For every specific number and citation, please note the source.
3. If you can't confirm a source, please mark it "Unable to confirm."
```

This step filters out a good half of the problems — when asked to check its own work, the model often takes back the things it made up.

### 4. Verify outside the AI

For the key items that remain, check them once with a search engine or on an official website.
**Click the link to confirm it really exists** — don't just go by the title it lists.

---

## Five Habits That Reduce Hallucinations

1. **Give it the material, don't test its memory** — Paste in the document and ask it to "answer based only on the content above."
2. **Let it say "I don't know"** — Add a line to your prompt: "If you're not sure, say you don't know. Don't guess."
3. **Ask it to flag uncertainty** — "Please mark anything you're unsure about with (to be confirmed)."
4. **Break it into smaller steps** — Do complex tasks in stages and check each one; that's easier than catching everything at the end.
5. **Ask a different model the same question** — If two different models give the same answer, it's more trustworthy.

---

## A Handy Prompt Template

```text
Please answer the following question based on the information I provide.

Rules:
1. Use only the information I provide. Don't add anything from your own memory.
2. If something isn't covered in the information, clearly write "Not mentioned in the information."
3. For each conclusion, note which part of the information it comes from.
4. Mark anything you're unsure about with (to be confirmed).

[My information]
(Paste your document here)

[My question]
(Write your question here)
```

---

## Summary

- Hallucinations are a built-in trait of generative AI, not an occasional glitch
- "Organizing your information" is much safer than "recalling from memory"
- Specific numbers, cited sources, and laws are where problems show up most
- Get in the habit of questioning the AI and checking outside sources — it only takes 30 seconds

:::note Further reading
For complete guidelines on using AI at work, see [Safety & Judgment](../safety/index.md).
:::
