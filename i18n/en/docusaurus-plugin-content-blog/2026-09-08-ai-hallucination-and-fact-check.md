---
slug: ai-hallucination-and-fact-check
title: "Why does AI state wrong things so confidently? Spotting hallucinations and checking facts in 30 seconds"
description: The legal clauses, figures and citations AI gives you can be entirely made up. Understand where hallucinations come from and build a fact-checking routine that takes 30 seconds.
authors: [kdchang]
tags: [ai-basics, safety]
date: 2026-09-08
keywords: [AI hallucination, hallucination, fact-checking, verifying AI answers, AI risks]
---

Has this ever happened to you? AI gives you a law section number, a research report, or a web link,
and it all sounds completely convincing. Then you go look it up — and **it doesn't exist**.

This is called a "hallucination." It's not an occasional bug; it's built into how this technology works.

<!-- truncate -->

## Why it happens

What AI does is **predict the most plausible next piece of text**. It doesn't check facts.

When it "doesn't know" something, it doesn't stop, because its job was never to judge whether it knows.
Its job is to produce text that looks reasonable.

So it generates things that are **perfectly correct in form and completely made up in content**:
law citations with the right numbering style, convincing-looking ISBNs, DOIs that look just like the real thing.

Put another way: **hallucination isn't a bug — it's a side effect.**
You can't get rid of it. What you can do is learn to spot it and check.

## Risk levels: when to be most careful

### High risk (always check)

- **Legal, medical, finance and tax**: laws, diagnoses, tax rates, filing rules
- **Specific numbers**: market share, statistics, prices, dates
- **Sources**: book titles, papers, news articles, URLs
- **Facts about people**: what someone did, where they work
- **Product details**: whether a feature exists, what a plan includes

### Medium risk (spot-check)

Step-by-step instructions, how-to guides for tools, technical terms in translations.

### Low risk (fine to use as-is)

Brainstorming, changing tone, polishing writing, summarizing documents **you provided**, generating format templates.

## The single most important rule of thumb

> **If it's "organizing information you gave it," the risk is low.
> If it's "recalling from memory," the risk is high.**

So: **giving it the material is much safer than asking it to remember.**

That's also why AI knowledge-base tools (like NotebookLM) are worth using —
they answer only from the files you upload, and they show you where each answer came from.

## The 30-second fact-checking routine

### 1. First ask yourself: what happens if this is wrong?

Nothing much → just use it. You'd be embarrassed, lose money, or make a bad decision → keep going.

**This step matters most, because it helps you spend your limited checking effort where it counts.**

### 2. Pick out the specific details

Numbers, dates, names, laws, sources. These are hallucinations' favorite hiding places.

### 3. Ask the AI one follow-up question

```text
About the answer above:
1. Which parts are you confident about, and which are guesses?
2. For every specific number and citation, please state the source.
3. If you can't confirm a source, label it "unable to confirm."
```

This step weeds out a good half of the problems — when a model is asked to check itself, it often takes back the parts it made up.

### 4. Verify outside the AI

For the key details that remain, check once with a search engine or the official website.
**Open the link and make sure it really exists** — don't just trust the title it listed.

## Five habits that reduce hallucinations

1. **Give it material instead of quizzing its memory** — paste in the document and ask it to "answer based only on the above"
2. **Let it say it doesn't know** — add "If you're not sure, say you don't know. Don't guess."
3. **Ask it to flag uncertainty** — "Please mark anything you're unsure of with (to be confirmed)"
4. **Break it into small steps** — do complex tasks in parts, and check each one
5. **Ask a different model** — if two different models give the same answer, it's more likely to be right

## A template you can use right away

```text
Please answer the question below based on the material I provide.

Rules:
1. Use only the material I provide. Do not add information from your own memory.
2. For anything not in the material, clearly write "Not mentioned in the material."
3. For each conclusion, note which part of the material it comes from.
4. Mark anything you're unsure of with (to be confirmed).

[My material] (paste here)
[My question] (write here)
```

## A suggested exercise

Right now, ask AI a detailed question in **a professional area you know very well**,
ask it for three sources, then open each one.

Once you've seen it invent a source with your own eyes, the habit of checking will develop on its own.
That's more effective than reading ten articles about it.

---

**What's next:**

- [Hallucinations and fact-checking: the full guide](/resources/ai-basics/hallucination)
- [Safety & Judgment](/resources/safety): data red lines and guidelines for team use
- [How LLMs work](/resources/ai-basics/how-llms-work): the reasons behind all this
