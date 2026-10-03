---
title: Prompt Library
sidebar_label: Overview
sidebar_position: 1
description: Ready-to-copy AI prompt templates, including a four-part formula, templates for common situations, and prompt examples organized by job role.
keywords: [prompts, prompt, AI instructions, prompt templates, prompt engineering]
tags: [prompts, templates]
---

# Prompt Library

Why do other people get great answers to the same question while you get a pile of fluff?
The difference almost always comes down to **whether you said everything you needed to say**.

This chapter gives you templates you can copy as-is, plus how to turn them into your own versions.

---

## The core formula: Role × Task × Context × Format

90% of prompt problems can be solved with these four parts:

```text
[Role] You are a ____ with 10 years of experience.
[Task] Please help me ____.
[Context] The background is ____. The audience is ____. My goal is ____. What we already know: ____.
[Format] Please present it as ____, about ____ long, in a ____ tone.
```

### Side-by-side example

**A weak prompt**

```text
Write me a time-off request email
```

**A strong prompt**

```text
[Role] You are a senior office administrator who knows professional workplace email etiquette well.
[Task] Help me write a time-off request email to my direct manager.
[Context] I'm a marketing specialist requesting 3 days of paid vacation (Oct 14–16) for a trip abroad.
I've already scheduled our social media posts through the end of the month, and my coworker Lin will cover anything urgent.
I get along well with my manager, but the email still needs to be professional.
[Format] Under 150 words, formal but not stiff, with the subject line listed separately, and a short handoff note at the end.
```

The AI didn't get any smarter. You just gave it all the information it needed.

---

## Five techniques to take your answers up a level

### 1. Give an example (the most effective)

```text
Following the style and structure of the example below, please write three new ones:

[Example]
Title: Understand Your Retirement Plan in 3 Minutes
Opening: That 6% on your pay stub every month? It's not free money from the government.
Structure: Hook opening → three key points → one call to action

[My topic]
(Write your topic here)
```

One good example beats ten adjectives.

### 2. Ask it to ask you questions first

```text
Before you start, please ask me 3–5 questions about what you need to know.
Wait until I've answered before writing anything. Don't make assumptions.
```

This keeps it from making things up to fill the gaps, and it's especially useful for complex tasks.

### 3. Ask for steps, starting with an outline

```text
Please give me an outline first. Once I approve it, write the full text.
```

This keeps it from writing 3,000 words in one go, only for you to find out it went in the wrong direction.

### 4. Say what you *don't* want

```text
Please avoid: vague adjectives, openings like "In today's fast-changing world,"
lists with more than 5 points, and any data I didn't provide.
```

### 5. Have it check its own work

```text
When you're done, check your work against these criteria and fix anything that falls short:
1. Did you add any information I didn't provide?
2. Is it over 150 words?
3. After reading it, will my manager know what to do?
```

---

## Templates for everyday situations

### Organizing meeting notes

```text
Below is a meeting transcript. Please organize it into:
1. [Decisions] Up to 5 points, one sentence each
2. [Action items] A table: Item | Owner | Deadline
3. [To be confirmed] Anything the meeting didn't settle that needs follow-up

Rules: Use only what's in the transcript. Don't add anything.
If the transcript doesn't mention an owner or deadline, write "Not assigned."

[Transcript]
(Paste here)
```

### Writing a difficult email

```text
Help me write an email, and give me three versions in different tones (firm / neutral / gentle)
so I can pick one and have you refine it.

Situation: (Describe the background, your relationship, your goal, and your bottom line)
Recipient: (Their job title and your relationship to them)
Length: Under 150 words
```

### Understanding a long document

```text
Please read the document below, then:
1. Explain what it's about in 5 sentences
2. List the 3 most important points for "(your role / your purpose)"
3. List details I might overlook but that really matter
4. List anything the document doesn't make clear that I should ask about

[Document]
(Paste here)
```

### Brainstorming

```text
Please come up with 15 ideas for "(topic)":
- The first 5 should be safe and conventional
- The middle 5 should take angles others might not think of
- The last 5 should be deliberately over-the-top, ignoring whether they're practical

Describe each idea in one sentence. Don't over-explain.
```

### Learning something new

```text
I want to learn about "(topic)." My current level is (describe it).
Please:
1. Explain the core concept using an everyday analogy
2. List 5 subtopics I should understand, in order
3. Give me 3 questions to test myself on the first subtopic
4. Point out the 2 most common misconceptions beginners have
```

---

## Also in this chapter

- [Advanced techniques](./techniques.md) — Chain of thought, role-play, multi-round iteration, structured output
- [Prompts by job role](./by-role.md) — Marketing, HR, administration, sales, education, students

---

:::tip The most important habit
**The moment you get a great answer, save that prompt to your notes right away.**
Three months from now, the template library you've built yourself will be more useful than any tutorial.
:::
