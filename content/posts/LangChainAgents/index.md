---
title: "How To Make an AI Agent in 10 Minutes with LangChain"
date: 2023-08-15T12:45:00-04:00
draft: false
cover: "cover.jpg"
---

[LangChain](https://www.langchain.com/) is a powerful library for Python and Javascript/Typescript that allows you to quickly prototype large language model applications. It allows you to chain together LLM tasks (hence the name) and even allows you to run autonomous agents quickly and easily. In this blog post, we'll explore how to create agents and define custom tools that those agents can use.

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
source env/bin/activate # this will need run every time before using your agent
```

Once that is done we can install dependencies. The only ones we need for this tutorial are LangChain and OpenAI. Finally, `python-dotenv` will be used to load the OpenAI API keys into the environment.

```bash
pip install langchain openai python-dotenv requests duckduckgo-search
```

LangChain is a very large library so that may take a few minutes. While this is downloading, create a new file called `.env` and paste your API key in. Here is an example: 

```python
OPENAI_API_KEY=Your-api-key-here
```

Once that is complete we can make our first chain!

## Quick Concepts

* **[Agents](https://python.langchain.com/docs/modules/agents/)************ are a way to run an LLM in a loop in order to complete a task. Agents are defined with the following:
    - **[Agent Type](https://python.langchain.com/docs/modules/agents/agent_types/)** - This defines how the Agent acts and reacts to certain events and inputs. For this tutorial we will focus on the [ReAct](https://python.langchain.com/docs/modules/agents/agent_types/react.html) Agent Type.
    - **[LLM](https://python.langchain.com/docs/modules/chains/foundational/llm_chain)** - The AI that actually runs your prompts.
    - **[Tools](https://python.langchain.com/docs/modules/agents/tools/)** - These are Python (or JS/TS) functions that your Agent can call to interact with the world outside of itself. These can be as simple or as complex as you want them to be!
        - Many tools make a [Toolkit](https://python.langchain.com/docs/modules/agents/toolkits/). There are many [toolkits already available](https://python.langchain.com/docs/integrations/toolkits/) built-in to LangChain, but for this example we’ll make our own.

## Agents

Agents use a combination of an LLM (or an LLM Chain) as well as a Toolkit in order to perform a predefined series of steps to accomplish a goal. For this example, we’ll create a couple of custom tools as well as LangChain’s provided DuckDuckGo search tool to create a research agent.

### **1. Importing Necessary Libraries**

```python
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from langchain.tools import Tool, DuckDuckGoSearchResults
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from langchain.agents import initialize_agent, AgentType

```

Here's a breakdown of the imports:

* `requests`: A popular Python library for making HTTP requests.
* `BeautifulSoup`: A library for web scraping purposes to pull the data out of HTML and XML files.
* `load_dotenv`: A method to load environment variables from a `.env` file.
* LangChain specific imports: These are specific to the LangChain framework and are used to define tools, prompts, chat models, chains, and agents.

### **2. Loading Environment Variables**

```python
load_dotenv()
```

This line loads environment variables from a `.env` file. This is useful if you have API keys or other sensitive information that you don't want to hard-code into your script.

### **3. Setting Up the DuckDuckGo Search Tool**

```python
ddg_search = DuckDuckGoSearchResults()
```

This initializes the DuckDuckGo search tool provided by LangChain. It allows you to search the web using DuckDuckGo and retrieve the results.

### **4. Defining Headers for Web Requests**

```python
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:90.0) Gecko/20100101 Firefox/90.0'
}
```

This sets a user-agent header for our web requests. Some websites might block requests that don't have a user-agent set, thinking they're from bots.

### **5. Parsing HTML Content**

```python
def parse_html(content) -> str:
    soup = BeautifulSoup(content, 'html.parser')
    text_content_with_links = soup.get_text()
    return text_content_with_links

```

This function takes in HTML content, uses BeautifulSoup to parse it, and then extracts all the text from it.

### **6. Fetching Web Page Content**

```python
def fetch_web_page(url: str) -> str:
    response = requests.get(url, headers=HEADERS)
    return parse_html(response.content)

