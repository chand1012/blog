---
title: "How To Use LangChain in 10 Minutes"
date: 2023-08-09T13:30:00-04:00
draft: false
cover: "cover.jpg"
---

[LangChain](https://www.langchain.com/) is a powerful library for Python and Javascript/Typescript that allows you to quickly prototype large language model applications. It allows you to chain together LLM tasks (hence the name) and even allows you to run autonomous agents quickly and easily. Today we will be going over the basics of chains, so you can hit the ground running with your newest LLM projects!

## Prerequisites

* Python 3.9
    - 3.10 and up have some issues with some of LangChain’s modules.
* An OpenAI API Key

## Getting Started

We’re going to create a Python virtual environment and install the dependencies that way.

```bash
mkdir myproject
cd myproject
# or python3, python3.9, etc depending on your setup
python -m venv env
source env/bin/activate
```

Once that is done we can install dependencies. The only ones we need for this tutorial are LangChain and OpenAI. Finally, `python-dotenv` will be used to load the OpenAI API keys into the environment.

```bash
pip install langchain openai python-dotenv
```

LangChain is a very large library so that may take a few minutes. While this is downloading, create a new file called `.env` and paste your API key in. Here is an example: 

```python
OPENAI_API_KEY=Your-api-key-here
```

Once that is complete we can make our first chain!

## Quick Concepts

There are a few basic concepts you’ll need to understand in order to get started.

* **Chains** can be thought of as a list of actions to take with an LLM or multiple LLM calls in the list. A chain is made up of 3 simple parts.
    - **[Prompt Template](https://python.langchain.com/docs/modules/model_io/prompts/prompt_templates/)** - so you can quickly change inputs without changing the prompt.
    - **[LLM](https://python.langchain.com/docs/modules/chains/foundational/llm_chain)** - The AI that actually runs your prompts.
    - **[Output Parsers](https://python.langchain.com/docs/modules/model_io/output_parsers/)** - Converts the output into something useful, usually just another string.

## Writing the Chain

For this example, we’re going to write a chain that generates a TikTok script (I am a [Zoomer](https://www.urbandictionary.com/define.php?term=Zoomer) after all) for an educational channel. First, we need to generate a description for the TikTok. We will use prompt templating so we can reuse the prompt later.

```python
# prompts.py
from langchain.prompts import PromptTemplate

description_prompt = PromptTemplate.from_template(
    "Write me a description for a TikTok about {topic}")
```

This can then be used in a chain. Before we can define a chain, we need to define an LLM for the chain to use. LangChain recommends that most users should use The `ChatOpenAI` class to get the cost benefits and simplicity of the ChatGPT API.

```python
# chain.py
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from dotenv import load_dotenv
from prompts import description_prompt

# loads the .env file
load_dotenv()

llm = ChatOpenAI(model_name="gpt-3.5-turbo")
```

Once that is done we can create the chain.

```python
description_chain = LLMChain(llm=llm, prompt=description_prompt, verbose=True)
```

Now we can call the new chain with `.predict`

```python
output = description_chain.predict(topic="Cats are cool")
print(output)
```

And here is the output:

> 😻 Unleash your inner feline aficionado! From their enchanting eyes to their purrfectly mysterious ways, cats are the epitome of coolness. 🐾 Watch as they effortlessly own their spaces, teaching us the art of relaxation and play. Whether they're mastering acrobatics or curling up for a catnap, their cool vibes are undeniable. 😎 Join the cat craze and embrace the awesomeness of these four-legged trendsetters! 🐱💫 #CatsRule #CoolCats #FelineVibes
>  

Now that we have a description, we need to have it write a script. This is where chaining comes in - we can sequentially call the LLM again using a slightly different prompt. First, let’s define a new prompt for the next chain.

```python
# add to prompts.py

script_prompt = PromptTemplate.from_template(
    "Write me a script for a TikTok given the following description: {description}")
```

Here is what your `chain.py` should look like now.

```python
# chain.py
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from dotenv import load_dotenv
# this line changed!!!!!
from prompts import description_prompt, script_prompt

# loads the .env file
load_dotenv()

llm = ChatOpenAI(model_name="gpt-3.5-turbo")

description_chain = LLMChain(llm=llm, prompt=description_prompt, verbose=True)

output = description_chain.predict(topic="Cats are cool")
print(output)

# new code below this line
script_chain = LLMChain(llm=llm, prompt=script_prompt)
script = description_chain.predict(description=output, verbose=True)
print(script)
```

Here is the new output:

> [Opening shot: A close-up of a cat's mesmerizing eyes, slowly blinking.]
>  
>  
> Narrator (Voiceover): "😻 Unleash your inner feline aficionado!"
>  
> [Cut to a sleek cat walking confidently through a room, tail swaying gracefully.]
>  
> Narrator (Voiceover): "From their enchanting eyes to their purrfectly mysterious ways..."
>  
> [Transition to a montage of cats lounging in different relaxed poses.]
>  
> Narrator (Voiceover): "Cats are the epitome of coolness. 🐾"
>  
> [Show a cat effortlessly jumping onto a high shelf, landing with precision.]
>  
> Narrator (Voiceover): "Watch as they effortlessly own their spaces..."
>  
> [Cut to a person lying on the couch while a cat playfully bats at a string toy.]
>  
> Narrator (Voiceover): "Teaching us the art of relaxation and play."
>  
> [Show a cat doing a graceful mid-air flip while chasing a feather toy.]
>  
> Narrator (Voiceover): "Whether they're mastering acrobatics..."
>  
> [Transition to a cozy scene of a cat curled up in a sunlit spot, eyes half-closed.]
>  
> Narrator (Voiceover): "Or curling up for a catnap..."
>  
> [Cut to a group of cats with various personalities and fur patterns.]
>  
> Narrator (Voiceover): "Their cool vibes are undeniable."
>  
> [Show a person petting a content cat, both sharing a moment of connection.]
>  
> Narrator (Voiceover): "😎 Join the cat craze and embrace the awesomeness..."
>  
> [Cut to a playful cat chasing its tail, accompanied by a cheerful laugh.]
>  
> Narrator (Voiceover): "...of these four-legged trendsetters!"
>  
> [End with a shot of a cat sitting regally, gazing confidently into the camera.]
>  
> Narrator (Voiceover): "🐱💫 #CatsRule #CoolCats #FelineVibes"
>  
> [Fade out with a final glimpse of a cat's eyes.]
>  
> Narrator (Voiceover): "Because when it comes to cool, cats wrote the book."
>  
> [End screen: "Follow for more feline fun!"]
>  
> [Background music fades out as the TikTok video concludes.]
>  

Using them like this is *fine*, but what if we want to chain them together? That’s where [Sequential Chains](https://python.langchain.com/docs/modules/chains/foundational/sequential_chains) comes in. These allow you to tie multiple chains into a single function call, with them executing in order they are defined. There are two types of sequential chains, we’re just going to focus on the simple sequential chain. Edit the Chain import line to the following:

```python
from langchain.chains import LLMChain, SimpleSequentialChain
```

Move the LLM chains to the top of the file and remove the print statements and the `.predict` calls.

```python
# chain.py
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain, SimpleSequentialChain
from dotenv import load_dotenv
# this line changed!!!!!
from prompts import description_prompt, script_prompt

# loads the .env file
load_dotenv()

llm = ChatOpenAI(model_name="gpt-3.5-turbo")

description_chain = LLMChain(llm=llm, prompt=description_prompt)
script_chain = LLMChain(llm=llm, prompt=script_prompt)

tiktok_chain = SimpleSequentialChain(chains=[description_chain, script_chain], verbose=True)

script = tiktok_chain.run("cats are cool")

print(script)
```

And here is the output:

> Title: #CoolCatsRule
>  
>  
> INT. LIVING ROOM - DAY
>  
> A trendy, upbeat song begins playing as the camera pans across a stylishly decorated living room. Various cat-themed decorations can be seen, setting the perfect atmosphere for showcasing the undeniable coolness of cats.
>  
> CUT TO:
>  
> INT. BEDROOM - DAY
>  
> A YOUNG WOMAN, in her early twenties, stands in front of a full-length mirror. She wears trendy clothes and holds a CAT, who seems equally as cool, in her arms.
>  
> YOUNG WOMAN
> (looking into the mirror)
> Ready to show the world why cats rule!
>  
> The young woman gently places the cat on the ground as the camera zooms in on the feline.
>  
> CUT TO:
>  
> INT. KITCHEN - DAY
>  
> A CAT sits on the kitchen counter, effortlessly balancing on one paw while wearing sunglasses. The camera pans around it, capturing its cool demeanor.
>  
> CUT TO:
>  
> INT. BACKYARD - DAY
>  
> A CAT lounges in a hammock, wearing a tiny hat and reading a book. The camera captures its relaxed and sophisticated vibe.
>  
> CUT TO:
>  
> INT. LIVING ROOM - DAY
>  
> The young woman sits on the couch, surrounded by a group of COOL CATS. Each cat showcases their unique coolness, like one wearing a leather jacket and another playing a tiny electric guitar.
>  
> YOUNG WOMAN
> (points to the cats)
> See? Cats rule!
>  
> The camera zooms in on the cats, showing their undeniable feline awesomeness.
>  
> CUT TO:
>  
> INT. LIVING ROOM - DAY
>  
> The young woman and her cool cats gather around a table, where they enjoy a mini-cat party. There are cat-themed snacks, funky drinks, and even a DJ cat scratching vinyl records.
>  
> CUT TO:
>  
> INT. LIVING ROOM - DAY
>  
> The young woman holds up a sign saying "#CoolCatsRule" as the cats pose beside her. The camera pans out to reveal a fun, energetic dance routine as they all groove to the beat.
>  
> CUT TO:
>  
> INT. LIVING ROOM - DAY
>  
> The young woman and her cool cats strike a final pose, with the camera capturing their undeniable coolness.
>  
> YOUNG WOMAN
> (looking at the camera)
> Remember, folks, cats rule!
>  
> The screen fades out with the hashtag #CoolCatsRule displayed prominently.
>  
> FADE OUT.
>  

## Conclusion

LangChain is a game-changer for anyone looking to quickly prototype large language model applications. In just a few minutes, we've walked through the process of creating chains, defining prompts, and even chaining together multiple LLM calls to create a dynamic TikTok script.

The power of LangChain lies in its simplicity and flexibility. Whether you're a seasoned developer or just starting out, LangChain's intuitive design allows you to harness the capabilities of large language models like never before. From generating creative content to running autonomous agents, the possibilities are endless.

So why wait? Dive into LangChain today and unleash the potential of AI in your projects. If you're looking to integrate AI into your existing workflow or products, TimeSurge Labs is here to help. Specializing in AI consulting, development, internal tooling, and LLM hosting, our team of passionate AI experts is dedicated to building the future of AI and helping your business thrive in this rapidly changing industry. [Contact us](https://timesurgelabs.com/#contact) today!
