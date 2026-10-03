---
title: Advanced Techniques
sidebar_label: Advanced Techniques
sidebar_position: 2
description: Advanced prompt techniques — chain of thought, role setting, few-shot examples, structured output, multi-round iteration, and self-review.
keywords: [prompt engineering, chain of thought, few-shot, structured output]
tags: [prompts, advanced]
---

# Advanced Techniques

The basic four-part formula (Role × Task × Context × Format) solves most problems.
When you find the answers are "always not quite right," that's when to reach for these techniques.

---

## 1. Few-shot examples

**When to use it:** What you want is hard to describe with adjectives, but you have samples.

```text
Below are three post openings I've written in the past that performed well.
Please analyze the style they have in common, then write five new openings in the same style.

Example 1: (Paste here)
Example 2: (Paste here)
Example 3: (Paste here)

New topic: (Write it here)
```

**Why it works:** You're essentially showing it what a right answer looks like, which is more precise than any adjective.

---

## 2. Chain of thought

**When to use it:** Tasks that need multi-step reasoning, comparing, or judgment calls.

```text
Please analyze this step by step. Don't jump straight to a conclusion:
1. First, list all the relevant factors
2. Evaluate how each factor affects the outcome, one at a time
3. Explain the trade-offs of each option
4. Only then give your recommendation, and explain why you ruled out the other options
```

:::note
Today's reasoning models already do this on their own.
But with regular models, explicitly asking it to "analyze step by step" still noticeably improves the quality.
:::

---

## 3. Switching roles and perspectives

**When to use it:** Spotting blind spots, rehearsing conversations, looking at something from several angles.

```text
Please write a short review of this proposal from each of these three perspectives:
1. A CFO who cares about ROI
2. A design lead who cares about user experience
3. A frontline employee who's wary of change

For each one, point out the thing they'd be most likely to object to.
```

This is especially useful for "stress-testing your own proposal before you present it."

---

## 4. Structured output

**When to use it:** You want to paste the results into a spreadsheet or database, or you need a fixed format.

```text
Please output a Markdown table with these exact columns:
| Item | Current state | Recommendation | Priority (High/Medium/Low) | Estimated hours |

Rules:
- No explanatory text outside the table
- Priority must be only "High," "Medium," or "Low"
- Estimated hours should be a number followed by "hours"
```

It's important to say "no other text" explicitly. Otherwise it will pad the beginning and end with pleasantries.

---

## 5. Multi-round iteration

**When to use it:** Long documents and complex work.

Don't expect it to get everything right in one shot. Try this rhythm instead:

1. **Ask for an outline first** — "Please give me an outline first. I'll approve it before you write."
2. **Adjust the direction** — "Change section three to focus on cost, and delete section five."
3. **Expand one section at a time** — "Please expand section one first, about 200 words."
4. **Polish the whole thing** — "Please make the tone consistent throughout and remove anything repetitive."

Change only one thing per round, so you stay in control.

---

## 6. Self-review

**When to use it:** Improving quality and catching hallucinations.

```text
Please review what you just wrote from these three perspectives, in order:

1. [Fact-checker] Flag every specific number, date, and quote,
   and mark which ones you're confident about and which are guesses.
2. [Tough editor] Point out the three things that most need improving.
3. [Target reader] Read it as (your reader),
   and point out where it's confusing or where you'd stop reading.

After the review, please give me a revised version.
```

---

## 7. Negative instructions (be clear about what you don't want)

AI has lots of default habits, and it'll keep doing them unless you tell it to stop:

```text
Please avoid the following:
- One-size-fits-all openings like "In today's fast-changing world"
- Mechanical transitions like "First... Second... Finally..."
- Vague adjectives (powerful, outstanding, remarkable)
- Data with no source
- A summary paragraph at the end (I don't need one)
```

---

## 8. Give it a way to say "I don't know"

```text
If you don't have enough information, just say "Not enough information — I need to know ___."
Don't fill in the gaps with guesses.
```

This is the simplest, most effective sentence for reducing hallucinations. We recommend adding it to all your templates.

---

## Putting the techniques together

Here's what a complete advanced prompt looks like:

```text
[Role] You are an HR consultant with 10 years of recruiting experience who knows small and mid-sized businesses well.

[Task] Help me write a job description for a front-end engineer.

[Context]
- Company: A 15-person SaaS startup that makes back-office tools for online stores
- Team: 2 front-end engineers, reporting to the CTO
- Requirements: React, 3+ years of experience, must work closely with designers
- Our strengths: Flexible remote work, little technical debt, fast decision-making
- Our weaknesses: Mid-range salary, little brand recognition

[Format]
Markdown, in five sections: "About Us / What You'll Do / What We're Looking For / Nice to Have / Benefits."
Under 400 words total, with a sincere tone that doesn't oversell.

[Constraints]
- Don't use phrases like "rockstar," "ninja," or "like a family"
- Don't list any benefits I didn't provide
- Where information is missing, mark it (TBD) instead of making something up

[Check]
When you're done, read it from the perspective of "a senior engineer who's thinking about changing jobs,"
point out the least convincing part of the job description, and suggest a fix.
```

---

:::tip
You don't have to use every technique at once. Start by getting comfortable with "give an example" and "give it a way to say I don't know."
These two give you the biggest return for the least effort.
:::

→ Next: [Prompts by job role](./by-role.md)
