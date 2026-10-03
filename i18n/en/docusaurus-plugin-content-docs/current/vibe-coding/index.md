---
title: Vibe Coding for Beginners
sidebar_position: 1
description: Build your own small tools without knowing how to code. A beginner's guide to describing what you want in plain language and letting AI build it.
keywords: [Vibe Coding, AI coding, low-code, natural language development, building tools with AI]
tags: [Vibe Coding, advanced]
---

# Vibe Coding for Beginners

:::note This chapter is optional
The main path through this site requires no coding at all. This chapter is for people who are already comfortable with AI and want to go one step further.
If you're still building your foundations, start with stages 1 and 2 of the [Roadmap](/roadmap).
:::

---

## What Is Vibe Coding?

**You describe what you want in plain language, and AI writes the code.**
You're in charge of describing what you need, testing the results, and setting the direction; AI does the coding.

The name is a bit tongue-in-cheek: you're not really "writing code," you're "describing the vibe."
But for non-engineers, what it really means is this: **the bar for building a working little tool has dropped to "can you describe what you need?"**

---

## What It Can Do (and What It Can't)

### Great for

- Small personal tools (budget trackers, habit trackers, checklists, calculators)
- Single-page websites (event pages, portfolios, sign-up forms)
- Data-processing scripts (cleaning up Excel files, renaming files in bulk, collecting and organizing data)
- Simple internal dashboards
- Quickly turning an idea into a clickable prototype

### Be very careful with

- Anything that handles other people's personal information
- Features involving payments, logins, or passwords
- Production systems that need long-term maintenance or have many users

**Why:** AI can get things "working," but the invisible parts — **security, error handling, and long-term maintenance** —
still need someone who knows what they're doing to check them. Building for yourself is fine; if other people will use it or it's going online, have someone review it.

---

## Three Kinds of Tools

### 1. Chat-based (easiest to start with)

Describe what you need right in ChatGPT or Claude, let it write the code, and copy it over to use.
Good for small single-file scripts and single-page websites.

### 2. Web app builders (nothing to install)

Services like Lovable, v0, and Bolt: you type a description, and they generate a web page you can see and click around in,
and you can publish it with one click. Good for prototypes, event pages, and portfolios.

### 3. AI code editors (the most complete)

Tools like Cursor and Windsurf, or command-line tools like Claude Code.
They can read your whole project, make changes across multiple files, and run tests. They're the most powerful, but you'll need a few basic concepts.

**Suggested path for beginners:** chat-based → web app builders → (only if you need it) AI code editors.

---

## What to Build for Your First Project

Pick something **only you will use, and that doesn't matter if it breaks**. For example:

- A small web page that turns messy text into a table
- A quote sheet that adds up the total automatically
- A simple habit-tracking page

### Template for describing what you need

```text
I want to build a (thing) for (who).

It should:
1. (Feature one)
2. (Feature two)
3. (Feature three)

Constraints:
- I don't know how to code, so please give me complete files I can run as-is
- Use the simplest approach possible; don't bring in complicated tools
- Add plain-English comments to each section explaining what it does

Before you start writing, confirm with me what you understand the requirements to be.
```

---

## Five Habits for a Smoother Process

### 1. Add one feature at a time

"Build a budgeting website with categories, charts, export, multi-user sharing, and cloud sync" —
asking for all of that at once is almost guaranteed to break. Start with the simplest version, get it working, then add more.

### 2. When something breaks, paste the whole error message back in

Don't try to interpret the error message yourself. **Copy and paste the whole thing**, then add "This is the error message, please fix it."

### 3. Save a copy every time you have a working version

Just duplicate the file and put the date on it. That way you can always roll back if you break something.

### 4. Ask it to explain

```text
Please explain what this code does in a way I can understand,
especially the parts I might want to change later.
```

This way you'll gradually learn something real, instead of ending up with a pile of files you can't read.

### 5. Don't put passwords or keys in your files

If AI asks you to fill in an API key, first ask whether this file will be made public.
**Public code must never contain keys.**

---

## Safety Checklist

When you're done, and before anyone else uses it, ask AI these questions:

```text
Please check this code for me:
1. Are any passwords, keys, or personal information hard-coded into it?
2. If a user enters something unexpected, will anything break?
3. Where does this code send data?
4. If I put this online publicly, what are the risks?
```

---

## If You Want to Go Deeper

If you find yourself getting more and more into it and want to learn programming and AI development properly,
check out [HappyPrompt](https://www.happyprompt.net),
which has comprehensive, developer-oriented content.

---

:::tip A note on mindset
Vibe Coding won't turn you into an engineer, but it means **"I don't know how to code" won't stop you anymore**.
Being able to turn an idea into something people can click on is a big skill in itself.
:::
