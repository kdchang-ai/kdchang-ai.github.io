---
slug: what-is-generative-ai-beginner-guide
title: "What is generative AI? A 10-minute intro for complete beginners"
description: No math and no code — just everyday analogies explaining how large language models work, what they're good at, and why they get things wrong.
authors: [kdchang]
tags: [ai-basics, beginner]
date: 2026-09-19
keywords: [generative AI, large language model, LLM, AI for beginners, how AI works]
---

You don't need to understand math or know how to code, but you do need to know **roughly what AI is doing**.

Once your mental picture is right, you'll naturally ask better questions, and you'll know when not to trust it.
This post covers the most important ideas in ten minutes.

<!-- truncate -->

## The one-sentence version

> Today's AI assistants are, at heart, **probability models that have read an enormous amount of text and are extremely good at "what should come next."**

It isn't a database, and it doesn't automatically go online to look things up for you (unless you've turned on a search feature).
What it does is look at all the text so far, predict the most likely **next word**, write it out, and then predict the next one.

A whole, fluent answer grows like that, one word at a time.

## This one idea explains all the strange behavior

| What you notice | Why |
| --- | --- |
| The answer is fluent, but the content is made up | It's producing text that "looks reasonable," not checking facts |
| Ask the same question twice, get different answers | Generating text involves some randomness |
| The more background you give, the better the answer | You've narrowed down what counts as a "reasonable next sentence" |
| In long conversations, it starts forgetting earlier parts | There's a limit to how much it can see at once |
| It often slips up on math or counting | It's predicting text, not calculating |

Once this table makes sense to you, you already understand how to use AI better than most people.

## Why this approach can look like "thinking"

To get really good at predicting the next word, a model has to learn a lot: grammar, how language feels,
how facts relate to each other, the shape of reasoning, the styles of different kinds of writing.

So its "understanding" is a statistical instinct grown from massive amounts of imitation — **not looking things up, and not step-by-step logic**.
That's why it can write a beautiful analysis and then trip over a question like "How many r's are in 'strawberry'?"

## Three terms you're sure to run into

### Token

The smallest unit of text a model works with. In English, a token is roughly three-quarters of a word; in Chinese, one character is about 1–2 tokens.
**Why should you care?** Every length limit and every bill is counted in tokens.

### Context window

The maximum amount the model can "see" at once, including your question, any files you paste, and its own replies.
Go past it and the earliest parts get pushed out — that's the real reason it "forgets."

**The fix:** start a new conversation, paste the key points again, or split long documents into sections.

### Hallucination

When AI produces content that's fluent and confident but actually wrong.
It isn't a bug; it's a side effect of the "produce reasonable-sounding text" mechanism.

## The three most common misunderstandings

### "AI searched the web before answering me"

Most of the time, **it didn't**. Unless you've clearly turned on a search feature or given it a file,
it's answering from the text it saw during training.

### "It sounds so sure, so it must be right"

How confident it sounds has **nothing to do** with whether it's correct.
AI doesn't know what it doesn't know, so it says right things and wrong things in exactly the same confident tone.

### "Keep questions short so it doesn't get confused"

It's the exact opposite. Think of it as a very smart new coworker who knows nothing about you —
you'd never hand a new coworker a single line like "write something for me."

## Three exercises you can try today

1. **Ask the same question twice** and compare the answers, to get a feel for the randomness
2. **Ask a question in an area you know well**, and see where it does well and where it sounds right but isn't
3. **Ask it to cite sources, then actually open them**, to see firsthand what a hallucination looks like

The third exercise is especially important. Once you've watched it confidently invent a reference,
the habit of checking will develop on its own.

## One sentence that makes answers better

Add this line at the end of your question:

```text
If there isn't enough information or you're not sure, just say you don't know. Don't guess.
```

This one sentence noticeably cuts down on made-up answers. I recommend adding it to all your prompt templates.

---

**What's next:**

- Want to understand how it works in more depth → [How large language models work](/resources/ai-basics/how-llms-work)
- Want to know how to check facts → [Hallucinations and fact-checking](/resources/ai-basics/hallucination)
- Want to get hands-on right away → [Get Started: finish your first AI task in 20 minutes](/start)
