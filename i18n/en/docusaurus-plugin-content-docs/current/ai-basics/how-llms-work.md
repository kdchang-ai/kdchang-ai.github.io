---
title: How Large Language Models Work
sidebar_label: How LLMs Work
sidebar_position: 2
description: Understand how large language models are trained and generate text through the analogy of a "master of finishing sentences," and make sense of terms like token, context window, temperature, and reasoning model.
keywords: [LLM, large language model, token, context window, reasoning model, how AI works]
tags: [AI Basics, Beginner]
---

# How Large Language Models Work

## An Analogy: The Master of Finishing Sentences

Imagine someone who has read most of the public text humans have ever written — books, websites, forums, code, instruction manuals.
They don't remember where every sentence came from, but they have an amazing instinct for "what usually comes after a sentence like this."

Give them an opening, and they can keep it going — and it sounds completely convincing.

**That's a large language model (LLM).**

What it does boils down to one sentence:

> Look at all the text so far and predict what the **next word** is most likely to be; write it out, then predict the next one.

A whole, fluent answer grows this way, one word at a time.

---

## Why This Produces Results That Seem Like "Thinking"

To get good at predicting "the next word," the model has to learn a lot along the way:

- Grammar and a feel for language (otherwise the sentences wouldn't make sense)
- How facts connect ("The capital of France is..." — what comes next?)
- Patterns of reasoning (the "because... therefore..." pattern)
- Different styles and tones (official memos, poetry, code comments)

So its "understanding" is a statistical instinct that grew out of imitating huge amounts of text — **it isn't looking things up in a table, and it isn't doing step-by-step logic**.
That explains why it can write a brilliant analysis and then trip over a simple counting question.

---

## Terms You're Bound to Run Into

### Token

Models don't process text word by word. They work in units called **tokens**.
In English, a token is roughly 3–4 letters, or about three-quarters of a word on average. In Chinese, one character is usually 1–2 tokens.

**Why should you care?** Because every length limit and every bit of pricing is counted in tokens.

### Context Window

The maximum number of tokens a model can "see" at once — including your question, any files you've pasted in, and its own reply.

**What this means in practice:**

- When a conversation gets too long, the earliest parts get pushed out of the window, so it "forgets" them
- When you upload a very long document, it may only read part of it
- The fix: start a new chat, paste the key points in again, or break long documents into sections

### Temperature

A setting that controls how random the output is. Low temperature = cautious, consistent, and repeatable. High temperature = more wide-ranging and creative, but also more likely to make things up.

Most chat apps won't let you adjust it, but you can get a similar effect with your wording:
"Answer strictly based on the information I've provided" vs. "Brainstorm 10 wild, out-there ideas."

### Reasoning Model

A newer type of model that "thinks a bit longer" before answering, working through a longer chain of reasoning internally before giving its conclusion.
It's noticeably more accurate for tasks like math, logic, and debugging code, but the trade-off is that it's slower.

**Practical tip:** Use a fast model for everyday writing and summaries; switch to a reasoning model when you need multi-step reasoning or precise calculations.

### Multimodal

A model that can handle not just text but also images, audio, and video.
That's why you can drop in a screenshot, a photo, or a PDF and ask it to read it.

---

## What It's Not Good At (and How to Work Around It)

| Not good at | Why | How to work around it |
| --- | --- | --- |
| Precise calculations and counting | It's predicting text, not doing math | Ask it to "use code to calculate," or check with a calculator yourself |
| Recent news | Its training data stops at a certain point in time | Turn on the search feature, or paste the information in yourself |
| Things inside your company | It's never seen them | Paste in the relevant documents, or set up a knowledge base |
| Remembering your last conversation | By default, each conversation is separate | Use the memory feature, or paste in the background each time |
| Clearly saying "I don't know" | It was trained to always give an answer | Tell it outright: "If you're not sure, say you don't know" |

:::tip A handy trick
Add this line to the end of your prompt: **"If there isn't enough information or you're not sure, just say you don't know. Don't guess."**
That one sentence can noticeably cut down on made-up answers.
:::

---

## Summary

- An LLM is a model that's very good at predicting the next word — it's not a database
- All length limits come down to tokens, and if a conversation runs too long, it will "forget"
- When you need precise calculations or up-to-date information, you'll need another approach
- It won't admit it doesn't know on its own, so you have to ask it to

Up next: [Why AI Gets Things Wrong: Hallucinations and Fact-Checking](./hallucination.md).
