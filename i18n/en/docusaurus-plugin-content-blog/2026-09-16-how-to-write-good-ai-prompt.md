---
slug: how-to-write-good-ai-prompt
title: 6 principles for writing good prompts (with copy-ready templates)
description: Same question, so why do other people get great answers? Six principles covering role, context, format and examples, so AI gives you what you want the first time.
authors: [kdchang]
tags: [prompts, beginner]
date: 2026-09-16
keywords: [prompts, prompt writing, prompt engineering, AI instructions, prompt templates]
---

Same question — so why do other people get great answers while you get a pile of waffle?

The difference almost never comes down to the tool. It comes down to **whether you said everything you needed to say**. This post gives you six principles and templates you can copy straight away.

<!-- truncate -->

## First, a side-by-side comparison

**How most people ask**

```text
Write me a leave request email
```

What you get: a generic, overly polite email that needs a major rewrite.

**The improved version**

```text
[Role] You are a senior administrative assistant who knows the etiquette of business emails in a Taiwanese workplace.
[Task] Help me write a leave request email to my direct manager.
[Context] I'm a marketing specialist taking 3 days of annual leave (Oct 14–16) to travel abroad.
My social media posts are already scheduled through the end of the month, and my coworker Lin will cover anything urgent.
I get along well with my manager, but the email still needs to stay professional.
[Format] Under 200 words, formal but not stiff, subject line listed separately, with handover notes at the end.
```

The AI didn't get any smarter. You just gave it all the information it needed.

## Principle 1: Role × Task × Context × Format

This is the single most important formula, and it solves 90% of problems:

```text
[Role] You are a ____ with 10 years of experience.
[Task] Please help me ____.
[Context] The background is ____. The audience is ____. My goal is ____.
[Format] Please present it as ____, about ____ long, in a ____ tone.
```

Of the four parts, **context is the one people most often leave out, and the one that affects the result most**.

## Principle 2: One example beats ten adjectives

This is the technique with the biggest payoff.

```text
Following the style and structure of the example below, write three new ones for me:

[Example]
Title: Taiwan's new labor pension system, explained in 3 minutes
Opening: That 6% on your payslip every month? It isn't coming from the government.
Structure: Intriguing opening → three key points → one call to action

[My topic] (write your topic here)
```

(The example is about Taiwan's workplace pension, where employers must contribute 6% of salary — swap in any topic from your own world.)

Adjectives like "funny but professional" or "warm" mean something different to everyone.
One real example clears up every misunderstanding at once.

## Principle 3: Have it ask you questions first

```text
Before you start, ask me 3–5 questions about what you need to know,
and wait for my answers before writing anything. Don't make assumptions.
```

This is the cure for "it made up a whole bunch of things I never said."
It works especially well for complex tasks.

## Principle 4: Ask for an outline first, then the full text

```text
Please give me an outline first. Once I approve it, write the full text.
```

This keeps it from writing 3,000 words in one go, only for the whole direction to be wrong.
**Change only one thing per round, and you stay in control.**

## Principle 5: Say clearly what you *don't* want

AI has plenty of default habits, and it will keep doing them until you tell it to stop:

```text
Please avoid:
- All-purpose openings like "In today's fast-changing world"
- Empty adjectives (powerful, outstanding, remarkable)
- A summary paragraph at the end (I don't need one)
- Any data I didn't provide
```

## Principle 6: Have it check its own work

```text
When you're done, check your work against these criteria and fix anything that falls short:
1. Did you add any information I didn't provide?
2. Is it over 200 words?
3. Will the reader know what to do after reading it?
```

This step weeds out a good half of the problems, especially made-up content.

## One more line: give "I don't know" a way out

```text
If there isn't enough information, just say "Not enough information — I need to know ___."
Don't fill gaps with guesses.
```

This is the simplest, most effective way to reduce hallucinations. I recommend adding it to all your templates.

## Putting it all together

Combine all six principles and it looks like this:

```text
[Role] You are an HR consultant who knows small and mid-sized businesses in Taiwan well, with 10 years of recruiting experience.
[Task] Help me write a job description for a front-end engineer.
[Context]
- Company: a 15-person SaaS startup that builds back-office tools for online stores
- Requirements: React, 3+ years of experience, must work closely with designers
- Strengths: flexible remote work, little technical debt, fast decisions
- Weaknesses: mid-range salary, not a well-known brand
[Format] Markdown, five sections, under 500 words, sincere tone without hype.
[Limits] Don't use phrases like "passionate" or "we're like a family"; don't list any benefits I didn't provide;
mark any missing information with (to be added).
[Check] When you're done, read it from the point of view of "a senior engineer thinking about changing jobs,"
point out the least convincing part, and fix it.
```

## The single most important habit

**The moment you get a great answer, save that prompt to your notes.**

Three months from now, the template collection you've built yourself will be more useful than any tutorial.
That's also why we put together the [Prompt Library](/resources/prompts) —
to give you a starting point, though in the end everyone should have their own version.

---

**What's next:**

- [Advanced techniques](/resources/prompts/techniques): chain of thought, switching roles, structured output
- [Prompts by job](/resources/prompts/by-role): marketing, HR, sales, teachers, students