```

This function fetches the content of a web page using the `requests` library and then parses the HTML to extract the text.

### **7. Creating the Web Fetcher Tool**

```python
web_fetch_tool = Tool.from_function(
    func=fetch_web_page,
    name="WebFetcher",
    description="Fetches the content of a web page"
)

```

Here, we're creating a new tool using the `Tool.from_function` method. This tool will use our `fetch_web_page` function to fetch and parse web pages.

### **8. Setting Up the Summarizer**

```python
prompt_template = "Summarize the following content: {content}"
llm = ChatOpenAI(model="gpt-3.5-turbo-16k")
llm_chain = LLMChain(
    llm=llm,
    prompt=PromptTemplate.from_template(prompt_template)
)

summarize_tool = Tool.from_function(
    func=llm_chain.run,
    name="Summarizer",
    description="Summarizes a web page"
)

```

This section sets up a summarizer using the ChatOpenAI model from LangChain. We define a prompt template for summarization, create a chain using the model and the prompt, and then define a tool for summarization. We use ChatGPT 3, 5 16k context as most web pages will exceed the 4k context of ChatGPT 3.5.

### **9. Initializing the Agent**

```python
tools = [ddg_search, web_fetch_tool, summarize_tool]

agent = initialize_agent(
    tools=tools,
    agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    llm=llm,
    verbose=True
)
```

Here, we're initializing an agent with the tools we've defined. This agent will be able to search the web, fetch web pages, and summarize them. Notice how we can re-use the LLM from the summarize tool.

### **10. Running the Agent**

```python
prompt = "Research how to use the requests library in Python. Use your tools to search and summarize content into a guide on how to use the requests library."

print(agent.run(prompt))

```

Finally, we define a prompt for our agent and run it. The agent will search the web for information about the Python’s Requests Library, fetch the content fetch some of the content, and then summarize it.

## Experimentation

In this section, we'll explore how to modify the code from the blog post draft to use the experimental Plan and Execute agent. The Plan and Execute agent accomplishes an objective by first planning what to do, then executing the sub-tasks. The planning is almost always done by an LLM, while the execution is usually done by a separate agent equipped with tools.

First, install the LangChain experimental package.

```bash
pip install langchain_experimental
```

Then you can import the necessary modules from the `langchain_experimental.plan_and_execute` package:

```python
from langchain_experimental.plan_and_execute import PlanAndExecute, load_agent_executor, load_chat_planner
```

Load the planner and executor:

```python
planner = load_chat_planner(llm)
executor = load_agent_executor(llm, tools, verbose=True)
```

Initialize the Plan and Execute agent:

```python
agent = PlanAndExecute(planner=planner, executor=executor, verbose=True)
```

Run the agent with a prompt:

```python
result = agent.run("Research how to use the requests library in Python. Use your tools to search and summarize content into a guide on how to use the requests library.")
print(result)
```

In this example, the agent will first plan the steps needed to accomplish the objective, then execute the sub-tasks using the tools provided. The agent will search the web for information about the requests library in Python, fetch the content of the relevant results, and then summarize them into a guide.

Note that the Plan and Execute agent is experimental and may not work as expected in all cases. However, it can be a powerful tool for automating complex tasks that require multiple steps and interactions with external tools.

## Conclusion

LangChain is a game-changer for anyone looking to quickly prototype large language model applications. In just a few minutes, we’ve walked through the process of creating agents, defining custom tools, and even experimenting with the experimental Plan and Execute agent to automate complex tasks.

The power of LangChain lies in its simplicity and flexibility. Whether you’re a seasoned developer or just starting out, LangChain’s intuitive design allows you to harness the capabilities of large language models like never before. From generating creative content to running autonomous agents, the possibilities are endless.

So why wait? Dive into LangChain today and unleash the potential of AI in your projects. If you’re looking to integrate AI into your existing workflow or products, [TimeSurge Labs](https://timesurgelabs.com/) is here to help. Specializing in AI consulting, development, internal tooling, and LLM hosting, our team of passionate AI experts is dedicated to building the future of AI and helping your business thrive in this rapidly changing industry. [Contact us](https://timesurgelabs.com/#contact) today!
