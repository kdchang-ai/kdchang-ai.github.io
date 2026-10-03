---
title: Glossary
sidebar_label: Glossary
sidebar_position: 9
description: Plain-English explanations and everyday analogies for common AI terms. See a word you don't understand? Look it up here.
keywords: [AI terms, AI terminology, LLM, token, RAG, agent, prompt]
tags: [Terms, Quick Reference]
---

# Glossary

See a word you don't understand? Look it up here. Every entry gives you: **a one-sentence explanation + an analogy + when you'll run into it.**

---

## Core Concepts

### Generative AI

AI that can create new content (text, images, audio, video), rather than just sorting things or making predictions.
**Analogy:** It doesn't "find" the answer for you — it "writes" the answer for you.

### Large Language Model (LLM)

A model that has read a huge amount of text and is good at predicting "the next word." It's what powers ChatGPT, Claude, and Gemini.
**Analogy:** Someone who's read the whole internet and is great at finishing your sentences.
→ [Learn more](./ai-basics/how-llms-work.md)

### Token

The smallest unit of text a model works with. In English, a token is roughly three-quarters of a word; in Chinese, one character is about 1–2 tokens.
**You'll run into it:** Every length limit and every bit of pricing is counted in tokens.

### Context Window

The maximum amount of content a model can "see" at once, including your question and its answer.
**You'll run into it:** When a conversation gets too long and it starts forgetting earlier parts → start a new chat or paste the key points again.

### Parameters

The number of internal "dials" in a model, often used to describe how big a model is (e.g., 7B, 70B).
**Note:** More parameters doesn't always mean more useful. Don't get hung up on the numbers.

### Knowledge Cutoff

The point in time where a model's training data ends. It doesn't know about anything that happened after that.
**You'll run into it:** When it can't answer questions about recent news → turn on the search feature.

---

## Using AI

### Prompt

What you type in to the AI.
→ [How to write a good one](./prompts/index.md)

### Prompt Engineering

A systematic approach to designing prompts so you get consistent, high-quality results.
**In plain terms:** Learning how to say what you mean clearly.

### Hallucination

When AI produces content that sounds smooth and confident but is wrong.
**Analogy:** Someone who makes up stories just to avoid an awkward silence.
→ [How to spot and fact-check it](./ai-basics/hallucination.md)

### Temperature

A setting that controls how random the output is. Low = cautious and consistent; high = wide-ranging and creative.

### System Prompt

Rules and a role set up before the conversation starts, which the user usually can't see.
**You'll run into it:** The "Instructions" field in custom GPTs or Claude Projects is exactly this.

### Few-shot

Giving a few examples in your prompt so the AI can copy the style you want.
**This is one of the techniques with the biggest payoff for the least effort.**

### Chain of Thought (CoT)

Asking the AI to reason step by step before giving its conclusion, which makes it more accurate on complex tasks.

### Reasoning Model

A model that "thinks a bit longer" internally before answering. Good for math, logic, and debugging.
**The trade-off:** Slower, and usually more expensive.

### Multimodal

A model that can handle text, images, audio, and video together.
**You'll run into it:** When you drop a screenshot or PDF straight into an AI and have it read it.

---

## Advanced and Technical

### RAG (Retrieval-Augmented Generation)

Having the AI first search a specific set of documents, then answer based on what it found.
**Analogy:** An open-book exam. The answers come from the book you gave it, not from its memory.
**The benefit:** It dramatically reduces hallucinations, and you can trace where the answers came from.
→ [How to set it up](./workflows/index.md)

### Vector Database

The kind of database behind RAG that lets you "search by meaning."
**Analogy:** Instead of matching keywords, it matches on "is the meaning similar?"

### AI Agent

An AI you give a goal to, and it breaks down the steps, uses tools, and checks the results on its own.
**Analogy:** Going from "an assistant who answers one question at a time" to "a coworker you can hand off a whole task to."

### MCP (Model Context Protocol)

An open standard that lets AI connect safely to outside tools and data sources.
**Analogy:** The USB plug standard of the AI world.

### Fine-tuning

Training a model further on your own data so it better fits a specific need.
**Note:** Most of the time, what you actually need is RAG or a good prompt, not fine-tuning.

### API

A way for different programs to talk to each other. It's the foundation of connecting tools together for automation.

### Open-weight Model

A model whose weights are published, so you can download and run it yourself.
**The benefit:** Your data never leaves your own machine, which gives you the most privacy.

### Local / On-device

A model that runs directly on your own computer or phone, without going through the cloud.

### Guardrails

Safety mechanisms that limit what AI can output, to keep it from producing harmful or inappropriate content.

### Alignment

The field of research and engineering focused on making AI behave in line with human intentions and values.

---

## Tools and Applications

### Vibe Coding

A way of building software where you describe what you need in plain language and let AI write the code.
→ [Get started](./vibe-coding/index.md)

### Custom Assistants (GPTs / Projects / Gems)

AI assistants set up ahead of time with a role, rules, and reference materials, so you don't have to explain everything again each time.

### Deep Research

The AI spends anywhere from a few minutes to tens of minutes searching multiple sources on its own, then produces a report with citations.

### Prompt Injection

Malicious content hidden in a web page or file that tricks the AI into following instructions you didn't intend.
**You'll run into it:** Be careful when you have AI read web pages from unknown sources.

### De-identification

Replacing personal identifying information in data with codes or placeholders before using it.
→ [How to do it](./safety/index.md)

---

:::tip Can't find the term you're looking for?
Feel free to [email us](mailto:kdchang.ai@gmail.com), and we'll keep adding more.
:::
