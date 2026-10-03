---
title: Workflows & Automation
sidebar_position: 1
description: Go from one-off questions to automated workflows — knowledge bases (RAG), AI agents, and connecting automation tools, no coding required.
keywords: [AI workflows, automation, RAG, knowledge base, AI agent, MCP, n8n]
tags: [workflows, automation, advanced]
---

# Workflows & Automation

Once you're using AI every day, the next bottleneck usually looks like this:
**You have to re-explain the background every time, and copy and paste everything by hand every time.**

This chapter is about getting past that bottleneck.

---

## Three Levels

| Level | What you're doing | Best for |
| --- | --- | --- |
| **L1 One-off questions** | Open a chat and ask a question | Ad hoc, one-time tasks |
| **L2 Saved templates** | Use saved prompts + standard materials | Routine work you do every week |
| **L3 Automated workflows** | Set it up once and it runs on its own | Frequent work with clear rules |

**Most people get stuck at L1.** Just moving up to L2 makes a noticeable difference in how much you get done.

---

## L2: Turn Repetitive Work into Templates

### How to do it

1. Find a type of task you've done **three or more times** this month
2. Save the full prompt from the time it worked best
3. Turn the parts that change into fill-in-the-blanks: `[This week's numbers]`, `[Client name]`
4. Store it somewhere you can find it again (a notes app, a document, a bookmark)

### Next step: use "Projects" or "custom assistant" features

The major AI assistants all offer something similar (GPTs and Projects in ChatGPT, Projects in Claude, and so on),
which let you set up in advance:

- **Standing role and rules** — no more re-explaining "who you are and what to watch out for" every time
- **Standing reference materials** — upload your company overview, brand voice guide, and go-to templates
- **A standard output format**

Set it up once, and it's automatically included in every conversation after that. This is the step with the biggest payoff.

---

## Knowledge Bases: Let AI Answer from Your Own Material

### Why you need one

AI doesn't know your company, your products, or the documents you wrote last year.
Instead of pasting in a pile of background every time, **build a knowledge base it can read**.

The technical name for this is **RAG (Retrieval-Augmented Generation)**, but you don't need any technical knowledge to use it.

### How to get started (no coding)

1. **NotebookLM** — upload PDFs, web pages, and notes; it answers based only on that material and cites its sources
2. **Your chat assistant's Projects feature** — upload documents you use often, and every conversation in that project can refer to them
3. **Notion AI / the AI features in your existing notes app** — ask questions directly of your own notes

### The biggest benefit: much lower risk of hallucinations

That's because the answers come from the material you provided, not from the model's memory.
It's also the most effective way to [reduce hallucinations](../ai-basics/hallucination.md).

---

## AI Agents: Let AI Carry Out Multiple Steps on Its Own

### What's an agent?

A normal chat goes "you say something, it says something back."
With an agent, you give it a goal, and it breaks it into steps, uses tools, checks the results, and moves on to the next step by itself.

For example: "Research the pricing of these three competitors and put it in a comparison table."
It will search, read, organize, and produce the table on its own, which can take several minutes.

### When it's worth using

**Good to hand off to an agent:**

- Lots of steps, but clear rules (gathering information, organizing it, converting formats)
- You can clearly describe what "done" looks like

**Don't hand off to an agent:**

- Anything that needs your judgment on what matters (whether to sign this contract)
- Anything where mistakes are costly (sending things out directly, making payments directly)

### Ground rules

:::caution
**Always keep a step where a human checks things.**
Especially for actions that send things out, spend money, or delete things, don't let it run fully on autopilot.
:::

---

## Connecting Automation: Let Your Workflows Run Themselves

### Common tools

- **Zapier / Make** — visual interfaces for connecting different services (email arrives → save to a spreadsheet → send a notification)
- **n8n** — can be self-hosted and is very flexible, a good fit for teams that need to keep their data in-house
- **AI providers' APIs and plugins** — the most flexible option, but you'll need a bit of technical help

### Three signs something is worth automating

1. It happens **every week**
2. You can **write down the rules** (if A, then B)
3. Mistakes are **easy to spot and easy to fix**

If all three are true, it's worth spending an hour setting up.

### A real example: the weekly report

```text
Trigger: Every Friday at 4 p.m.
Step 1: Pull this week's data spreadsheet
Step 2: Send it to AI to produce a summary and three observations using a standard template
Step 3: Email the draft to you
Step 4: You review it, edit it, and send it to your manager  ← keep a human checkpoint
```

---

## Quick Definitions

| Term | In plain English |
| --- | --- |
| **RAG** | AI first looks up information in your knowledge base, then answers based on what it found |
| **Agent** | An AI that can break down steps, use tools, and complete a goal on its own |
| **MCP** | An open standard that lets AI connect safely to outside tools and data |
| **Workflow** | Multiple steps strung together into a fixed process |
| **API** | A way for programs to talk to each other; the foundation of automation |

See the [Glossary](../glossary.md) for more.

---

## Where to Start

1. **This week**: Save your most-used prompts as templates (the first step toward L2)
2. **This month**: Build a knowledge base with the documents you look up most often
3. **After that**: Pick one thing you do every week and try turning it into an automated workflow

:::tip
Don't aim for full automation right away.
**Templates pay off far more than automation**, and they don't take any technical skills.
:::
