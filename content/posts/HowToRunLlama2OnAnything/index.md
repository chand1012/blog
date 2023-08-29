---
title: "How to Run Llama 2 on Anything"
date: 2023-07-20T23:01:00-04:00
draft: false
cover: "cover.jpg"
---

Unlike OpenAI and Google, Meta is taking a very welcomed open approach to Large Language Models (LLMs). Similarly to [Stability AI](https://stability.ai/)’s now ubiquitous [diffusion models](https://en.wikipedia.org/wiki/Stable_Diffusion), Meta has released their newest LLM, Llama 2, under a [new permissive license](https://github.com/facebookresearch/llama/blob/6c7fe276574e78057f917549435a2554000a876d/LICENSE). This license allow for commercial use of their new model, unlike the previous research-only license of Llama 1. This means that anyone, anywhere can use Llama 2 to do whatever they want (provided that its legal in your jurisdiction). 

# Great! How do I get it?

You do have to [fill out a form](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) with Meta to get access, but once that’s done you have a license to use Llama 2 for whatever you want! Once that’s done you can also [sign up on HuggingFace](https://huggingface.co/meta-llama/Llama-2-13b-chat-hf) for access so you don’t have to re-request a link every 24 hours. 

# How do I run it?

The official way to run Llama 2 is via their [example repo](https://github.com/facebookresearch/llama/tree/main) and in their [recipes repo](https://github.com/facebookresearch/llama-recipes/), however this version is developed in Python. While I love Python, its slow to run on CPU and can eat RAM faster than Google Chrome.

My preferred method to run Llama is via [ggerganov’s llama.cpp](https://github.com/ggerganov/llama.cpp). This pure-C/C++ implementation is faster and more efficient than its official Python counterpart, and supports GPU acceleration via CUDA and Apple’s Metal. This significantly speeds up inference on CPU, and makes GPU inference more efficient. For example, here is [Llama 2 13b Chat HF](https://huggingface.co/meta-llama/Llama-2-13b-chat-hf) running on my M1 Pro Macbook in realtime.

![Running with GPU acceleration via Metal](https://vhs.charm.sh/vhs-2Rsy0zRK9kb0rDdM4H7XER.gif)

Running with GPU acceleration via Metal

It can even be built with [MPI support](https://github.com/ggerganov/llama.cpp#mpi-build) for running massive models across multiple computers in a cluster!

# Prerequisites
* Make
* A C Compiler

That’s it! Llama.cpp was designed to be a zero dependency way to run AI models, so you don’t need a lot to get it working on most systems!

# Building

First, open a terminal, then clone and change directory into the repo.

```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
```

Once that is done, you can build with make:

```bash
make
```

This builds the version for CPU inference only. I can’t find any information on running with GPU acceleration on Windows, so for now its probably faster to run the original Python version with GPU acceleration enabled for those who prefer Windows. However, if you lack a good enough GPU or don’t want to deal with the hassle of setting up all the Python dependencies, this is the fastest to set up and run option.

## Building with GPU Acceleration

### MacOS via Metal

If you are on MacOS, to build with Metal support, run the following.

```bash
make clean # if you already built it
LLAMA_METAL=1 make
```

### Linux via CUDA

First, verify your GPU is on the list of [supported CUDA GPUs](https://developer.nvidia.com/cuda-gpus).

Then, install the [CUDA Toolkit](https://developer.nvidia.com/cuda-downloads) for your appropriate distro. Once that is done, you can build llama.cpp with the following:

```bash
make clean # if you already built it
make LLAMA_CUBLAS=1
```

### Linux via OpenCL

If you aren’t running a Nvidia GPU, fear not! GGML (the library behind llama.cpp) has support for acceleration via CLBlast, meaning that any GPU that supports OpenCL will also work (this includes most AMD GPUs and some Intel integrated graphics chips). See the [OpenCL GPU database](https://opencl.gpuinfo.org/listdevices.php?platform=linux) for a full list. 

First, install the [OpenCL SDK](https://github.com/KhronosGroup/OpenCL-SDK) and [CLBlast](https://github.com/CNugteren/CLBlast). Once that is done, you can build with the following command:

```bash
make clean # if you already built it
make LLAMA_CLBLAST=1
```

# Getting Weights

~~Meta did not officially release GGML weights for Llama 2, however a community member, [TheBlokeAI](https://twitter.com/TheBlokeAI), released GGML formatted weights on [his HuggingFace page](https://huggingface.co/TheBloke). Here is all the ones he released.~~

EDIT: As of 08/28/2023, these no longer work. See my edits below.

| Size | Original | Chat |
| --- | --- | --- |
| 7B | [Link](https://huggingface.co/TheBloke/Llama-2-7B-GGML) | [Link](https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGML) |
| 13B | [Link](https://huggingface.co/TheBloke/Llama-2-13B-GGML) | [Link](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML) |

~~No 70B parameter GGML model weights are available yet, however 7B and 13B are more than enough to experiment with!~~

Edit: About a month after publishing this article, these weights no longer work! As of this edit, TheBloke has not updated the original weights to be the new GGUF format (which promises to be faster, smaller, and with less hallucinations). You can either revert back to the [last commit that supports GGML](https://github.com/ggerganov/llama.cpp/tree/dadbed99e65252d79f81101a392d0d6497b86caa), or you can see [here](https://huggingface.co/models?sort=trending&search=gguf) for a list of GGUF models on Hugging Face. The only one that I have tested and have confirmed to work is [Llama 2 Chat by Substratus AI](https://huggingface.co/substratusai/Llama-2-13B-chat-GGUF). I have updated my guide below to use the confirmed working model.

## Weight Types

You’ll notice that the files for those models have a lot of options, all ending in `.bin` with things like `.q4_0` and `q3_K_M` thrown in. Those are the different [quantization methods](https://github.com/ggerganov/llama.cpp#quantization) available for the models. Quantization is the process of reducing the number of bits used by the models, reducing size and memory use. You should experiment with each one and figure out which fits your use case the best, but for my demo above I used [`llama-2-13b-chat.ggmlv3.q4_1.bin`](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML/blob/main/llama-2-13b-chat.ggmlv3.q4_1.bin) (which is no longer supported. See above).

# Running the Models

Once you have the weights downloaded, you should move them near the llama.cpp directory. I used a `models` folder within the llama.cpp repo. For example, assuming you are already in the llama.cpp repo:

```bash
mkdir models
cd models
wget https://huggingface.co/substratusai/Llama-2-13B-chat-GGUF/resolve/main/model.bin -O model.q4_k_s.gguf
cd ..
```

Once that is complete, you can run the model on CPU with the following:

```bash
./main -t 10 -m ./models/model.q4_k_s.gguf --color -c 4096 --temp 0.7 --repeat_penalty 1.1 -n -1 -p "### Instruction: Write a story about llamas\n### Response:"
```

You should change `10` to the number of physical cores you system has. For example, if you have a 8 core system with 16 threads, you should set the number to 8.

There will be a warning that pops up saying that the model doesn’t support more than 2048 tokens, however that is incorrect and will probably be fixed in a future version of llama.cpp. Llama 2 supports contexts of up to 4096 tokens, the same as GPT-3 and GPT-3.5.

## Running with GPU Acceleration

### MacOS via Metal

```bash
./main -ngl 1 -n 128 -m ./models/model.q4_k_s.gguf --color -c 500 -b 192 --temp 0.7 --repeat_penalty 1.1 -n -1 -p "### Instruction: Write me a Python program that takes in user input and greets the user with their name.\n### Response:"
```

Notice that I changed the number after `-c` from `4096` to `500`. I was running out of memory running on my Mac’s GPU, decreasing context size is the easiest way to decrease memory use.

### Linux via CUDA

If you want to fully offload to GPU, set the `-ngl` value to an extremely high number.

```bash
./main -ngl 15000 -n 128 -m ./models/model.q4_k_s.gguf --color -c 500 -b 192 --temp 0.7 --repeat_penalty 1.1 -n -1 -p "### Instruction: Write me a Python program that takes in user input and greets the user with their name.\n### Response:"
```

You can experiment with much lower numbers and increase until your GPU runs out of VRAM.

### Linux via OpenCL

The only difference between running the CUDA and OpenCL versions is that when using the OpenCL versions you have to set platform and/or devices at runtime. Here are [some examples](https://github.com/ggerganov/llama.cpp#clblast).

```bash
GGML_OPENCL_PLATFORM=1 ./main ... # everything after ./main is the same as CUDA
GGML_OPENCL_DEVICE=2 ./main ...
GGML_OPENCL_PLATFORM=Intel ./main ...
GGML_OPENCL_PLATFORM=AMD GGML_OPENCL_DEVICE=1 ./main ...
```

# Running Interactively

You can run any models show in a ChatGPT-like interactive mode right from within your terminal! Here is how to do it.

## Windows

```bash
# assuming you are in the llama.cpp repo
set MODEL="path/to/model.bin"
.\examples\chat-13B.bat
```

## Linux/MacOS

```bash
MODEL="path/to/model.bin" ./examples/chat-13B.sh
```

# Conclusion

Llama 2 is an exciting step forward in the world of open source AI and LLMs. We've covered everything from obtaining the model, building the engine with or without GPU acceleration, to running the models interactively. This guide should provide you with a solid foundation to explore and experiment with Llama 2, whether you're a hobbyist, a researcher, or a business looking to leverage the power of AI.

However, we understand that implementing AI solutions can be a complex task, especially when it comes to integrating them into existing workflows or products. That's where we, at TimeSurge Labs, come in. We specialize in AI consulting, development, internal tooling, and LLM hosting. Our mission is to handle AI so you can focus on your business. We offer bespoke integration services, working with you to integrate our AI into your existing workflow or products. Whether you prefer fully local, hybrid, or cloud-based AI solutions, we've got you covered.

Our products, such as Searchbase and OttoDocs, are designed to increase productivity and customer satisfaction. We also offer paid support plans for custom integrations, additional features, and support. Our team of passionate AI experts is dedicated to building the future of AI and helping your business thrive in this rapidly changing industry.

If your company needs AI consulting, contracting, or education, don't hesitate to reach out to us. Let's explore how we can help you find your AI workflow. Contact us today at [TimeSurge Labs](https://timesurgelabs.com/#contact).
