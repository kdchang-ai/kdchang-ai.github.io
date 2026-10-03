---
title: AI Basics
sidebar_label: Overview
sidebar_position: 1
description: No math and no code. Everyday analogies that explain how large language models work, why they get things wrong, and what terms like "token" and "context" actually mean.
keywords: [large language model, LLM, generative AI, token, hallucination, how AI works]
tags: [AI Basics, Beginner]
---

# AI Basics

You don't need to know math, and you don't need to know how to code, but you do need to know **roughly what AI is doing**.
Once you have the right mental picture, you'll naturally ask better questions — and you'll know when not to trust it.

This section explains the key ideas with everyday analogies. It takes about 20 minutes to read.

---

## The One-Sentence Version

> Today's AI assistants are, at their core, **probability models that have read an enormous amount of text and are extremely good at figuring out "what to say next."**
> They aren't databases, and they don't look things up online for you (unless you've turned on a search feature). They "generate the next chunk of text that looks most reasonable."

That one sentence explains almost everything you'll run into:

| What you notice | Why it happens |
| --- | --- |
| The answer sounds smooth, but the content is made up | It's generating text that "looks reasonable," not checking facts |
| You ask the same question twice and get different answers | There's some randomness built into how it generates text |
| The more background you give, the more accurate the answer | You've narrowed down what counts as a "reasonable next sentence" |
| It starts forgetting earlier parts of a long conversation | There's a limit to how much context it can hold |
| It often slips up on math or counting | It's predicting text, not doing calculations |

---

## What's in This Section

### [How Large Language Models Work](./how-llms-work.md)

Uses the analogy of a "master of finishing sentences" to explain training and generation, plus common terms like token, context window, and temperature.

### [Why AI Gets Things Wrong: Hallucinations and Fact-Checking](./hallucination.md)

Where hallucinations come from, the situations where they're most likely to show up, and a fact-checking routine you can run in 30 seconds.

---

## Three Common Misconceptions

### Misconception 1: "The AI looked it up online before answering me"

Most of the time, **it didn't**. Unless the tool you're using clearly has search turned on, or you gave it a file,
it's answering based on the text it saw during training. That's also why it may not know about recent events.

### Misconception 2: "It sounds so sure of itself, so it must be right"

How confident it sounds has **nothing to do** with whether it's correct. AI doesn't know what it doesn't know,
so it says right things and wrong things in exactly the same confident tone.

### Misconception 3: "Keep the question short so it doesn't get confused"

It's the opposite. The more complete your background information and the clearer your request, the better the answer.
Think of it as a very smart new coworker who knows nothing about you — you wouldn't just tell a new coworker, "Write something for me."

---

## Three Exercises to Build the Right Mental Picture

1. **Ask the same question twice** and compare the two answers to get a feel for the randomness.
2. **Deliberately ask about something you know really well** and see where it does a great job and where it sounds right but isn't.
3. **Ask it to cite its sources, then actually click on them** to see firsthand what a hallucination looks like.

:::tip Next step
Now that you have the basics, it's time to pick a tool. Head to the [AI Tool Guide](../ai-tools/index.md),
or jump straight to the [Prompt Library](../prompts/index.md) for templates you can copy.
:::
