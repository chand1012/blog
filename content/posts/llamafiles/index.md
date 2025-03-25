+++
title = "Llamafile: AI Integration & Deployment Made Easy"
date = 2023-12-13T15:31:00-05:00
author = ""
authorTwitter = "Chand1012Dev" #do not include @
cover = "cover.jpeg"
tags = ["llama", "ai", "ml"]
keywords = ["llama", "ai", "artificial intelligence"]
description = ""
showFullContent = false
readingTime = false
hideComments = false
+++

Its no secret that I think Llama 2 and its derivatives are the future of AI and ML. Rather than getting bigger and smarter, I think GPT-4 is enough for 99.5% of applications, AI should instead strive to get smaller, cheaper, and faster. If you want to run Llama 2 via llama.cpp, you can check out my [guide on how to do that](https://blog.chand1012.dev/posts/howtorunllama2onanything/).

However, the problem with llama.cpp is that to get it working you have to have all the dependencies, either download a binary or clone and build the repo, make sure your drivers are working, and then you can finally run it. What if you just want to download the model and run it? Well, that's where Llamafiles comes in.

[Llamafile](https://github.com/Mozilla-Ocho/llamafile) is a project by a team over at Mozilla. It allows users to distribute and run LLMs using a single, platform-independent file. It accomplishes this by building all required code into a binary called `llamafile` , then by using a zipping tool, you can combine the binary with the model and any other files you need. This allows you to run Llama 2, Mistral 7B, on anything, without having to have *most* dependencies.

Llamefiles come in two flavors: Main and Server. Main replicates the command-line interface of [llama.cpp](https://github.com/ggerganov/llama.cpp), while Server is a server that can be used to run Llama 2 and other models over HTTP with a basic but functional web interface. I'll be focusing on the Servers, as that's what I prefer to use, but the process is the same for both.

## How to Use Llamafiles

There are *some* dependencies you'll need depending on your platform. You can see [here](https://github.com/Mozilla-Ocho/llamafile#gotchas) for the most up-to-date information on that, but here is the TLDR as of 13/12/2023:

* On macOS, you need [Xcode](https://developer.apple.com/xcode/) installed.
* For GPU support on Linux and Windows, you need [CUDA](https://developer.nvidia.com/cuda-toolkit).
* For GPU support on Linux, you need to have the `cc` compiler installed.
* On Linux you have to pass `--n-gpu-layers 35` for the GPU to work properly.

One other thing of note, due to a limitation imposed by Microsoft, you cannot run Llamafiles larger than 4GB on any version of Windows. This can be bypassed by enabling [Nvidia CUDA on WSL](https://learn.microsoft.com/en-us/windows/ai/directml/gpu-cuda-in-wsl) and running it inside of Linux. Otherwise you'll just be limited to models smaller than 4GB.

Once that is all complete, you can simply find a llamafile, and try to run it! Platform doesn't matter, except if you are on Windows you have to add .exe to the end of the file in order to execute it. On *nix systems, here's all you have to do.

```bash
# replace with the url and name of the llamafile you want to run!
wget https://huggingface.co/jartine/mistral-7b.llamafile/resolve/main/mistral-7b-instruct-v0.1-Q4_K_M-server.llamafile
chmod +x mistral-7b-instruct-v0.1-Q4_K_M-server.llamafile
./mistral-7b-instruct-v0.1-Q4_K_M-server.llamafile
```

And that's it! You can now run Llama 2 on anything, without having to worry about dependencies. I have compiled a list of available Llamafiles on HuggingFace, you can find the collection [here](https://huggingface.co/collections/TimeSurgeLabs/llamafiles-65749149983403462a2980b9).

## Making your own Llamafile

If your favorite Llama-based model isn't available yet, or you want to run a newer version of the Llama code that an older Llamafile may not be running, you may want to make your own Llamafile. Luckily, this is pretty easy to do!

First step is to obtain either binaries or source code for Llamafile. I opted to compile from source, but they do have precompiled binaries on their [releases page](https://github.com/Mozilla-Ocho/llamafile/releases). Here's how you can compile from source.

```bash
git clone https://github.com/Mozilla-Ocho/llamafile.git
cd llamafile
# optional. I compiled the latest tagged version. You can also just build from main.
git checkout 0.3 # there may be a newer version by the time you read this
make -j$(nproc)
sudo make install PREFIX=/usr/local
```

Now that you have Llamafile, you need to download your model. The models **have** to be in the GGUF format for [ggml](https://ggml.ai), as Llamafile is based on llama.cpp. If you don't know how to convert models to GGUF, or just don't want to put in the effort, [TheBloke](https://huggingface.co/TheBloke) has uploaded *thousands* of GGUF conversions to HuggingFace. I'd check his collection before you try to convert anything yourself. If the model happens to be unavailable as GGUF, here's a [guide by Substratus.ai](https://www.substratus.ai/blog/converting-hf-model-gguf-model/).

For this example, we're going to package Intel's [Neural Chat v3.3](https://huggingface.co/Intel/neural-chat-7b-v3-3) into a Llamafile. First, we need to download the model. Luckily for us, TheBloke has already converted it to [GGUF](https://huggingface.co/TheBloke/neural-chat-7B-v3-3-GGUF), so we can just download it from HuggingFace. Once that's done, we should test it out before we package it. Luckily, when you install llamafile.

```bash
# The Q4_K_M model is a good balance between compression and performance.
wget https://huggingface.co/TheBloke/neural-chat-7B-v3-3-GGUF/resolve/main/neural-chat-7b-v3-3.Q4_K_M.gguf
llamafile-server -m neural-chat-7b-v3-3.Q4_K_M.gguf --host 0.0.0.0
```

If there is a browser available on the machine you are running this on, it will automatically open a browser window to the server. If not, you can just go to `http://localhost:8080` (or the IP of the server) to access the web interface. Once you are there, you can test out the model. If you are happy with the results, you can now package it into a Llamafile.

First, we have to create an arguments file. This file is named `.args.` and gets appended to the end of the file to act as the arguments for the executable. Here is the contents we are going to be putting on our file, use whichever text editor you prefer. The file is newline delimited, so make sure to add a newline where you would normally add a space.

```
-m
neural-chat-7b-v3-3.Q4_K_M.gguf
--host
0.0.0.0
...
```

The `...` at the end means to accept any other commands that are passed to the executable. Now that we have our arguments file, we can package it into a Llamafile. First, copy the llamafile from `/usr/local/bin/llamafile-server` (or wherever you installed it) to the same directory as the model. Then, rename the executable to what you want to call your Llamafile plus `.llamafile` . In this case, we'll call it `neural-chat-7b-v3-3.Q4_K_M.llamafile` .

```bash
cp /usr/local/bin/llamafile-server neural-chat-7b-v3-3.Q4_K_M.llamafile
```

Now we can package it all together into a Llamafile. Llamafile include a command called `zipalign` that will package everything together for you. Here's how you can use it.

```bash
zipalign -j0 neural-chat-7b-v3-3.Q4_K_M.llamafile neural-chat-7b-v3-3.Q4_K_M.gguf .args
```

Once this is complete, you can test your llamafile out with `./neural-chat-7b-v3-3.Q4_K_M.llamafile` . If it works, you can now distribute it to your friends, or [upload it to HuggingFace](https://huggingface.co/TimeSurgeLabs/intel-neural-chat-v3.3-llamafile) for others to use!

## Conclusion

Llamafiles are a great way to distribute Llama 2 and other LLMs. They allow you to run Llama 2 on anything, without having to worry about dependencies. They also allow you to distribute LLMs without having to worry about the user having the right version of Llama 2 installed. I hope this guide was helpful, and I hope to see more Llamafiles in the future!
